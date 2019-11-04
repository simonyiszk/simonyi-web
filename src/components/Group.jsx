import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/core";
import "./main.css";

export default function Group(props) {
  const [active, setActive] = useState(-1);

  const socialClick = i => setActive(active === i ? -1 : i);

  return (
    <Flex
      border="1px solid rgb(163, 163, 163)"
      margin="1rem 0"
      padding="1rem"
      flexDirection={["column", null, null, "row"]}
      transition="height 0.2s linear"
    >
      <Flex alignItems="center" flexDirection={["column", null, null, "row"]}>
        <Flex
          width="10rem"
          flexShrink="0"
          justifyContent="center"
          alignItems="center"
          mr={["0", null, null, "2rem"]}
        >
          <Image
            src={`./resources/groups/${props.data.logoname}.svg`}
            alt={props.data.name}
          />
        </Flex>
        <Box>
          <Box
            fontSize={["1.5rem", null, null, "2rem"]}
            m={["1rem 0", null, null, "0 0 2rem 0"]}
            textAlign={["center", null, null, "left"]}
          >
            {props.data.name}
          </Box>
          <Box>{props.data.description}</Box>
        </Box>
      </Flex>
      <Flex
        flexDirection={["row", null, null, "column"]}
        m={["1rem 0 0 0", null, null, "0 0 0 1rem"]}
        justifyContent="center"
      >
        {props.data.socialmedia &&
          props.data.socialmedia.map((s, i) => (
            <Box
              key={s.link}
              className="groupsocial"
              m={["0 1rem 0 0", null, null, "0 0 1rem 0"]}
              position="relative"
            >
              <Box
                display={["none", null, null, "block"]}
                position="absolute"
                top="50%"
                left="0"
                transform="translate(-100%, -50%) translateX(-10px)"
                color="white"
                backgroundColor="#000000cc"
                p="0.25rem 0.5rem"
                whiteSpace="nowrap"
                fontSize="0.75rem"
                visibility="hidden"
                opacity="0"
                transition="visibility 0.3s linear,opacity 0.3s linear"
                className="groupsocial__toolbox"
              >
                <Flex
                  as="a"
                  href={`${s.type === "email" ? "mailto:" : ""}${s.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.link}
                </Flex>
              </Box>
              <Flex
                display={["none", null, null, "block"]}
                as="a"
                href={`${s.type === "email" ? "mailto:" : ""}${s.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box width="2rem" flexShrink="0">
                  <Image
                    src={`./resources/social/${s.type}.svg`}
                    alt={s.link}
                  />
                </Box>
              </Flex>

              <Box
                display={["block", null, null, "none"]}
                width="2rem"
                flexShrink="0"
                cursor="pointer"
                onClick={e => socialClick(i)}
              >
                <Image src={`./resources/social/${s.type}.svg`} alt={s.link} />
              </Box>
            </Box>
          ))}
      </Flex>
      <Flex
        display={["block", null, null, "none"]}
        border="1px solid rgb(163,163,163)"
        p="0.25rem 0.5rem"
        transform={active > -1 ? "scaleY(1)" : "scaleY(0)"}
        minHeight={active > -1 ? "1.5rem" : "0"}
        transformOrigin="top"
        mt="0.5rem"
        mb={active > -1 ? "0" : "-1rem"}
        transition="transform 0.2s linear, min-height 0.2s linear, margin 0.2s linear"
      >
        {active > -1 && (
          <Flex
            as="a"
            href={`${
              props.data.socialmedia[active].type === "email" ? "mailto:" : ""
            }${props.data.socialmedia[active].link}`}
            target="_blank"
            rel="noopener noreferrer"
            justifyContent="center"
          >
            {props.data.socialmedia[active].link}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
