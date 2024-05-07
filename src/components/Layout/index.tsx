import { Box, Grid, Hide, Show } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
// import { NavRouteIndex } from "../../types/nav";
import MobilePlaceHolder from "../MobilePlaceHolder";
import SideNav from "../SideNav";

import type { Children } from "../../types/react";

const paths: Record<string, number> = {};

type Props = {} & Children;

function Layout({ children }: Props) {
  const location = useLocation();
  const page = location.pathname.split("/")[1];

  return (
    <>
      <Show above="700px">
        <Grid gridTemplateColumns="100px 100%" minHeight="100vh" overflowX="hidden">
          <Box>
            <SideNav selectedNavIndex={paths[page]} />
          </Box>
          <Box w="full" maxWidth={"calc(100vw - 100px)"} overflow="hidden" pb={12}>
            <Box w="full">{children}</Box>
          </Box>
        </Grid>
      </Show>
      <Hide above="700px">
        <Box h="100vh" overflow="hidden">
          <MobilePlaceHolder />
        </Box>
      </Hide>
    </>
  );
}

export default Layout;
