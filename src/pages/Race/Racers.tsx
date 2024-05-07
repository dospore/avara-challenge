import { Box } from "@chakra-ui/react";
import NetworkIcon from "../../components/NetworkIcon";
import { COLORS } from "../../helpers/constants";
import type { SupportedNetwork } from "../../types/web3";

type Props = {
  racers: {
    chainId: SupportedNetwork;
    position: number;
  }[];
};

const Race = ({ racers }: Props) => {
  return (
    <Box h="200px" position="relative" px={"10px"}>
      <Box
        position="absolute"
        w="2px"
        h="full"
        bg="blackAlpha.500"
        _after={{
          position: "absolute",
          bottom: 0,
          content: '"start"',
          textWrap: "nowrap",
          fontWeight: 700,
          marginLeft: "0.5rem",
        }}
      />
      {racers.map((racer, i) => {
        const p = racer.position * 70;
        const t = i * 20 + i * 4 + 20;
        return (
          <Box key={racer.chainId}>
            <Box
              key={`trace-${racer.chainId}`}
              position="absolute"
              className="moving-trace"
              w={`${p}px`}
              top={`${t + 10}px`}
              color={COLORS[racer.chainId]}
              transition="2s"
            />
            <Box
              key={`racer-${racer.chainId}`}
              position="absolute"
              left={`${p}px`}
              top={`${t}px`}
              transition="2s"
              zIndex={1}
              w="20px"
            >
              <NetworkIcon chainId={racer.chainId} />
            </Box>
          </Box>
        );
      })}

      <Box
        position="absolute"
        w="2px"
        h="full"
        right={"10px"}
        bg="blackAlpha.500"
        _after={{
          position: "absolute",
          bottom: 0,
          content: '"finish"',
          textWrap: "nowrap",
          fontWeight: 700,
          marginLeft: "0.5rem",
        }}
      />
    </Box>
  );
};

export default Race;
