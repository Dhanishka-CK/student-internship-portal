import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import InternshipList from "./pages/InternshipList";
import InternshipDetails from "./pages/InternshipDetails";
import ApplicationForm from "./pages/ApplicationForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>InternHub</h2>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<InternshipList />} />
        <Route path="/internship/:id" element={<InternshipDetails />} />
        <Route path="/apply/:id" element={<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;