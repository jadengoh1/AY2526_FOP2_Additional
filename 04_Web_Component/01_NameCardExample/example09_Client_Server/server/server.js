const express = require("express");
const app = express();
const cors = require("cors");

const HOST = '127.0.0.1';
const PORT = 8081;

const userArray = [
  {
      name: 'Peter Lee',
      contact: '6870 4321',
      email: 'peter@gmail.com',
      details: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
  },
  {
      name: 'Mary Tan',
      contact: '6776 1234',
      email: 'mary@gmail.com',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'

  },
  {
      name: 'John Hu',
      contact: '8870 3355',
      email: 'john@gmail.com',
      details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
  },
  {
      name: 'Sally Sun',
      contact: '1212 3355',
      email: 'sally@gmail.com',
      details: 'By injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
  },
  {
      name: 'Mark Lee',
      contact: '8523 7854',
      email: 'mL@gmail.com',
      details: 'Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
  },
  {
      name: 'Mark Lee 2',
      contact: '8523 7854',
      email: 'mL@gmail.com',
      details: 'Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
  },
  {
      name: 'Mark Lee 3',
      contact: '8523 7854',
      email: 'mL@gmail.com',
      details: 'Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
  }
];

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  console.log("Host is ready!");
  res.send("Your Data Host is Ready!");
});

app.get("/contact", function (req, res) {
  console.log("All contacts");
  res.status(200);
  res.type("application/json");
  res.json(userArray);
})

const server = app.listen(PORT, HOST, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});