import { Link } from "react-router-dom";

export const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Tech Solutions",
    location: "Chennai",
    duration: "3 Months",
    stipend: "₹10,000/month",
    description: "Develop responsive websites using React."
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    company: "CodeCraft",
    location: "Bangalore",
    duration: "6 Months",
    stipend: "₹15,000/month",
    description: "Build REST APIs using Node.js and MongoDB."
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataTech",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹12,000/month",
    description: "Analyze datasets and develop ML models."
  },
  {
    id: 4,
    title: "Full Stack Developer Intern",
    company: "InnovateX",
    location: "Coimbatore",
    duration: "4 Months",
    stipend: "₹18,000/month",
    description: "Build full stack applications using MERN."
  }
];

function InternshipList() {
  return (
    <div className="container">
      <h1>Available Internships</h1>
      <p>Explore exciting internship opportunities!</p>

      <div className="grid">
        {internships.map((internship) => (
          <div className="card" key={internship.id}>
            <h2>{internship.title}</h2>
            <p><b>Company:</b> {internship.company}</p>
            <p><b>Location:</b> {internship.location}</p>
            <p><b>Duration:</b> {internship.duration}</p>
            <p><b>Stipend:</b> {internship.stipend}</p>

            <Link to={`/internship/${internship.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternshipList;