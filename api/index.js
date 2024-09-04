import express from 'express';
import dirname from '../dirname.cjs';
import path from 'path';

const app = express();

app.use(express.static(path.join(dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'index.html'));
});

console.log(dirname);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
