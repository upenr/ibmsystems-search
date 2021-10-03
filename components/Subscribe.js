import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';

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

import fetcher from '../lib/fetcher';

export default function Subscribe() {
  const [form, setForm] = useState(false);
  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = format(data?.count);
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'white.100',
    dark: 'black.800'
  };
  const borderColor = {
    light: 'twitter.800',
    dark: 'twitter.800'
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
      description: 'Check your email to confirm the subscription.',
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
        Subscribe to the newsletter
      </Heading>
      <Text>You won't hear from us unless there are significant updates.</Text>
      <InputGroup size="md" mt={4} mb={4}>
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
      <Text fontSize="md">Current subscribers: {`${subscriberCount || '-'}`}</Text>
    </Box>
  );
}
