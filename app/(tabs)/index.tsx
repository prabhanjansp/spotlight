import {  View,Text } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/notification">Feed screen in Tabs</Link>
      {/* <Text>Hau</Text> */}
    </View>
  );
}
