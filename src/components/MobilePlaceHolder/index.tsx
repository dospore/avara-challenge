import { Heading, Text, VStack } from "@chakra-ui/react";

function MobilePlaceHolder() {
  return (
    <VStack w="full" h="full" bg="black" color="white" justify="center">
      <Heading color="white">Access via Desktop</Heading>
      <Text textAlign="center">Mobile support coming soon</Text>
    </VStack>
  );
}

export default MobilePlaceHolder;
