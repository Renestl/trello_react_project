import React from 'react';

/* Define Card Component Here*/
class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="title">{this.props.title}</div>
                <div className="description">{this.props.description}</div>
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
        const cards = this._getCards();

        return (
            <div id="up-next" className="card-column">
                <div className="card-column-title">Up Next</div>
                <div className="card-list">
                    {cards}
                </div>
            </div>
        );
        
    }

    _getCards() {
        const cardList = [
            {id: 1, title: "Take React Course", description:"code on code on code on code..."},
            {id: 2, title: "Learn React", description:"Take the first level of React"},
            {id: 3, title: "Plan Two Truths and a Lie", description:"Finish wireframe, start HTML layout and some other things..."}
        ];
        
         return cardList.map((cards) => {
            return (
                <Card key={cards.id} title={cards.title} description={cards.description}/>
            );
        })
    };
}

export default CardColumn;
