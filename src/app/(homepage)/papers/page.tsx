"use client";
import usePastPapers from "@/hooks/usePastPapers";
import {
  juniorCertificateSubjects,
  leavingCertificateSubjects,
} from "@/utils/papers-options";


export default function StudyMaxPage() {
  const {
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
  } = usePastPapers();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-teal-500 mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-teal-500">Study Max</h1>
          </div>
          <div className="flex-1 max-w-xl mx-4">
            <input
              type="text"
              placeholder="Search subjects, topics and more..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm mb-6">
          <a href="/" className="text-teal-500 hover:underline">
            Home
          </a>
          <span className="mx-2 text-gray-500">&gt;</span>
          <span className="text-gray-500">Papers</span>
        </nav>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-pink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Past Papers
          </h2>
          <p className="text-gray-600 mb-4">
            Find Junior Cycle and Leaving Cert exam papers and marking schemes.
          </p>
          <p className="text-gray-600 mb-6">
            Filter even further to see specific exam years.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Select an exam</h3>
              <div className="flex flex-wrap gap-2">
                {["Leaving Certificate", "Junior Cycle"].map((exam) => (
                  <button
                    key={exam}
                    onClick={() => setSelectedExam(exam)}
                    className={`px-4 py-2 rounded-full ${
                      selectedExam === exam
                        ? "bg-pink-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {exam}
                  </button>
                ))}
              </div>
            </div>

            {selectedExam && (
              <div>
                <h3 className="font-medium mb-2">Select a subject</h3>
                <select
                  value={selectedSubject}
                  onChange={(e) => {
                    setSelectedSubject(e.target.value);
                    setSelectedLevel("");
                  }}
                  className="w-full md:w-[30%] p-2 border border-gray-300 rounded-md"
                >
                  <option>Select</option>
                  {selectedExam === "Leaving Certificate" ? (
                    <>
                      {leavingCertificateSubjects.map((subjects, index) => (
                        <option key={`${subjects} - ${index}`} value={subjects}>
                          {subjects}
                        </option>
                      ))}
                    </>
                  ) : selectedExam === "Junior Cycle" ? (
                    <>
                      {juniorCertificateSubjects.map((subjects, index) => (
                        <option key={`${subjects} - ${index}`} value={subjects}>
                          {subjects}
                        </option>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </select>
              </div>
            )}

            {selectedSubject && (
              <div>
                <h3 className="font-medium mb-2">Select level</h3>
                <div className="flex gap-2">
                  {["Higher", "Ordinary"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-full ${
                        selectedLevel === level
                          ? "bg-pink-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedLevel && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{`${
                filteredPapers.length
              } Papers ${
                sameYears ? `${startYear}` : `(${startYear}-${endYear})`
              }`}</h3>
              <div className="flex items-center">
                <button className="text-gray-600 hover:text-gray-800 mr-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                  </svg>
                </button>
                <button className="text-teal-500 hover:text-teal-600 font-medium">
                  All years
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="flex border-b">
                <button className="flex-1 px-4 py-2 text-center font-medium bg-pink-500 text-white">
                  {`All (${filteredPapers.length})`}
                </button>
                <button className="flex-1 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-100">
                  {`Mock Exams (${totalMockExams})`}
                </button>
                <button className="flex-1 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-100">
                  {`State Exams (${totalStateExams})`}
                </button>
              </div>
              {filteredPapers.map((filterpaper) => (
                <div key={filterpaper._id} className="p-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold mb-2">
                      {filterpaper.year}
                    </h4>
                    <h6
                      className={`text-sm font-semibold mb-2 p-1 rounded-md text-white ${
                        filterpaper.paperType === "Mock Exam"
                          ? `bg-[#944f93]`
                          : `bg-[#1e7fa3]`
                      }`}
                    >
                      {filterpaper.paperType}
                    </h6>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Exam Paper</span>
                    <span>Marking Scheme</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
