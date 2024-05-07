import { WarningIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";
import { arbitrum, avalanche, base, mainnet, optimism, polygon } from "wagmi/chains";
import type { SupportedNetwork } from "../../types/web3";

import arbitrum_icon from "../../assets/networks/arbitrum.svg";
import avalanche_icon from "../../assets/networks/avalanche.svg";
import base_icon from "../../assets/networks/base.svg";
import ethereum_icon from "../../assets/networks/ethereum.svg";
import optimism_icon from "../../assets/networks/optimism.svg";
import polygon_icon from "../../assets/networks/polygon.svg";

const networkIcons: Record<SupportedNetwork, any> = {
  [arbitrum.id]: arbitrum_icon,
  [avalanche.id]: avalanche_icon,
  [base.id]: base_icon,
  [mainnet.id]: ethereum_icon,
  [optimism.id]: optimism_icon,
  [polygon.id]: polygon_icon,
};

type Props = {
  chainId: SupportedNetwork;
};

const NetworkIcon = ({ chainId }: Props) => {
  const icon = networkIcons[chainId];

  if (!icon) {
    return <WarningIcon />;
  }

  return (
    <Box>
      <Image src={icon} boxSize="22px" />
    </Box>
  );
};

export default NetworkIcon;
