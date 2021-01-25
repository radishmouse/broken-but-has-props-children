import React form 'react';

function CharacterListContainer(props) {
    // example of "prop drilling"
    return (
        <div className="superFancyOldLooking">
            {props.children}
        </div>
    )
}

export default CharacterListContainer;