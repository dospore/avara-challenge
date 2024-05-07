import { Box, HStack, Text } from "@chakra-ui/react";
import NetworkIcon from "../NetworkIcon";

const ToastTitleBox = ({ chainId, type, points }: { chainId: SupportedNetwork; type: string; points: number }) => (
  <HStack>
    <Text>{type}</Text>
    <NetworkIcon chainId={chainId} />
    <Text>+{points} points</Text>
  </HStack>
);

export default ToastTitleBox;
