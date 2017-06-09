import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="title">Take React Course</div>
                <div className="description">code on code on code on code...</div>
                <div className="actions">
                    <button className="delete-card">X</button>
                    <button className="complete-card">></button>
                </div>
            </div>
        )
    }
}

/* Column Component */
class CardColumn extends React.Component {
    render() {
        return (
            <div>
                <Card/>
            </div>
        );
    }
}

export default CardColumn;
