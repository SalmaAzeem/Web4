const express = require('express');
const sequelize = require('./database');
const taskRoutes = require('./routes/task_routes');
const userRoutes = require('./routes/user_routes');

const app = express();

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(err => console.error('Error syncing database:', err));
