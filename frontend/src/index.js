import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import UserPage from './components/UserPage';
import UnknownPage from "./pages/UnknownPage";


//I added url for homepage and About page, Nima
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="about" element={<AboutPage />} />
        <Route path="userpage" element={<UserPage username={"Nima"}/>} />
        </Route>
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
