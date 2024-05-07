import { Box, Button, Text } from "@chakra-ui/react";
import { useChainId, useSwitchChain } from "wagmi";
import NetworkIcon from "../NetworkIcon";

const NetworkSelect = () => {
  const { chains, switchChain } = useSwitchChain();
  const chainId = useChainId();

  return (
    <Box>
      {chains.map((chain) => (
        <Button
          key={chain.id}
          mx={2}
          mb={2}
          size="sm"
          onClick={() => switchChain({ chainId: chain.id })}
          opacity={chain.id === chainId ? 1 : 0.5}
          _hover={{ opacity: 1 }}
        >
          <Text as="span" mr={2}>
            {chain.name}
          </Text>{" "}
          <NetworkIcon chainId={chain.id} />
        </Button>
      ))}
    </Box>
  );
};

export default NetworkSelect;
