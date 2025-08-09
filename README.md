## 🛠 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) account (Atlas or local instance)
- [Git](https://git-scm.com/) for cloning the repository


---

## 📥 Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/<your-username>/inspect-future.git
cd inspect-future

# Install backend dependencies
cd backend
npm install

# Create .env file in backend/ and add:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key

# Start the backend server
npm start

# Open a new terminal, navigate to frontend
cd ../frontend

# Serve the frontend locally
npx serve
