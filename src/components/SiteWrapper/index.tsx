import React, { ReactNode, SyntheticEvent, useRef } from 'react';

import { Alert, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { Error } from '../Error';

interface SiteWrapper {
	uri: string;
	children?: ReactNode;
}

function SiteWrapper({ uri, children = null, ...rest }: SiteWrapper) {
	const refWebWiew = useRef(null);
	const _onMessage = (event: any) => {
		console.log('🚀RN event.nativeEvent.data: ', event.nativeEvent.data);
		Alert.alert('🚀RN event.nativeEvent.data >>>>', event.nativeEvent.data);
	};
	return (
		<WebView
			ref={refWebWiew}
			source={{ uri: uri }}
			originWhitelist={['*']}
			ignoreSslError={true}
			mixedContentMode={'always'}
			javaScriptEnabled={true}
			javaScriptEnabledAndroid={true}
			sharedCookiesEnabled={true}
			domStorageEnabled={true}
			cacheEnabled={false}
			// decelerationRate={'normal'}
			// startInLoadingState={true}
			// dataDetectorTypes={'none'}
			// autoManageStatusBarEnabled={false}
			// incognito={true}
			// startInLoadingState
			// injectedJavaScript={injectJS}
			// injectedJavaScriptBeforeContentLoaded={jsStopScale}
			// renderError={(errorName) => <Error name={errorName} />}

			// saveFormDataDisabled={false}
			bounces={false}
			// scrollEnabled={false} //default true
			// nestedScrollEnabled={true} //default false
			overScrollMode={'content'}
			// overScrollMode={'always'}
			directionalLockEnabled={false}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			// scalesPageToFit={true} // default true
			// scalesPageToFit={Platform.OS === 'ios'}
			keyboardDisplayRequiresUserAction={true}
			// hideKeyboardAccessoryView={false}  //last version before crash on ipad ios 11.4
			// hideKeyboardAccessoryView={true}  //default false
			// automaticallyAdjustContentInsets={true} //default true
			// allowsBackForwardNavigationGestures={false} //default false
			// pagingEnabled={true}
			// textZoom={100}
			allowsFullscreenVideo={true} // default false
			// mediaPlaybackRequiresUserAction={false} //default true
			// allowsInlineMediaPlayback={true} //default false
			allowsAirPlayForMediaPlayback={true} //default false
			style={styles.webview}
			// renderLoading={() => <Loading />}
			onMessage={_onMessage}
			onScroll={syntheticEvent => {
				const { contentOffset } = syntheticEvent.nativeEvent;
				console.log('🚀RN contentOffset: ', contentOffset);
			}}
			// onLoadEnd={_onLoadEnd}
			onRenderProcessGone={syntheticEvent => {
				const { nativeEvent } = syntheticEvent;
				console.warn('🚀RN WebView Crashed: ', nativeEvent.didCrash);
			}}
			renderError={errorName => <Error name={errorName} />}
			{...rest}
		/>
	);
}

export { SiteWrapper };

const styles = StyleSheet.create({
	webview: {
		// alignItems: 'center',
		flex: 1,
		// justifyContent: 'center',
		backgroundColor: '#8bd38f',
		borderColor: '#2e972c',
		borderWidth: 2,
	},
});
