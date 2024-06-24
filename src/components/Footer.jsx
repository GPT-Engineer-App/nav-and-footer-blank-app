import { Box, Text, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" py="6" px={{ base: "4", md: "8" }} bg="gray.800" color="white" mt="auto">
      <Stack direction={{ base: "column", md: "row" }} spacing="4" align="center" justify="space-between">
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
        <Stack direction="row" spacing="4">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;