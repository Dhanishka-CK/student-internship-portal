import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { internships } from "./InternshipList";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function ApplicationForm() {
  const { id } = useParams();

  const internship = internships.find(
    (item) => item.id === Number(id)
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNumber: ""
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!internship) {
    return <h2>Internship not found</h2>;
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          internship: internship.title
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
      setMessage(data.message);

      setForm({
        name: "",
        email: "",
        rollNumber: ""
      });
    } catch (error) {
      setSuccess(false);
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Internship Application</h1>

        <form onSubmit={handleSubmit}>
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            minLength="2"
            placeholder="Enter your full name"
          />

          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={form.rollNumber}
            onChange={handleChange}
            required
            pattern="[A-Za-z0-9]+"
            title="Only letters and numbers are allowed"
            placeholder="Enter roll number"
          />

          <label>Selected Internship</label>
          <input
            type="text"
            value={internship.title}
            readOnly
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {message && (
          <p className={success ? "success" : "error"}>
            {message}
          </p>
        )}

        <br />

        <Link to="/">← Back to Internships</Link>
      </div>
    </div>
  );
}

export default ApplicationForm;