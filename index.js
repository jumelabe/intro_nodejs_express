const express = require('express');
const app = express();
const port = 3000;

//Serve static files from the "public" folder
app.use(express.static('public'));
app.use(express.json());


app.post('/submit',(req,res )=> {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`)
})

//Define a route for the home page
app.get('/', (req,res)=>  {
    res.send('Hello, World!')
})

app.get('/items', (req, res) => {
    res.json(items);
});

const items = ['Apple','Banana','Orange'];

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
})

app.get('/about', (req,res) => {
    res.send('About Us')
})


//Start the server
app.listen(port, ()=> {
    console.log(`Sever running at http://localhost:${port}`);
})

//Logging Middleware
app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});