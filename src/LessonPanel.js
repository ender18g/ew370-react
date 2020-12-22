import React from 'react';
import { Flex } from '@chakra-ui/react';
import Jumbotron from './Jumbotron';
import Card from './Card';

export default function LessonPanel(props) {
	const { content, currLesson, removeResource, editOn } = props;
	const lessonContent = content[currLesson];
	const lessonResources = lessonContent.resources;
	return (
		<Flex justify="center" flexWrap="wrap" height="100%">
			<Jumbotron title={lessonContent.title} url={lessonContent.image} />
			<Flex flexWrap="wrap" w="100%" align="flex-start" justify="space-around">
				{Object.keys(lessonResources).map((key, index) => (
					<Card
						title={lessonResources[key].title}
						description={lessonResources[key].description}
						imageURL={lessonResources[key].image}
						url={lessonResources[key].link}
						key={index}
						removeResource={() => {
							removeResource(currLesson, key);
						}}
						editOn={editOn}
					/>
				))}
			</Flex>
		</Flex>
	);
}
