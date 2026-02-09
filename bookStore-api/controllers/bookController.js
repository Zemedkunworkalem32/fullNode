let books = [
  { id: 1, title: 'Book One', price: 25.5 },
  { id: 2, title: 'Book Two', price: 30 },
];

export const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

export const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
};

export const createBook = (req, res) => {
  const { title, price } = req.body;
  const newBook = { id: books.length + 1, title, price };
  books.push(newBook);
  res.status(201).json(newBook);
};
