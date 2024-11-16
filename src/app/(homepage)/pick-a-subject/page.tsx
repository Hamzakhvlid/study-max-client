"use client";
import React, { useState } from "react";
import usePickASubject from "@/hooks/usePickASubject";
import SkeletonLoading from "@/app/components/atoms/SkeletonLoadingCard/SkeletonLoadingCard";

// Sample data for subjects
// const subjects: Subject[] = [
//   { name: 'Accounting', icon: '📊', levels: ['Higher', 'Ordinary'] },
//   { name: 'Agricultural Science', icon: '🌾', levels: ['Higher', 'Ordinary'] },
//   { name: 'Applied Maths', icon: '🧮', levels: ['Higher', 'Ordinary'] },
//   { name: 'Art', icon: '🎨', levels: ['Higher', 'Ordinary'] },
//   { name: 'Biology', icon: '🧬', levels: ['Higher', 'Ordinary'] },
//   { name: 'Business', icon: '💼', levels: ['Higher', 'Ordinary'] },
//   { name: 'Chemistry', icon: '🧪', levels: ['Higher', 'Ordinary'] },
//   { name: 'Classical Studies', icon: '🏛️', levels: ['Higher', 'Ordinary'] },
//   { name: 'Computer Science', icon: '💻', levels: ['Higher', 'Ordinary'] },
//   { name: 'Construction Studies', icon: '🏗️', levels: ['Higher', 'Ordinary'] },
//   { name: 'Design & Communication', icon: '✏️', levels: ['Higher', 'Ordinary'] },
//   { name: 'Economics', icon: '📈', levels: ['Higher', 'Ordinary'] },
// ];

// Sample data for subject filters

export default function StudyPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    filteredSubjects,
    activeFilter,
    setActiveFilter,
    subjectFilters,
    loading,
    filtering,
  } = usePickASubject();

  return (
    <div className="font-poppins max-w-screen-xl mx-auto p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="text-xl font-poppins_semibold   font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Study Max</div>
        <div className="flex w-1/2">
          <input
            type="text"
            placeholder="Search subjects, topics and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md"
          />
          <button className="px-4 py-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 w-fit text-white rounded-r-md cursor-pointer">
            🔍
          </button>
        </div>
      </header>

      <div>
        <h1 className="text-2xl mb-4 text-center">Pick a subject</h1>
        <div className="flex gap-2 mb-4 justify-center">
          {subjectFilters.map((filter) => (
            <button
              key={filter}
              className={`px-6 py-2 w-fit bg-gray-200 rounded-full cursor-pointer ${
                activeFilter === filter ? "bg-pink-500 text-white" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSubjects?.map((subject) => (
            <div
              key={subject._id}
              className="bg-white rounded-md p-4 shadow-md"
            >
              <div className="text-4xl mb-2">{subject.icon}</div>
              <h2 className="text-lg mb-2 capitalize">{subject.name}</h2>
              {subject.levels.map((level) => (
                <a
                  key={level}
                  href={`pick-a-subject/${subject.name}-${level}`}
                  className="block text-teal-500 mt-2 hover:translate-x-1 transition-transform duration-300"
                >
                  → {level}
                </a>
              ))}
            </div>
          ))}
        </div>

        {filteredSubjects?.length === 0 && (
          <div className="flex justify-center">No Subject Found</div>
        )}
        {loading && <SkeletonLoading />}
      </div>
    </div>
  );
}
