import { Provider } from "react-redux";
// import Screen from "./src/screens/Home";
// import Screen from "./src/screens/Chat";
import Screen from "./src/screens/Linking";
import Navigator from "./src/navigations/StackNavigator";
import store from "./src/store";
import { useEffect } from "react";
import { Linking } from "react-native";

export default function App() {

  useEffect(()=>{
    Linking.addEventListener('url', (e)=>{
      console.log('Foreground ', e)
    })
    Linking.getInitialURL().then((url) => console.log('Open ', url))
  },[])
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
    
  );
}

//exp://127.0.0.1:19000