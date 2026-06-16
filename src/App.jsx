import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
