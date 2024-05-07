import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Box w="896px" mx="auto" mt={24}>
      <VStack spacing="24px" fontSize="lg">
        <Heading fontSize="52px" as="h1">
          Dospore
        </Heading>
        <Text textAlign="center" fontSize="2xl">
          Welcome to Dospore's, Web3 Boilerplate A group of packages that I like to work with for hackathons and quick
          build projects
        </Text>
      </VStack>
    </Box>
  );
};

export default Landing;
