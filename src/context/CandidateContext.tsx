/*import React, { createContext, useState, ReactNode } from "react";

// Define types for candidate data
interface Candidate {
  name: string;
  location: string;
  avatar_url: string;
  bio: string;
  company?: string;
  email?: string;
}

interface CandidateContextType {
  savedCandidates: Candidate[];
  saveCandidate: (candidate: Candidate) => void;
  removeCandidate: (email: string) => void;  // Updated to remove by email
}

// Create the context
export const CandidateContext = createContext<CandidateContextType | undefined>(
  undefined
);

// Provider Component
export const CandidateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Function to save a candidate
  const saveCandidate = (candidate: Candidate) => {
    setSavedCandidates((prev) => [...prev, candidate]);
  };

  // Function to remove a candidate by email
  const removeCandidate = (email: string) => {
    setSavedCandidates((prevCandidates) =>
      prevCandidates.filter((candidate) => candidate.email !== email)
    );
  };

  return (
    <CandidateContext.Provider
      value={{ savedCandidates, saveCandidate, removeCandidate }}
    >
      {children}
    </CandidateContext.Provider>
  );
};*/






// CandidateContext.tsx

import React, { createContext, useState, ReactNode } from "react";

// Define types for candidate data
interface Candidate {
  id: string;           // Add an ID to identify candidates uniquely
  name: string;
  location: string;
  avatar_url: string;
  bio: string;
  company?: string;
  email?: string;
}

interface CandidateContextType {
  savedCandidates: Candidate[];
  saveCandidate: (candidate: Candidate) => void;
  removeCandidate: (id: string) => void;
}

// Create the context
export const CandidateContext = createContext<CandidateContextType | undefined>(
  undefined
);

// Provider Component
export const CandidateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Function to save a candidate
  const saveCandidate = (candidate: Candidate) => {
    setSavedCandidates((prev) => [...prev, candidate]);
  };

  // Function to remove a candidate by ID
  const removeCandidate = (id: string) => {
  setSavedCandidates((prev) => prev.filter((candidate) => candidate.id !== id));
};


  return (
    <CandidateContext.Provider
      value={{ savedCandidates, saveCandidate, removeCandidate }}
    >
      {children}
    </CandidateContext.Provider>
  );
};
