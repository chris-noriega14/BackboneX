import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import Home from './pages/Home';
// import Signup from './Components/Hero/Signup';
// import Login from './Components/Hero/Login';
import Mylist from '../src/Pages/Exercise/Mylist'
// import Exercises from '../src/Pages/Exercise/Exercises'
import Ball from '../src/Pages/Exercise/Ball'
import Stretch from '../src/Pages/Exercise/Stretch'
import Band from '../src/Pages/Exercise/Band'
import Nav from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import Category from './Pages/Exercise/Category';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });



const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <div className="container">
            <Route exact path="/">
              <Hero />
            </Route>
            <Route exact path="/exercises">
              <Category />
            </Route>
            <Route exact path="/mylist">
              <Mylist />
            </Route>
            <Route exact path="/exercise/ball">
              <Ball />
            </Route>
            <Route exact path="/exercise/stretch">
              <Stretch />
            </Route>
            <Route exact path="/exercise/band">
              <Band />
            </Route>
          </div>
          <Contact />
        </div>
      </Router>
    </ApolloProvider>
  );
}


    
      {/* <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <div className="container">
            <Route exact path="/">
              <Hero />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            
          </div>
          <Contact />
        </div>
      </Router>
     */}
    


export default App;

