const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
    res.send('Hello from the server!!');
    //hello
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

