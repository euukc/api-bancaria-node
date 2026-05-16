
import express from 'express';
import userRouter from './routes/userRoute';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Backend!');
});

app.use('', userRouter); 

export default app; 