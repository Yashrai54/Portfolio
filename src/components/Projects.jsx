import React, { useState, useEffect } from 'react';

// Assuming 'blog' is an imported image or a placeholder for a project icon/thumbnail
// For this example, let's assume it's imported or you'll replace it.
// import blog from './path-to-your-image.png'; 

const AllProjectsData = [
  {
    name: "Bite-XP",
    langs: ["React", "Node.js", "MongoDB", "ExpressJS", "CSS", "HTML"],
    description: "A recipe & nutrition tracking web app that lets users explore meals and calculate calories.",
    features: ["Search recipes via Spoonacular API", "Track daily meals", "User authentication", "Responsive UI"]
  },
  {
    name: "DailyCode",
    langs: ["Node.js", "ExpressJS", "MongoDB", "EJS"],
    description: "A platform to practice coding challenges daily and track progress.",
    features: ["Daily coding challenges", "User progress tracking", "Dynamic content rendering", "Responsive UI"]
  },
  {
    name: "Spring Boot Blog",
    langs: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    description: "A full-stack blogging platform built with Spring Boot and MySQL where users can write, edit, and manage blogs.",
    features: ["User authentication & role-based access", "CRUD operations for blog posts", "Responsive UI", "Persistent storage with MySQL"]
  },
  {
    name: "Gacha Bot",
    langs: ["Node.js", "Discord.js", "JavaScript"],
    description: "A One Piece-themed Discord bot simulating gacha card pulls with rarity-based outcomes and battles.",
    features: ["Randomized gacha mechanics", "User points system", "Leaderboard tracking", "Interactive bot responses"]
  },
  {
    name: "World Atlas",
    langs: ["React", "JavaScript", "CSS", "HTML"],
    description: "An interactive atlas showing details about countries including flags, population, and region information.",
    features: ["Fetch country data from API", "Search and filter countries", "Responsive and clean UI", "Dynamic country details view"]
  },
  {
    name: "EduEra",
    langs: ["React", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
    description: "An educational platform prototype where users can explore courses and resources.",
    features: ["Course listing and categorization", "Clean modern layout", "Responsive design", "Interactive course cards"]
  },
  {
    name: "Placement-Cell",
    langs: ["HTML", "PHP", "MySQL", "CSS"],
    description: "A placement cell management system connecting students, companies, and admin.",
    features: ["Student registration and login", "Admin panel for managing companies", "Placement result updates", "Role-based access"]
  },
  {
    name: "URL Shortener",
    langs: ["Node.js", "ExpressJS", "EJS", "JavaScript", "CSS", "HTML"],
    description: "A web app that shortens long URLs and tracks redirects.",
    features: ["Generate unique short links", "Redirect tracking", "Minimalist and clean interface", "User-friendly design"]
  },
  {
    name: "Weather Report",
    langs: ["React", "JavaScript", "CSS", "HTML"],
    description: "A weather web app fetching real-time data for cities and displaying current conditions.",
    features: ["Search weather by city", "Show temperature, humidity, and conditions", "Responsive design", "API integration for live data"]
  },
  {
    name: "Spotify Clone",
    langs: ["React", "JavaScript", "CSS", "HTML"],
    description: "A Spotify-inspired music player web clone for practicing UI and state management.",
    features: ["Play/pause/skip controls", "Playlist UI with song listing", "Responsive design", "Dynamic music playback"]
  }
];


// Helper to get all unique languages for the filter list
const UniqueLangs = [...new Set(AllProjectsData.flatMap(p => p.langs))];

const Projects = () => {
    // The original `AllProjects` array is implicitly part of AllProjectsData
    // The filter logic now uses AllProjectsData directly.

    const [selectedLangs, setSelectedLangs] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState(AllProjectsData);
    const [selectedProjectName, setSelectedProjectName] = useState('');

    // Select the first project to display details by default on initial load
    useEffect(() => {
        if (AllProjectsData.length > 0) {
            setSelectedProjectName(AllProjectsData[0].name);
        }
    }, []); // Run only once on mount

    // Filter the project details based on the selected project name
    const selectedProjectDetails = AllProjectsData.find(p => p.name === selectedProjectName);

    function handleCheckBox(event) {
        const { name, checked } = event.target;
        let updatedLangs;

        if (checked) {
            updatedLangs = [...selectedLangs, name];
        } else {
            updatedLangs = selectedLangs.filter(lang => lang !== name);
        }

        setSelectedLangs(updatedLangs);

        // Filtering logic: Show all if no languages selected, otherwise show projects
        // that include at least one of the selected languages.
        const result = AllProjectsData.filter(p =>
            updatedLangs.length === 0 || p.langs.some(lang => updatedLangs.includes(lang))
        );
        setFilteredProjects(result);

        // Optional: Reset selected project if the currently selected one is filtered out
        if (selectedProjectName && !result.some(p => p.name === selectedProjectName)) {
            setSelectedProjectName(result.length > 0 ? result[0].name : '');
        }
    }

    function handleClick(name) {
        setSelectedProjectName(name);
    }

    // --- Component JSX ---
    return (
        <div className='projects-main-container'>
            {/* Suggested CSS for projects-main-container: 
                Use CSS Grid or Flexbox for a 3-column layout. 
                Apply a modern, consistent background color and padding. 
                Ensure responsiveness with media queries. */}
            
            <div className='language-filter-panel'>
                <h2>Filter by Language</h2>
                {/* Suggested CSS for language-filter-panel: 
                    A distinct background (lighter/darker shade), border-right for separation, fixed width, and sticky positioning for easy filtering. */}
                <ul className='filter-list'>
                    {/* Iterate over UniqueLangs for a dynamic and complete list */}
                    {UniqueLangs.map(lang => (
                        <li key={lang} className='filter-list-item'>
                            <label className='checkbox-label'>
                                <input
                                    type="checkbox"
                                    name={lang}
                                    className='custom-checkbox'
                                    onChange={handleCheckBox}
                                />
                                {lang === 'ejs' ? 'EJS' : lang}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='project-list-panel'>
                <h2>All Projects ({filteredProjects.length})</h2>
                {/* Suggested CSS for project-list-panel: 
                    A scrollable container, clean spacing between list items. */}
                <ul className='project-grid'>
                    {/* Suggested CSS for project-grid: A responsive grid layout for projects, like a 2xN or 3xN grid. */}
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(p => (
                            <li
                                key={p.name}
                                className={`project-card ${p.name === selectedProjectName ? 'project-card-selected' : ''}`}
                                onClick={() => handleClick(p.name)}
                                title={p.name} // Added for better accessibility
                            >
                                {/* Suggested CSS for project-card: 
                                    Card-like appearance with a slight shadow/border, hover effect, 
                                    and a clear visual indicator for the selected card. */}
                                
                    
                                <div className='project-card-title'>
                                    {p.name}
                                </div>
                                <div className='project-card-langs'>
                                    {/* Display language tags in a nicer format */}
                                    {p.langs.map(l => <span key={l} className='lang-tag'>{l}</span>)}
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className='no-projects'>No projects match the selected filters.</p>
                    )}
                </ul>
            </div>
            
            <div className='project-details-panel'>
                <h2>Project Details</h2>
                {/* Suggested CSS for project-details-panel: 
                    A main content area with a professional typography (font, line-height), 
                    clear sections, and good use of white space. Sticky positioning is often good here. */}
                
                {selectedProjectDetails ? (
                    <div className='details-content'>
                        <h3 className='details-title'>{selectedProjectDetails.name}</h3>
                        
                        <div className='details-section'>
                            <p className='details-label'>Description:</p>
                            <p className='details-description'>{selectedProjectDetails.description}</p>
                        </div>

                        <div className='details-section'>
                            <p className='details-label'>Languages:</p>
                            <div className='details-lang-list'>
                                {selectedProjectDetails.langs.map(l => (
                                    <span key={l} className='lang-tag details-tag'>{l}</span>
                                ))}
                            </div>
                        </div>

                        <div className='details-section'>
                            <p className='details-label'>Features:</p>
                            <ul className='details-feature-list'>
                                {selectedProjectDetails.features.map((feature, index) => (
                                    <li key={index} className='feature-item'>
                                        {/* Use a clear bullet point or icon here */}
                                        <span className='feature-icon'>•</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <p className='details-placeholder'>Select a project to view its details.</p>
                )}
            </div>
        </div>
    );
}

export default Projects;