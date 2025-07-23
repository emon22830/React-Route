import React from 'react';
import { FiMenu } from "react-icons/fi";

const NavBar = () => {

const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact" },
  { id: 5, path: "/login", name: "Login" }
];



    return (
        <nav>
            <FiMenu></FiMenu>
<ul className="md:flex ">
    {
    routes.map(route => <Link key={route.id} route={route}></Link>)
}
</ul>
        </nav>
    );
};

export default NavBar;