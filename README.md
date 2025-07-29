# Job Listing Application (Next.js, Redux Toolkit, and Tailwind CSS)

This project is a fully functional, responsive job listing application built with Next.js and styled with Tailwind CSS. It serves as a practical demonstration of modern web development techniques, including API integration, advanced state management with Redux Toolkit, component-based architecture, and dynamic routing.

This application was an update to a previous version, specifically to fulfill the requirements of a task focused on replacing static data with a live API. The primary goal was to build a robust frontend that handles asynchronous data fetching, loading, and error states gracefully.

## Features

-   **Live API Integration:** Fetches and displays job opportunities from a live backend API, ensuring the content is always up-to-date.
-   **Efficient State Management:** Utilizes **Redux Toolkit and RTK Query** to handle all API interactions, providing robust caching, automatic re-fetching, and seamless management of loading and error states.
-   **Dynamic Routing:** Employs the Next.js App Router to create unique, shareable URLs for each job detail page (e.g., `/jobs/[id]`).
-   **Responsive Design:** The layout is fully responsive, crafted with Tailwind CSS to provide an optimal viewing experience on devices of all sizes, from mobile phones to desktops.
-   **Component-Based Architecture:** Built with reusable React components (e.g., `JobCard`, `InfoItem`, and individual SVG icons) to ensure the codebase is clean, maintainable, and scalable.
-   **Modern Tech Stack:** Written entirely in **TypeScript** for enhanced code quality and developer experience.

## Page Previews

Here is a preview of the main pages and states of the application.

### 1. Job Listing Dashboard

This is the main landing page, showcasing a list of available job opportunities fetched from the live API. The page includes clear loading and error states to inform the user of the application's status.

<img width="902" height="433" alt="image" src="https://github.com/user-attachments/assets/fc150863-ce13-4d50-893f-a224643e25d9" />
<img width="905" height="437" alt="image" src="https://github.com/user-attachments/assets/549da312-02b6-451f-b966-0fa4594029e9" />
<img width="905" height="431" alt="image" src="https://github.com/user-attachments/assets/3f5a54b5-04af-463c-966d-e2d27c18a5bc" />



### 2. Job Detail Page

When a user clicks on a job card from the dashboard, they are navigated to this detailed view. This page fetches specific data for the selected job and presents it in a clean, two-column layout that matches the Figma design.

<img width="770" height="428" alt="image" src="https://github.com/user-attachments/assets/ccdabb9e-67d0-4adb-9a1a-0373602a44cb" />
<img width="777" height="429" alt="image" src="https://github.com/user-attachments/assets/4fc1fc27-bd9c-4faf-871d-783517f93431" />



### 3. Loading and Error States

The application provides a seamless user experience by handling asynchronous states gracefully.

<img width="865" height="425" alt="image" src="https://github.com/user-attachments/assets/efa415e2-cac7-4af3-bb86-fa80ef18cd51" />
<img width="890" height="425" alt="image" src="https://github.com/user-attachments/assets/0d094e52-bd20-4e58-b08b-331a0df43976" />




## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18.x or later) and npm installed on your computer.

## Installation & Setup

1.  **Clone the repository:**

    Open your terminal and clone this repository to your local machine.
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd YOUR_REPOSITORY_NAME
    ```

3.  **Install dependencies:**

    Use npm to install all the required project dependencies listed in `package.json`.
    ```bash
    npm install
    ```

## Running the Application

Once the installation is complete, you can run the development server.

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  **Open the application in your browser:**

    Open your web browser and navigate to `http://localhost:3000`. You should now see the Job Listing Dashboard.


## Project Structure

The project follows a modern Next.js App Router structure, with a clear separation of concerns.

```plaintext
/
├── app/                      # Main application folder
│   ├── components/           # Reusable React components
│   │   └── icons/            # Dedicated, reusable SVG icon components
│   ├── jobs/                 # Dynamic routing for job details
│   │   └── [id]/
│   │       └── page.tsx      # The page template for a single job
│   ├── services/             # RTK Query API slice definition
│   ├── store/                # Redux store configuration
│   ├── Providers.tsx         # Client-side provider for Redux
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page (Job Listing Dashboard)
│   └── types.ts              # Centralized TypeScript type definitions
├── public/                   # Static assets (e.g., favicon)
└── README.md                 # Project README file
