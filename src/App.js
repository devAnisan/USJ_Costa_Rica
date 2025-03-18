import './App.css';
import Header from './components/header';
import BookList from './components/books';
import headerStyles from './styles/style_01';
function App() {
  return (
    <div className="App" style={headerStyles.main}>
      <Header/>
      <BookList/>
    </div>
  );
}

export default App;
