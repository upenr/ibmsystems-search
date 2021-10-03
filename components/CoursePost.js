import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Badge,
  Link,
  Tooltip
} from '@chakra-ui/react';
import fetcher from '../lib/fetcher';

const CoursePost = (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('course\\', '') //For Windows
    .replace('course/', '')
    .replace('.mdx', '');
  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  const {
    title,
    modality,
    summary,
    brand,
    lastPublishedOn,
    firstCreatedOn
  } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  //console.log('data', data);
  //console.log('slug', slug);
  //console.log('views ', views);

  //viewsArray.indexOf(slug) === -1 ? viewsArray.push(views) : null;
  //slugArray.indexOf(slug) === -1 ? slugArray.push(slug) : null;

  /* To increment views
  const { incrementData } = useSWR(`/api/increment-views?id=${slug}`, fetcher);
  console.log('views', views + ' ' + slug);
  */

  const scrollSearch = (myKey) => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch('"' + myKey + '"');
  };

  const tooltipText = (modality) => {
    switch (modality) {
      case 'CR':
        return 'Classroom';
      case 'CR, ILO':
        return 'Classroom, Instructor-led Online';
      case 'CR,ILO':
        return 'Classroom, Instructor-led Online';
      case 'WBT':
        return 'Web-based Training';
      case 'SPVC':
        return 'Self-paced Virtual Course';
      default:
        return 'Modality';
    }
  };

  return (
    <>
      <Flex
        width="100%"
        align="flex-start"
        justifyContent="space-between"
        flexDirection={['column', 'row']}
      >
        <Box alignItems="flex-start" mt={4} ml={0} mb={2}>
          <Badge
            cursor="pointer"
            _focus={{ boxShadow: 'outline' }}
            onClick={() => scrollSearch(brand)}
            _hover={{ textDecoration: 'underline' }}
            textTransform="capitalcase"
            rounded="full"
            fontSize="xs"
            letterSpacing="tight"
            colorScheme="yellow"
            px="4"
            py="1"
          >
            {brand}
          </Badge>
          <Tooltip label={tooltipText(modality)} placement="top">
            <Badge
              cursor="pointer"
              _focus={{ boxShadow: 'outline' }}
              ml={4}
              onClick={() => scrollSearch(modality)}
              _hover={{ textDecoration: 'underline' }}
              textTransform="capitalcase"
              rounded="full"
              fontSize="xs"
              letterSpacing="tight"
              colorScheme="purple"
              px="4"
              py="1"
            >
              {modality}
            </Badge>
          </Tooltip>
        </Box>
      </Flex>
      <NextLink href={`course/${slug}`} passHref>
        <Link w="100%" _hover={{ textDecoration: 'none' }}>
          <Box display="block" width="100%">
            <Flex
              width="100%"
              align="flex-start"
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Heading size="md" as="h3" mb={2} fontWeight="medium">
                {title}
              </Heading>
              <Text
                color="gray.500"
                minWidth="105px"
                textAlign={['left', 'right']}
                mb={[4, 0]}
              >
                {`${views ? format(views) : '–––'} views`}
              </Text>
            </Flex>
            <Text mb={2} color={secondaryTextColor[colorMode]}>
              {summary}
            </Text>
          </Box>
        </Link>
      </NextLink>
      <Flex width="100%" align="flex-start" justifyContent="flex-start">
        <Box alignItems="flex-start" mb={12}>
          <Badge
            textTransform="capitalcase"
            cursor="pointer"
            onClick={() => scrollSearch(lastPublishedOn)}
            _hover={{ textDecoration: 'underline' }}
            rounded="full"
            fontSize="xs"
            letterSpacing="tight"
            colorScheme="blue"
            px="4"
            py="1"
          >
            Updated: {lastPublishedOn}
          </Badge>
          <Badge
            textTransform="capitalcase"
            cursor="pointer"
            onClick={() => scrollSearch(firstCreatedOn)}
            _hover={{ textDecoration: 'underline' }}
            rounded="full"
            fontSize="xs"
            ml={4}
            letterSpacing="tight"
            colorScheme="orange"
            px="4"
            py="1"
          >
            Created: {firstCreatedOn}
          </Badge>
        </Box>
      </Flex>
    </>
  );
};

export default CoursePost;
