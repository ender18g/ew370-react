import React from 'react';
import { Flex, Box, Input, Text, Button, List, ListItem } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function MobileJodel(props) {
	const { jodels, removeJodel } = props;
	const [ searchTerm, setsearchTerm ] = useState('');

	useEffect(
		() => {
			if (searchTerm === '') return;
		},
		[ searchTerm ]
	);
	return (
		<Flex justifyContent={'center'}>
			<Box bg="gray.50" p="3" borderRadius="md" my="4" mx={{ base: '5', md: '200' }}>
				<Box justifyContent="center">
					<Input
						m="2"
						maxW="200px"
						placeholder="Filter Jodels"
						onChange={(e) => {
							setsearchTerm(e.target.value);
						}}
					/>
					<List maxW={'500px'} spacing="3">
						{Object.keys(jodels).reverse().map((k, i) => {
							if (!jodels[k]['input']) return '';
							if (jodels[k]['input'].includes(searchTerm)) {
								return (
									<JodelLine
										key={k}
										jodel={jodels[k]}
										removeJodel={() => {
											removeJodel(k);
										}}
									/>
								);
							}
						})}
					</List>
				</Box>
			</Box>
		</Flex>
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
