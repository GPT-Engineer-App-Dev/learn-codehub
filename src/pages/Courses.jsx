import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "Course Title 1", description: "Brief description of the course.", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Course Title 2", description: "Brief description of the course.", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Course Title 3", description: "Brief description of the course.", image: "https://via.placeholder.com/300" },
];

const Courses = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Heading size="xl" mb={10} textAlign="center">Available Courses</Heading>
      <Flex wrap="wrap" justifyContent="space-around">
        {courses.map(course => (
          <Box key={course.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src={course.image} alt={course.title} />
            <Box p={6}>
              <Heading size="md" mb={2}>{course.title}</Heading>
              <Text mb={4}>{course.description}</Text>
              <Button as={Link} to={`/courses/${course.id}`} colorScheme="blue">View Details</Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Courses;