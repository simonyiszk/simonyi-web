import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

export default function About() {
	return (
		<Box p={["0 1rem", null, "0 0 0 10rem"]}>
			<Flex position="relative" flexDirection={["column", null, "row"]}>
				<Box>
					<Heading
						color="simonyi"
						textAlign="center"
						mt={["1rem", null, "2rem"]}
						mb="1rem"
						transform={[null, null, "translateX(calc((40%-10rem) / 2))"]}
					>
						Rólunk
					</Heading>
					<Box
						lineHeight={["1.5rem", null, "2rem"]}
						textAlign="justify"
						mb={["0", null, "1rem"]}
					>
						A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet,
						amely a BME Villamosmérnöki és Informatikai Karán működik. A
						szakkollégium 2003-ban vette fel Simonyi Károly, a Kar rajongva
						tisztelt professzora nevét. A Simonyi Károly Szakkollégium célja,
						hogy elsősorban a szakkollégium tagjai, lehetőség szerint a
						Villamosmérnöki és Informatikai Kar minden hallgatója számára
						lehetőséget biztosítson az egyetemi képzést kiegészítő ismeretek
						elsajátítására. Ennek érdekében tanfolyamokat, bemutatókat,
						konferenciákat és más szakmai rendezvényeket szervez, lehetőségéhez
						mérten infrastruktúrával támogatja a hallgatók önálló szakmai
						munkáit. Ezenkívül a szakkollégium céljai közé tartozik, hogy a
						tagjai által elért eredményeket minél szélesebb körben publikálja, a
						magyar felsőoktatás más egységeivel és a szakemberekkel
						megismertesse a szakkollégiumban folyó munkát.
					</Box>
				</Box>
				<Box
					flexBasis="40%"
					flexShrink="0"
					background="url('/resources/20180630_121616_spot.jpg') no-repeat center center"
					bgSize="cover"
					minHeight="200px"
					m={["1rem -1rem 0 -1rem", null, "0 0 0 1rem"]}
					className="aboutimage"
				></Box>
			</Flex>
		</Box>
	);
}
