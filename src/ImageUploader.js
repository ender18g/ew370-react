import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import * as React from 'react';
import { useState } from 'react';
import { useStorage } from 'reactfire';
import { Box, Text, Input } from '@chakra-ui/react';

const ImageUploader = (props) => {
	const { setImageURL } = props;
	const [ imageRef, setImageRef ] = useState();
	const storage = useStorage();

	const handleChange = (e) => {
		const file = e.target.files[0];
		const newRef = ref(storage, 'images/' + file.name);
		setImageRef(newRef);
		const uploadTask = uploadBytesResumable(newRef, file);

		uploadTask.then(() => {
			console.log('upload complete');
			getDownloadURL(newRef).then((url) => {
				console.log(url);
				props.setImageURL(url);
			});
		});
	};

	return (
		<Box>
			<Input type="file" accept="image/png, image/jpeg, image/gif" onChange={handleChange} />
		</Box>
	);
};

export default ImageUploader;
