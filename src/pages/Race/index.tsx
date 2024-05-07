import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Card, HStack, Heading, Link, Text, useDisclosure } from "@chakra-ui/react";
// import NetworkIcon from "../../components/NetworkIcon";
import NetworkSelect from "../../components/NetworkSelect";
import { COLORS } from "../../helpers/constants";
// import { toExplorer } from "../../helpers/explorers";
// import { shortenHash } from "../../helpers/util";
import { useAllPoolEvents } from "../../hooks/useAllPoolEvents";
import { useControls } from "../../hooks/useControls";
import { useRacers } from "../../hooks/useRacers";
import InfoModal from "./InfoModal";
import Racers from "./Racers";

const Race = () => {
  useAllPoolEvents();
  const { startRace, endRace, resetRace } = useControls();
  const { racers, isPaused, selectedRacer, winner } = useRacers();

  const { isOpen: isInfoModalOpen, onOpen: onInfoModalOpen, onClose: onInfoModalClose } = useDisclosure();

  const racerColor = selectedRacer ? COLORS[selectedRacer] : "";

  return (
    <Box w="700px" mx="auto" mt={22}>
      <Heading as="h1">Aave Multichain Race</Heading>
      <Card p={4} bgGradient={racerColor ? `linear(#fff 0%, ${racerColor}.100 50%)` : undefined}>
        <Text variant="label" mb={2}>
          Choose your fighter
        </Text>
        <NetworkSelect />
        <HStack my={2}>
          <Button onClick={startRace} isDisabled={!isPaused || !!winner}>
            Start Race
          </Button>
          <Button onClick={endRace} isDisabled={isPaused}>
            End Race
          </Button>
          {winner && <Button onClick={resetRace}>Reset Race</Button>}
        </HStack>
        {winner && <Text variant="label">Winner: {winner}</Text>}
        <InfoOutlineIcon
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          position="absolute"
          right={4}
          top={4}
          onClick={onInfoModalOpen}
        />
      </Card>
      <Racers racers={racers} />
      <InfoModal isOpen={isInfoModalOpen} onClose={onInfoModalClose} />
    </Box>
  );
};

export default Race;
