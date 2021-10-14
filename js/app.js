import Navbar from "./components/navbar.js";
import SideBar from "./components/sidebar.js";
import { appendTo } from "./controller/until.js";
import HomeView from "./view/homeView.js";

let $app = document.getElementById("app");
console.log($app)
    // appendTo($app, new Navbar({
    //     nameUser: 'chu ngoc binh',
    //     imgUser: 'https://cdn.tgdd.vn/Files/2017/12/15/1050674/img_5338_800x450_800x450.jpg'
    // }))
    // appendTo($app, new SideBar())
appendTo($app, new HomeView())