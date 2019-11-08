import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

export default function Footer() {
  return (
    <Box backgroundColor="#333333" p={["1rem 5rem", null, "1rem 10rem"]}>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", null, "row"]}
      >
        <Flex
          justifyContent="center"
          mb={["1rem", null, "0"]}
          order={["2", null, "0"]}
        >
          <Box>
            <Flex
              as="a"
              href="https://svie.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                height="4rem"
                src={`./resources/footer/sch_small.svg`}
                alt="Schönherz"
              />
            </Flex>
          </Box>
        </Flex>
        <Flex justifyContent="center" mb={["1rem", null, "0"]}>
          <Box>
            <Flex
              as="a"
              href="https://simonyi.bme.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                height="4rem"
                src={`./resources/footer/simonyi.svg`}
                alt="Schönherz"
              />
            </Flex>
          </Box>
        </Flex>
        <Flex justifyContent="center" mb={["1rem", null, "0"]}>
          <Box>
            <Flex
              as="a"
              href="http://www.vik.bme.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                height="4rem"
                src={`./resources/footer/vik.svg`}
                alt="BME-VIK"
              />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
