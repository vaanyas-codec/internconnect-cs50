# CS50x Internship Recommendation Engine

A comprehensive React-based internship recommendation engine built for Harvard CS50x, demonstrating fundamental data structures and algorithms concepts.

## Features

### Authentication & User Profile
- Complete login/registration form with validation
- User profile fields: Name, Email, Mobile, CGPA, Year, Department, Location preferences
- Personalized greeting after login

### Internship Database
- 52+ internship entries from top companies worldwide
- Diverse locations: USA, UK, Canada, Germany, Japan, South Korea, India, Singapore, Australia, Brazil, Argentina
- Salary ranges from $1,200 to $15,000/month
- Multiple work modes: Remote, On-site, Hybrid
- Various industries: Tech, Finance, Gaming, E-commerce, Biotech, Automotive

### Matching Algorithm
- **Hash Table Operations**: Uses Set data structure for efficient skill matching
- **Array Operations**: Filtering, sorting, and mapping operations
- **Search Algorithm**: Linear search across all internship fields
- **Sorting Algorithms**: Custom comparison functions for multiple sort criteria
- Match percentage calculation based on:
  - Skill intersection (40% weight)
  - Location match (20% weight)
  - Country match (20% weight)
  - Work mode match (20% weight)

### UI/UX Features
- Modern, responsive design with gradient headers
- Sticky stats dashboard showing key metrics
- Collapsible filters section
- Skill selection with pill-style tags
- Search functionality across all fields
- Internship cards with match percentage badges
- Color-coded match indicators (100%=green, 50%+=blue, <50%=gray)
- Empty states and helpful messages

## Technologies

- **React 18** - Functional components and hooks
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript/JSX** - Programming language

## CS50 Concepts Demonstrated

1. **Arrays**: Filtering, sorting, mapping operations throughout
2. **Hash Tables**: Set and Map data structures for skill matching
3. **Search Algorithms**: Linear search implementation
4. **Sorting Algorithms**: Custom comparison functions
5. **Data Structures**: Efficient organization and lookup
6. **Performance Optimization**: useMemo for expensive computations

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
harvard_cs50/
├── src/
│   ├── components/
│   │   ├── AuthForm.jsx          # Login/Registration form
│   │   ├── Dashboard.jsx         # Main dashboard with matching algorithm
│   │   ├── StatsDashboard.jsx   # Statistics display
│   │   ├── InternshipCard.jsx   # Individual internship card
│   │   └── Footer.jsx              # Footer with project info
│   ├── data/
│   │   └── internships.js        # Internship database (52+ entries)
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Usage

1. **Register/Login**: Fill out the registration form with your details
2. **Select Skills**: Choose relevant skills from the skills sidebar
3. **Apply Filters**: Use filters to narrow down by work mode, location, country, or salary
4. **Search**: Use the search bar to find specific companies, titles, or locations
5. **Sort**: Sort results by Best Match, Highest Salary, or Company Name
6. **View Matches**: See match percentages and highlighted matched skills on each card

## Key Algorithms

### Matching Algorithm
The matching algorithm calculates a percentage score based on:
- Skill intersection using Set operations (Hash Table concept)
- Location and country matching
- Work mode preference
- CGPA requirements filtering

### Filtering & Sorting
- Multiple filter criteria applied sequentially
- Custom sorting with fallback comparisons
- Efficient array operations using functional programming

## Notes

- All data is stored in component state (no localStorage or external APIs)
- The application is fully client-side
- Designed for CS50x grading with clear code comments explaining concepts

## License

Built for educational purposes as part of Harvard CS50x.

