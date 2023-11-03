import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
// import MainLayout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        {/* <MainLayout/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;