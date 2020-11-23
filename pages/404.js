import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button
} from '@chakra-ui/react';
import Container from '../components/Container';

const Error = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="100%"
          mt={10}
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Error 404
          </Heading>
          <Text color={secondaryTextColor[colorMode]} my={4}>
            &nbsp;This page doesn't exist.
          </Text>
          <NextLink href="/" passHref>
            <Button
              as="a"
              p={[1, 5]}
              w="100%"
              fontWeight="bold"
              m="3rem auto 0"
            >
              Return Home
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Error;
