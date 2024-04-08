import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/articles" element={<ArticlesListPage />}></Route>
            <Route
              path="/articles/:articleId"
              element={<ArticlePage />}
            ></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route
              path="/create-account"
              element={<CreateAccountPage />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
