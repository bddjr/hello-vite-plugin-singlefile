/* @refresh reload */
import { render } from "solid-js/web";
import viteLogo from "./assets/vite.svg";

import "./index.css";
import App from "./App";

render(() => <App />, self.root);

const linkIcon = document.querySelector("link[rel=icon]") as HTMLLinkElement;
linkIcon.href = viteLogo;
