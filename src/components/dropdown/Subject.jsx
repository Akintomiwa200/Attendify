import { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import axios from 'axios'; // Ensure axios is installed and imported

const Subject = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend API URL
    axios.get('/api/subjects')
      .then(response => {
        const subjects = response.data; // Adjust according to your API response structure
        const formattedSubjects = subjects.map(subject => ({
          text: subject.name, // or other field if different
          value: subject.id,  // or other unique identifier
        }));
        setMenuItems(formattedSubjects);
      })
      .catch(err => {
        setError('Failed to load subjects');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Subject</h2>
      <Dropdown
        menuItems={menuItems}
        name="Select Subject"
        width="w-[30vw]" // Adjust width as needed
      />
    </div>
  );
};

export default Subject;
