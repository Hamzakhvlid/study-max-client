"use client";

import API from "@/api";
import axios from "axios";
import { useEffect, useState } from "react";

export default function usePastPapers() {
  const [selectedExam, setSelectedExam] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [papersData, setPapersData] = useState<any[]>([]); // State to hold papers
  const [filteredPapers, setFilteredPapers] = useState<any[]>([]);
  const [totalMockExams, setTotalMockExams] = useState<number>(0);
  const [totalStateExams, setTotalStateExams] = useState<number>(0);
  const [sameYears, setSameYears] = useState<boolean>(false);
  const [startYear, setStartYear] = useState<number | null>(null);
  const [endYear, setEndYear] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPapers() {
      const res = await axios.get(`${API}/api/exam-papers`); // Replace with your backend API
      const data = await res.data;
      setPapersData(data); // Store all papers
    }
    fetchPapers();
  }, []);
  useEffect(() => {
    if (selectedExam && selectedSubject && selectedLevel) {
      const filtered = papersData.filter(
        (paper) =>
          paper.exam === selectedExam &&
          paper.subject.name === selectedSubject &&
          paper.subject.levels.includes(selectedLevel)
      );
      let mockExamCount = 0;
      let stateExamCount = 0;
      const years: number[] = [];

      // Calculate counts from filteredPapers
      filtered.forEach((paper) => {
        const paperType = paper.paperType; // Assuming paperType is a string
        const paperYear = paper.year;
        if (paperType === "Mock Exam") {
          mockExamCount += 1; // Increment the mock exam count
        } else if (paperType === "State Exam") {
          stateExamCount += 1; // Increment the state exam count
        }
        if (paperYear) {
          years.push(paperYear); // Collect the year
        }
      });
      if (years.length > 0) {
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);
        setStartYear(minYear);
        setEndYear(maxYear);

        // Check if all years are the same
        setSameYears(minYear === maxYear);
      }
      setTotalMockExams(mockExamCount);
      setTotalStateExams(stateExamCount);
      setFilteredPapers(filtered);
    }
  }, [selectedExam, selectedSubject, selectedLevel, papersData]);

  return {
    selectedExam,
    setSelectedExam,
    selectedSubject,
    setSelectedSubject,
    selectedLevel,
    setSelectedLevel,
    filteredPapers,
    totalMockExams,
    totalStateExams,
    sameYears,
    startYear,
    endYear,
  };
}
