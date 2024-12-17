import React from "react";
import styles from "./CandidateCard.module.css";

interface CandidateCardProps {
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  onSave: () => void;
  onReject: () => void;
  className?: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  name,
  avatar_url,
  bio,
  location,
  onSave,
  onReject,
}) => {
  return (
    <div className={styles.card}>
      <img src={avatar_url} alt={name} className={styles.avatar} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.bio}>{bio || "No bio available."}</p>
      <p className={styles.location}>{location || "Location unknown."}</p>

      <div className={styles.buttonGroup}>
        <button onClick={onSave} className={styles.saveBtn}>
          Select
        </button>
        <button onClick={onReject} className={styles.rejectBtn}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
