import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Chat = () => {
  const [networkStatus, setNetworkStatus] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  let webSocket = useRef(new WebSocket("ws://localhost:8080/"));

  useEffect(() => {
    webSocket.current.onopen = () => {
      setNetworkStatus("Connected");
    };

    webSocket.current.onclose = (e) => {
      setNetworkStatus("Disconnected");
    };

    webSocket.current.onerror = (e) => {
      setNetworkStatus(e.message);
    };

    webSocket.current.onmessage = (e) => {
      setMessages((prev) => {
        const messages = [...prev];
        messages.push(e.data);
        return messages;
      });
    };
  }, []);

  const sendMessage = () => {
    if(!message) return;
    webSocket.current.send(message);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>{networkStatus}</Text>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "#d3d3d3",
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        {messages.map((x, index) => (
          <Text key={index.toString()}>{x}</Text>
        ))}
      </View>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <TextInput
          placeholder={"Message"}
          style={{ width: "85%", fontSize: 18 }}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Text style={{ fontSize: 18 }}>Send</Text>
        </TouchableOpacity>
      </View>
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
