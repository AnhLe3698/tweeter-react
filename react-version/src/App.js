import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';

function App() {
  return (
    <body className="App">
      <Navigation />
      <Profile />
      <main className='container'>
        <TweetForm />
        <TweetList />
      </main>  
    </body>
  );
}

export default App;
