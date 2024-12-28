import React, { useState, useEffect } from 'react'; // Make sure useState and useEffect are imported
import { ChevronDown, Home, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    name: 'Home',
    path: '/',
    isHome: true,
  },
  {
    name: 'Academics',
    path: '/academics',
    dropdownItems: [
      { name: 'Programs', path: '/academics/programs' },
      { name: 'Departments', path: '/academics/departments' },
      { name: 'Faculty', path: '/academics/faculty' },
    ],
  },
  {
    name: 'Research',
    path: '/research',
    dropdownItems: [
      { name: 'Publications', path: '/research/publications' },
      { name: 'Projects', path: '/research/projects' },
      { name: 'Labs', path: '/research/labs' },
    ],
  },
  {
    name: 'Innovation',
    path: '/innovation',
    dropdownItems: [
      { name: 'Initiatives', path: '/innovation/initiatives' },
      { name: 'Patents', path: '/innovation/patents' },
      { name: 'Startups', path: '/innovation/startups' }
    ]
  },
  {
    name: 'Research Park',
    path: '/research-park',
    dropdownItems: [
      { name: 'Facilities', path: '/research-park/facilities' },
      { name: 'Partners', path: '/research-park/partners' },
      { name: 'Events', path: '/research-park/events' }
    ]
  },
  {
    name: 'Happenings',
    path: '/happenings',
    dropdownItems: [
      { name: 'News', path: '/happenings/news' },
      { name: 'Events', path: '/happenings/events' },
      { name: 'Calendar', path: '/happenings/calendar' }
    ]
  },
  {
    name: 'Recognitions',
    path: '/recognitions',
    dropdownItems: [
      { name: 'Awards', path: '/recognitions/awards' },
      { name: 'Honors', path: '/recognitions/honors' },
      { name: 'Rankings', path: '/recognitions/rankings' }
    ]
  },
  {
    name: 'Campus Life',
    path: '/campus-life',
    dropdownItems: [
      { name: 'Activities', path: '/campus-life/activities' },
      { name: 'Housing', path: '/campus-life/housing' },
      { name: 'Dining', path: '/campus-life/dining' }
    ]
  },
  {
    name: 'Careers',
    path: '/careers',
    dropdownItems: [
      { name: 'Jobs', path: '/careers/jobs' },
      { name: 'Internships', path: '/careers/internships' },
      { name: 'Training', path: '/careers/training' }
    ]
  },
  {
    name: 'The Institute',
    path: '/institute',
    dropdownItems: [
      { name: 'About', path: '/institute/about' },
      { name: 'Leadership', path: '/institute/leadership' },
      { name: 'Contact', path: '/institute/contact' }
    ]
  }
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50 w-full">
      <nav className="w-full max-w-7xl mx-auto border-t-2 border-gray-200">
        <div className="relative h-16 px-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden absolute left-6 top-1/2 -translate-y-1/2 z-20"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>

          <div className="hidden lg:flex justify-center items-center h-full w-full gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative inline-flex items-center"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="group inline-flex items-center text-sm font-medium text-[#005CB9] hover:text-gray-900 whitespace-nowrap relative"
                >
                  {item.isHome && <Home className="mr-2 h-4 w-4" />}
                  {item.name}
                  {!item.isHome && <ChevronDown className="ml-0.5 h-3 w-3" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {item.dropdownItems && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-1 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`lg:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-300 z-50 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{
            maxHeight: isMobileMenuOpen ? '80vh' : '0',
            overflow: 'auto',
          }}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              <div
                className="flex items-center justify-between px-6 py-3 border-b border-gray-100"
                onClick={() =>
                  openDropdown === item.name ? setOpenDropdown(null) : setOpenDropdown(item.name)
                }
              >
                <Link
                  to={item.path}
                  className="flex items-center text-sm font-medium text-[#005CB9] hover:text-[#005CB9]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.isHome && <Home className="mr-2 h-4 w-4" />}
                  {item.name}
                </Link>
                {item.dropdownItems && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                  />
                )}
              </div>
              {item.dropdownItems && openDropdown === item.name && (
                <div className="bg-gray-50">
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.path}
                      className="block px-8 py-2 text-sm text-[#005CB9] hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


