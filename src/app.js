import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import {createRoles} from './libs/initialSetup';

import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import roleRoutes from './routes/role.routes';

const app = express();
createRoles();

app.set('pkg', pkg);
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Info
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        version: app.get('pkg').version,
        description: app.get('pkg').description
    });
});

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

export default app;