import React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";


ReactDom.render(
  <div>
    <Heading />
    <Note />
    <Footer />
    
  </div>,
  document.getElementById("root")
);
