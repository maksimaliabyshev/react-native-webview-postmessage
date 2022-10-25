import { Button, Text } from 'react-native';
import { Navio } from 'rn-navio';

import HomeScreen from './HomeScreen';
import WebViewScreen from './WebViewScreen';

export * from './HomeScreen';

const navio = Navio.build({
	screens: {
		Home: () => (
			<>
				<HomeScreen>
					<Button title="Open Site" onPress={() => navio.push('Site')} />
				</HomeScreen>
			</>
		),
		Site: () => <WebViewScreen />,
	},
	// stacks: {
	// 	HomeStack: ['Home', 'Site'],
	// },
	// root: 'HomeStack',
	// options: {
	// 	stack: {
	// 		headerShown: false,
	// 	},
	// 	tab: {
	// 		headerShown: false,
	// 	},
	// },
});

// Root component
export const getNavio = () => navio;
export const AppRoot = navio.Root;
