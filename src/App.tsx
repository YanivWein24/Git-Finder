import React,{FC} from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import './App.css';

const App:FC = () => {
  return (
    <div className="App">
    <Header />
    <Search />
    </div>
  );
}

export default App;
