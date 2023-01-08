

import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import ReactSwitch from 'react-switch'
import router from './Routes/Routes/Routes';

export const ThemeContext = createContext(null);
// import ReactSwitch from "react-switch";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  
  return (
   <ThemeContext.Provider value={{ theme, toggleTheme }}>
     < div className='App max-w-[1440px] mx-auto' id={theme} >
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
     <div className="switch">
      
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
     
    </div>

   </ThemeContext.Provider>
  );
}

export default App;
