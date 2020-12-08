import mongoose from 'mongoose';

const dbUri='mongodb+srv://aparna_31:test123@cluster0.1d44q.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose
.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
.then((result)=>{console.log('Database connected')})
.catch((err) => console.log(err));

