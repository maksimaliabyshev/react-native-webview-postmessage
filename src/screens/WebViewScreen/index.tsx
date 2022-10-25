import { ReactNode } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';

import { SiteWrapper } from '../../components/SiteWrapper';
import { getNavio } from '../index';

interface WebViewScreenProps {
	children?: ReactNode;
}

function WebViewScreen({}: WebViewScreenProps) {
	const navio = getNavio();

	return (
		<SafeAreaView style={styles.container}>
			<SiteWrapper uri="http://192.168.1.249:5173" />
			{/* <SiteWrapper uri="https://aptoslabs.com/testnet-faucet" /> */}
		</SafeAreaView>
	);
}
export default WebViewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e4d581',
	},
});
