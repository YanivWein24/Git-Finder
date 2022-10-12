import React,{FC, useState} from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import './App.css';

export type UserData = {
  name: string,
  userName: string,
  imageUrl: string,
  joinedAt:string,
  bio: string,
  publicRepos: string,
  followers: number,
  following: number,
  location:string,
  blog: string,
  twitter: string,
  company: string,
  repos: number
}

const App:FC = () => {

const [userData, setUserData] = useState<UserData>({
  name: '',
  userName: '',
  imageUrl: '',
  joinedAt:'',
  bio: '',
  publicRepos: '',
  followers: -1,
  following: -1,
  location:'',
  blog: '',
  twitter: '',
  company: '',
  repos: -1
})

  return (
    <div className="App">
    <Header />
    <Search setUserData={setUserData}/>
    {userData.name !== '' && <Card userData={userData}/>}
    </div>
  );
}

export default App;
