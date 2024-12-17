import { useState, useContext } from "react";
import CandidateCard from "../components/CandidateCard";
import Navbar from "../components/Navbar";
import { fetchUserData } from "../services/githubService";
import { CandidateContext } from "../context/CandidateContext";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const { saveCandidate } = useContext(CandidateContext)!;

  const fetchCandidate = async () => {
    const username = prompt("Enter a GitHub username:");
    if (username) {
      const data = await fetchUserData(username);
      setCandidate(data);
    }
  };

  const handleSave = () => {
    if (candidate) {
      saveCandidate({
  		id: candidate.id, // Ensure the candidate has an `id` property
  		name: candidate.name,
  		location: candidate.location,
  		avatar_url: candidate.avatar_url,
  		bio: candidate.bio,
});
      setCandidate(null);
    }
  };

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Candidate Search</h1>
        <p className={styles.headerSubtitle}>
          Discover and connect with top GitHub talent effortlessly.
        </p>
        
        <button className={styles.fetchButton} onClick={fetchCandidate}>
          Fetch Candidate
        </button>

        {candidate && (
          <CandidateCard className={styles.can_card}
            name={candidate.name}
            avatar_url={candidate.avatar_url}
            bio={candidate.bio}
            location={candidate.location}
            onSave={handleSave}
            onReject={() => setCandidate(null)}
          />
        )}
        
        
        
      </header>

      

      {/* Candidate Save Section */}
      <div className={styles.candidateContainer}>
        
        <Link to="/potential-candidates">
          <button className={styles.btn}>Start Searching</button>
        </Link>
        
      </div>
    </div>
  );
};

export default HomePage;




{/* Features Section */}
     /* <section className={styles.featuresContainer}>
        <h2 className="text-center text-4xl font-bold mb-8 text-white">
          Why Use Candidate Search?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Quick GitHub Integration",
            "Seamless Candidate Profiles",
            "Easy Profile Management",
          ].map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3 className="featureTitle">{feature}</h3>
              <p className={styles.featureDescription}>
                {feature === "Quick GitHub Integration"
                  ? "Instantly connect and fetch candidates from GitHub."
                  : feature === "Seamless Candidate Profiles"
                  ? "View detailed profiles of top candidates effortlessly."
                  : "Manage profiles with intuitive and interactive tools."}
              </p>
            </div>
          ))}
        </div>
      </section>*/
