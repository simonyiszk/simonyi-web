import { Box, IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#333333"
      p={["1rem", null, "1rem "]}
    >
      <Link
        style={{
          maxWidth: "200px",
          display: "inline-block",
          marginRight: "auto"
        }}
        to="/"
      >
        <Image src="./resources/simonyi_white.svg" alt="Simonyi" />
      </Link>
      <div className="display-header">
        <Link style={{ color: "#fff" }} to="/events">
          Események
        </Link>
      </div>
      <Menu>
        <MenuButton className="collapse-header">
          <IconButton icon="triangle-down"></IconButton>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to="/events">Események</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
