import React from "react";
import { Box, Heading } from "@chakra-ui/core";

import Group from "./Group";
import data from "../data/groups";

export default function Groups() {
  return (
    <Box p={["1rem 2rem", null, "1rem 10rem"]}>
      <Heading color="simonyi" textAlign="center" mt="1rem" mb="2rem">
        Köreink
      </Heading>
      <Box className="groupsWrapper">
        {data.map(d => (
          <Group key={d.name} data={d} />
        ))}
      </Box>
    </Box>
  );
}
