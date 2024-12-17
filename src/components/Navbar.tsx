import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/potential-candidates" className={styles.link}>
        Potential Candidates
      </Link>
    </nav>
  );
};

export default Navbar;
