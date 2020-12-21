import React from 'react';
import { Heading, Flex } from '@chakra-ui/react';

export default function Jumbotron(props) {
	const { title, url } = props;
	const bgString = `url(${url})`;
	return (
		<Flex
			w="100%"
			minH="175px"
			borderRadius="md"
			boxShadow="md"
			bgImage={bgString}
			align="center"
			justify="center"
			bgPosition="center"
			bgRepeat="no-repeat"
			bgSize="cover"
		>
			<Heading size="xl" color="white" letterSpacing=".1em" fontWeight="400" textShadow="1px 1px 3px black" p={4}>
				{title}
			</Heading>
		</Flex>
	);
}
