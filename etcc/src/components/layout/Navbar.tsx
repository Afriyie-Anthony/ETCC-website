
import React, {useState} from "react"
import { ChevronDown, ChevronRight } from "lucide-react";


interface DropdownItem {
  name: string;
  href: string;
  subItems?: DropdownItem[];
}

interface DropdownMenu {
  title: string;
  items: DropdownItem[];
}


export default function Navbar(){

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  //const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };


  return(
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="flex items-center justify-between px-28 h-16">
        {/* logo */}
        <div className="flex items-center space-x-3">
            <a href="/" className="text-3xl font-bold text-teal-400">ETCC</a>
            {/* <div className="hidden sm:block text-sm text-slate-300">
              EliteWeb Technologies
            </div> */}
        </div>
        {/* nav items and login */}
        <div className="hidden md:flex gap-20 items-center">
          {/* nav items */}
          <ul className="flex items-center gap-6">
            <li>
              <a href="/" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium">Home</a>
            </li>
            {dropdowns.map((dropdown) =>
             <li key={dropdown.title}>
              <button 
              onClick={() => toggleDropdown(dropdown.title)}
              className="flex items-center space-x-1 w-full px-5 py-2 md:p-0 text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
              >
                <span>{dropdown.title}</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === dropdown.title && (
              <ul className="md:absolute md:mt-2 bg-white text-black shadow-lg rounded-lg py-2 w-full md:w-56 z-10">
                {dropdown.items.map((item) => (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <a
                      href={item.href}
                      className="flex justify-between items-center px-4 py-2"
                    >
                      {item.name}
                      {item.subItems && <ChevronRight size={16} />}
                    </a>
                    {item.subItems && hoveredItem === item.name && (
                      <ul className="md:absolute top-0 left-full ml-1 bg-white shadow-lg rounded-lg py-2 w-48 z-20 md:block">
                        {item.subItems.map((sub) => (
                          <li key={sub.name}>
                            <a
                              href={sub.href}
                              className="block px-4 py-2 hover:bg-blue-100"
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
             
            )}
          </ul>


        </div>
      </div>
    </nav>
  )
}

const dropdowns: DropdownMenu[] = [

  {title: "About",
    items: [
      {name:"Our Mission", href: "/mission"},
      {name:"Our Vision", href: "/vision"},
      {name:"Our Team", href: "/team"},
    ]
  },
  {
    title: "Courses",
    items: [
      {
        name: "Web development", href: "/webdevelopment",
        subItems: [
          {name: "Frontend", href: "/frontend"},
          {name: "Backend", href: "/backend"},
          {name: "Fullstack", href: "/fullstack"}
        ]
      },
      {
        name: "Networking", href: "/networking",
        subItems: [
          {name: "Beginner", href: "/beginner"},
          {name: "Intermediate", href: "/intermediate"},
          {name: "Advanced", href: "/advanced"}
        ]
      },
      {
        name: "Cybersecurity", href: "/cybersecurity",
        subItems: [
          {name: "Beginner", href: "/beginner"},
          {name: "Intermediate", href: "/intermediate"},
          {name: "Advanced", href: "/advanced"}
        ]
      },
      {
        name: "Database", href: "/database",
        subItems: [
          {name: "Beginner", href: "/beginner"},
          {name: "Intermediate", href: "/intermediate"},
          {name: "Advanced", href: "/advanced"}
        ]
      },
      {
        name: "Data Analysis", href: "/analysis",
        subItems: [
          {name: "Beginner", href: "/beginner"},
          {name: "Intermediate", href: "/intermediate"},
          {name: "Advanced", href: "/advanced"}
        ]
      },
      {
        name: "Graphic Design", href: "/graphic",
        subItems: [
          {name: "Beginner", href: "/beginner"},
          {name: "Intermediate", href: "/intermediate"},
          {name: "Advanced", href: "/advanced"}
        ]
      },
      {name: "Course Detail", href: "/course-details"},
      {name: "Registration", href: "/registration"}
    ]
  },
  {
    title: "Assessment",
    items: [
      {name: "Quiz Category", href: "/quiz-category"},
      {name: "Attempt Quiz", href: "/quiz-attempt"},
      {name: "Test Result", href: "/test-result"},
    ]
  },
  {
    title: "Webinar",
    items: [
      {name: "Upcoming Webinar", href: "/upcoming-webinars"},
      {name: "Webinar Archive", href: "/webinar-archive",
        subItems: [
          {name: "2024 Webinar", href: "/2024-webinar"},
          {name: "2023 Webinar", href: "/2023-webinar"},
          {name: "2022 Webinar", href: "/2022-webinar"}
        ]
      },
    ]
  },
  {
    title: "Community",
    items : [
      {name: "Student Forum", href: "/student-forum"},
      {name: "Instructor Forum", href: "/blog"},
      {name: "Career", href: "/career"}
    ]
  },
  {
    title: "Media Center",
    items: [
      {name: "Blog", href: "/blog"},
      {name: "News", href: "/news"},
      {name: "Events", href: "/events"},
      {name: "Photo Gallery", href: "/photo-gallery"}
    ]
  }
  
]