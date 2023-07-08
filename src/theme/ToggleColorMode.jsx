import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons"
import { motion } from "framer-motion";
const ToggleColorMode = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Button 
        onClick={() => toggleColorMode()}
        position="absolute"
        padding="10 0px"
        left="1px"
        top="0rem"
        m="10px"
        >
            {colorMode === "dark" ? (
            <SunIcon color ="yellow.400" /> 
            ):( 
            <MoonIcon color="blue.400" />
        )}
        </Button>
    );
};

export default ToggleColorMode;