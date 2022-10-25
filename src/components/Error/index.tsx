import { ReactNode } from 'react';

import { Text, View } from 'react-native';

// import { Container, Message, Name } from './styles';

interface ErrorProps {
	name?: string;
	message?: string;
	children?: ReactNode;
}

function Error({ name, message, children = null }: ErrorProps) {
	return (
		<View>
			<Text>Error</Text>
			<Text>Name: {name}</Text>
			<Text>Message: {message}</Text>
			{children}
		</View>
	);
}

export { Error };
