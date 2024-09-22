const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json()





);

// In-memory data store (this is a substitute for a database)
let users = [];

// 1. Create a new user (POST /users)
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1, // Simple id generation
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 2. Get all users (GET /users)
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/',(req,res)=>{
    res.send("hello-world!")
})


// 4. Delete a user (DELETE /users/:id)
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(userIndex, 1); // Remove user from the array
    res.json({ message: 'User deleted successfully' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

