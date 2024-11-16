"use client"
import { toggleSidebar } from "@/store/sidebarSlice/sidebarSlice";
import { useDispatch } from "react-redux"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useParams } from "next/navigation";

  
export default function PickASubjectID() {
    const dispatch = useDispatch();
    const params = useParams(); // Access route params
  const { id } = params as { id: string }; // Ensure TypeScript knows the structure

  if (!id) return null;

  // Split the id into parts
  const parts = id.split('-');
  const first = parts[0];
  const last = parts[parts.length - 1];
    return (
      <div className="min-h-screen z-0 bg-gradient-to-b from-cyan-50/50 relative">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
            <HiOutlineMenuAlt2 onClick={() => dispatch(toggleSidebar())} color="#6d31ed" size={24} className="cursor-pointer" />
              <a href="/" className="text-2xl font-poppins_semibold   font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Study Max</a>
            </div>
            <div className="relative flex-1 max-w-2xl mx-4">
              <input
                type="search"
                placeholder="Search subjects, topics and more..."
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </header>
  
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <a href="/" className="text-pink-500 hover:underline">Home</a>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-600">{first}</span>
          </div>
        </div>
  
        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-lg shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{first} - {last}</h2>
                <p className="mt-1 text-gray-600">
                  Switch to <a href="#" className="text-pink-500 hover:underline">Ordinary</a>
                </p>
                <p className="mt-2 text-gray-600">A subject students love or hate, this course follows on from what you learned in JC Business.</p>
                <button className="mt-2 text-pink-500 hover:underline flex items-center gap-1">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors">
              Take a quiz
            </button>
          </div>
  
          {/* Topics and Past Papers Grid */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            {/* Topics */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Topics</h3>
              <div className="space-y-2">
                {[
                  'Budgeting - Cash',
                  'Budgeting - Flexible',
                  'Budgeting - Production',
                  'Cash Flow Statements',
                  'Club Accounts',
                  'Control Accounts',
                  'Correction of Errors/Suspense',
                  'Costing - Job, Product, Stock Valuation & O/H Apportionment'
                ].map((topic, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors text-pink-500 hover:text-pink-600"
                  >
                    {topic}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Past Papers */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Past Papers</h3>
                <button className="flex items-center gap-2 text-gray-600">
                  2024
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-gray-800 mb-2">Exam Paper</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border"></div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 mb-2">Marking Scheme</div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-sm text-white bg-purple-500 rounded">Mock exam</span>
                    <span className="font-medium text-gray-800">Mock Paper</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-sm text-white bg-teal-500 rounded">State exam</span>
                    <span className="font-medium text-gray-800">Paper</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border"></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border"></div>
                  </div>
                </div>
              </div>
              <a href="#" className="mt-4 inline-flex items-center text-pink-500 hover:underline">
                See all papers for this subject
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    )
  }