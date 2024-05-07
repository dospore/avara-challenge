import {
  Box,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { REQUIRED_POINTS_TO_WIN } from "../../helpers/constants";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const InfoModal = ({ isOpen, onClose }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>How to</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <Text variant="label">Welcome to the jungle. Its very easy to play.</Text>
        <Box pl={2}>
          <OrderedList>
            <ListItem>Choose your favourite network</ListItem>
            <ListItem>Start the race</ListItem>
            <ListItem>
              Watch as the multichain event streamer streams in aave pool events. Each event is awarded a certain amount
              of points
            </ListItem>
            <ListItem>The first to {REQUIRED_POINTS_TO_WIN} points celebrates the win</ListItem>
          </OrderedList>
        </Box>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default InfoModal;
