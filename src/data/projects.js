import campusFlowImage from "../assets/campus-flow.png";
import compilerImage from "../assets/compiler-ai-router.png";
import placementImage from "../assets/placement-system.png";

const projects = [
  {
    id: 1,
    title: "Campus Flow",
    description:
      "A comprehensive campus management platform built to streamline academic and administrative workflows for educational institutions. The application digitizes everyday campus activities, offering role-based dashboards for students, faculty, and administrators to efficiently manage records and facilitate communication.",
    longDescription: [
      "Campus Flow is a unified campus management system designed to eliminate manual paperwork and bridge the communication gap between students, faculty, and administration.",
      "It features dedicated portals with role-based access control (RBAC), ensuring that users only access information relevant to their permissions.",
      "Key features include attendance tracking, automated fee management, academic record maintenance, and real-time announcements.",
      "The frontend is built using React for a seamless, single-page application experience, while the Node.js and MongoDB backend ensures scalable and robust data handling."
    ],
    techStack: ["React", "Node.js", "MongoDB"],
    image: campusFlowImage,
    link: "https://github.com/RiteshPuchakayala00/campus-flow",
  },

  {
    id: 2,
    title: "Compiler AI Router",
    description:
      "An intelligent API routing system that enhances compiler workflows by dynamically routing code execution requests. It leverages AI-assisted routing to optimize request handling, distributing loads across various instances to minimize latency. Features a modular backend architecture built primarily in Python.",
    longDescription: [
      "Compiler AI Router addresses the challenge of handling high-volume code compilation requests by acting as an intelligent middleware.",
      "Instead of a traditional round-robin approach, it utilizes an AI-based routing mechanism to predict compilation times and intelligently distribute workloads across multiple compiler instances.",
      "This dynamic load balancing significantly minimizes execution latency and prevents server bottlenecks during peak traffic.",
      "The project is structured with a modular Python backend, exposing robust REST APIs that easily integrate with existing code execution environments."
    ],
    techStack: ["Python", "AI", "API"],
    image: compilerImage,
    link: "https://github.com/leetrushreyash/compiler-ai-router",
  },

  {
    id: 3,
    title: "Placement Management System",
    description:
      "A secure, full-stack web application dedicated to automating and managing the campus placement process. It utilizes JWT for secure authentication and features portals for students, recruiters, and admins to manage job postings, track applications, and coordinate interview schedules seamlessly.",
    longDescription: [
      "The Placement Management System is a centralized portal that streamlines the entire recruitment lifecycle for academic institutions.",
      "Students can create comprehensive profiles, upload resumes, and track their application statuses in real-time.",
      "Recruiters are provided with tools to post job openings, filter candidates based on academic criteria, and schedule interview rounds.",
      "The platform is secured using JSON Web Tokens (JWT) for stateless authentication. It leverages a powerful Spring Boot (Java 24) backend and a relational MySQL database to guarantee data integrity and high performance."
    ],
    techStack: ["Java 24", "Spring Boot", "React", "MySQL", "JWT"],
    image: placementImage,
    link: "https://github.com/RiteshPuchakayala00/placement-management-system",
  },
];

export default projects;