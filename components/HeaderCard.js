import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Link,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  VStack,
  Box,
  Container
} from '@chakra-ui/react';

const HeaderCard = ({ title, href, buttonText }) => {
  const { colorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const buttonTextColor = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "white");
  const hoverBgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Container maxW="container.xl" p={0}>
      <Link
        as={NextLink}
        href={href}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          border="1px solid"
          borderColor={borderColor}
          borderRadius="lg"
          p={{ base: 6, md: 8 }}
          transition="all 0.3s"
          cursor="pointer"
          _hover={{
            boxShadow: 'lg',
            backgroundColor: hoverBgColor
          }}
        >
          <Flex align="center" mb={{ base: 6, md: 0 }}>
            <Image
              priority
              src="/static/images/intro.svg"
              width={150}
              height={150}
              alt="Intro image"
              style={{ borderRadius: '8px' }}
            />
            <VStack align="start" ml={{ base: 0, md: 8 }} spacing={3}>
              <Heading
                as="h2"
                size="xl"
                fontWeight="bold"
                letterSpacing="tight"
                lineHeight="shorter"
                color={titleColor}
              >
                {title}
              </Heading>
              <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
                Discover the latest resources and search faster than the official website
              </Text>
            </VStack>
          </Flex>
          <Button
            leftIcon={<SearchIcon />}
            color={buttonTextColor}
            bg={useColorModeValue("blue.500", "blue.200")}
            size="lg"
            height="56px"
            px={8}
            _hover={{
              bg: useColorModeValue("blue.600", "blue.300"),
            }}
            boxShadow="md"
          >
            {buttonText}
          </Button>
        </Flex>
      </Link>
    </Container>
  );
};

export default HeaderCard;