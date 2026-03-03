# Console Archive - Gaming Hardware Tracker
**Assignment 1: Web App Development 1**

## Project Overview
Console Archive is a specialized web application designed to catalog and explore the history of gaming hardware. The app allows users to browse different manufacturers (Sony, Microsoft, Nintendo) and view detailed specifications for their most iconic consoles.

This project was built using **Node.js** and the **Express** framework, utilizing **Handlebars** for templating and **LowDB** for JSON-based data persistence.

## Features & Views

### 1. Welcome (Homepage)
A high-impact landing page featuring:
*   An outline of the application's purpose.
*   Thematic hero imagery.
*   A "Pulse" animation and a JavaScript welcome alert for interactivity.

### 2. Dashboard (Collection Overview)
A categorized overview of the collection:
*   Displays major manufacturers as interactive UI Cards.
*   Uses **Icon-based hyperlinks** (Folder icons) to navigate to specific details, fulfilling the requirement for "Outstanding" navigation.
*   Data is pulled dynamically from `console-store.json`.

### 3. Collection Details
A deep-dive into specific manufacturer hardware:
*   Tabular layout showing Console Name, Release Year, Form Factor, and Best Selling Game.
*   Uses Fomantic-UI tables with custom styling.
*   "Back to Dashboard" navigation for seamless UX.

### 4. About Page
Provides context about the application:
*   **Developer Info:** Contact details and project description.
*   **App Statistics:** Dynamic stats (e.g., total consoles, manufacturers) loaded from a separate JSON store (`app-store.json`).
*   **Location Map:** A visual map image indicating the developer's location.

## Technical Implementation
*   **MVC Architecture:** Clear separation of Models (JSON stores), Views (Handlebars), and Controllers (Logic).
*   **Custom Styling:** A bespoke "Dark Mode" gaming aesthetic implemented via `public/style.css`, overriding default Semantic UI themes.
*   **Interactivity:** Used jQuery/JavaScript in `public/script.js` to add transitions and popup alerts.
*   **Data Persistence:** Uses `lowdb` to manage and read JSON collections.

## Requirements for "Outstanding" Grade Met:
- [x] 4+ Views implemented with full text and images.
- [x] Complete content served from JSON stores.
- [x] Icon-based navigation from Dashboard to Details.
- [x] Custom CSS styling (Gaming/Dark theme).
- [x] Well-commented controller and utility files.
- [x] Interactive JavaScript output (Popups/Transitions).

## Installation & Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the server via Nodemon.
4. Access the app at `http://localhost:3000`.

---
**Author:** Nikita Zdunek  
**Deadline:** Sunday 8th March  
**Submission:** https://choose-wad1-ca1-nz.onrender.com | https://github.com/20116783/wad1-ca1