import express, { json } from "express";

const app = express();
const PORT = 3000;
app.use(json());

app.post('/', (req, res)=>{
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})

app.get('/', (req, res)=>{
      
    res.send(`Welcome Ansar`);
})
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
  
});
