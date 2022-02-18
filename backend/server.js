const express = require('express');

//just show server is running
const app = express();
const PORT = 4000;
app.listen(PORT, function() {
    console.log(`server running on port ${PORT}`);
});