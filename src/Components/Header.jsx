import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/logIn'}>Home</NavLink>
            <NavLink to={'/signUp'}>Home</NavLink>
            <NavLink to={'/AddCoffee'}>Home</NavLink>
        </div>
    );
};

export default Header;