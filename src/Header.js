import React, { useState, useEffect } from 'react';
import { Heading, Flex, Image, Link, Box, IconButton } from '@chakra-ui/react';
import './Header.css';
import logo from './WRCLogo.png';
import { EditIcon } from '@chakra-ui/icons';

const Header = (props) => {
	const { toggleEdit } = props;
	const [ mode, setMode ] = useState('');
	useEffect(() => {
		setMode(window.location.href.split('?').pop().split('mode=').pop());
	}, []);
	return (
		<Flex boxShadow="md" justify="space-between" align="center" bg="blue.700" paddingX={4} paddingY={2}>
			<Flex justify="left" align="center">
				<Image className="nav-logo" height="50px" src={logo} />
				<Link
					href="https://www.usna.edu/Blackboard/simple.php"
					color="white"
					ml={5}
					className="header-link"
					isExternal
				>
					Blackboard
				</Link>
			</Flex>
			<Flex align="center">
				{mode === 'edit' && (
					<IconButton
						className="header-editIcon"
						marginRight={5}
						color="white"
						onClick={toggleEdit}
						icon={<EditIcon />}
						colorScheme="teal"
					/>
				)}
				<Heading fontWeight="300" textAlign="right" letterSpacing=".3em" color="white" size="md">
					EW370
				</Heading>
			</Flex>
		</Flex>
	);
};

export default Header;
