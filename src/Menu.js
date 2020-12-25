import React from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';
import './Menu.css';

export default function Menu(props) {
	const { content, currLesson, setCurrLesson } = props;
	return (
		<Box borderRadius="md" border="1px" borderColor="gray.200" boxShadow="md">
			{Object.keys(content).map((key, index) => {
				if (isNaN(key)) return <Box key={index} />;
				return (
					<Box key={index}>
						<Box
							onClick={() => {
								window.localStorage.setItem('currLesson', key);
								setCurrLesson(key);
							}}
							key={key}
							paddingY={3}
							className={key === currLesson ? '' : 'menu-item'}
							bg={key === currLesson ? 'teal.300' : ''}
						>
							<Text fontWeight={key === currLesson ? '600' : '400'}>{content[key].title}</Text>
						</Box>
						<Divider />
					</Box>
				);
			})}
		</Box>
	);
}
