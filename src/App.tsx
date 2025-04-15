import Table from "./components/Table";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditCourse from "./pages/edit/EditCourse";
import DetailsCourse from "./pages/details/DetailsCourse";
import CreateCourse from "./pages/create/CreateCourse";
import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
function App() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <>
    <div className={darkMode ? 'body-dark': 'body-light'}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Table />} />
            <Route path="/create" element={<CreateCourse />} />
            <Route path="/edit/:id" element={<EditCourse />} />
            <Route path="/view/:id" element={<DetailsCourse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
