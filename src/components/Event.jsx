import { Box, Flex, Heading } from '@chakra-ui/core';
import React from 'react';

import events from '../data/events';

export default function Event() {
  return (
    <>
      <Box>
        {events.map((value, index) => (
          <Flex
            flexDirection="column"
            padding="20px"
            marginBottom={events.length - 1 < index ? "20px" : ""}
            alignItems="center"
            backgroundColor={index % 2 === 0 ? "#fff" : "simonyi"}
          >
            <div style={{ maxWidth: "850px", width: "100%" }}>
              <Heading
                color={index % 2 === 0 ? "simonyi" : "#fff"}
                marginBottom="20px"
                marginTop="20px"
                display="block"
              >
                {value.name}
              </Heading>
              {value.altTitle && (
                <h2
                  style={{
                    fontWeight: 500,
                    fontSize: "22px",
                    marginBottom: "15px"
                  }}
                >
                  {value.altTitle}
                </h2>
              )}
              <div>
                {value.description.map(x => (
                  <>
                    {x.title && (
                      <h3
                        style={{
                          fontWeight: 500,
                          fontSize: "18px",
                          marginBottom: "15px",
                          marginTop: "20px"
                        }}
                      >
                        {x.title}
                      </h3>
                    )}
                    {x.text.map(text => (
                      <p>{text}</p>
                    ))}
                  </>
                ))}
              </div>

              {value.socialmedia.link && (
                <a
                  style={{
                    marginTop: "20px",
                    display: "block",
                    cursor: "pointer",
                    textDecoration: "underline"
                  }}
                  href={value.socialmedia.link}
                >
                  Tovább az eseményre
                </a>
              )}
            </div>
          </Flex>
        ))}
      </Box>
    </>
  );
}
