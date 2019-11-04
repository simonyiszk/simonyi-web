import React from "react";
import { Box, Heading } from "@chakra-ui/core";

import Group from "./Group";
import data from "../data/groups";

export default function Groups() {
  return (
    <Box p={["0 2rem", null, "0 10rem"]}>
      <Heading
        color="simonyi"
        textAlign="center"
        mt="1rem"
        mb={["1rem", null, "2rem"]}
      >
        Köreink
      </Heading>
      <Box>
        {data.map(d => (
          <Group key={d.name} data={d} />
        ))}
      </Box>
    </Box>
  );
}
