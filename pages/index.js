import React from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Box,
  Stack,
  Button
} from '@chakra-ui/react';
import * as myIcons from '../styles/newtheme';
import { NextSeo } from 'next-seo';
import Container from '../components/Container';
import HeaderCard from '../components/HeaderCard';
import ProjectCard from '../components/ProjectCard';

const url = 'https://systemstraining.vercel.app';
const title = 'Home: IBM Systems Training Search';

const Index = () => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: '#009688',
    dark: '#DDAF94'
  };
  const secondaryTextColor = {
    light: 'gray.800',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Flex
          align="center"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="100%"
          mb="40"
          mt="20"
        >
          <HeaderCard
            title="IBM Systems Training Course Search"
            href="/course"
            buttonText="Click to begin"
          />
        </Flex>
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
            mt={8}
            mb={8}
          >
            <Heading letterSpacing="tight" mt={5} mb={8} as="h2" size="xl">
              Most popular
            </Heading>
            <ProjectCard
              title="AN10G: AIX Basics"
              description="Learn to perform everyday tasks on the IBM AIX operating system. This course provides lectures and hands on labs in an instructor-led course environment, either in a face-to-face classroom or in a live virtual classroom environment."
              href="/course/AN10G"
              icon={myIcons.PowerIcon}
            />
            <ProjectCard
              title="QZC50G: DevOps with Private Cloud on IBM Power Systems: Learn Ansible, Chef and Puppet"
              description="The course addresses the concepts involved in planning, deploying and implementing Ansible, Chef and Puppet, and shows how to integrate these tools with IBM Cloud PowerVC Manager. You perform basic installation to advanced administrative tasks with these DevOps tools. In addition, the product architectures of these tools, and their benefits are covered while showing how to implement these tools to fit your needs."
              href="/course/QZC50G"
              icon={myIcons.AnsibleIcon}
            />
            <ProjectCard
              title="DL08015G: Introduction to IBM Storage and Cloud"
              description="This self-paced, web-based training (WBT) course provides an overview of cloud computing as it relates to storage professionals interested in IBM storage. Before talking about how IBM’s storage products integrate with the cloud, we will present an overview of cloud computing in general."
              href="/course/DL08015G"
              icon={myIcons.StorageIcon}
            />
            <ProjectCard
              title="SN71G: Storage Area Networking Fundamentals"
              description="This course provides an overview of storage network and data center networking technology. It reviews SAN concepts, Fibre Channel architecture, SAN topologies, IBM b-type offerings, IBM offerings from Cisco, and SAN over Ethernet architectures, such as iSCSI and FCoE."
              href="/course/SN71G"
              icon={myIcons.StorageIcon}
            />
            <ProjectCard
              title="ES10G: Fundamental System Skills in z/OS"
              description="This course is designed to teach you the fundamental practical skills to navigate and work in a z/OS environment. It is for IT personnel with a theoretical background of z/OS (for example, as taught in An Introduction to the z/OS Environment (ES05G)) and some general practical IT experience."
              href="/course/ES10G"
              icon={myIcons.IbmzIcon}
            />
            <ProjectCard
              title="ESS10G: Pervasive Encryption on z/OS"
              description="Pervasive encryption course with hands-on labs, key to IBM security portfolio. IBM z15 is designed for pervasive encryption. New z/OS policy controls which make it possible to use pervasive encryption to protect user data and simplify the task of compliance for many z/OS data sets, zFS file systems, and Coupling Facility structures."
              href="/course/ESS10G"
              icon={myIcons.IbmzIcon}
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="100%"
            mt={8}
            mb={8}
          >
            <Heading letterSpacing="tight" mb={8} as="h2" size="xl">
              We're also on Coursera!
            </Heading>
            <ProjectCard
              title="IBM z/OS Mainframe Practitioner Professional Certificate"
              description="In this series of courses, the learner will be introduced to various operating systems, mainframe applications, and get real-time hands-on experience on an IBM Z server. The skills acquired on completion of this Professional Certificate allows the learner to pursue a career as a mainframe application developer, system programmer, system administrator, or a DBA Practitioner."
              href="https://www.coursera.org/professional-certificates/ibm-z-mainframe"
              icon={myIcons.CourseraIcon}
            />
            <ProjectCard
              title="Linux and Private Cloud Administration on IBM Power Systems Specialization"
              description="This specialization introduces Red Hat Enterprise Linux system administration and private cloud capabilities of IBM Systems. IBM Power servers will be used to demonstrate these concepts. Through three courses, you will learn a range of concepts from how to get started with Linux, to using Linux in a large cloud environment. Brought to you by IBM!"
              href="https://www.coursera.org/specializations/linux-private-cloud-administration-power-systems"
              icon={myIcons.CourseraIcon}
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Index;
