import React, {FC} from 'react';
import {ICharacter} from "../Interfaces/ICharacter";
import styles from "./character.module.css"
const Character: FC<ICharacter> = ({quote, character, image, characterDirection}) => {
    return (
        <div className={styles.characterCard}>
            <h2>{character}</h2>
            <p><em>{quote}</em></p>
            <img className={styles.imgCharacter} src={image} alt={character}/>
            <p>{characterDirection}</p>
        </div>
    );
};
export default Character;


