import React, { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
  subItems?: DropdownItem[];
}

interface DropdownMenu {
  title: string;
  items: DropdownItem[];
}

export default function Navbar() {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="flex items-center justify-between px-6 md:px-28 h-16">
        {/* logo */}
        <div className="flex items-center space-x-3">
          <a href="/" className="text-3xl font-bold text-teal-400">
            ETCC
          </a>
        </div>

        {/* mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* nav items for desktop */}
        <div className="hidden md:flex gap-10 items-center">
          <ul className="flex items-center gap-6 relative">
            <li>
              <a
                href="/"
                className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                Home
              </a>
            </li>
            {dropdowns.map((dropdown) => (
              <li
                key={dropdown.title}
                className="relative"
                onMouseEnter={() => setHoveredDropdown(dropdown.title)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 px-5 py-2 text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
                >
                  <span>{dropdown.title}</span>
                  <ChevronDown size={16} />
                </button>
                {hoveredDropdown === dropdown.title && (
                  <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-xl rounded-lg py-2 w-56 z-20 animate-fade-in">
                    {dropdown.items.map((item) => (
                      <li
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <a
                          href={item.href}
                          className="flex justify-between items-center px-4 py-2 hover:bg-blue-100 transition-colors"
                        >
                          {item.name}
                          {item.subItems && <ChevronRight size={16} />}
                        </a>
                        {item.subItems && hoveredItem === item.name && (
                          <ul className="absolute top-0 left-full ml-1 bg-white shadow-xl rounded-lg py-2 w-48 z-30 animate-fade-in">
                            {item.subItems.map((sub) => (
                              <li key={sub.name}>
                                <a
                                  href={sub.href}
                                  className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                                >
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 text-white px-6 py-4 space-y-4">
          <ul className="space-y-4">
            <li>
              <a href="/" className="block text-lg font-medium hover:text-teal-400">
                Home
              </a>
            </li>
            {dropdowns.map((dropdown) => (
              <li key={dropdown.title}>
                <details className="group">
                  <summary className="cursor-pointer text-lg font-medium hover:text-teal-400">
                    {dropdown.title}
                  </summary>
                  <ul className="ml-4 mt-2 space-y-2">
                    {dropdown.items.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="block hover:text-teal-300">
                          {item.name}
                        </a>
                        {item.subItems && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {item.subItems.map((sub) => (
                              <li key={sub.name}>
                                <a href={sub.href} className="block hover:text-teal-200">
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

const dropdowns: DropdownMenu[] = [
  {
    title: "About",
    items: [
      { name: "Our Mission", href: "/mission" },
      { name: "Our Vision", href: "/vision" },
      { name: "Our Team", href: "/team" },
    ],
  },
  {
    title: "Courses",
    items: [
      {
        name: "Web development",
        href: "/webdevelopment",
        subItems: [
          { name: "Frontend", href: "/frontend" },
          { name: "Backend", href: "/backend" },
          { name: "Fullstack", href: "/fullstack" },
        ],
      },
      {
        name: "Networking",
        href: "/networking",
        subItems: [
          { name: "Beginner", href: "/beginner" },
          { name: "Intermediate", href: "/intermediate" },
          { name: "Advanced", href: "/advanced" },
        ],
      },
      {
        name: "Cybersecurity",
        href: "/cybersecurity",
        subItems: [
          { name: "Beginner", href: "/beginner" },
          { name: "Intermediate", href: "/intermediate" },
          { name: "Advanced", href: "/advanced" },
        ],
      },
      {
        name: "Database",
        href: "/database",
        subItems: [
          { name: "Beginner", href: "/beginner" },
          { name: "Intermediate", href: "/intermediate" },
          { name: "Advanced", href: "/advanced" },
        ],
      },
      {
        name: "Data Analysis",
        href: "/analysis",
        subItems: [
          { name: "Beginner", href: "/beginner" },
          { name: "Intermediate", href: "/intermediate" },
          { name: "Advanced", href: "/advanced" },
        ],
      },
      {
        name: "Graphic Design",
        href: "/graphic",
        subItems: [
          { name: "Beginner", href: "/beginner" },
          { name: "Intermediate", href: "/intermediate" },
          { name: "Advanced", href: "/advanced" },
        ],
      },
      { name: "Course Detail", href: "/course-details" },
      { name: "Registration", href: "/registration" },
    ],
  },
  {
    title: "Assessment",
    items: [
      { name: "Quiz Category", href: "/quiz-category" },
      { name: "Attempt Quiz", href: "/quiz-attempt" },
      { name: "Test Result", href: "/test-result" },
    ],
  },
  {
    title: "Webinar",
    items: [
      { name: "Upcoming Webinar", href: "/upcoming-webinars" },
      {
        name: "Webinar Archive",
        href: "/webinar-archive",
        subItems: [
          { name: "2024 Webinar", href: "/2024-webinar" },
          { name: "2023 Webinar", href: "/2023-webinar" },
          { name: "2022 Webinar", href: "/2022-webinar" },
        ],
      },
    ],
  },
  {
    title: "Community",
    items: [
      { name: "Student Forum", href: "/student-forum" },
      { name: "Instructor Forum", href: "/blog" },
      { name: "Career", href: "/career" },
    ],
  },
  {
    title: "Media Center",
    items: [
      { name: "Blog", href: "/blog" },
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
      { name: "Photo Gallery", href: "/photo-gallery" },
    ],
  },
];
