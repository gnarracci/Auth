import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import productsRoutes from './routes/products.routes';

const app = express();

app.set('pkg', pkg);

// Middlewares
app.use(morgan('dev'));

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
app.use('/products', productsRoutes);

export default app;