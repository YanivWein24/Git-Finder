import React,{FC} from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import './App.css';

const App:FC = () => {
  return (
    <div className="App">
    <Header />
    <Search />
    <Card />
    </div>
  );
}

export default App;
