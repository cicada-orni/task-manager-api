const express = require('express');
require('./db/mongoose');
const User = require('./models/users');
const Task = require('./models/tasks');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT



app.use(express.json());
app.use(userRouter)
app.use(taskRouter);

app.listen(3000, () => {
    console.log('Server is up on port ' + port);
});

// // const bcrypt = require('bcrypt');

// // const myFunction= async () => {
// //     const password = 'Red123456!'
// //     const hashedPassword = await bcrypt.hash(password, 8)
// //     console.log(password)
// //     console.log(hashedPassword)

// //     const isMatch = await bcrypt.compare('redfdfs', hashedPassword)
// //     console.log(isMatch);

// // }
// // myFunction()
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismystring', { expiresIn: '7 days' });
//     console.log(token);
//     const data = jwt.verify(token, 'thisismystring' );
//     console.log(data)
// }

// myFunction()