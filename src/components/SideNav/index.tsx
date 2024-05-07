import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import type { NavRouteIndex } from "../../types/nav";

import Logo from "../Logo";

import github_icon from "../../assets/github.png";
import logo_icon from "../../assets/logo.png";

const PATHS: {
  text: string;
  icon?: any;
  key: NavRouteIndex;
  route: string;
}[] = [];

type Props = {
  selectedNavIndex?: NavRouteIndex;
};

const SideNav = ({ selectedNavIndex }: Props) => {
  return (
    <Box p={4} borderRight="1px" w="100px" h="full" borderColor="gray.300" position="relative">
      <Link to={window.location.origin}>
        <Logo mb={10} mx="auto" cursor="pointer" />
      </Link>
      <VStack align="middle" spacing={4}>
        {PATHS.map(({ text, route, icon, key }) => (
          <Link to={route} key={`nav-${route}`}>
            <VStack
              gap={"2px"}
              cursor="pointer"
              transition="0.3s"
              _hover={{ opacity: 1 }}
              opacity={selectedNavIndex === key ? 1 : 0.5}
            >
              <Image src={icon} w="2rem" />
              <Text>{text}</Text>
            </VStack>
          </Link>
        ))}
      </VStack>
      <Link target="_blank" to="https://github.com/dospore/avara-challenge">
        <Flex
          justify="center"
          position="absolute"
          bottom={4}
          align="center"
          left={0}
          right={0}
          opacity={0.6}
          _hover={{ opacity: 0.8 }}
        >
          <Image src={github_icon} boxSize="1.5rem" />
        </Flex>
      </Link>
    </Box>
  );
};

export default SideNav;
