import React from "react";
import { Box, Flex, Image, Link, Heading } from "@chakra-ui/react";
import { ArrowDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function Hero() {
	return (
		<Flex
			height="100vh"
			backgroundImage="url('/resources/bg.jpg')"
			backgroundRepeat="no-repeat"
			backgroundPosition="center center"
			backgroundAttachment={["initial", null, "fixed"]}
			bgSize="cover"
			overflow="hidden"
			justify="center"
			alignItems="center"
			position="relative"
		>
			<Flex
				position="absolute"
				top="0"
				width="100%"
				justifyContent="space-between"
				p="1rem 2rem"
				flexDirection={["column", "row"]}
			>
				<Image
					height={["3rem", null, "4rem"]}
					mb={["1rem", "0"]}
					order={["0", "1"]}
					src={`./resources/footer/bme.svg`}
					alt="BME"
				/>
				<Image
					height={["4rem", null, "5rem"]}
					mb={["1rem", "0"]}
					src={`./resources/footer/vik.svg`}
					alt="BME-VIK"
				/>
			</Flex>
			<Box width={["80%", null, "60%"]}>
				<Box
					textAlign="center"
					color="white"
					textDecor="none"
					fontSize={["1rem", "1.25rem", "2.5rem"]}
				>
					Weboldalunk 2023 telének végére megújul! Több tartalom, jobb eligazodás, új funkciók, és még sok más várható.
				</Box>
				<Box>
					<Image
						src="./resources/simonyi_white.svg"
						alt="Simonyi Károly Szakkollégium logó"
					/>
				</Box>
				<Box
					textAlign="center"
					color="white"
					textDecor="none"
					fontSize={["1rem", "1.5rem", "3rem"]}
				>
					<Link href="mailto:info@simonyi.bme.hu">info@simonyi.bme.hu</Link>
				</Box>
			</Box>
			<Box textAlign="center" position="absolute" bottom="0">
				<ArrowDownIcon
					w={["1.75rem", "2rem", "2.25rem"]}
					h={["1.75rem", "2rem", "2.25rem"]}
					color="white"
					mb=".5rem"
				/>
			</Box>
		</Flex>
	);
}
