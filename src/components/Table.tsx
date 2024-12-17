/*const Table: React.FC<TableProps> = ({ candidates, onRemove }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.id}>
            <td>{candidate.name}</td>
            <td>{candidate.location}</td>
            <td>
              <button
                onClick={() => onRemove(candidate.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};*/





import React from "react";
import styles from "./Table.module.css";

interface Candidate {
  id: string;
  name: string;
  location: string;
  avatar_url: string;
}

interface TableProps {
  candidates: Candidate[];
  onRemove: (id: string) => void;
}

const Table: React.FC<TableProps> = ({ candidates, onRemove }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.id}>
            <td>{candidate.name}</td>
            <td>{candidate.location}</td>
            <td>
              <button
                onClick={() => onRemove(candidate.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

