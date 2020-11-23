import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import { parseISO, format } from 'date-fns';
import { BiShareAlt } from 'react-icons/Bi';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';
import { BsClipboard } from 'react-icons/bs';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Button,
  Link,
  Icon,
  IconButton,
  useClipboard,
  useToast,
  Divider,
  Spacer,
  createStandaloneToast,
  Box
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
    <Container>
      <CourseSeo
        url={`https://systemstraining.vercel.app/course/${slug}`}
        {...frontMatter}
      />
      <Stack
        as="article"
        spacing={8}
        justifyContent="space-between"
        alignItems="space-between"
        m="0 auto 4rem auto"
        maxWidth="850px"
        w="100%"
      >
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="850px"
          w="100%"
          mt={2}
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
        </Flex>
        <Flex
          justify="space-between"
          align={['initial', 'center']}
          direction={['column', 'row']}
          mt={2}
          mb={0}
        >
          <Flex align="center" mt={4} mb={4}>
            <Avatar size="sm" name="Systems Training" src="" mr={2} />
            <Link
              href="https://twitter.com/IBMTraining"
              target="_blank"
              fontSize="sm"
              color={textColor[colorMode]}
              mr={1}
            >
              {frontMatter.by}
              {'IBM Systems Training'}
            </Link>
            <Text fontSize="sm">
              {'on '}
              {format(parseISO(frontMatter.lastPublishedOn), 'MMMM dd, yyyy')}
            </Text>

            <Flex ml={6}>
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
                mr={2}
                onClick={handleCopy}
                icon={hasCopied ? <FaClipboardCheck /> : <BiShareAlt />}
              />
            </Flex>
          </Flex>

          <Text fontSize="sm" minWidth="100px">
            {` • `}
            {frontMatter.readingTime.text}
          </Text>

          <Text fontSize="sm" minWidth="100px">
            {` • `}
            <ViewCounter id={slug} />
          </Text>
        </Flex>
        <Divider mt="0" width="97%" mb="4" orientation="horizontal" />

        {children}
        <Stack
          as="main"
          justifyContent="center"
          align="center"
          m="0 auto"
          w="100%"
        >
          <Divider mt="16" mb="8" width="100%" orientation="horizontal" />
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            maxWidth="100%"
            mt={4}
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
        </Stack>
      </Stack>
      <br />
      <br />
    </Container>
  );
}
