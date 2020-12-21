import React from 'react';
import { Box, Text, Divider, Spinner } from '@chakra-ui/react';
import './Menu.css';

export default function Menu(props) {
	const { content, currLesson, setCurrLesson } = props;
	return (
		<Box borderRadius="md" border="1px" borderColor="gray.200" boxShadow="md">
			{Object.keys(content).map((key, index) => (
				<Box>
					<Box
						onClick={() => {
							setCurrLesson(key);
						}}
						key={key}
						paddingY={3}
						borderRadius="md"
						className={key === currLesson ? '' : 'menu-item'}
						bg={key === currLesson ? 'teal.300' : ''}
					>
						<Text fontWeight="400">{content[key].title}</Text>
					</Box>
					<Divider />
				</Box>
			))}
		</Box>
	);
}
