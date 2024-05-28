import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const courses = [
  { id: 1, title: "Course Title 1", description: "Detailed description of the course.", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Course Title 2", description: "Detailed description of the course.", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Course Title 3", description: "Detailed description of the course.", image: "https://via.placeholder.com/300" },
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === parseInt(courseId));
  const [enrolled, setEnrolled] = useState(false);

  if (!course) {
    return <Text>Course not found</Text>;
  }

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={6} textAlign="center">
        <Heading size="2xl">{course.title}</Heading>
        <Image src={course.image} alt={course.title} />
        <Text fontSize="lg">{course.description}</Text>
        <Button colorScheme={enrolled ? "green" : "blue"} onClick={() => setEnrolled(true)}>
          {enrolled ? "Enrolled" : "Enroll"}
        </Button>
      </VStack>
    </Container>
  );
};

export default CourseDetail;