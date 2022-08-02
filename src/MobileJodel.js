import React from 'react';
import { Flex, Box, Spinner, Text, Heading, Button, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { useState } from 'react';
import JodelTable from './JodelTable';
import { ref, push, set, update, remove } from 'firebase/database';

export default function MobileJodel() {
	const [ input, setInput ] = useState('');
	const [ output, setOutput ] = useState('');
	const [ submitted, setSubmitted ] = useState(true);

	const db = useDatabase();
	const jodelRef = ref(db, 'jodels');

	const { status, data: jodels } = useDatabaseObjectData(jodelRef);

	const addJodel = () => {
		const newRef = push(jodelRef);
		set(newRef, { input: input, output: output, happyVotes: 0, sadVotes: 0 });
		setInput('');
		setOutput('');
		setSubmitted(true);
	};

	const removeJodel = (k) => {
		remove(ref(db, 'jodels/' + k));
	};

	const voteJodel = (k, voteTerm, val) => {
		console.log(k, voteTerm, val);
		update(ref(db, 'jodels/' + k), { [voteTerm]: val });
	};

	return (
		<Box>
			<Box
				p="2"
				borderRadius="md"
				my="2"
				mx={{ base: '5', md: '60' }}
				justifyContent="center"
				textAlign={'center'}
			>
				<Heading letterSpacing=".1em" fontWeight="200">
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
			{submitted &&
				(status === 'loading' ? (
					<Spinner />
				) : (
					<JodelTable jodels={jodels} removeJodel={removeJodel} voteJodel={voteJodel} />
				))}
		</Box>
	);
}
