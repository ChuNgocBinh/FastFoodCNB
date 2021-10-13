import Navbar from "./components/navbar.js";
import { appendTo } from "./controller/until.js";

let $app = document.getElementById("app");
console.log($app)
appendTo($app, new Navbar())