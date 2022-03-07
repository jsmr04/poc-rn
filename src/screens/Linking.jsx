import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import {
  StyleSheet,
  View,
  Button
} from "react-native";

const Chat = () => {
  

  return (
    <View style={styles.container}>
      <Button title={"URL"} onPress={()=>Linking.openURL('https://expo.dev')} />
      <Button title={"URL MODAL"} onPress={()=>WebBrowser.openBrowserAsync('https://expo.dev')} />
      <Button title={"APP"} onPress={()=>Linking.openURL('lyft://ridetype?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&destination[latitude]=37.7763592&destination[longitude]=-122.4242038')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 60,
    paddingHorizontal: 10,
  },
});

export default Chat;
