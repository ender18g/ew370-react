import React, { useState } from 'react';
import { Heading, Flex, Image, Input, Button, Box, Select, Text } from '@chakra-ui/react';
import Card from './Card';

const EditForm = (props) => {
	const { content, saveResource, currLesson } = props;
	const [ newResource, setNewResource ] = useState({
		title: 'This is the title of your new resource',
		description:
			'Here is a description. Make sure you lead the link with http:// and use a full link to an image. Unsplash.com is a great place to get free pictures. Just right click on an image your like and select "copy image address"',
		link: 'https://unsplash.com/photos/VBNb52J8Trk',
		image:
			'https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		lesson: currLesson
	});
	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setNewResource({
			...newResource,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Flex justify="center" p={4}>
			<Box justify="center" boxShadow="md" w="90%" flexWrap="wrap" padding={2} bg="gray.50" p={5}>
				<Heading w="100%" size="lg">
					Add a new resource
				</Heading>
				<form onSubmit={handleSubmit}>
					<Text fontWeight="500" m={1} textAlign="left">
						Lesson:
					</Text>
					<Select
						value={newResource.lesson}
						name="lesson"
						onChange={handleChange}
						placeholder="Select Lesson"
						mb={3}
					>
						{Object.keys(content).map((key, index) => (
							<option key={key} value={key}>
								{content[key].title}
							</option>
						))}
					</Select>

					<Text fontWeight="500" m={1} textAlign="left">
						Title:
					</Text>
					<Input name="title" placeholder="Title" value={newResource.title} onChange={handleChange} mb={3} />
					<Text fontWeight="500" m={1} textAlign="left">
						Description:
					</Text>
					<Input
						name="description"
						placeholder="Description"
						value={newResource.description}
						onChange={handleChange}
						mb={3}
					/>
					<Text fontWeight="500" m={1} textAlign="left">
						Link URL:
					</Text>
					<Input
						name="link"
						placeholder="Link https://link.com"
						value={newResource.link}
						onChange={handleChange}
						mb={3}
					/>
					<Text fontWeight="500" m={1} textAlign="left">
						Image URL:
					</Text>
					<Input
						name="image"
						placeholder="Image URL https://link.com/picture.png"
						value={newResource.image}
						onChange={handleChange}
						mb={3}
					/>
					<Flex justify="center">
						<Card
							title={newResource.title}
							description={newResource.description}
							imageURL={newResource.image}
							url={newResource.link}
						/>
					</Flex>

					<Button
						colorScheme="teal"
						onClick={() => {
							console.log(newResource);
							saveResource(newResource);
						}}
					>
						Save Resource
					</Button>
				</form>
			</Box>
		</Flex>
	);
};

export default EditForm;
