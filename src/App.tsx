import React, {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { UserData } from "./UserData";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import "./App.css";

export type globalContext = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<globalContext>({
  theme: "",
  setTheme: () => {},
});

const App: FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: -1,
    name: "",
    userName: "",
    imageUrl: "",
    joinedAt: "",
    bio: "",
    publicRepos: "",
    followers: -1,
    following: -1,
    location: "",
    blog: "",
    twitter: "",
    company: "",
    repos: -1,
  });

  const getLocalStorage = () => {
    let theme = localStorage.getItem("theme");
    return theme ? JSON.parse(theme) : "dark";
    // if there is a theme saved in local storage. use it. otherwise, use the default - "light"
  };

  const [theme, setTheme] = useState<string>(getLocalStorage);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <Header />
        <Search setUserData={setUserData} />
        {userData.id === -2 ? (
          <h1 className="error fade-in">
            ooops...
            <br />
            couldn't find user
          </h1>
        ) : (
          userData.id > 0 && <Card userData={userData} />
        )}
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
