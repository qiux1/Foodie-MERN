import * as dotenv from 'dotenv'
dotenv.config();
import express, {Request, Response, Application} from 'express'
import cors from 'cors'
import helmet from 'helmet';
import {connect} from 'mongoose';

const app: Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(helmet());


app.all('*', (req: Request, res: Response)=>{
    res.status(404).json({message: "The route you requested is not found"})
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://xinyuqiu22:iQCpkI86MXMAToiJ@cluster0.9u970hd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(() => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("DB successfully");
  client.close();
});


const PORT = (process.env.PORT as unknown as number) || 5000



app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})
