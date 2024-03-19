import React from "react";
import NavPar from "./componantes/NavPar/index";
import HomePage from "./pages/Home/index";
import Trending from "./pages/Trending/index";
import Store from "./pages/Store/index";
import News from "./pages/News/index";
import Contact from "./pages/Contact/index";
import Feed from "./pages/Feed/index";
import Footer from "./pages/Footer/index";

function App() {
  return (
    <>
      <NavPar />
      <HomePage />
      <Trending />
      <Store />
      <News />
      <Contact />
      <Feed />
      <Footer />
    </>
  );
}

export default App;
