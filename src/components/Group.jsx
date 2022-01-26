import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import "./main.css";

export default function Group(props) {
	return (
		<Flex
			border="1px solid rgb(163, 163, 163)"
			margin="1rem 0"
			padding="1rem"
			flexDirection={["column", null, null, "row"]}
			transition="height 0.2s linear"
		>
			<Flex
				alignItems="center"
				flexDirection={["column", null, null, "row"]}
				w="100%"
			>
				<Flex
					width="10rem"
					flexShrink="0"
					justifyContent="center"
					alignItems="center"
					mr={["0", null, null, "2rem"]}
				>
					<Image
						src={`./resources/groups/${props.data.logoname}.svg`}
						alt={props.data.name + " logó"}
					/>
				</Flex>
				<Box>
					<Box
						fontSize={["1.5rem", null, null, "2rem"]}
						m={["1rem 0", null, null, "0 0 1rem 0"]}
						textAlign={["center", null, null, "left"]}
					>
						{props.data.name}
					</Box>
					<Box>{props.data.description}</Box>
				</Box>
			</Flex>
			<Flex
				flexDirection="column"
				justifyContent="space-evenly"
				ml={["0", null, null, "1rem"]}
			>
				{props.data.socialmedia &&
					props.data.socialmedia.map((s, i) => (
						<Box
							key={s.link}
							className="groupsocial"
							m={["1rem 0 0 0", null, null, "0.25rem 0 0.25rem 0"]}
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
							<Flex alignItems="center">
								<Flex
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
								<Flex
									as="a"
									href={`${s.type === "email" ? "mailto:" : ""}${s.link}`}
									target="_blank"
									rel="noopener noreferrer"
									display={["block", null, null, "none"]}
									ml="0.5rem"
									fontSize={["0.75rem", "1rem"]}
								>
									{s.display || s.link}
								</Flex>
							</Flex>
						</Box>
					))}
			</Flex>
		</Flex>
	);
}
