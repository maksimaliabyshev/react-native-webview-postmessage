/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';

import {
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';
import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Navio } from 'rn-navio';

import HomeScreen from './src/screens/HomeScreen';

const navio = Navio.build({
	screens: {
		Home: () => (
			<>
				{/* <Text>Home</Text>
        <Button title="Push" onPress={() => navio.push('Settings')} /> */}
				<HomeScreen />
			</>
		),
		Settings: () => (
			<>
				<Text>Settings</Text>
				<Button title="Go back" onPress={() => navio.goBack()} />
			</>
		),
	},
});

// Root component
export default () => <navio.Root />;
