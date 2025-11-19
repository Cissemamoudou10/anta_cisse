import "./App.css";
import MainLayout from "./components/MainLayout";
import { BrowserRouter,HashRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
