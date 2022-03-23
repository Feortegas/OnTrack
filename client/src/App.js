import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/css/style.css';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import MeetTheDevs from './components/MeetTheDevs';
import Team from './components/Team';
import Issues from './components/Issues';

import PrivateRoute from './components/Routing/PrivateRoute';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route exact path='/dashboard' element={<PrivateRoute />}>
              <Route exact path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route exact path='/project' element={<PrivateRoute />}>
              <Route exact path='/project' element={<Project />} />
            </Route>
            <Route exact path='/team' element={<PrivateRoute />}>
              <Route exact path='/team' element={<Team />} />
            </Route>
            <Route exact path='/issues' element={<PrivateRoute />}>
              <Route exact path='/issues' element={<Issues />} />
            </Route>
            <Route path='/meetTheDevs' element={<MeetTheDevs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
