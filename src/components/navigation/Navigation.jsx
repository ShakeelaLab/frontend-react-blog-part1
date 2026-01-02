import './Navigation.css';
import logomedium from "../../assets/logo-medium.png";
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <>
            <nav>
                <img className="company-logo" src={logomedium} alt="Company logo"/>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="/">
                            Home
                        </NavLink>
                        </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to="allposts">
                        Alle posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
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