import React, { Fragment, useState, useEffect } from "react";
import { Text, Button, FlatList, SafeAreaView, TextInput, View as Vieww } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";

function View(props) {
	const [Total, SetTotal] = useState("0");
	const [Operator, SetOperator] = useState("");
	const [Input, SetInput] = useState("");

	const OnInputValue = (value) => {
		SetInput(Input + value);
	}

	const OnInputOperator = (operator) => {
		SetOperator(operator);
		if (!Total) {
			SetTotal(Input);
		}
		SetInput("");
	}

	const OnPressBorrar = (value) => {
		if (value) {
			SetTotal("");
			SetOperator("");
			SetInput("");
		} else {
			SetInput(Input.slice(0, -1));
		}
	}

	const OnPressEquals = () => {
		switch (Operator) {
			case "+":
				SetTotal(Number(Total) + Number(Input));
				break;
			case "-":
				SetTotal(Number(Total) - Number(Input));
				break;
			case "*":
				SetTotal(Number(Total) * Number(Input));
				break;
			case "/":
				SetTotal(Number(Total) / Number(Input));
				break;
		}
		SetOperator("");
		SetInput("");
	}

	return (
		<Fragment>
			<Text>Calculadora</Text>
			<Grid>
				<Row>
					<Text style={{ fontSize: 30 }}>{Total}</Text>
				</Row>
				<Row>
					<Col style={{ width: 10 }}>
						<Text>{Operator}</Text>
					</Col>
					<Col>
						<Text>{Input}</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button title={"1"} onPress={() => OnInputValue("1")} />
					</Col>
					<Col>
						<Button title={"2"} onPress={() => OnInputValue("2")} />
					</Col>
					<Col>
						<Button title={"3"} onPress={() => OnInputValue("3")} />
					</Col>
					<Col>
						<Button title={"+"} onPress={() => OnInputOperator("+")} disabled={!Input && !Total} />
					</Col>
				</Row>
				<Row>
					<Col>
						<Button title={"4"} onPress={() => OnInputValue("4")} />
					</Col>
					<Col>
						<Button title={"5"} onPress={() => OnInputValue("5")} />
					</Col>
					<Col>
						<Button title={"6"} onPress={() => OnInputValue("6")} />
					</Col>
					<Col>
						<Button title={"-"} onPress={() => OnInputOperator("-")} disabled={!Input && !Total} />
					</Col>
				</Row>
				<Row>
					<Col>
						<Button title={"7"} onPress={() => OnInputValue("7")} />
					</Col>
					<Col>
						<Button title={"8"} onPress={() => OnInputValue("8")} />
					</Col>
					<Col>
						<Button title={"9"} onPress={() => OnInputValue("9")} />
					</Col>
					<Col>
						<Button title={"*"} onPress={() => OnInputOperator("*")} disabled={!Input && !Total} />
					</Col>
				</Row>
				<Row>
					<Col>
						<Button title={"0"} onPress={() => OnInputValue("0")} />
					</Col>
					<Row>
						<Col>
							<Button title={"<"} onPress={() => OnPressBorrar(false)} disabled={!Input} />
						</Col>
						<Col>
							<Button title={"C"} onPress={() => OnPressBorrar(true)} disabled={!Input && !Total} />
						</Col>
					</Row>
					<Col>
						<Button title={"="} onPress={() => OnPressEquals()} />
					</Col>
					<Col>
						<Button title={"/"} onPress={() => OnInputOperator("/")} disabled={!Input && !Total} />
					</Col>
				</Row>
			</Grid>
		</Fragment>
	);
}

export default View;