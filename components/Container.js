import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Button,
  Flex,
  Icon,
  IconButton,
  Avatar,
  useColorModeValue,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import * as myIcons from '../styles/newtheme';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 0;
  top: 0;
  backdrop-filter: saturate(100%) blur(5px);
  transition: background-color 0.2 ease-in-out;
`;

const Container = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'gray.100'
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        as="nav"
        p={0}
        mt={[0, 0]}
        mb={8}
        mx={0}
      >
        <Flex justifyContent="flex-start" alignItems="flex-start">
          <Tooltip label="Dark Mode Toggle" placement="bottom">
            <IconButton
              aria-label={`Switch to ${text} mode`}
              variant="outline"
              color="current"
              onClick={toggleColorMode}
              icon={<SwitchIcon />}
            />
          </Tooltip>
          {/* <myIcons.BookIcon boxSize={8} ml='4' mt='1' /> */}
          {/* <Avatar bg="white.500" name="IBM Systems Training" src="/static/images/logo.png" /> */}
        </Flex>

        <Box>
          <NextLink href="/course/Submission" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Submit
            </Button>
          </NextLink>
          <NextLink href="/course" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Courses
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              About
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
