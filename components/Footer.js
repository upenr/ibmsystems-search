import React from 'react';
import { Flex, Link, IconButton, Text } from '@chakra-ui/react';
import { SearchIcon, LinkedinIcon } from '@chakra-ui/icons';
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <Text fontSize="sm">
      <span>Designed and developed by Upendra Rajan</span>
    </Text>
    <div>
      <Link href="https://twitter.com/__upen" title="Twitter" isExternal>
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FiTwitter />}
        />
      </Link>
      <Link href="https://github.com/upenr" title="GitHub" isExternal>
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FiGithub />}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/upenr/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<FiLinkedin />}
        />
      </Link>
      <Link href="mailto:urajan@ncsu.edu" title="Email" isExternal>
        <IconButton
          aria-label="Search database"
          variant="ghost"
          icon={<AiOutlineMail />}
        />
      </Link>
    </div>
  </Flex>
);

export default Footer;
