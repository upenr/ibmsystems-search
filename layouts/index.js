import React from 'react';
import { parseISO, format } from 'date-fns';
import { BiShareAlt } from 'react-icons/bi';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Icon,
  IconButton,
  useClipboard,
  useToast,
  Divider
} from '@chakra-ui/react';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon
} from 'react-share';

import Container from '../components/Container';
import CourseSeo from '../components/CourseSeo';
import ViewCounter from '../components/ViewCounter';

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('course\\', '') //For Windows
    .replace('course/', '')
    .replace('.mdx', '');

  const thisUrl = (slug) => `https://systemstraining.vercel.app/course/${slug}`;
  const discussUrl = (slug) =>
    `https://mobile.twitter.com/compose/tweet${encodeURIComponent(``)}`;
  const editUrl = (slug) =>
    `https://github.com/upenr/ibmsystems-search/blob/main/pages/course/${slug}.mdx`;
  const viewIBM = (slug) => `https://ibm.com/training/course/${slug}`;

  const { colorMode } = useColorMode();
  const textColor = {
    light: '#2196F3',
    dark: '#2196F3'
  };
  /* const newId = 'course/' + {slug} */
  const toast = useToast();
  const { hasCopied, onCopy } = useClipboard(
    frontMatter.title + '\n' + thisUrl(slug)
  );
  const handleCopy = () => {
    toast({
      title: 'Copied.',
      description: 'You can now share this link anywhere.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
    onCopy();
  };

  return (
    <>
      <CourseSeo
        url={`https://systemstraining.vercel.app/course/${slug}`}
        {...frontMatter}
      />
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={0}
          mb={4}
        >
          <Flex
            align="flex-start"
            direction="column"
            alignItems="flex-start"
            maxWidth="850px"
            m="0 auto"
            mt={2}
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>

            <Flex
              justify="flex-start"
              align={['initial', 'center']}
              direction="row"
              alignItems="center"
              mt={8}
              mb={0}
            >
              <Avatar
                align="center"
                size="sm"
                name="Systems Training"
                src=""
                mr={2}
              />
              <Link
                href="https://twitter.com/IBMTraining"
                target="_blank"
                align="center"
                fontSize="sm"
                color={textColor[colorMode]}
                mr="1"
              >
                {frontMatter.by}
                {'IBM Systems Training'}
              </Link>
              <Text color="gray.500" fontSize="sm">
                {'on '}
                {format(parseISO(frontMatter.lastPublishedOn), 'MMMM dd, yyyy')}
              </Text>

              <Flex ml={6} align="center">
                <TwitterShareButton
                  url={thisUrl(slug)}
                  title={frontMatter.title}
                  hashtags={['IBMSystems', 'IBMTraining']}
                >
                  <TwitterIcon size={24} round={true} />
                </TwitterShareButton>
                &nbsp;&nbsp;
                <FacebookShareButton
                  url={thisUrl(slug)}
                  quote={frontMatter.title}
                  hashtag="IBMSystems"
                >
                  <FacebookIcon size={24} round={true} />
                </FacebookShareButton>
                &nbsp;&nbsp;
                <IconButton
                  size="xs"
                  rounded="full"
                  bg="teal.500"
                  onClick={handleCopy}
                  icon={hasCopied ? <FaClipboardCheck /> : <BiShareAlt />}
                />
                &nbsp;&nbsp;
              </Flex>
              <Flex ml={6} align="center">
                <Text color="gray.500" mr={4} fontSize="sm" minWidth="100px">
                  {` • `}
                  {frontMatter.readingTime.text}
                </Text>
                <Text color="gray.500" fontSize="sm" minWidth="100px">
                  {` • `}
                  <ViewCounter id={slug} />
                </Text>
              </Flex>
            </Flex>
            <Divider mt="0" mt="4" mb="4" orientation="horizontal" />
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              w="100%"
              mt={8}
              mb={8}
            >
              {children}
            </Flex>
          </Flex>
          <Divider mt="8" mb="8" orientation="horizontal" />
          <Flex
            direction={['column', 'row']}
            justifyContent="center"
            alignItems="center"
            mt={4}
            mb={24}
          >
            <TwitterShareButton
              url={thisUrl(slug)}
              title={frontMatter.title}
              hashtags={['IBMSystems', 'IBMTraining']}
            >
              <Link
                mr="12"
                href={discussUrl(slug)}
                isExternal
                color={textColor[colorMode]}
              >
                {'Discuss on Twitter'}
              </Link>
            </TwitterShareButton>

            <Link
              mr="12"
              href={editUrl(slug)}
              isExternal
              color={textColor[colorMode]}
            >
              {'View on GitHub'}
            </Link>

            <Link
              mr="12"
              href={viewIBM(slug)}
              isExternal
              color={textColor[colorMode]}
            >
              {'View on IBM website'}
            </Link>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
