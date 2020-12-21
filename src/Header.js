import React from 'react';
import { Heading, Flex, Image } from '@chakra-ui/react';
import './Header.css';
import logo from './WRCLogo.png';

const Header = () => {
	return (
		<Flex boxShadow="md" justify="space-between" align="center" bg="blue.800" paddingX={4} paddingY={2}>
			<Image className="nav-logo" src={logo} boxSize="50px" />
			<Heading fontWeight="300" textAlign="right" letterSpacing=".3em" color="white" size="md">
				EW482X
			</Heading>
		</Flex>
	);
};

export default Header;
