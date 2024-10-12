import express from 'express';
import { json } from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(json());

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});