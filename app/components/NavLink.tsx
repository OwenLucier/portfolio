import Link from "next/link"
import handleScroll from "./SmoothScroll";

// NavLinkProps is an interface that defines the type of the props object
type NavLinkProps = {
    href: string;
    title: string;
};

// NavLink is a React functional component that accepts a link and title prop from the NavBar component and applies styles
const NavLink = ({ href, title }: NavLinkProps)=> {
    return (
        <button
            onClick={(event) => handleScroll(event, href)}
            className="block py-2 pl-3 pr-4 text-gray-500 sm:text-xl rounded md:p-0 font-semibold hover:text-white"
        >
            {title}
        </button>
    );
};

export default NavLink;