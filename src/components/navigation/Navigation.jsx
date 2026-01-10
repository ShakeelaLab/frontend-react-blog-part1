import './Navigation.css';
import logomedium from "../../assets/logo-medium.png";
import {NavLink} from "react-router-dom";

function Navigation() {
    const getActiveClass = ({ isActive }) => isActive ? "active-menu-link" : "default-menu-link";

    return (
        <>
            <nav>
                <img className="company-logo" src={logomedium} alt="Company logo"/>
                <ul>
                    <li>
                        <NavLink
                            className={getActiveClass}
                            to="/">
                            Home
                        </NavLink>
                        </li>
                    <li>
                        <NavLink
                            className={getActiveClass}
                            to="allposts">
                        Alle posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={getActiveClass}
                            to="newpost">
                        Nieuwe post maken
                        </NavLink>
                        </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;