import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  // Routes,
  // Route,
} from "react-router-dom";
import App from './App';
// import Ingredients from "./routes/ingredients";
// import Search from "./routes/search";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </React.StrictMode>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="ingredients" element={<Ingredients />} />
  //     <Route path="search" element={<Search />} />
  //   </Routes>
  // </BrowserRouter>

);

