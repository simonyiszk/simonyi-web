import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/core";

import data from "../data/educatio";

function JoinButtion() {
  return (
    <Flex width="40%">
      <Box
        as="a"
        href="https://tinyurl.com/bmeviksimonyi"
        width="100%"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Flex
          px="1rem"
          py="0.5rem"
          justifyContent="center"
          alignItems="center"
          backgroundColor="simonyi"
          cursor="pointer"
          boxShadow="rgb(210, 210, 210) 1px 1px 2px 2px"
          borderRadius="5px"
          fontWeight="bold"
        >
          Csatlakozás
        </Flex>
      </Box>
    </Flex>
  );
}

function Presentation({ data }) {
  return (
    <AccordionItem mb={4}>
      <AccordionHeader p={0}>
        <Flex
          width="100%"
          py={1}
          px={2}
          backgroundColor="simonyi"
          alignItems="center"
          flexDir={["column", null, "row"]}
          boxShadow="rgb(210, 210, 210) 1px 1px 2px 2px"
          borderRadius="5px"
        >
          <Box mr={2} fontSize="1.2rem">
            {data.timeStart}-{data.timeEnd}
          </Box>
          <Flex flexDir="column" flex="1" mb={[2, null, 0]}>
            <Box fontWeight="bold" fontSize="1.2rem">
              {data.title}
            </Box>
            <Box>{data.presenters}</Box>
          </Flex>
          <Flex alignItems="center">
            <Box>Részletek</Box>
            <AccordionIcon />
          </Flex>
        </Flex>
      </AccordionHeader>
      <AccordionPanel pb={4}>
        <Flex flexDir="column" alignItems="center">
          <Box mb={2} textAlign="justify">
            {data.description}
          </Box>
          <JoinButtion />
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

function DaySection({ data }) {
  return (
    <Box width="100%" mt={4}>
      <Box fontSize="2rem" fontWeight="bold" textAlign="center" mb={2}>
        {new Date(data.date).toLocaleDateString()} ({data.name.toLowerCase()})
      </Box>
      <Accordion allowMultiple>
        {data.presentations.map((p) => (
          <Presentation key={p.id} data={p} />
        ))}
      </Accordion>
    </Box>
  );
}

function Educatio() {
  return (
    <Flex
      flexGrow="1"
      pt={4}
      pb={24}
      justifyContent="center"
      fontFamily="Montserrat"
      backgroundColor="#EEEEEE"
    >
      <Flex alignItems="center" flexDir="column" width={["90%", null, "80%", null, "64em"]}>
        <Box fontSize="2rem" fontWeight="bold">
          Educatio 2021
        </Box>
        <Box fontWeight="bold">Szakkollégiumi előadások</Box>
        <Box mt={4}>
          <Box textAlign="justify">
            A Simonyi Károly Szakkollégium a BME-VIK egyik legnagyobb öntevékeny
            szervezete. Az Educatiora izgalmas előadásokkal és workshopokkal
            készültünk számotokra, amiken keresztül betekintést nyerhettek abba,
            hogy mivel is foglalkozik egy szakkollégista az egyetem mellett. Ha
            érdekel valamelyik előadás, kattints Csatlakozás gombra.
          </Box>
          <Box
            as="a"
            href="http://palyavalasztas.vik.bme.hu/csatlakozas/"
            target="_blank"
            rel="noreferrer noopener"
            color="#06c"
          >
            Teams csatlakozási segédlet
          </Box>
        </Box>
        {data.map((d) => (
          <DaySection key={d.id} data={d} />
        ))}
      </Flex>
    </Flex>
  );
}

function EducatioReference() {
  return (
    <Box>
      <Box p={["0 2rem", null, "0 10rem"]} mb={8}>
        <Heading
          color="simonyi"
          textAlign="center"
          mt="1rem"
          mb={["1rem", null, "2rem"]}
        >
          Educatio 2021
        </Heading>
        <Box textAlign="center">
          Az előadásokat{" "}
          <Link
            href="https://simonyi.bme.hu/educatio2021"
            color="simonyi"
            fontWeight="bold"
          >
            ezen a linken
          </Link>{" "}
          nézheted meg.
        </Box>
      </Box>
      <Flex height="0.5rem" backgroundColor="#333"></Flex>
    </Box>
  );
}

export { Educatio, EducatioReference };
