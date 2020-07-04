import React from "react";
import { Button } from "react-native";

function View(props) {
	const {
		texto,
		funcion,
	} = props;

	return (
		<Button
			title={texto}
			onPress={() => funcion}
		/>
	);
}