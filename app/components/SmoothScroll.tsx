import React from 'react'

//handleScroll is a function that accepts an event and sectionId parameter and scrolls to the sectionId element.
const handleScroll = (event: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    event.preventDefault();
    const target = document.querySelector(`#${sectionId}`);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default handleScroll