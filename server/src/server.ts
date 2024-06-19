import express, { Application } from 'express';
import cors from 'cors';

import home from './routes/home';
import api from './routes/api';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(home);
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
