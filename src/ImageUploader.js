import 'firebase/storage';
import * as React from 'react';
import { useState } from 'react';
import { useStorage, useStorageDownloadURL, useStorageTask } from 'reactfire';
import { Box, Text, Input } from '@chakra-ui/react';
import { networkInterfaces } from 'os';

const ImageUploader = (props) => {
	const { setImageURL } = props;
	const [ ref, setRef ] = useState();
	const [ uploadTask, setUploadTask ] = useState();
	const storage = useStorage();

	const handleChange = (e) => {
		const file = e.target.files[0];
		const newRef = storage.ref('images').child(file.name);
		setRef(newRef);
		const uploadTask = newRef.put(file);
		setUploadTask(newRef.put(file));

		uploadTask.then(() => {
			console.log('upload complete');
			newRef.getDownloadURL().then((url) => {
				console.log(url);
				props.setImageURL(url);
			});
			setUploadTask();
		});
	};

	return (
		<Box>
			<Input type="file" accept="image/png, image/jpeg, image/gif" onChange={handleChange} />
		</Box>
	);
};

export default ImageUploader;
