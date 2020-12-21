import { Flex, Box, Spinner } from '@chakra-ui/react';
import Menu from './Menu';
import LessonPanel from './LessonPanel';
import 'firebase/database';
import { SuspenseWithPerf, useDatabase, useDatabaseObjectData } from 'reactfire';
import { useState } from 'react';

export const Home = () => {
	const database = useDatabase();
	const contentRef = database.ref('content');
	const contentResponse = useDatabaseObjectData(contentRef, {
		initialData: {
			0: {
				title: 'Loading...',
				resources: {
					0: { title: 'Loading...' }
				}
			}
		}
	});
	const { data: content } = contentResponse;
	const [ currLesson, setCurrLesson ] = useState(0);

	return (
		<SuspenseWithPerf fallback="loading....">
			<Box className="Home">
				<Flex justify="center" margin={4} flexWrap={[ 'wrap', 'nowrap' ]}>
					<Box marginBottom={5} minW="300px" height="100%" marginRight={[ '0', '4' ]}>
						<Menu content={content} currLesson={currLesson} setCurrLesson={setCurrLesson} />
					</Box>
					<Box minW="300px" w="100%" height="100%">
						<LessonPanel content={content} currLesson={currLesson} />
					</Box>
				</Flex>
			</Box>
		</SuspenseWithPerf>
	);
};

export default Home;
