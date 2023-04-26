const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);


app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening Port ${PORT}`)
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'))

app.get('/', (req, res) => {
  const title = 'Home Page'
  res.render(createPath('index'), { title });
})
app.get('/contacts', (req, res) => {
  const title = 'Contacts'
  const contacts = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/volodymyr-borshchuk-425301263/' },
    { name: 'Instagram', link: 'https://www.instagram.com/volodymyrborshuk/' },
    { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100004497062255' },
  ]
  res.render(createPath('contacts'), { contacts, title });
})
app.get('/posts/:id', (req, res) => {
  const title = 'Post';
  const post = {
    id: '1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    title: 'Post title',
    date: '05.05.2021',
    author: 'Yauhen',
  };
  res.render(createPath('post'), { title, post });
});

app.get('/posts', (req, res) => {
  const title = 'Posts';
  const posts = [
    {
      id: '1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
      title: 'Post title',
      date: '05.05.2021',
      author: 'Yauhen',
    },
  ];
  res.render(createPath('posts'), { title, posts });
});

app.post('/add-post', (req, res) => {
  const { title, author, text } = req.body;
  const post = {
    id: new Date(),
    date: (new Date()).toLocaleDateString(),
    title,
    author,
    text,
  };
  res.render(createPath('post'), { post, title });
});

app.get('/add-post', (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-post'), { title });
});

app.get('/about-us', (req, res) => {
  res.redirect('/contacts')
})

app.use((req, res) => {
  const title = 'Error Page'
  res
    .status(404)
    .render(createPath('error'), { title })
})