"use client"
import React, { useState } from 'react';
import './pick-a-subject.scss';
import usePickASubject from '@/hooks/usePickASubject';
import CircularLoading from '@/app/components/atoms/circularloading/CicularLoading';
import SkeletonLoading from '@/app/components/atoms/SkeletonLoadingCard/SkeletonLoadingCard';


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
  const [searchTerm, setSearchTerm] = useState('');

  
  const {filteredSubjects, activeFilter, setActiveFilter, subjectFilters, loading, filtering} = usePickASubject()
  
  return (
    <div className="study-page">
      <header className="header">
        <div className="logo">Study Max</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search subjects, topics and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">🔍</button>
        </div>
      </header>

      <main>
        <h1>Pick a subject</h1>
        <div className="subject-filters">
          {subjectFilters.map((filter) => (
            <button
              key={filter}
              className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="subject-grid">
          {filteredSubjects?.map((subject) => (
            <div key={subject._id} className="subject-card">
              <div className="subject-icon">{subject.icon}</div>
              <h2>{subject.name}</h2>
              {subject.levels.map((level) => (
                <a key={level} href={`#${subject.name}-${level}`} className="level-link">
                  → {level}
                </a>
              ))}
            </div>
          ))}
        </div>
        {filteredSubjects?.length === 0 && <div className='flex justify-center'>No Subject Found</div>}
        {loading && <><SkeletonLoading /></>}
      </main>

    </div>
  );
}