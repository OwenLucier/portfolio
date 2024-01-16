import React from 'react'
import NavLink from './NavLink'

type MenuOverlayProps = {
    links: {
        title: string;
        href: string;
    }[]
};
/* MenuOverlay is a React functional component that accepts a 
links prop from the NavBar component and applies styles for mobile viewports */

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-12 text-4xl items-end">
        {links.map((link, index) => ( 
        <li key={index}>
        <NavLink href={link.href} title={link.title}/>
        </li>
        ))}
    </ul>
  )
}

export default MenuOverlay