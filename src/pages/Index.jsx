import { Container, Text, VStack, Box, Flex, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} flex="1">
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      </VStack>
      <Box as="footer" width="100%" py={4} bg="gray.200">
        <Flex justify="center" align="center">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
          <Link ml={4} href="https://www.yourcompany.com" isExternal>
            Privacy Policy
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;