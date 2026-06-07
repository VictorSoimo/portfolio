import express from 'express';

const app = express();
const port = 5000;

app.get('/api/hello', (req, res) => {
    res.send('hello world');
});

app.listen(port, () =>{
    console.log(`app listening on port ${port}`);
})