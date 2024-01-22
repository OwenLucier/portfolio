import Link from "next/link"
import handleScroll from "./SmoothScroll";
import { PropsWithChildren } from "react";

// NavLinkProps is an interface that defines the type of the props object
type NavLinkProps = PropsWithChildren & {
    href: string;
    title: string;
    classes?: string;
};

// NavLink is a React functional component that accepts a link and title prop from the NavBar component and applies styles
const NavLink = ({ href, title, classes }: NavLinkProps)=> {
    return (
        <button
            onClick={(event) => handleScroll(event, href)}
            className={`block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-0 font-semibold hover:text-white ${classes}`}
        >
            {title}
        </button>
    );
};

export default NavLink;