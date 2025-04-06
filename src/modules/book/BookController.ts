import { Router, Request, Response } from 'express';

const router = Router();

export class BookController {
  // GET /api/book/:id
  public async getBook(req: Request, res: Response): Promise<Response> {
    const bookId = req.params.id;
    console.log(`Fetching book with id: ${bookId}`);
    // Simulate fetching book info...
    return res.send(`Book info for id: ${bookId}`);
  }

  // GET /api/book/
  public async getAllBooks(req: Request, res: Response): Promise<Response> {
    // Simulate fetching all books...
    console.log("Request to fetch all books", req?.params);
    return res.send('All book info');
  }

  // POST /api/book/
  public async createBook(req: Request, res: Response): Promise<Response> {
    const { title, author } = req.body;
    // Simulate book creation...
    return res.send(`Book created: ${title} by ${author}`);
  }
}

const bookController = new BookController();

// Define routes using the controller methods
router.get('/', (req: Request, res: Response) => {
  return bookController.getAllBooks(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  return bookController.getBook(req, res);
});

router.post('/', (req: Request, res: Response) => {
  return bookController.createBook(req, res);
});

export default router;
