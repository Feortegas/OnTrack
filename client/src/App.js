import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './styles/css/style.css';
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import MeetTheDevs from './components/MeetTheDevs';
import Team from './components/Team';
import Issues from './components/Issues';

const httpLink = createHttpLink({
	uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div>
				<Router>
					<main>
						<Header />
						<Routes>
							<Route path='/' element={<Landing />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/project' element={<Project />} />
							<Route path='/team' element={<Team />} />
							<Route path='/issues' element={<Issues />} />
							<Route path='/meetTheDevs' element={<MeetTheDevs />} />
						</Routes>
					</main>
					<Footer />
				</Router>
			</div>
		</ApolloProvider>
	);
}

export default App;
