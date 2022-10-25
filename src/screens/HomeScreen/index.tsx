import { ReactNode } from 'react';

import { StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {
	children?: ReactNode;
}

function HomeScreen({ children }: HomeScreenProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>HomeScreen</Text>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#312e38',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
		color: '#fff',
	},
});

export default HomeScreen;
