import { Flex, Box, Spinner } from '@chakra-ui/react';
import Menu from './Menu';
import LessonPanel from './LessonPanel';
import 'firebase/database';
import { SuspenseWithPerf, useDatabase, useDatabaseObjectData } from 'reactfire';
import { useState, useEffect } from 'react';
import EditForm from './EditForm';

export const Home = (props) => {
	const { editOn, toggleEdit } = props;
	const database = useDatabase();
	const contentRef = database.ref('content');
	const contentResponse = useDatabaseObjectData(contentRef);
	const { data: content } = contentResponse;
	const [ currLesson, setCurrLesson ] = useState(0);
	useEffect(() => {
		const storedLesson = window.localStorage.getItem('currLesson');
		console.log(storedLesson);
		if (storedLesson) setCurrLesson(storedLesson);
	}, []);

	const saveResource = ({ lesson, title, description, link, image }) => {
		const newRef = contentRef.child(`${lesson}/resources`).push();
		newRef.set({ title, description, image, link });
		setCurrLesson(lesson);
		toggleEdit();
	};

	const removeResource = (lesson, resourceKey) => {
		if (!resourceKey) return false;
		contentRef.child(`${lesson}/resources/${resourceKey}`).remove();
	};

	if (!content)
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
							editOn={editOn}
							content={content}
							currLesson={currLesson}
						/>
						{editOn && <EditForm content={content} currLesson={currLesson} saveResource={saveResource} />}
					</Box>
				</Flex>
			</Box>
		</SuspenseWithPerf>
	);
};

export default Home;
