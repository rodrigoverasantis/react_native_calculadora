import React from "react";
import { SafeAreaView, FlatList } from "react-native";

function View(props) {
	const {
		elementos,
	} = props;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={elementos}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	);
}

function Item({ titulo, componente }) {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{titulo}</Text>
			{componente}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default View;