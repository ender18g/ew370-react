import React from 'react';
import {
	Flex,
	Box,
	Spinner,
	Text,
	Heading,
	Button,
	Input,
	Radio,
	RadioGroup,
	Stack,
	List,
	ListItem
} from '@chakra-ui/react';

export default function MobileJodel(props) {
	const { jodels } = props;
	console.log(jodels);
	return (
		<Box justifyContent="center">
			<Box bg="gray.50" p="2" borderRadius="md" my="4" mx={{ base: '5', md: '50' }}>
				<Flex justifyContent="center">
					<Heading mb="3" size="sm" letterSpacing=".1em" fontWeight="400" color="teal">
						Recent Jodels
					</Heading>
				</Flex>
				<List spacing="3">
					{Object.keys(jodels).reverse().map((k, i) => {
						if (!jodels[k]['input']) return '';
						return (
							<ListItem
								p="2"
								bg={jodels[k]['output'] === 'happy' ? 'teal.200' : 'red.300'}
								borderRadius="md"
								key={k}
								textColor="gray.700"
								fontWeight="500"
								boxShadow="lg"
							>
								{jodels[k]['input']}
							</ListItem>
						);
					})}
				</List>
			</Box>
		</Box>
	);
}
