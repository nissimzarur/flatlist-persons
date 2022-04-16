import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface IPerson {
  item: {
    name: string;
    age: number;
    address: string;
    job: string;
  };
}
const CustomCard = ({ item }: IPerson) => {
  return (
    <View style={Style.card}>
      <Text style={Style.row}>Name: {item.name}</Text>
      <Text style={Style.row}>Age: {item.age}</Text>
      <Text style={Style.row}>Address: {item.address}</Text>
      <Text style={Style.row}>Job: {item.job}</Text>
    </View>
  );
};

export default CustomCard;

const Style = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
    padding: 10,
    borderRadius:1,
    borderWidth:1
  },
  row: {
    textAlign: "center",
    fontSize: 16,
  },
});
