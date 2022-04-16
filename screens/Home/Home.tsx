import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomList from "../../components/CustomList/CustomList";

interface IPerson {
  name: string;
  age: number;
  address: string;
  job: string;
}

const Home = () => {
  const persons: IPerson[] = [
    {
      name: "David John",
      age: 16,
      address: "Peter street",
      job: "React Native Developer",
    },
    {
      name: "Arik berdan",
      age: 17,
      address: "Parker street",
      job: "JavaScript Developer",
    },
    {
      name: "Sofi Zohir",
      age: 18,
      address: "Spiderman street",
      job: "React Native Developer",
    },
  ];
  return (
    <View style={Style.flex}>
      <Text style={Style.title}>Persons List</Text>
      <CustomList data={persons} />
    </View>
  );
};

export default Home;

const Style = StyleSheet.create({
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
    marginBottom: 10,
  },
});
