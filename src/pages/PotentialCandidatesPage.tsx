import { useContext } from "react";
//import Table from "../components/Table";
import Navbar from "../components/Navbar";
import { CandidateContext } from "../context/CandidateContext";
import styles from "./PotentialCandidatesPage.module.css";

/*const PotentialCandidatesPage: React.FC = () => {
  const { savedCandidates, removeCandidate } = useContext(CandidateContext)!;*/
  

const PotentialCandidatesPage: React.FC = () => {
  const { savedCandidates, removeCandidate } = useContext(CandidateContext)!;

  const handleRemove = (id: string) => {
  console.log("Removing candidate with ID:", id);
  removeCandidate(id);
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className={styles.container}>
        {/* Heading */}
        <h1 className={styles.heading}>Potential Candidates</h1>

        {/* Candidates Table */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Company</th>
                <th>Bio</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {savedCandidates.map((candidate) => (
                <tr key={candidate.email}>
                  {/* Candidate Image */}
                  <td>
                    <img
                      src={candidate.avatar_url}
                      alt={candidate.name}
                      className={styles.avatar}
                    />
                  </td>

                  {/* Name */}
                  <td>{candidate.name}</td>

                  {/* Location */}
                  <td>{candidate.location}</td>

                  {/* Email */}
                  <td>
                    <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
                  </td>

                  {/* Company */}
                  <td>{candidate.company}</td>

                  {/* Bio */}
                  <td>{candidate.bio}</td>

                  {/* Remove Button */}
                  <td>
                    <button
                      onClick={() => handleRemove(candidate.id)}

                      className={styles.actionButton}
                    >
                      ✖️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PotentialCandidatesPage;
