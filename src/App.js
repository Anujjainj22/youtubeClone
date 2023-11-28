import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import store from "./utils/store";
function App() {
  return ( 
    <Provider store={store}>
      <div className="App">
      <Header className="" />
        <div className="grid grid-flow-col">
          <Sidenav className="grid-cols-4" />
          <Body className="grid-cols-8" />
        </div>
      </div>
    </Provider>
  );
}

export default App;
