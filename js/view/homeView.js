import Navbar from "../components/navbar.js";
import SideBar from "../components/sidebar.js";
import { appendTo } from "../controller/until.js";
import BaseComponent from "../components/BaseComponent.js"

export default class HomeView extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                nameUser: 'chu ngoc binh',
                imgUser: 'https://cdn.tgdd.vn/Files/2017/12/15/1050674/img_5338_800x450_800x450.jpg'
            }
        }
    }

    render() {
        let $container = document.createElement("div");
        $container.className = 'container';

        let _Navbar = new Navbar(this.state.user);
        let _sidebar = new SideBar();

        let $sidebarHome = document.createElement('div');
        $sidebarHome.className = 'sidebarHome'
        appendTo($sidebarHome, _sidebar);

        let $content = document.createElement("div");
        $content.className = 'content';

        let $contentSlide = document.createElement("div");
        $contentSlide.className = 'content__slide'

        let $sologanTitle = document.createElement("h1");
        $sologanTitle.className = 'slide__title';
        $sologanTitle.innerHTML = 'FastFood Made With Love'

        let $slideSentence = document.createElement("p");
        $slideSentence.className = 'slide__sentence';
        $slideSentence.innerHTML = `If you don't have time to cook, Fast Food will be a great choice`

        let $btnOrder = document.createElement("button");
        $btnOrder.className = 'btn btnOrder';
        $btnOrder.innerHTML = 'Order Now';

        let $sliderLeft = document.createElement("div");
        $sliderLeft.className = 'slider__left';
        $sliderLeft.append($sologanTitle, $slideSentence, $btnOrder);

        let $slideImg = document.createElement("img");
        $slideImg.src = "./img/home-img.png"

        let $sliderRight = document.createElement("div");
        $sliderRight.className = "slider__right"
        $sliderRight.appendChild($slideImg);

        $contentSlide.append($sliderLeft, $sliderRight);





        $content.append($contentSlide)




        let $main = document.createElement("div");
        $main.className = 'main'
        $main.append($sidebarHome, $content)


        appendTo($container, _Navbar)
        $container.append($main)

        return $container

    }
}