import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './modules/book/BookController.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mounting routes
app.use('/api/book', bookRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
