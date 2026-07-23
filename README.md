School Timetable Generator Web App

A web-based application that automatically generates conflict-free school timetables using constraint-based scheduling logic. Designed to eliminate manual scheduling errors and significantly reduce administrative workload.

Live Demo

[https://hamdallah.dev/timetable (update if deployed)](https://generate-timetable.onrender.coma/)

GitHub Repository

https://github.com/Hamdallah-alhassan68/Generate_Timetable
Overview

Creating school timetables manually is time-consuming and prone to conflicts such as overlapping classes or double-booked resources. This application automates the process by applying scheduling constraints to generate valid timetables efficiently.

Features Automated Timetable Generation based on defined constraints Conflict Detection & Prevention (no overlapping classes or rooms) Real-Time Updates for flexible schedule adjustments Customizable Inputs (subjects, teachers, rooms, time slots) Interactive Web Interface for managing schedules Technologies Used Backend: Node.js, Express.js Frontend: HTML, CSS, JavaScript Data Handling: JSON-based storage Architecture: RESTful API design How It Works Input Data Admin defines subjects, teachers, rooms, and available time slots Constraint Processing System applies rules such as: No teacher assigned to multiple classes at the same time No room conflicts Balanced subject distribution Timetable Generation Algorithm generates a valid timetable based on constraints Validation & Updates System validates schedules and allows real-time edits without conflicts Impact Reduced timetable creation time from hours to minutes Eliminated scheduling conflicts through automated validation Improved efficiency for school administrators System Architecture User Input → Web Interface → Node.js/Express API → Scheduling Logic → JSON Storage

⚙️ Installation & Setup

Clone repository
git clone https://github.com/Hamdallah-alhassan68/Generate_Timetable.git

Navigate into project folder
cd timetablegenerator

Install dependencies
npm install

Start the server
npm start

Example Use Case A school administrator inputs: 10 teachers 8 subjects 5 classrooms The system generates a fully conflict-free weekly timetable in seconds Future Improvements Add database integration (MongoDB/MySQL) for persistent storage Implement user authentication (JWT) Add export functionality (PDF/Excel timetables) Introduce advanced algorithms (Genetic Algorithms / AI-based scheduling) Add unit testing (Jest) and improve reliability Deploy with Docker and CI/CD pipeline Author

Hamdallah Alhassan

GitHub: https://github.com/Hamdallah-alhassan68 LinkedIn: https://linkedin.com/in/hamdallahalhassan
