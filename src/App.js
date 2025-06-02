import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Task from "./Pages/Task/Task";
import Application from "./Pages/Application/Application";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application" element={<Application />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
