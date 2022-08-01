import React from 'react';
import { Flex, Box, Spinner, Text, Heading, Button, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function MobileJodel(props) {
	const { jodels, removeJodel } = props;
	console.log(jodels);
	return (
		<Box>
			<Box bg="gray.50" p="3" borderRadius="md" my="4" mx={{ base: '5', md: '200' }}>
				<Box justifyContent="center">
					<Heading mb="3" size="sm" letterSpacing=".1em" fontWeight="400" color="teal">
						Recent Jodels
					</Heading>
					<List spacing="3">
						{Object.keys(jodels).reverse().map((k, i) => {
							if (!jodels[k]['input']) return '';
							return (
								<JodelLine
									key={k}
									jodel={jodels[k]}
									removeJodel={() => {
										removeJodel(k);
									}}
								/>
							);
						})}
					</List>
				</Box>
			</Box>
		</Box>
	);
}

const JodelLine = (props) => {
	const { jodel, removeJodel } = props;

	const [ show, setShow ] = useState(false);

	return (
		<ListItem
			p="2"
			bg={jodel['output'] === 'happy' ? 'teal.200' : 'red.200'}
			borderRadius="md"
			textColor="gray.700"
			fontWeight="300"
			boxShadow="lg"
			onClick={() => {
				setShow(!show);
			}}
		>
			<Flex justifyContent="center" alignItems="center">
				<Text>{jodel['input']}</Text>
			</Flex>
			{show && (
				<Flex justifyContent="center">
					<Button onClick={removeJodel} p="3" my="1" colorScheme="gray" shadow="lg">
						<DeleteIcon mr="2" justifySelf="flex-end" color="red.500" textShadow="lg" />Delete
					</Button>
				</Flex>
			)}
		</ListItem>
	);
};
