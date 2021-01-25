import React from 'react';
import Picture from './Picture';
function Character({
    char
}) {
    return (
        <article className="character">
            <Picture char={char} />
        <ul>
          <li>Name: {char.name}</li>
          <li>Culture {char.culture}</li>
          <li>Born: {char.born}</li>
        </ul>
      </article>        
    )    
}

export default Character;