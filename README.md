# EcoBioWatt - Smart Energy Management Dashboard

EcoBioWatt provides a web-based intelligence dashboard that integrates data from local energy systems (e.g., solar, bio-waste, grid), and visualizes key metrics to empower businesses and institutions.

## Features

*   **Comprehensive Dashboards:** Dedicated dashboards for Admin and regular Users.
*   **Role-Based Access:** Secure login and signup with distinct functionalities for 'admin' and 'user' roles.
*   **Data Visualization:** Real-time insights into Energy Output, System Efficiency, Revenue & Financial Metrics, System Health, and Recent Activities & Alerts.
*   **Logistics Management:** Fleet tracking and delivery efficiency analytics.
*   **Reports:** Summarized metrics and visualizations for in-depth analysis.
*   **User Data Input:** Interface for users to submit data and view their submission history.
*   **Mocked PostgreSQL UI:** Admin dashboard includes a mocked interface to browse various database tables.
*   **Dark Mode:** User-friendly toggle for light and dark themes.

## Getting Started

This project is a monorepo containing both the frontend and backend applications.

### Prerequisites

*   Node.js (v18 or higher)
*   npm (v9 or higher)
*   PostgreSQL database server

### Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd EcoBioWatt
    ```

2.  **Backend Setup:**
    Navigate to the `eco-backend` directory and follow its `README.md` for setup instructions.
    ```bash
    cd eco-backend
    # Follow instructions in eco-backend/README.md
    ```

3.  **Frontend Setup:**
    Navigate to the `eco-frontend` directory and follow its `README.md` for setup instructions.
    ```bash
    cd ../eco-frontend
    # Follow instructions in eco-frontend/README.md
    ```

### Running the Application

1.  **Start the Backend Server:**
    ```bash
    cd eco-backend
    npm start
    ```

2.  **Start the Frontend Development Server:**
    ```bash
    cd ../eco-frontend
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

## Project Structure

*   `eco-backend/`: Node.js/Express/Prisma backend.
*   `eco-frontend/`: React/Vite frontend.

## Future Enhancements

*   Real-time data integration.
*   Advanced analytics and predictive modeling.
*   Comprehensive user management for administrators.
*   More robust authentication and authorization.
*   Deployment to cloud platforms.
