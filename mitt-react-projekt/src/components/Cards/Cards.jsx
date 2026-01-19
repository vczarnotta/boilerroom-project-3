import React from 'react'
import './Cards.css'

const Card = ({ title, description, icon, isDarkMode = false }) => {
    const cardTheme = isDarkMode ? 'card-dark' : 'card-light';
    const iconClass = isDarkMode ? 'card-icon-dark' : 'card-icon-light';


    return (
        <div className={`card-base ${cardTheme}`}>
            <img src={icon} className={`card-icon-base ${iconClass}`} alt="icon" />
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-content">
                {description}
            </div>
        </div>
    );
};

export default Card