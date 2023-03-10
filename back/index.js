import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import categoryRoutes from './routes/category.js';
import productRoutes from './routes/product.js';

dotenv.config();

const app = express();

//db
mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log('DB ERROR => ', err));

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//router middleware
app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('server listening on port 3000');
});