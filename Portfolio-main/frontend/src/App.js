import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Toaster } from "./components/ui/toaster";
import { ToastProvider } from "@/components/ui/toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Toaster />
        </ToastProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;