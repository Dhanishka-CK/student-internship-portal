import { useParams, Link } from "react-router-dom";
import { internships } from "./InternshipList";

function InternshipDetails() {
  const { id } = useParams();

  const internship = internships.find(
    (item) => item.id === Number(id)
  );

  if (!internship) {
    return <h2>Internship not found</h2>;
  }

  return (
    <div className="container">
      <div className="details">
        <h1>{internship.title}</h1>

        <p><b>Company:</b> {internship.company}</p>
        <p><b>Location:</b> {internship.location}</p>
        <p><b>Duration:</b> {internship.duration}</p>
        <p><b>Stipend:</b> {internship.stipend}</p>

        <h3>Job Description</h3>
        <p>{internship.description}</p>

        <Link to={`/apply/${internship.id}`}>
          <button>Apply Now</button>
        </Link>

        <br /><br />

        <Link to="/">← Back to Internships</Link>
      </div>
    </div>
  );
}

export default InternshipDetails;