import React from "react";
import { Image } from "react-native";

function View(props) {
	const {
		url
	} = props;
	return (
		<Image
			style={styles.tinyLogo}
			source={{ uri: url }}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 66,
		height: 58,
	},
});

export default View;