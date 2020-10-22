import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";

import data from "../data/groups";

function TankorButton(props) {
  return (
    <Box>
      {props.data ? (
        <Flex
          height="10rem"
          flexShrink="0"
          justifyContent="center"
          alignItems="center"
          mx="2rem"
        >
          {" "}
          <Flex
            width="10rem"
            flexShrink="0"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={`./resources/groups/${props.data.logoname}.svg`}
              alt={props.data.name}
            />
          </Flex>
        </Flex>
      ) : (
        <Flex
          width="10rem"
          height="5rem"
          backgroundColor="simonyi"
          justifyContent="center"
          alignItems="center"
          fontFamily="Montserrat"
          fontSize="1.5rem"
          fontWeight="bold"
        >
          Megnyitó
        </Flex>
      )}
    </Box>
  );
}

function Tankor() {
  return (
    <Flex alignItems="center" flexDir="column" mt="1rem">
      <Box>
        <TankorButton />
      </Box>
      <Flex flexWrap="wrap" justifyContent="center">
        <TankorButton
          data={{ name: "Kollégiumi Számítástechnikai Kör", logoname: "kszk" }}
        />
        {data.map((d) => (
          <TankorButton key={d.name} data={d} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Tankor;
