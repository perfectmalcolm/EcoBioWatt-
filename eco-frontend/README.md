# EcoBioWatt Frontend

This is the frontend for the EcoBioWatt application, built with React and Vite.

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

## Running the Application

1.  **Ensure Backend is Running:** Make sure the EcoBioWatt backend server is running (refer to `../eco-backend/README.md` for instructions).
2.  **Start Frontend Development Server:**
    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:5173`.

## Login Credentials (Mock)

*   **Admin User:**
    *   Username: `admin`
    *   Password: `admin`
*   **Regular User:**
    *   Username: `user`
    *   Password: `user`

## Features

*   **Login/Signup:** Basic authentication with role-based access.
*   **Admin Dashboard:** Comprehensive view of system metrics, users, and database tables (mocked PostgreSQL UI).
*   **User Input Page:** Allows regular users to submit data and view their submission history.
*   **Main Dashboard:** Overview of energy, efficiency, revenue, and system health.
*   **Logistics Page:** Fleet tracking and delivery efficiency analytics.
*   **Reports Page:** Summarized metrics and visualizations.
*   **Support Page:** Feedback submission.
*   **Dark Mode:** Toggle between light and dark themes.