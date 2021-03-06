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
  const [existingResource, setExistingResource] = useState(false);
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
		const newRef = contentRef.child(`${lesson}/resources`).push();
		newRef.set({ title, description, image, link });
		setCurrLesson(lesson);
		// toggleEdit();
    setExistingResource(false);
	};

	const removeResource = (lesson, resourceKey) => {
		if (!resourceKey) return false;
		contentRef.child(`${lesson}/resources/${resourceKey}`).remove();
	};

  const editResource = (lesson, resourceKey)=>{
    if (!resourceKey) return false;
    setExistingResource({lesson, resourceKey});
    console.log("edit",existingResource)

  }

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
              editResource={editResource}
							editOn={editOn}
							content={content}
							currLesson={currLesson}
						/>
						{editOn && <EditForm content={content} currLesson={currLesson} saveResource={saveResource} existingResource={existingResource}/>}
					</Box>
				</Flex>
			</Box>
		</SuspenseWithPerf>
	);
};

export default Home;
