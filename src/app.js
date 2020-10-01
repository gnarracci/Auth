import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.set('pkg', pkg);

// Middlewares
app.use(morgan('dev'));
app.use(express.json())

// Info
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        version: app.get('pkg').version,
        description: app.get('pkg').description
    });
})

// Routes
app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);

export default app;