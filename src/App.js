import './App.css';
import Home from './components/home/Home';
import NewsComponent from './components/news/NewsComponent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Youtube</h1>
      <Home/>   
      <NewsComponent/>                                                             
    </div>
  );
}

export default App;
