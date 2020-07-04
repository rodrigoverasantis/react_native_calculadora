import React from 'react';
import { StyleSheet, View } from 'react-native';
import ContenedorPrincipal from "./containers/contenedor_principal";
import Constants from 'expo-constants';

export default function App() {

	return (
		<View style={styles.container}>
			<ContenedorPrincipal />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
});
