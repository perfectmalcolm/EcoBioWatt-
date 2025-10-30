# EcoBioWatt Backend

This is the backend for the EcoBioWatt application, built with Node.js, Express, and Prisma (PostgreSQL).

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Configure Database:**
    Create a `.env` file in the `eco-backend` directory with your PostgreSQL connection string:
    ```
    DATABASE_URL="postgresql://user:password@localhost:5432/ecobiowatt_db"
    ```
    Replace `user`, `password`, and `ecobiowatt_db` with your actual database credentials.

3.  **Run Migrations and Seed Database:**
    ```bash
    npx prisma migrate dev --name init
    npx prisma db seed
    ```

## Running the Server

```bash
npm start
```

The server will run on `http://localhost:4000`.

## API Endpoints

*   `/api/overview`: Get overall system metrics.
*   `/api/energy`: Get energy log data.
*   `/api/efficiency`: Get efficiency data.
*   `/api/revenue`: Get revenue data.
*   `/api/system-health`: Get system health data.
*   `/api/activity`: Get recent activity data.
*   `/api/fleet`: Get mock fleet data.
*   `/api/users`: Get all user data (Admin only).
