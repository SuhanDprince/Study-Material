import React, { useState } from 'react';
import './MainCard.css';
import { db } from '../firebaseconfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const MainCard = () => {
  const [subject, setSubject] = useState('');
  const [regulation, setRegulation] = useState('');
  const [driveLink, setDriveLink] = useState('');
  const [error, setError] = useState('');

  const handleGenerateLink = async () => {
    setError('');
    setDriveLink('');

    // Convert regulation to a number if it's not empty
    const regulationNumber = regulation ? Number(regulation) : null;

    if (isNaN(regulationNumber)) {
      setError('Regulation must be a valid number.');
      return;
    }

    try {
      const q = query(
        collection(db, 'subjects'),
        where('subjectName', '==', subject),
        where('regulation', '==', regulationNumber) // use the converted number
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        setDriveLink(docData.driveLink);
      } else {
        setError('No matching data. Please provide the correct subject name and regulation.');
      }
    } catch (error) {
      console.error('Error retrieving document:', error);
      setError('Error retrieving link. Please try again.');
    }
  };

  return (
    <div className="main-card">
      <div className="heading-container">
        <h1 className="heading">RGMCET SUBJECT MATERIAL</h1>
      </div>
      <h2 className="enter-details">Enter Details</h2>
      <input
        type="text"
        placeholder="Subject Name"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="input-field"
      />
      <input
        type="number" // Ensure regulation is treated as a number
        placeholder="Regulation"
        value={regulation}
        onChange={(e) => setRegulation(e.target.value)}
        className="input-field"
      />
      <div>
        <button onClick={handleGenerateLink} className="submit-button">Submit</button>
      </div>
      {driveLink && (
        <p className="result">
          Drive Link: <a href={driveLink} target="_blank" rel="noopener noreferrer">{driveLink}</a>
        </p>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default MainCard;
