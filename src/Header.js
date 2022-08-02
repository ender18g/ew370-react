import React, { useState, useEffect } from 'react';
import { Heading, Flex, Image, Link, Box, IconButton } from '@chakra-ui/react';
import './Header.css';
import logo from './WRCLogo.png';
import { EditIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = (props) => {
	const { toggleEdit } = props;
	const [ mode, setMode ] = useState('');
	useEffect(() => {
		setMode(window.location.href.split('?').pop().split('mode=').pop());
	}, []);
	return (
		<Flex boxShadow="md" justify="space-between" align="center" bg="blue.700" paddingX={4} paddingY={2}>
			<Flex justify="left" align="center">
				<NavLink to="/jodel" style={{ textDecoration: 'none' }}>
					<Image className="nav-logo" height="50px" src={logo} />
				</NavLink>
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
				<NavLink to="/" style={{ textDecoration: 'none' }}>
					<Heading fontWeight="300" textAlign="right" letterSpacing=".3em" color="white" size="md">
						EW370
					</Heading>
				</NavLink>
				<ColorModeSwitcher />
			</Flex>
		</Flex>
	);
};

export default Header;
