import React from 'react';
import { Flex, Box, Input, Text, Button, List, ListItem } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function MobileJodel(props) {
	const { jodels, removeJodel, voteJodel } = props;
	const [ searchTerm, setsearchTerm ] = useState('');

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
						{Object.keys(jodels)
							.reverse()
							.filter(
								(k) =>
									jodels[k].hasOwnProperty('input') &&
									jodels[k]['input'].toLowerCase().includes(searchTerm.toLowerCase())
							)
							.map((k, i) => {
								if (i < 35) {
									return (
										<Flex key={k} justify={'center'} align="center">
											<JodelLine
												jodel={jodels[k]}
												removeJodel={() => {
													removeJodel(k);
												}}
												voteJodel={voteJodel}
											/>
											<Box>
												<Flex>
													<Text
														onClick={() => {
															console.log('happy vote');
															if ('happyVotes' in jodels[k]) {
																voteJodel(k, 'happyVotes', jodels[k]['happyVotes'] + 1);
															} else {
																voteJodel(k, 'happyVotes', 1);
															}
														}}
														mx="3"
														fontSize={'xl'}
													>
														😀
													</Text>
													<Text
														onClick={() => {
															console.log('sad vote');
															if ('sadVotes' in jodels[k]) {
																voteJodel(k, 'sadVotes', jodels[k]['sadVotes'] + 1);
															} else {
																voteJodel(k, 'sadVotes', 1);
															}
														}}
														mx="3"
														fontSize={'xl'}
													>
														😔
													</Text>
												</Flex>
												<Flex justify="space-around">
													<Text fontSize={'xs'} fontWeight="600">
														{jodels[k]['happyVotes']}
													</Text>
													<Text fontSize={'xs'} fontWeight="600">
														{jodels[k]['sadVotes']}
													</Text>
												</Flex>
											</Box>
										</Flex>
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
			width="400px"
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
				<Flex align={'center'} justifyContent="space-around">
					<Button onClick={removeJodel} p="3" my="1" colorScheme="gray" shadow="lg" size="xs">
						<DeleteIcon mr="2" justifySelf="flex-end" color="red.500" textShadow="lg" />Delete
					</Button>
				</Flex>
			)}
		</ListItem>
	);
};
