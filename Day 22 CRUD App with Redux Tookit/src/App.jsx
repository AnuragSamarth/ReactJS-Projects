import Form from "./components/Form";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div>
        <h2 className="  text-5xl flex items-center justify-center mb-10">
          CRUD Application
        </h2>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route path="/read" element={<Read />} />
            <Route path="/edit/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
