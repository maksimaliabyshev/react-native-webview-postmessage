/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren, useCallback, useEffect, useState } from 'react';

// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppRoot } from './src/screens';

export default (): JSX.Element => {
	// const [ready, setReady] = useState(false);
	// const start = useCallback(async () => {
	// 	await SplashScreen.preventAutoHideAsync();

	// 	setReady(true);
	// 	await SplashScreen.hideAsync();
	// }, []);

	// useEffect(() => {
	// 	start();
	// }, [start]);
	// if (!ready) {
	// 	return <></>;
	// }

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<StatusBar />
			<AppRoot />
		</GestureHandlerRootView>
	);
};
