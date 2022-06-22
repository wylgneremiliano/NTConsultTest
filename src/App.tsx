import { Routes } from "@config/routes";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "@store/index";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />;
    </Provider>
  );
};

export default App;
