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
      position="relative"
    >
      <Flex
        position="absolute"
        top="0"
        width="100%"
        justifyContent="space-between"
        p="1rem 2rem"
        flexDirection={["column", "row"]}
      >
        <Image
          height={["3rem", null, "4rem"]}
          mb={["1rem", "0"]}
          order={["0", "1"]}
          src={`./resources/footer/bme.svg`}
          alt="BME"
        />
        <Image
          height={["4rem", null, "5rem"]}
          mb={["1rem", "0"]}
          src={`./resources/footer/vik.svg`}
          alt="BME-VIK"
        />
      </Flex>
      <Box width={["80%", null, "60%"]}>
        <Box>
          <Image src="./resources/simonyi_white.svg" alt="Simonyi" />
        </Box>
        <Box
          textAlign="center"
          color="white"
          textDecor="none"
          fontSize={["1rem", "1.5rem", "3rem"]}
        >
          <a href="mailto:info@simonyi.bme.hu">info@simonyi.bme.hu</a>
        </Box>
      </Box>
    </Flex>
  );
}
