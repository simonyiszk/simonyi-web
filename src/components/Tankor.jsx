import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import data from "../data/groups";
import tankorlinks from "../data/tankorlinks";

function TankorButton(props) {
	return (
		<Flex>
			{props.data ? (
				<Flex m="1rem">
					<a
						href={tankorlinks[props.data.logoname].link}
						target="_blank"
						rel="noreferrer noopener"
					>
						<Flex
							flexShrink="0"
							justifyContent="center"
							alignItems="center"
							p="1rem"
							boxShadow="#d2d2d2 1px 1px 2px 2px"
							borderRadius="10px"
							minHeight="20rem"
							flexDir="column"
						>
							<Flex mb="1rem" flexGrow="1" alignItems="center">
								<Flex
									width="10rem"
									flexShrink="0"
									justifyContent="center"
									alignItems="center"
								>
									<Image
										src={`./resources/groups/${props.data.logoname}.svg`}
										alt={props.data.name}
									/>
								</Flex>
							</Flex>
							<Box
								paddingTop="10px"
								borderTop="solid 1px #d2d2d2"
								width="10rem"
								fontWeight="bold"
								color="#6d6d6d"
							>
								{tankorlinks[props.data.logoname].tags.map(
									(tagName) => " #" + tagName
								)}
							</Box>
						</Flex>
					</a>
				</Flex>
			) : (
				<a
					href={tankorlinks["megnyito"].link}
					target="_blank"
					rel="noreferrer noopener"
				>
					<Flex
						width="10rem"
						height="5rem"
						backgroundColor="simonyi"
						justifyContent="center"
						alignItems="center"
						fontFamily="Montserrat"
						fontSize="1.5rem"
						fontWeight="bold"
						boxShadow="#d2d2d2 0px 0px 1px 1px"
						borderRadius="10px"
					>
						Megnyitó
					</Flex>
				</a>
			)}
		</Flex>
	);
}

function Tankor() {
	return (
		<Flex alignItems="center" flexDir="column" mt="1rem">
			<Box>
				<TankorButton />
			</Box>
			<Flex flexWrap="wrap" justifyContent="center">
				<TankorButton
					data={{ name: "Kollégiumi Számítástechnikai Kör", logoname: "kszk" }}
				/>
				{data.map((d) => (
					<TankorButton key={d.name} data={d} />
				))}
			</Flex>
		</Flex>
	);
}

export default Tankor;
