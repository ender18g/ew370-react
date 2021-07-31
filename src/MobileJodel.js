import React from 'react';
import { Flex, Box, Spinner, Text, Heading, Button, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useDatabase, useDatabaseListData, useDatabaseObjectData, useUser } from 'reactfire';
import { useState, useEffect } from 'react';
import JodelTable from './JodelTable';

export default function MobileJodel() {
	const [ input, setInput ] = useState('');
	const [ output, setOutput ] = useState('');
	const [ submitted, setSubmitted ] = useState(true);

	const jodelRef = useDatabase().ref('jodels');
	const { status, data: jodels } = useDatabaseObjectData(jodelRef);

	const addJodel = () => {
		const newRef = jodelRef.push();
		newRef.set({ input: input, output: output });
		setInput('');
		setOutput('');
		setSubmitted(true);
	};

	// useEffect(
	// 	() => {
	// 		console.log(input, output);
	// 		console.log(jodels);
	// 	},
	// 	[ input, output ]
	// );

	return (
		<Box>
			<Box bg="gray.50" p="2" borderRadius="md" my="2" mx={{ base: '5', md: '60' }} justifyContent="center">
				<Heading letterSpacing=".1em" fontWeight="200" color="teal">
					EW370 Jodel
				</Heading>
				<Input
					my="5"
					name="input"
					onChange={(evt) => setInput(evt.target.value)}
					placeholder="Jodel Text"
					value={input}
				/>
				<Flex justifyContent="center">
					<RadioGroup my="3" onChange={setOutput} name="output" value={output}>
						<Stack spacing="3" direction="column">
							<Radio size="lg" colorScheme="green" value="happy">
								Happy
							</Radio>
							<Radio size="lg" colorScheme="red" value="sad">
								Sad
							</Radio>
						</Stack>
					</RadioGroup>
				</Flex>

				<Button
					onClick={addJodel}
					size="md"
					isDisabled={!output || !(input.length > 10)}
					my="3"
					colorScheme={output === 'sad' ? 'red' : 'teal'}
				>
					<Text fontWeight="400" fontSize="20px">
						{output === 'sad' ? '😥' : '😀'} Submit Jodel
					</Text>
				</Button>
			</Box>
			{submitted && (status === 'loading' ? <Spinner /> : <JodelTable jodels={jodels} />)}
		</Box>
	);
}
