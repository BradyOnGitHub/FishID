        const express = require('express');
        const path = require('path');

        const app = express();
        const port = 3001;

        app.use(express.static(path.join(__dirname, 'public')));

        // app.get('/', (req, res) => {
        //   res.send('I love identifying fish!');
        // });

        app.listen(port, () => {
          console.log(`Server listening at http://localhost:${port}`);
        });