import axios from "axios";
import { useEffect, useState } from "react";
const subjectFilters = ['Leaving Certificate', 'Junior Cycle', 'Ardteistiméireacht', 'Sraith Sóisearach'];
export default function usePickASubject() {
  const [subjectsAll, setSubjectsAll] = useState<Subject[]>();
  const [activeFilter, setActiveFilter] = useState('Leaving Certificate');
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);
  useEffect(() => {
    setLoading(true)
    async function getSubjects() {
      const response = await axios.get(
        "https://studymax-b8aec23b27d5.herokuapp.com/api/subjects"
      );
      console.log(response.data);
      setSubjectsAll(response.data);
    }
    getSubjects();
    setLoading(false)
  }, []);
  useEffect(() => {
    if (!loading && subjectsAll) {
      setFiltering(true); // Start filtering
      // Simulate filtering process delay if necessary
      const timeoutId = setTimeout(() => {
        setFiltering(false); // End filtering after filtering is done
      }, 300); // Optional delay for UX purposes
      return () => clearTimeout(timeoutId); // Clear timeout when component unmounts or activeFilter changes
    }
  }, [activeFilter, subjectsAll, loading]);

  const filteredSubjects = subjectsAll?.filter(
    (subject) => subject.exam === activeFilter // Adjust this condition based on your data structure
  );

  return {filteredSubjects, activeFilter, setActiveFilter, subjectFilters, loading, filtering};
}
