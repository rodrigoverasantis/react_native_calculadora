import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Calculadora from "../calculadora";

function View(props) {

	return (
		<SafeAreaView>
			<ScrollView>
				<Calculadora />
			</ScrollView>
		</SafeAreaView>
	);
}

export default View;