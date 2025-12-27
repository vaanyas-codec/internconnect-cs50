# CS50x Internship Recommendation Engine (InternConnect)

#### Video Demo: https://youtu.be/j2XEPLU2r_0

## Description

InternConnect is a web-based internship recommendation platform developed as my final project for Harvard’s CS50x course. The goal of this project is to simulate how internship platforms match students with opportunities based on academic background, skills, and preferences, while demonstrating core computer science concepts taught throughout the course.

Over the duration of CS50x (Weeks 0–10), the course introduced fundamental programming concepts in C, data structures, algorithms, memory, Python, SQL, and web development using HTML, CSS, JavaScript, and Flask. For my final project, I chose to build a full-stack style web application that brings these concepts together in a practical and meaningful way. Although the application is implemented using modern web technologies like React, the logic and problem-solving approach are deeply rooted in CS50’s foundational ideas.

InternConnect allows users to register by entering personal and academic details such as name, email, CGPA, department, preferred work location, work mode, and a set of skills. Based on this information, the system recommends internships from a predefined dataset and calculates a match percentage for each opportunity.

## Project Motivation and Design Choices

I chose an internship recommendation system because it is a relatable problem for students and allowed me to apply data structures and algorithms in a realistic scenario. Rather than creating a static website, I wanted to build an interactive application that processes user input, applies logical constraints, and produces ranked results.

One important design decision was keeping the application fully client-side. Instead of using a database or backend server, all data is stored and processed in memory using JavaScript objects and arrays. This was a deliberate choice to keep the focus on algorithmic thinking, filtering, searching, and sorting rather than backend infrastructure.

React was selected for the frontend because its component-based structure made it easier to organize logic into reusable units and manage application state cleanly.

## Application Functionality
# User Authentication and Profile

The application begins with a login/registration interface where users input their basic information. While this is not a secure authentication system (no passwords or databases are used), it simulates user onboarding and allows profile-based personalization. Once logged in, the user is greeted by name and shown internship recommendations based on their profile.

# Internship Dataset

The project includes a dataset of over 50 internship listings stored in a JavaScript file. Each internship entry includes:

Company name

Role title

Required skills

Location and country

Salary range

Work mode (remote, on-site, hybrid)

CGPA requirement

This dataset acts as the core input for all matching, filtering, and searching operations.

## Matching Algorithm and CS50 Concepts

The core of InternConnect is its matching algorithm, which calculates a percentage score for each internship.

Several CS50 concepts are demonstrated here:

Arrays: Internship data is stored in arrays, and array operations such as filter, map, and sort are heavily used.

Hash Tables: JavaScript Set data structures are used to efficiently compute intersections between user skills and internship-required skills.

Search Algorithms: A linear search is implemented to allow users to search across internship titles, company names, locations, and skills.

Sorting Algorithms: Custom comparison functions are written to sort internships by match percentage, salary, or company name.

Data Structures: Structured objects are used to represent internships and user profiles in a clean and readable format.

The match percentage is calculated using weighted criteria:

Skill match (40%)

Location preference (20%)

Country preference (20%)

Work mode preference (20%)

This approach allowed me to explore how different weights affect outcomes and reflect on algorithm design trade-offs.

## User Interface and Experience

The interface is designed to be clean, responsive, and intuitive. Internship results are displayed as cards that show match percentages, salary ranges, and matched skills. Color indicators help users quickly identify strong matches.

Additional features include:

A statistics dashboard summarizing available internships

Filter panels for location, salary, and work mode

Search functionality across all fields

Sorting options for better result comparison

Empty states and helpful messages when no matches are found

## File Structure Overview
harvard_cs50/
├── src/
│   ├── components/
│   │   ├── AuthForm.jsx          # User login and registration form
│   │   ├── Dashboard.jsx         # Core matching logic and display
│   │   ├── StatsDashboard.jsx   # Summary statistics
│   │   ├── InternshipCard.jsx   # Individual internship UI component
│   │   └── Footer.jsx           # Footer information
│   ├── data/
│   │   └── internships.js       # Internship dataset
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styling
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js


Each file was written to separate concerns clearly and improve readability and maintainability.

## Limitations and Future Improvements

Due to time and scope constraints, the project does not include persistent storage, secure authentication, or real-time data. In the future, this project could be extended with a backend API, database integration, and more advanced recommendation algorithms.

## Conclusion

InternConnect represents the culmination of my learning in CS50x. It allowed me to apply data structures, algorithms, and software design principles in a practical project while also gaining experience with modern web development tools. This project reflects both my technical growth and my ability to design and explain a complete software system.