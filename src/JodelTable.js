import React from 'react';
import {
	Flex,
	Box,
	Input,
	Text,
	Button,
	List,
	ListItem,
	VStack,
	NumberInput,
	NumberInputField,
	NumberIncrementStepper,
	NumberDecrementStepper,
	NumberInputStepper,
	FormControl,
	FormLabel,
	Heading
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function MobileJodel(props) {
	const { jodels, removeJodel, voteJodel } = props;
	const [ searchTerm, setsearchTerm ] = useState('');
	const [ numDisplayed, setNumDisplayed ] = useState(50);
	const format = (val) => val;
	const parse = (val) => val.replace(/^\$/, '');

	return (
		<Flex justifyContent={'center'}>
			<VStack p="3" my="2">
				<Heading mb="3" size="md">
					Total Jodels: {Object.keys(jodels).length}
				</Heading>
				<Flex align={'flex-end'}>
					<FormControl>
						<FormLabel>Filter by keyword</FormLabel>
						<Input
							maxW="400px"
							placeholder="Filter by keyword"
							onChange={(e) => {
								setsearchTerm(e.target.value);
							}}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Number Displayed</FormLabel>
						<NumberInput
							onChange={(valString) => setNumDisplayed(parse(valString))}
							value={format(numDisplayed)}
							defaultValue={50}
							max={1000}
							min={10}
							step={10}
						>
							<NumberInputField />
							<NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper>
						</NumberInput>
					</FormControl>
				</Flex>
				<List maxW={'500px'} spacing="2">
					{Object.keys(jodels)
						.reverse()
						.filter(
							(k) =>
								jodels[k].hasOwnProperty('input') &&
								jodels[k]['input'].toLowerCase().includes(searchTerm.toLowerCase())
						)
						.slice(0, numDisplayed)
						.map((k, i) => {
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
												cursor="pointer"
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
												cursor="pointer"
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
						})}
				</List>
			</VStack>
		</Flex>
	);
}

const JodelLine = (props) => {
	const { jodel, removeJodel } = props;

	const [ show, setShow ] = useState(false);

	return (
		<ListItem
			p="4"
			bg={jodel['output'] === 'happy' ? 'teal.300' : 'red.300'}
			borderRadius="md"
			boxShadow="lg"
			onClick={() => {
				setShow(!show);
			}}
		>
			<Flex minW="400px" minH={'50px'} justifyContent="center" alignItems="center">
				<Text fontSize="lg">{jodel['input']}</Text>
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
