import React from 'react';
import { Box, Image, Link, IconButton, Text, Heading, Flex, VStack } from '@chakra-ui/react';
import { DeleteIcon, CopyIcon } from '@chakra-ui/icons';
import './Card.css';

export default function Card(props) {
	const { title, url, description, imageURL, editOn, removeResource, editResource } = props;
	const bgString = `url(${url})`;
	return (
		<Box maxW={'sm'} my="3" borderWidth="1px" borderRadius="lg" overflow="hidden" className="card">
			<Link href={url} isExternal className="card-link">
				<Image src={imageURL} alt="image" />
				<Box p="4">
					<VStack textAlign={'center'}>
						<Heading fontSize={'md'}>{title}</Heading>

						<Text fontSize={'md'}>{description}</Text>
					</VStack>
				</Box>
			</Link>
			{editOn && (
				<Flex justify={'center'}>
					<IconButton
						my={3}
						mx={2}
						size="sm"
						aria-label="Search database"
						colorScheme="red"
						icon={<DeleteIcon />}
						onClick={removeResource}
					/>
					<IconButton
						my={3}
						mx={2}
						size="sm"
						aria-label="Search database"
						colorScheme="blue"
						icon={<CopyIcon />}
						onClick={editResource}
					/>
				</Flex>
			)}
		</Box>
	);
}
