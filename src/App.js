import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RoutLayout from "./layout/RootLayout";
import SearchPage from "./Pages/SearchPage";
import LoginPage from "./Pages/LoginPage";
import { AuthContextProvider } from "./context/AuthContext";

import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import SignIn from "./Pages/SignIn";
import List from "./components/List";
import { FavoriteProvider } from "./context/FavoriteContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <FavoriteProvider>
            <Routes>
              <Route path="/" element={<RoutLayout />}>
                <Route index element={<LoginPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="account" element={<Account />} />
                <Route path="myList" element={<List />} />
              </Route>
            </Routes>
          </FavoriteProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
