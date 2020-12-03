import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import * as moment from 'moment';
import { SearchIcon } from '@chakra-ui/icons';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Link,
  Image,
  Box
} from '@chakra-ui/react';

import Container from '../components/Container';
import CoursePost from '../components/CoursePost';
import { default as content, frontMatter as courses1 } from './course/*.mdx';

const url = 'https://systemstraining.vercel.app/course';
const title = 'Courses: IBM Systems Training';
const description = 'IBM Systems Training Courses.';
//let newSlugArray = [];

const course = () => {
  /*console.log('courses1', courses1);
  newSlugArray = courses1.map((title) => ({ title, views: 0 }));
  console.log('newSlugArray', newSlugArray); */
  const props = [
    'summary',
    'title',
    'modality',
    'brand',
    'lastPublishedOn',
    'firstCreatedOn'
  ];

  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const textColor1 = {
    light: '#009688',
    dark: '#009688'
  };
  const textColor = {
    light: '#009688',
    dark: '#009688'
  };
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const [isLoading, setIsLoading] = useState(true);

  const filteredCoursePosts = courses1
    .sort((a, b) => {
      if (new Date(a.lastPublishedOn) < new Date(b.lastPublishedOn)) {
        return 1;
      }
      if (new Date(a.lastPublishedOn) > new Date(b.lastPublishedOn)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    /*     .filter((frontMatter) => {
      const concat = [
        frontMatter.summary,
        frontMatter.title,
        frontMatter.modality,
        frontMatter.brand,
        frontMatter.lastPublishedOn,
        frontMatter.firstCreatedOn
      ].join(' ');

      let allMatches = true;
      searchValue
        .toLowerCase()
        .split(' ')
        .forEach((val) => (allMatches &&= concat.toLowerCase().includes(val)));
      return allMatches;
    }); */
    .filter((frontMatter) => {
      // Get the front matter into a string, separated by spaces
      //const concat = Object.values(frontMatter).join(" ").toLowerCase();
      const concat = [
        frontMatter.summary,
        frontMatter.title,
        frontMatter.modality,
        frontMatter.brand,
        frontMatter.lastPublishedOn,
        frontMatter.firstCreatedOn
      ]
        .join(' ')
        .toLowerCase();
      // Look for a string in quotes, if not then just find a word
      const regex = /\"([\w\s\\\-]+)\"|([\w\\\-]+)/g;
      // Get all the queries
      const queries = [...searchValue.toLowerCase().matchAll(regex)].map(
        (arr) => arr[1] || arr[2]
      );
      // Make sure that every query is satisfied
      return queries.every((q) => concat.includes(q));
    });
  /*     .filter((frontMatter) => {
      // Get the front matter into a string, separated by spaces
      // The prepended and appended spaces are important for the regex later!
      const concat = ` ${Object.values(frontMatter).join(" ").toLowerCase()} `;
    
      // Look for a string in quotes, if not then just find a word
      const regex = /\"([\w\s]+)\"|(\w+)/g;
    
      // Get all the queries
      const queries = [...searchValue.toLowerCase().matchAll(regex)].map((arr) => arr[1] || arr[2]);
    
      // Make sure that every query is satisfied
      // [\\s\\.?!_] and [\\s\\.?!_] check for a space or punctuation at the beginning and end of a word
      // so that something like "deter" isn't matching inside of "undetermined"
      return queries.every((q) => new RegExp(`[\\s\\.?!_]${q}[\\s\\.?!_]`).test(concat));
    }); */

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={0}
          mb={4}
        >
          <InputGroup my={0} mr={50} ml={50} w="50%">
            <Input
              aria-label="Search"
              borderColor="blue.500"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              value={searchValue}
              autoFocus
              onFocus={(e) => e.currentTarget.select()}
            />
            <InputRightElement>
              <IconButton
                variant="unstyled"
                mb={1}
                borderColor="blue.500"
                icon={<SearchIcon />}
                color={textColor1[colorMode]}
              />
            </InputRightElement>
          </InputGroup>
          <Text mt={2} fontSize="xs" color="gray.500">
            There are{' '}
            <Text
              as="span"
              fontSize="xs"
              fontWeight="semibold"
              color={textColor[colorMode]}
            >
              {filteredCoursePosts.length}
            </Text>{' '}
            courses below.
          </Text>
        </Flex>

        {!searchValue && (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            m="0 auto"
            mb={0}
          ></Flex>
        )}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={8}
          mb={0}
        >
          <Heading
            letterSpacing="tight"
            mb={8}
            size="xl"
            fontWeight={700}
            color={textColor1[colorMode]}
          >
            All Courses
          </Heading>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxWidth="90%"
            mt={4}
          >
            {!filteredCoursePosts.length && 'No posts found.'}
            {filteredCoursePosts.map((frontMatter) => (
              <CoursePost
                key={frontMatter.title + frontMatter.lastPublishedOn}
                handleSearch={(anyKey) => setSearchValue(anyKey)}
                {...frontMatter}
              />
            ))}
          </Flex>
          <Stat
            mt={8}
            mb={16}
            border="1px solid"
            borderColor={textColor1[colorMode]}
            borderRadius={0}
            p={4}
          >
            <StatLabel>Number of courses on this site</StatLabel>
            <StatNumber textAlign="center">{courses1.length}</StatNumber>
          </Stat>
        </Flex>
      </Container>
    </>
  );
};

export default course;
