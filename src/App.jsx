import "./App.css";
import { Contact, Reviews, WhoAmI, WhoIsItFor } from "./components";

export const App = () => {
  return (
    <main className="content">
      <WhoAmI />
      <WhoIsItFor />
      {/* <WhatDoYouGet /> */}
      <Reviews />
      <Contact />
    </main>
  );
};
