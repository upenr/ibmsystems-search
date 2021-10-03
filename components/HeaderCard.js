import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  Icon,
  Button,
  useColorMode
} from '@chakra-ui/react';

const HeaderCard = ({ title, href, buttonText }) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: '#009688',
    dark: '#DDAF94'
  };
  const secondaryTextColor = {
    light: 'gray.800',
    dark: 'gray.400'
  };
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };
  const whiteTextColor = {
    light: '#ffffff',
    dark: '#ffffff'
  };
  const iconColor = {
    light: 'gray.1000',
    dark: 'white'
  };

  return (
    <Link
      mb={4}
      href={href}
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none'
      }}
    >
      <Flex
        align="center"
        border="0px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={10}
        p={4}
      >
        <Image
          priority="true"
          src="/static/images/itoperations.png"
          width={160}
          height={160}
        />
        <Stack align="center" ml={6}>
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
          >
            <Text
                as="span"
                bgGradient="linear(to-r, #24C6DC, #514A9D)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="bold"
              >
            {title}
            </Text>
          </Heading>
          <Button
            leftIcon={<SearchIcon />}
            align="center"
            color={whiteTextColor[colorMode]}
            size="lg"
            height="48px"
            width="50%"
            bgGradient="linear(to-r, #24C6DC, #514A9D)"
                  _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)'
                  }}
          >
            {buttonText}
          </Button>
        </Stack>
      </Flex>
    </Link>
  );
};

export default HeaderCard;
