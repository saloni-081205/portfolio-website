export const projects = [
  {
    id: 1,

    title: "Real-Time Indian Sign Language Translator (Final Year Project · Ongoing · 2026–Present)",

    shortDescription:
      "A real-time computer vision-based application designed to recognize Indian Sign Language (ISL) gestures through a webcam and convert them into understandable text. The project combines AI-based gesture recognition with a modern web interface to support accessible and interactive communication.",

    description:
      "This project is a full-stack web application that combines modern web technologies with artificial intelligence to create an Indian Sign Language communication assistant. The system captures hand gestures through a webcam, processes the captured frames using computer vision and machine learning, predicts the corresponding ISL sign, and presents the result to the user. It also supports sentence generation, multilingual output, text-to-speech, and conversation history.",

    image: "/images/projects/isl-project.png",

    gallery: [
      "/images/projects/isl-project.png"
    ],

    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Python",
      "FastAPI",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
    ],

    features: [
      "Real-Time Gesture Detection — Captures hand gestures through a webcam and processes them using computer vision.",
      "ISL-to-Text Translation — Detects and classifies sign language gestures and generates corresponding text.",
      "Multilingual Output — Supports English, Hindi, and Gujarati text output.",
      "Text-to-Speech — Converts generated text into speech for easier communication.",
      "Conversation History — Stores and manages previously generated translations.",
      "User Authentication — Provides secure registration and login."
    ],

    githubUrl: "",
    liveUrl: "",

    category: "AI & Computer Vision",
  },

  {
    id: 2,

    title: "Expense Tracker Web Application",

    shortDescription:
      "A full-stack expense management application developed to help users efficiently record, organize, and monitor their daily expenses. The application follows a structured frontend–backend architecture with REST APIs, database integration, authentication, and CRUD operations.",

    description:
      "A full-stack expense management application designed to help users efficiently record, organize, and monitor their personal finances. The application features a responsive React.js frontend integrated with a PHP backend through RESTful APIs, with MySQL providing persistent data storage. It implements user authentication, category and expense management, complete CRUD operations, and structured database relationships. The project also involved API testing with Postman, input validation, debugging, query optimization, and frontend–backend integration to deliver a reliable and user-friendly expense tracking experience.",

    image: "/images/projects/expense-tracker-project.png",

    gallery: [
      "/images/projects/expense-tracker-project.png",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "REST API",
      "Postman",
      "HTML"
    ],

    features: [
      "User Authentication — Registration and login with session-based user management.",
      "Expense and Income Management — Add, edit, delete, and view personal expense & income records.",
      "Expense Tracking — Filter and manage expenses for better financial monitoring.",
      "REST API Integration — Connects the React frontend with PHP backend services.",
      "Relational Database — Uses a normalized MySQL database for users, categories, and expenses.",
      "API Testing & Debugging — Tested backend endpoints using Postman and optimized application functionality."
    ],

    githubUrl: "https://github.com/saloni-081205/expense-tracker",
    liveUrl: "",

    category: "Full-Stack Web Development",
  },

  {
    id: 3,

    title: "Airline Reservation System",

    shortDescription:
      "An enterprise-style web-based airline reservation system developed using Java EE technologies and MVC architecture to streamline flight search, seat booking, reservation management, and simulated payment processing.",

    description:
      "An enterprise-style web-based airline reservation system developed using Java, JSP, Servlets, JDBC, and Oracle, following the MVC architecture to maintain a clear separation between presentation, business logic, and data access layers. The system enables users to search flights, check real-time seat availability, select multiple seats, make reservations, and complete simulated payment processing with e-ticket confirmation. It also includes role-based Admin and Customer dashboards, session-based authentication, automatic seat allocation, input validation, and parameterized database queries for secure and reliable reservation management.",

    image: "/images/projects/airline-project.png",

    gallery: [
      "/images/projects/airline-project.png",
    ],

    technologies: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "Oracle",
      "HTML/CSS",
      "MVC Architecture"
    ],

    features: [
      "Flight Search — Search and view available flights based on travel requirements.",
      "Real-Time Seat Availability — Displays available seats and supports multi-seat selection.",
      "Flight Reservation — Enables users to book flights with automatic seat allocation.",
      "Payment Processing — Implements simulated payment processing and booking confirmation.",
      "E-Ticket Generation — Provides electronic ticket confirmation after successful reservation.",
      "Role-Based Dashboards — Separate Admin and Customer functionality with role-based access.",
      "Secure Authentication — Implements session-based authentication, input validation, and parameterized queries.",
      "Oracle Database — Manages users, flights, reservations, payments, and seat allocation data."
    ],

    githubUrl: "https://github.com/saloni-081205/airline-reservation-system",
    liveUrl: "",

    category: "Enterprise Web Application",
  },
];