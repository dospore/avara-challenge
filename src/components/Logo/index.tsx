import { Image, type ImageProps } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = (props: ImageProps) => <Image src={logo} {...props} h="2rem" />;

export default Logo;
