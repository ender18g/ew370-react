import { Flex, Box, Spinner } from '@chakra-ui/react';
import Menu from './Menu';
import LessonPanel from './LessonPanel';
import { ref, set, push, remove } from 'firebase/database';
import { SuspenseWithPerf, useDatabase, useDatabaseObjectData } from 'reactfire';
import { useState, useEffect } from 'react';
import EditForm from './EditForm';

export const Home = (props) => {
	const { editOn, toggleEdit } = props;
	const db = useDatabase();
	const contentRef = ref(db, 'content');
	const contentResponse = useDatabaseObjectData(contentRef);
	const { status, data: content } = contentResponse;
	const [ existingResource, setExistingResource ] = useState(false);
	const [ currLesson, setCurrLesson ] = useState(0);
	useEffect(
		() => {
			if (content) {
				const storedLesson = window.localStorage.getItem('currLesson');
				console.log(storedLesson);
				console.log(content);
				if (content.hasOwnProperty(storedLesson)) setCurrLesson(storedLesson);
			}
		},
		[ content ]
	);

	const saveResource = ({ lesson, title, description, link, image }) => {
		console.log('SAVING NEW RESOURCE', image);
		const newRef = push(ref(db, `content/${lesson}/resources/`));
		set(newRef, { title, description, image, link });
		setCurrLesson(lesson);
		setExistingResource(false);
	};

	const removeResource = (lesson, resourceKey) => {
		if (!resourceKey) return false;
		remove(ref(db, `content/${lesson}/resources/${resourceKey}`));
	};

	const editResource = (lesson, resourceKey) => {
		if (!resourceKey) return false;
		setExistingResource({ lesson, resourceKey });
		console.log('edit', existingResource);
	};

	if (status === 'loading')
		return (
			<Flex height="100%" justify="center" align="center">
				<Spinner />
			</Flex>
		);
	return (
		<SuspenseWithPerf fallback="loading....">
			<Box className="Home">
				<Flex justify="center" margin={4} flexWrap={[ 'wrap', 'nowrap' ]}>
					<Box marginBottom={5} minW="300px" height="100%" marginRight={[ '0', '4' ]}>
						<Menu content={content} currLesson={currLesson} setCurrLesson={setCurrLesson} />
					</Box>
					<Box minW="300px" w="100%" height="100%">
						<LessonPanel
							removeResource={removeResource}
							editResource={editResource}
							editOn={editOn}
							content={content}
							currLesson={currLesson}
						/>
						{editOn && (
							<EditForm
								content={content}
								currLesson={currLesson}
								saveResource={saveResource}
								existingResource={existingResource}
							/>
						)}
					</Box>
				</Flex>
			</Box>
		</SuspenseWithPerf>
	);
};

export default Home;
