import Router from "@/routers/Router";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // clear storage localstorage
    localStorage.clear();
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
