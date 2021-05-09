import React, { useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  useColorMode
} from '@chakra-ui/react';

const Subscribe = () => {
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'orange.50',
    dark: 'blue.900'
  };
  const borderColor = {
    light: 'orange.200',
    dark: 'blue.900'
  };

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    inputEl.current.value = '';
    toast({
      title: 'Success!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
    >
      <Heading as="h5" size="lg" mb={2}>
        Subscribe to our newsletter
      </Heading>
      <Text>
        You won't hear from us unless there are significant updates.
      </Text>
      <InputGroup size="md" mt={4}>
        <Input
          aria-label="Email for newsletter"
          placeholder="xyz@abc.com"
          ref={inputEl}
          type="email"
        />
        <InputRightElement width="6.75rem">
          <Button fontWeight="bold" h="1.75rem" size="sm" onClick={subscribe}>
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Subscribe;