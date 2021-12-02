const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./schemas');
const sequelize = require('./config/connection');
const model = require ('./models')
const routes = require('./controllers');
const PORT = process.env.PORT || 3001;
const app = express();


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/exercise',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
})
