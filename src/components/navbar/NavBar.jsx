import AsideBar from "../aside-bar/AsideBar";
import Seacher from "../seacher/Seacher";

import "./NavBar.css";

function NavBar() {

    return (
        <nav className="NavBarPedro bg-dark-subtle fixed-top">
            <AsideBar />
            <Seacher />
        </nav>
    );
};

export default NavBar;