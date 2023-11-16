import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useState } from "react";
import Layout from "./components/Layout";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/list"
              element={<List users={users} setUsers={setUsers} />}
            />
            <Route
              path="/form"
              element={<Form users={users} setUsers={setUsers} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
