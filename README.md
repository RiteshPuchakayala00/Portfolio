# Interactive Multi-Page Portfolio Website

This project is a fully functional React application built for Assignment 2. It converts a static HTML/CSS structure into a dynamic, multi-page application using React components, state, side effects, and client-side routing.

## Setup and Run Instructions

To run this full-stack project locally, you need to start both the frontend and backend servers.

1. **Install Dependencies:**
   Open your terminal in the project root (frontend) and run:
   ```bash
   npm install
   ```
   Then navigate to the backend directory and install:
   ```bash
   cd server
   npm install
   ```

2. **Run the Backend Server:**
   In the `/server` directory, create a `.env` file based on `.env.example` and run:
   ```bash
   npm run dev
   ```
   The backend should start on `http://localhost:5000`.

3. **Run the Frontend Development Server:**
   Open a new terminal window in the project root and run:
   ```bash
   npm run dev
   ```
   Open the URL provided in the terminal (usually `http://localhost:5173/`) in your browser to view the portfolio.

## Component Tree & State-Lifting Decisions

### Component Tree Overview
- **`App`**: The root component configuring all routing.
  - **`Layout`**: A wrapper providing a shared layout across all pages.
    - **`Navbar`**: Persistent navigation and theme toggle.
    - **`<Outlet />`**: Renders the active route's page (`Home`, `About`, `Skills`, `Projects`, `ProjectDetails`, `Contact`, `NotFound`).
      - **`Projects`**: Renders a grid of projects.
        - **`ProjectCard`**: A generic component receiving project data via props.
          - **`ProjectInfo`**: A child component displaying the title and tech stack, demonstrating multi-level prop drilling.

### State-Lifting Decisions
- **Theme State (`theme` / `setTheme`)**: The dark/light theme state is lifted to the top-level `App` component. This was necessary because multiple distinct parts of the application need access to it: the root `<div>` in `App.jsx` needs the class name to apply CSS styles globally, and the `Navbar` component (via `Layout`) needs the toggle function and the current theme to display the correct button text (☀️ or 🌙).
- **Form State (`formData` / `errors`)**: Kept local to the `Contact` component because no other components need to know what the user is typing into the contact form until submission.
- **Card Details State (`showDetails`)**: Kept local to the `ProjectCard` component. This ensures that clicking "View Details" on one project card only expands that specific instance without affecting other cards.

## useEffect Hooks Implemented

This project utilizes `useEffect` for the following side effects:

1. **Simulated Loading Sequence (`Home.jsx`)**
   - **Why it was necessary:** To simulate data fetching or asset loading, providing a smoother user experience rather than immediately flashing the page content.
   - **How it works:** It runs once on component mount (empty dependency array `[]`). It sets a `setTimeout` to delay rendering the main hero content by 1 second. It also returns a cleanup function (`clearTimeout`) to prevent memory leaks in case the user navigates away from the Home page before the timer finishes.

2. **Theme Persistence (`App.jsx`)**
   - **Why it was necessary:** To ensure that a user's preference for Dark or Light mode is remembered across page reloads and future visits.
   - **How it works:** This hook has `[theme]` in its dependency array. Whenever the `theme` state changes, it writes the new preference to browser `localStorage`. (The initial state of `theme` also reads from `localStorage` synchronously to prevent a flash of the wrong theme).

## API Endpoints

The backend Express server (`/server`) exposes the following API endpoints. No authentication is required for any endpoint.

| Method | Endpoint | Description | Sample Request | Sample Response |
|--------|----------|-------------|----------------|-----------------|
| GET    | `/`      | Health check | `curl http://localhost:5000/` | `{ "status": "ok" }` (200 OK) |
| GET    | `/api/projects` | Fetch all projects | `curl http://localhost:5000/api/projects` | `[{ "id": 1, "title": "...", ... }]` (200 OK) |
| GET    | `/api/projects/:id` | Fetch specific project | `curl http://localhost:5000/api/projects/1` | `{ "id": 1, "title": "...", ... }` (200 OK) or `{ "error": "Project not found" }` (404 Not Found) |
| POST   | `/api/contact` | Submit contact form | `curl -X POST -H "Content-Type: application/json" -d '{"name":"A","email":"a@a.com","message":"H"}' http://localhost:5000/api/contact` | `{ "message": "Submission successful", "data": { ... } }` (201 Created) or `{ "error": "Email is required" }` (400 Bad Request) |
| GET    | `/api/contact` | List contact submissions | `curl http://localhost:5000/api/contact` | `[{ "name": "A", "email": "a@a.com", "message": "H", "date": "..." }]` (200 OK) |

There is also a centralized error handling middleware which catches any undefined routes (e.g., `GET /api/doesnotexist`) and returns a JSON error body: `{ "error": "Route not found" }` with a 404 status.
