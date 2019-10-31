import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

export default function Hero() {
  return (
    <Flex
      height="100vh"
      background="url('/resources/bg.jpg') no-repeat center center fixed"
      bgSize="cover"
      overflow="hidden"
      justify="center"
      alignItems="center"
    >
      <Box w="60%">
        <Box>
          <Image src="./resources/simonyi_white.svg" alt="Simonyi" />
        </Box>
        <Box
          textAlign="center"
          color="white"
          textDecor="none"
          fontSize={["1.5rem", "2rem", "3rem"]}
        >
          <a href="mailto:info@simonyi.bme.hu">info@simonyi.bme.hu</a>
        </Box>
      </Box>
    </Flex>
  );
}
