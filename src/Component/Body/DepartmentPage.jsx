import { useState, useEffect } from 'react';
import Faculty from './Faculty';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const DepartmentPage = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState("arabics");

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set current page based on location
  useEffect(() => {
    const path = location.pathname.split('/dept/')[1];
    if (path) {
      setCurrentPage(path);
    }
  }, [location]);

  const departments = [
    { id: 1, name: 'Department of Arabic', path: "arabics", active: false },
    { id: 2, name: 'Department of Buddhist Studies', path: "buddhist", active: false },
    { id: 3, name: 'Department of Germanic & Romance Studies', path: "romance", active: false },
    { id: 4, name: 'Department of Hindi', path: "hindi", active: false },
    { id: 5, name: 'Department of Library & Information Science', path: "library", active: false },
    { id: 6, name: 'Department of Linguistics', path: "linguistics", active: false },
    { id: 7, name: 'Department of Modern Indian Languages', path: "indian-languages", active: false },
    { id: 8, name: 'Department of Persian', path: "persian", active: false },
    { id: 9, name: 'Department of Philosophy', path: "philosophy", active: false },
    { id: 10, name: 'Department of Psychology', path: "psychology", active: false },
    { id: 11, name: 'Department of Punjabi', path: "punjabi", active: false },
    { id: 12, name: 'Department of Sanskrit', path: "sanskrit", active: false },
    { id: 13, name: 'Department of Urdu', path: "urdu", active: false }
  ];

  const courses = [
    {
      title: 'Notice for admission to the Part-time courses in Arabic Language 2024-25',
      items: [
        {
          text: 'List of selected candidates for the admission in Certificate in Modern Arabic',
          link: '#',
          form: 'Application form for Certificate in Modern Arabic'
        },
        {
          text: 'List of selected candidates for the admission in Diploma in Modern Arabic',
          link: '#',
          form: 'Application form for Diploma in Modern Arabic'
        },
        {
          text: 'List of selected candidates for the admission in Advanced Diploma in Modern Arabic',
          link: '#',
          form: 'Application form for Advanced Diploma in Modern Arabic'
        }
      ]
    },
    {
      title: 'Ph.D. Arabic Course Work',
      items: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row p-4 gap-6">
        {/* Sidebar for desktop view */}
        {!isMobile && (
          <aside className="w-64 h-1/2 bg-white shadow-lg rounded-lg p-4 overflow-auto">
            <h2 className="text-lg font-semibold text-[#005CB9] mb-4">Departments</h2>
            <nav className="space-y-2">
              {departments.map((dept) => (
                <div key={dept.id}>
                  <Link to={`/dept/${dept.path}`}>
                    <button
                      onClick={() => setCurrentPage(dept.path)}
                      className={`block w-full text-left p-2 rounded-lg text-sm ${
                        currentPage === dept.path
                          ? 'text-[#005CB9] font-bold bg-blue-50'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {dept.name}
                    </button>
                  </Link>
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Content Section */}
        <main className="flex-1">
          {isMobile && (
            <section>
              <h2 className="text-lg font-semibold text-[#005CB9] mb-4">Departments</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departments.map((dept) => (
                  <Link to={`/dept/${dept.path}`} key={dept.id}>
                    <button
                      onClick={() => setCurrentPage(dept.path)}
                      className={`block w-full p-4 rounded-lg text-md font-semibold ${
                        currentPage === dept.path ? 'text-[#005CB9]' : 'text-gray-700'
                      }`}
                    >
                      {dept.name}
                    </button>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Courses Section */}
          <section className="mt-6">
            <h2 className="text-lg font-semibold text-[#005CB9] mb-4">Courses</h2>
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 mb-6">
                <h3 className="text-md font-semibold text-[#005CB9] mb-4">{course.title}</h3>
                {course.items.length > 0 ? (
                  <div className="space-y-4">
                    {course.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <a href={item.link} className="text-[#005CB9] hover:underline">
                          {item.text}
                        </a>
                        <a href={item.link} className="text-[#005CB9] hover:underline">
                          {item.form}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No items available.</p>
                )}
              </div>
            ))}
          </section>
          <Faculty />
        </main>
      </div>
    </div>
  );
};

export default DepartmentPage;
