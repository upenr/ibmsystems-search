import React from 'react';
import NextLink from 'next/link';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  Icon,
  Image,
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
          rounded="full"
          boxSize="150px"
          src="/static/images/itoperations.png"
          alt="IT training image"
          mr="8"
        />
        <Stack>
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
          >
            {title}
          </Heading>
          <NextLink href="/course" passHref>
            <Button
              leftIcon={<SearchIcon />}
              align="center"
              color={textColor[colorMode]}
              colorScheme="gray"
              size="lg"
            >
              {buttonText}
            </Button>
          </NextLink>
        </Stack>
      </Flex>
    </Link>
  );
};

export default HeaderCard;
