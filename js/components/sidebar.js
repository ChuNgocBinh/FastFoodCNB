import BaseComponent from "./BaseComponent.js";

export default class SideBar extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = [
            { href: '#', className: 'active', icon: '<i class="fas fa-home"></i>', content: 'Home' },
            { href: '#', className: '', icon: '<i class="fas fa-utensils"></i>', content: 'Fastfood' },
            { href: '#', className: '', icon: '<i class="fas fa-cocktail"></i>', content: 'Drink' },
            { href: '#', className: '', icon: '<i class="fas fa-ice-cream"></i>', content: 'Cream' },
            { href: '#', className: '', icon: '<i class="fab fa-first-order"></i>', content: 'Order' },
            { href: '#', className: '', icon: '<i class="fas fa-truck"></i>', content: 'delivery service' },
            { href: '#', className: '', icon: '<i class="fas fa-cart-plus"></i>', content: 'Cart' },
            { href: '#', className: '', icon: '<i class="fas fa-phone-alt"></i>', content: 'contact' }
        ]
    }

    render() {
        let $sidebar = document.createElement("div");
        $sidebar.className = "sidebar";

        let $sidebarItem = this.state.map(item => {
            let $linkSidebar = document.createElement("a");
            $linkSidebar.href = item.href;
            $linkSidebar.className = item.className;
            $linkSidebar.innerHTML = item.icon + item.content;
            return $linkSidebar;
        })

        $sidebar.append(...$sidebarItem)

        return $sidebar;
    }
}