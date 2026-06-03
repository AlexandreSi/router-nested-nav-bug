import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Screen = () => {
  const params = useLocalSearchParams();
  const { setOptions } = useNavigation();
  const { itemId } = params;

  useEffect(() => {
    setOptions({ title: `Item ${itemId}` });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Item {itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Screen;
