import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function CatFuncionComponent(props) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );
}

export default function CafeFunctionComponent() {
  return (
    <>
      <CatFuncionComponent name="Michifus" />
      <CatFuncionComponent name="Perseo" />
    </>
  );
}