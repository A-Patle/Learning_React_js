import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google!",
};
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    {" "}
    Visit Google{" "}
  </a>
);

const anotherUser ="chai user 2";

const ReactElement1 = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click me to visit google othet part!",
  anotherUser

);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // anotherElement
  ReactElement1
  // <App />
  // </StrictMode>
);
