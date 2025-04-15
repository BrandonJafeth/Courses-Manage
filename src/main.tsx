import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CourseProvider from "./Context/CourseProvider.tsx";
import ThemeProvider from "./Context/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CourseProvider>
       
        <App />
      
      </CourseProvider>
    </ThemeProvider>
  </React.StrictMode>
);
