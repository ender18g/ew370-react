import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { SuspenseWithPerf, useUser, useAuth } from 'reactfire';

const SignInForm = () => {
	const auth = useAuth;

	const uiConfig = {
		signInFlow: 'popup',
		signInOptions: [
			{ provider: auth.GoogleAuthProvider.PROVIDER_ID },
			{
				provider: auth.EmailAuthProvider.PROVIDER_ID,
				buttonColor: '#153E75'
			}
		],
		callbacks: {
			// Avoid redirects after sign-in.
			signInSuccessWithAuthResult: () => false
		}
	};

	return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />;
};

const FirebaseAuthStateButton = () => {
	const user = useUser();
	return user ? '' : <SignInForm />;
};

const AuthButton = (props) => {
	return (
		<SuspenseWithPerf traceId={'firebase-user-wait'} fallback={<p>loading...</p>}>
			<FirebaseAuthStateButton />
		</SuspenseWithPerf>
	);
};

export default AuthButton;
