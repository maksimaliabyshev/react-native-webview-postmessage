import { ReactNode } from 'react';

import { SafeAreaView, View } from 'react-native';

interface HomeScreenProps {
	children?: ReactNode;
}

function HomeScreen({ children }: HomeScreenProps) {
	return (
		<SafeAreaView>
			<View>{children}</View>
		</SafeAreaView>
	);
}

export default HomeScreen;
