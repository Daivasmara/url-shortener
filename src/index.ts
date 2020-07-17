import 'module-alias/register';
import dotenv from 'dotenv';
import express from 'express';
import {
  cors,
  helmet,
  morgan,
  compress,
  notFound,
  errorHandler,
} from '@middlewares/index';
import v1 from '@v1/index';

dotenv.config();
const { NODE_ENV, PORT } = process.env;

// Express Initialization
const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome
app.get('/', (_req, res) => {
  res.json({
    message: 'URL Shortener API',
  });
});

// V1
app.use('/v1', v1);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Listening PORT
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
