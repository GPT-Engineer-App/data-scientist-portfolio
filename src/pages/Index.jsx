import { useState } from "react";
import { Box, Container, VStack, HStack, Text, Button, IconButton, Image, Link, Flex, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaProjectDiagram, FaUser, FaTools, FaBlog, FaPhone } from "react-icons/fa";

const Home = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading as="h1" size="2xl">
        Welcome to My Portfolio
      </Heading>
      <Text fontSize="xl">I am a Data Scientist passionate about uncovering insights from data.</Text>
      <Image src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3MTY5NTIzMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Data Science" boxSize="300px" />
    </VStack>
  </Container>
);

const Projects = () => (
  <Container maxW="container.md" py={8}>
    <Heading as="h2" size="xl" mb={4}>
      Projects
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1543285198-3af15c4592ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMXxlbnwwfHx8fDE3MTY5NTIzMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" />
        <Text mt={2} fontWeight="bold">
          Project 1
        </Text>
        <Text>Brief description of project 1.</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwMnxlbnwwfHx8fDE3MTY5NTIzMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" />
        <Text mt={2} fontWeight="bold">
          Project 2
        </Text>
        <Text>Brief description of project 2.</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <Image src="https://images.unsplash.com/photo-1629739884942-8678d138dd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwM3xlbnwwfHx8fDE3MTY5NTIzMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 3" />
        <Text mt={2} fontWeight="bold">
          Project 3
        </Text>
        <Text>Brief description of project 3.</Text>
      </Box>
    </SimpleGrid>
  </Container>
);

const Myself = () => (
  <Container maxW="container.md" py={8}>
    <Heading as="h2" size="xl" mb={4}>
      About Me
    </Heading>
    <Flex direction={["column", "row"]} align="center">
      <Image src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTY5NTIzMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Myself" boxSize="200px" borderRadius="full" mr={[0, 8]} mb={[4, 0]} />
      <Text fontSize="lg">I am a data scientist with a passion for uncovering insights from data. I have experience in machine learning, data visualization, and statistical analysis.</Text>
    </Flex>
  </Container>
);

const Skills = () => (
  <Container maxW="container.md" py={8}>
    <Heading as="h2" size="xl" mb={4}>
      Skills
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontWeight="bold">Python</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontWeight="bold">Machine Learning</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontWeight="bold">Data Visualization</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontWeight="bold">Statistical Analysis</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontWeight="bold">SQL</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontWeight="bold">R</Text>
      </Box>
    </SimpleGrid>
  </Container>
);

const Posts = () => (
  <Container maxW="container.md" py={8}>
    <Heading as="h2" size="xl" mb={4}>
      Posts
    </Heading>
    <VStack spacing={4} align="stretch">
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading as="h3" size="md">
          Post Title 1
        </Heading>
        <Text mt={2}>Brief description of post 1.</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading as="h3" size="md">
          Post Title 2
        </Heading>
        <Text mt={2}>Brief description of post 2.</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Heading as="h3" size="md">
          Post Title 3
        </Heading>
        <Text mt={2}>Brief description of post 3.</Text>
      </Box>
    </VStack>
  </Container>
);

const Contact = () => (
  <Container maxW="container.md" py={8}>
    <Heading as="h2" size="xl" mb={4}>
      Contact
    </Heading>
    <VStack spacing={4}>
      <HStack spacing={4}>
        <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as={Link} href="https://github.com/yourusername" isExternal />
        <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as={Link} href="https://linkedin.com/in/yourusername" isExternal />
        <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" as={Link} href="mailto:your.email@example.com" />
      </HStack>
      <Text fontSize="lg">Feel free to reach out to me through any of the platforms above.</Text>
    </VStack>
  </Container>
);

const Index = () => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "myself":
        return <Myself />;
      case "skills":
        return <Skills />;
      case "posts":
        return <Posts />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Box>
      <Flex as="nav" bg="teal.500" color="white" padding={4} justifyContent="center">
        <HStack spacing={4}>
          <Button leftIcon={<FaHome />} onClick={() => setPage("home")} colorScheme="teal" variant="ghost">
            Home
          </Button>
          <Button leftIcon={<FaProjectDiagram />} onClick={() => setPage("projects")} colorScheme="teal" variant="ghost">
            Projects
          </Button>
          <Button leftIcon={<FaUser />} onClick={() => setPage("myself")} colorScheme="teal" variant="ghost">
            Myself
          </Button>
          <Button leftIcon={<FaTools />} onClick={() => setPage("skills")} colorScheme="teal" variant="ghost">
            Skills
          </Button>
          <Button leftIcon={<FaBlog />} onClick={() => setPage("posts")} colorScheme="teal" variant="ghost">
            Posts
          </Button>
          <Button leftIcon={<FaPhone />} onClick={() => setPage("contact")} colorScheme="teal" variant="ghost">
            Contact
          </Button>
        </HStack>
      </Flex>
      <Divider />
      {renderPage()}
    </Box>
  );
};

export default Index;
