const express = require('express');
// const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use('/tasks', taskRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(err => console.error('Error syncing database:', err));
