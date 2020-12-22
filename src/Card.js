import React from 'react';
import { Box, Image, Badge, Link, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import './Card.css';

export default function Card(props) {
	const { title, url, description, imageURL, editOn, removeResource } = props;
	const bgString = `url(${url})`;
	return (
		<Box marginY={3} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="card" bg="white">
			<Link href={url} isExternal className="card-link">
				<Image src={imageURL} alt="image" />
				<Box p="6">
					<Box d="flex" alignItems="baseline" />
					<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
						{title}
					</Box>

					<Box>{description}</Box>
				</Box>
			</Link>
			<IconButton
				my={3}
				size="sm"
				aria-label="Search database"
				colorScheme="red"
				icon={<DeleteIcon />}
				onClick={removeResource}
			/>
		</Box>
	);
}
