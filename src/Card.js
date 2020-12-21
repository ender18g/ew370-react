import React from 'react';
import { Box, Image, Badge, Link } from '@chakra-ui/react';
import './Card.css';

export default function Card(props) {
	const { title, url, description, imageURL } = props;
	const bgString = `url(${url})`;
	return (
		<Link
			href={url}
			isExternal
			marginY={3}
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			className="card"
		>
			<Image src={imageURL} alt="image" />
			<Box p="6">
				<Box d="flex" alignItems="baseline" />

				<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
					{title}
				</Box>

				<Box>{description}</Box>
			</Box>
		</Link>
	);
}
