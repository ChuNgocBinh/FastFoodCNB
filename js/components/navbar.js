import BaseComponent from "./BaseComponent.js";

export default class Navbar extends BaseComponent {

    render() {
        let $header = document.createElement("div");
        $header.className = "header";

        let $brand = document.createElement("div");
        $brand.className = "brand";
        $brand.innerHTML = `<i class="fas fa-hamburger"></i><span>FastFood</span>`

        let $searchFood = document.createElement("div");
        $searchFood.className = "searchFood";
        let $inputSearch = document.createElement("input");
        $inputSearch.placeholder = "Search...";
        let $btnSearch = document.createElement("button");
        $btnSearch.innerHTML = `<i class="fas fa-search"></i>`

        $searchFood.append($inputSearch, $btnSearch);

        let $info = document.createElement("div");
        $info.className = "info"

        let $interact = document.createElement("div");
        $interact.className = "info__interact";
        let $message = document.createElement("div");
        $message.className = "message";
        $message.innerHTML = '<i class="fas fa-comment-dots"></i>';
        let $inform = document.createElement("div");
        $inform.className = "inform"
        $inform.innerHTML = '<i class="fas fa-bell"></i>'
        $interact.append($message, $inform);

        let $user = document.createElement("div");
        $user.className = "info__user"
        let $userName = document.createElement("div");
        $userName.className = "userName"
        $userName.innerHTML = this.props.nameUser;
        let $userImg = document.createElement("img")
        $userImg.src = this.props.imgUser;
        $user.append($userName, $userImg);

        $info.append($interact, $user);

        $header.append($brand, $searchFood, $info)

        return $header;
    }
}