import express from 'express'
const app = express();

app.use(express.json());

app.get('/home',(req,res)=>{
  res.status(200).type("text/html").send('<h1 style="color:green;"> welcome to our home page!')
});

app.get('/about',(req,res)=>{
  res.status(200).type("text/plain").send('welcome to our about page!');
});

app.get("/students",(req, res)=>{
  const {studentId, name ,department, role} = req.query;
  res.status(200).json({
  id: studentId,
  name,
  department,
  role
  });
});
app.listen(3000,()=>{
  console.log('server is listening on port 3000');
});