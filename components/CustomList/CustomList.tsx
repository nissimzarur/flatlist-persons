import { FlatList, FlatListProps } from "react-native";
import React from "react";
import CustomCard from "../CustomCard/CustomCard";

interface IPerson {
  name: string;
  age: number;
  address: string;
  job: string;
}

interface IProps {
  data: IPerson[];
}

const CustomList = ({ data }: IProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <CustomCard item={item} />}
    />
  );
};

export default CustomList;
