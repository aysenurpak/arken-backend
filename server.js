const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}
));


const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

const { authenticateToken } = require('./services/authService');

app.use('/auth', authRoutes);

app.use('/users', authenticateToken, userRoutes);
app.use('/todos', authenticateToken, todoRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
