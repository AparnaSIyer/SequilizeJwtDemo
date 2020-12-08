import express,{Application} from 'express'; 
import authRoutes from './routes/auth.route';
// app variable is of type express' Application
const app: Application  = express();

//configurations
app.set('port', 5000);

app.use(express.json());
app.use('/api/auth',authRoutes);
export default app;