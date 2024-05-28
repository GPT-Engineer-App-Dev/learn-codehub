import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">CodeLearn</Heading>
        <HStack spacing={8}>
          <Link href="/" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="/courses" _hover={{ textDecoration: "none", color: "blue.300" }}>Courses</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>About</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.xl" centerContent py={20}>
        <VStack spacing={6} textAlign="center">
          <Heading size="2xl">Learn to Code, Build Projects, and Get Hired</Heading>
          <Text fontSize="lg">Join our community and start your coding journey today.</Text>
          <Button colorScheme="blue" size="lg">Get Started</Button>
        </VStack>
      </Container>

      {/* Featured Courses Section */}
      <Container maxW="container.xl" py={20}>
        <Heading size="xl" mb={10} textAlign="center">Featured Courses</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Course 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Course Title 1</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Course 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Course Title 2</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Course 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Course Title 3</Heading>
              <Text mb={4}>Brief description of the course.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="blue.600" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
            <Text>&copy; {new Date().getFullYear()} CodeLearn. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;