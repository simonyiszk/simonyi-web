import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Services() {
	return (
		<Flex
			p={["1rem 1rem", null, "1rem 10rem"]}
			backgroundColor="simonyi"
			flexDirection="column"
			alignItems="center"
		>
			<Heading color="white">Szolgáltatások</Heading>
			<Flex w={["100%", null, "60%"]} flexDirection="column">
				<Box
					as="a"
					href="https://termek.sch.bme.hu/teremfoglalo.html"
					target="_blank"
					rel="noopener noreferrer"
					margin={["1rem 0", null, "2rem 0"]}
				>
					<Flex
						height={["10rem", null, "14rem"]}
						background="url(/resources/room.jpg) no-repeat center center"
						backgroundSize="cover"
						alignItems="flex-end"
					>
						<Box
							backgroundColor="rgba(0, 0, 0, 0.8)"
							color="white"
							padding="0.5rem"
							width="100%"
							fontSize="1.5rem"
						>
							Teremigénylés
						</Box>
					</Flex>
				</Box>
				<Box
					as="a"
					href="https://termek.sch.bme.hu/eszkozfoglalo.html"
					target="_blank"
					rel="noopener noreferrer"
					margin={["1rem 0", null, "2rem 0"]}
				>
					<Flex
						height={["10rem", null, "14rem"]}
						background="url(/resources/proj.jpg) no-repeat center center"
						backgroundSize="cover"
						alignItems="flex-end"
					>
						<Box
							backgroundColor="rgba(0, 0, 0, 0.8)"
							color="white"
							padding="0.5rem"
							width="100%"
							fontSize="1.5rem"
						>
							Eszközigénylés
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
}
