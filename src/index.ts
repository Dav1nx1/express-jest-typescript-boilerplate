import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.get('/', (_req: Request, res: Response) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})