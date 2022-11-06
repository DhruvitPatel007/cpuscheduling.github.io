import React from "react";
import { Image } from "@chakra-ui/react";
import HomeImg1 from "../assets/Images/1.svg";
import HomeImg2 from "../assets/Images/2.svg";
import HomeImg3 from "../assets/Images/3.svg";

import {
  Button,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

import { BsFillInfoSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeInfoSm = () => {
  return (
    <div>
      {/* cpu scheduling info  */}
      <VStack spacing={6}>
        <Image
          src={HomeImg2}
          alt="Example1 img"
          mt="10px"
          width="100%"
          ml="10%"
        />
        <VStack spacing={8}>
          <Heading
            fontSize="7xl"
            bgGradient={[
              "linear(to-b, orange.100, purple.300)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-tr, teal.300, pink.400)",
            ]}
            bgClip="text"
          >
            What is CPU Scheduling?
          </Heading>
          <Text mt={4} fontSize="3xl">
            CPU Scheduling is a process of determining which process will own
            CPU for execution while another process is on hold. The main task of
            CPU scheduling is to make sure that whenever the CPU remains idle,
            the OS at least select one of the processes available in the ready
            queue for execution.
          </Text>
        </VStack>
      </VStack>

      {/* algorithms  */}
      <SimpleGrid columns={1} spacingX="20px" spacingY="20px" mt="10%">
        <Box
          p={10}
          width="200px"
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          borderColor="blue.200"
          borderRadius="3xl"
          w="full"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">FCFS</Heading>
          <Text mt={4} fontSize="lg">
            First-Come, First-Served Scheduling
          </Text>
          <Link to="/fcfs">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>

        <Box
          p={10}
          width="40%"
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          w="full"
          borderColor="blue.200"
          borderRadius="3xl"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">SJF</Heading>
          <Text mt={4} fontSize="lg">
            Shortest-Job-First Scheduling
          </Text>
          <Link to="/sjf">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>

        <Box
          p={10}
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          w="full"
          borderColor="blue.200"
          borderRadius="3xl"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">RR</Heading>
          <Text mt={4} fontSize="lg">
            Round Robin Scheduling
          </Text>
          <Link to="/rr">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>

        <Box
          p={10}
          shadow="2xl"
          boxShadow="dark-lg"
          borderWidth="4px"
          w="full"
          borderColor="blue.200"
          borderRadius="3xl"
          textAlign="center"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
          <Heading fontSize="4xl">PS</Heading>
          <Text mt={4} fontSize="lg">
            Priority Scheduling
          </Text>
          <Link to="/ps">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
            >
              Open
            </Button>
          </Link>
        </Box>
      </SimpleGrid>
      <VStack mt="10%" spacing={6}>
        <Image
          src={HomeImg1}
          alt="Example1 img"
          mt="10px"
          width="100%"
          ml="10%"
        />

        {/* about  */}
        <VStack spacing={8}>
          <Heading
            fontSize="7xl"
            bgGradient={[
              "linear(to-b, orange.100, purple.300)",
              "linear(to-t, blue.200, teal.500)",
              "linear(to-tr, teal.300, pink.400)",
            ]}
            bgClip="text"
          >
            About
          </Heading>
          <Text mt={4} fontSize="3xl">
            To know more about this website pleasefvijd click on the about button :
          </Text>
          <Link to="/about">
            <Button
              mt={4}
              border="2px"
              borderColor="blue.200"
              colorScheme="purple"
              variant="solid"
              size="lg"
              fontSize="4xl"
              padding="6"
            >
              <BsFillInfoSquareFill />
              &nbsp;&nbsp; About
            </Button>
          </Link>
        </VStack>
      </VStack>
      <VStack mt="10%" spacing={6}>
        <Image
          src={HomeImg3}
          alt="Example1 img"
          mt="10px"
          width="100%"
          ml="10%"
        />
      </VStack>
    </div>
  );
};

export default HomeInfoSm;
