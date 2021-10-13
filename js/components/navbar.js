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
        $userName.innerHTML = 'Chu Binh';
        let $userImg = document.createElement("img")
        $userImg.src = "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/184902041_207216264577384_4695507257604592791_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=us1Pxdf2zpUAX-B17EW&_nc_ht=scontent.fhan2-2.fna&oh=9c01fca9f97d680f983bb37450623022&oe=618AC76B";
        $user.append($userName, $userImg);

        $info.append($interact, $user);

        $header.append($brand, $searchFood, $info)

        return $header;
    }
}