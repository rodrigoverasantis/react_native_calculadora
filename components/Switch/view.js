import React from "react";
import { Switch } from "react-native";

function View(props) {
	const [IsEnabled, SetIsEnabled] = useState(false);

	const toggleSwitch = () => {
		SetIsEnabled(previousState => !previousState);
	}

	return (
		<Switch
			trackColor={{ false: "#767577", true: "#81b0ff" }}
			thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
			ios_backgroundColor="#3e3e3e"
			onValueChange={toggleSwitch}
			value={IsEnabled}
		/>
	);
}

export default View;