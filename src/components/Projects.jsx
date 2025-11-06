import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const projects = [
  {
    title: "ClimateAware",
    description: "A website built for homeowners that accurately tracks current and historical climate, disaster, and geographical data anywhere in the location and provides a detailed report on danger levels and prevantative measures. Utilizes the OpenAI API to generate detailed reports based on provided data. (API calls are not active at the moment)",
    image: "/assets/ClimateAwareImg.png",
    techTags: ["TypeScript", "React", "Firebase", "OpenAI API", "Google Earth Engine"],
    links: [
      { url: "https://hackdavis-2025.web.app/", label: "View Demo" },
      { url: "https://github.com/Orf1/hackdavis-2025/tree/main", label: "Source Code" }
    ]
  },
  {
    title: "Beaq",
    description: "A mobile app that allows users create groups of friends, track locations, and create activities for the group to do together. (Work in progress...)",
    image: "/assets/beaqLogo.png",
    techTags: ["TypeScript", "React Native", "Firebase", "OpenAI API", "UI/UX"],
    links: [
      { url: "https://github.com/LavaToken/FriendTracker", label: "Source Code" }
    ]
  },
  {
    title: "Racing Car Dashboard",
    description: "Worked with various developers on the Formula Racing @ UC Davis team to develop the dashboard interface for the 2025 FE12 model racing car. Developing dashboard games for driver entertainment to play like Tetris and Flappy Bird.",
    image: "/assets/frucdCarImg.png",
    techTags: ["C", "STM32", "STM32IDE"],
    links: [
      { url: "https://fsae.ucdavis.edu/", label: "Website" }
    ]
  },
  {
    title: "Digital Dice Game on FPGA",
    description: "Built a fully functional 21-roll dice game on the Intel DE10-Lite FPGA using Verilog. The game uses push-button input, seven-segment LED display output, and finite state machines to handle player turns, dice rolls, and win conditions. Features include hardware debouncing, clock division for timing control, and modular design for clean, scalable logic.",
    image: "/assets/fpgaupdater.png",
    techTags: ["Verilog", "Quartus", "DE10-Lite Board"],
    links: []
  },
  {
    title: "Breathing Monitor",
    description: "A device designed to help users regulate their breathing using the 4-7-8 technique, improving mental health, sleep quality, and preventing respiratory diseases.",
    image: "/assets/BreathingMonitorImg.png",
    techTags: ["C++", "Arduino UNO", "ArduinoIDE"],
    links: [
      { url: "#", label: "View Demo" }
    ]
  },
  {
    title: "Portfolio",
    description: "This website! Built with HTML, CSS, and JavaScript.",
    image: "/assets/portfolioImg(new).png",
    techTags: ["React", "Vite", "JavaScript XML"],
    links: [
      { url: "https://kjstatport.vercel.app//", label: "View Demo" },
      { url: "https://github.com/LavaToken/ReactPort", label: "Source Code" }
    ]
  }
]

function Projects() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const cardRef = useIntersectionObserver()

  return (
    <div ref={cardRef} className="project-card">
      <div className="project-image">
        <img src={project.image} alt={`${project.title} Project`} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.techTags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tech-tag">{tag}</span>
          ))}
        </div>
        {project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link, linkIndex) => (
              <a 
                key={linkIndex}
                href={link.url} 
                className="btn small" 
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
