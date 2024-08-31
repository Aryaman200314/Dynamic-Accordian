import React, { useState } from 'react';
import './Accordion.css';
import data from './Data.js';
import heading from './Constants.js';

function Accordion() {
    const [expanded, setExpanded] = useState(null);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div>
            <nav className="navbar">{heading}</nav>
            <div className='accordion-holder'>
                <div className='accordions'>
                    {data.map((item, index) => (
                        <div className='items' key={index}>
                            <div className='heading' onClick={() => handleToggle(index)}>
                                <h2>{item.heading}</h2>
                                <span>{expanded === index ? '-' : '+'}</span>
                            </div>
                            <div className={`content ${expanded === index ? 'expanded' : ''}`}>
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accordion;
