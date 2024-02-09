import Head from "./components/Head";
import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./utils/store";

function App() {
  return (
    <Provider store={Store}>
      <>
        <Head />
        <Body />
      </>
    </Provider>
  );
}

export default App;
