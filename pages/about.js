import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Image,
  Box,
  Avatar,
  Badge,
  Icon
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://systemstraining.vercel.app/about';
const title = 'About Us';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  const textColor = {
    light: '#0c0c0c',
    dark: '#f7f7f7'
  };

  const property1 = {
    imageUrl: '/static/images/power.jpeg',
    imageAlt: 'IBM Power Systems server',
    title: 'IBM Power Systems'
  };
  const property2 = {
    imageUrl: '/static/images/storage.jpeg',
    imageAlt: 'An IBM Storage device',
    title: 'IBM Storage'
  };
  const property3 = {
    imageUrl: '/static/images/ibmz.jpeg',
    imageAlt: 'Part of an IBM Z device',
    title: 'IBM Z'
  };
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
          About Us
        </Heading>
        <Text color={secondaryTextColor[colorMode]} mb={4}>
          Conquer the most demanding IT workloads with IBM Systems' servers and
          storage.
        </Text>
        <Flex
          direction={['column', 'row']}
          justifyContent="center"
          alignItems="center"
          maxWidth="100%"
          mt={4}
        >
          <Link
            href="https://www.ibm.com/it-infrastructure/servers"
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              mr={10}
            >
              <Image src={property1.imageUrl} alt={property1.imageAlt} />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Badge
                    _hover={{ bg: 'yellow.100' }}
                    _focus={{ boxShadow: 'outline' }}
                    textTransform="capitalcase"
                    rounded="full"
                    px="2"
                    fontSize="sm"
                    letterSpacing="tight"
                    colorScheme="blue"
                  >
                    IBM Systems
                  </Badge>
                </Box>
                <Box
                  mt="1"
                  ml="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property1.title}
                </Box>
              </Box>
            </Box>
          </Link>
          <Link
            href="https://www.ibm.com/it-infrastructure/storage"
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              mr={10}
            >
              <Image src={property2.imageUrl} alt={property2.imageAlt} />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Badge
                    _hover={{ bg: 'yellow.100' }}
                    _focus={{ boxShadow: 'outline' }}
                    textTransform="capitalcase"
                    rounded="full"
                    px="2"
                    fontSize="sm"
                    letterSpacing="tight"
                    colorScheme="blue"
                  >
                    IBM Systems
                  </Badge>
                </Box>
                <Box
                  mt="1"
                  ml="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property2.title}
                </Box>
              </Box>
            </Box>
          </Link>
          <Link
            href="https://www.ibm.com/it-infrastructure/servers"
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
              <Image src={property3.imageUrl} alt={property3.imageAlt} />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Badge
                    _hover={{ bg: 'yellow.100' }}
                    _focus={{ boxShadow: 'outline' }}
                    textTransform="capitalcase"
                    rounded="full"
                    px="2"
                    fontSize="sm"
                    letterSpacing="tight"
                    colorScheme="blue"
                  >
                    IBM Systems
                  </Badge>
                </Box>
                <Box
                  mt="1"
                  ml="2"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property3.title}
                </Box>
              </Box>
            </Box>
          </Link>
        </Flex>
        <Heading letterSpacing="tight" mb={4} mt={16} as="h2" size="xl">
          IBM Systems Training
        </Heading>
        <Text color={secondaryTextColor[colorMode]} mb={4}>
          Get authorized training and certification on a range of products and
          solutions from&nbsp;
          <Link href="https://ibm.co/Systems" color="blue.500" isExternal>
            IBM Systems.
          </Link>
        </Text>

        <Heading letterSpacing="tight" mb={4} mt={16} as="h2" size="xl">
          IBM Systems Conference
        </Heading>
        <Link
          href="https://www.ibm.com/training/events/"
          color="blue.500"
          isExternal
        >
          IBM TechU <ExternalLinkIcon mx="2px" />
        </Link>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="100%"
          mt={16}
          mb={16}
        >
          <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
            Tweets
          </Heading>
          <a
            autorefresh="true"
            className="twitter-timeline"
            color="blue.500"
            data-width="500"
            data-height="750"
            data-theme="dark"
            href="https://twitter.com/IBMTraining?ref_src=twsrc%5Etfw"
          >
            <Link color="blue.500" title="tweets" href="/about">
              Refresh the page to see Tweets by IBM Training
            </Link>
          </a>{' '}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
          <br />
        </Flex>
      </Container>
    </>
  );
};

export default About;
