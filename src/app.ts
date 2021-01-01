import express,{Application} from 'express'; 
import authRoutes from './routes/auth.route';
import * as cors from 'cors';
// app variable is of type express' Application
const app: Application  = express();

//configurations

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,content-type,Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials',true);
        res.setHeader('Access-Control-Expose-Headers', 'Content-Length,auth-token')
    // Pass to next layer of middleware
    next();
});

app.set('port', 5000);

app.use(express.json());
app.use(cors.default());
app.use('/api/auth',authRoutes);
export default app;