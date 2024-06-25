import React, {FC, useState} from "react";
import Character from "./Character";
import {sourceArraySimpsons} from "./data"
import {ICharacter} from "../Interfaces/ICharacter";
import styles from "./character.module.css"

const SelectNameOfCharacter: FC = () => {

    const namesCharacters = sourceArraySimpsons.map(elem => elem.character);
    const uniqueNames = Array.from(new Set(namesCharacters));
    let options = uniqueNames.map((elem, index) => <option key={index}>{elem}</option>);

    const [value, setValue] = useState('Choose A Character:');

    const chooseACharacterArr: ICharacter[] = sourceArraySimpsons.filter((elem): boolean => elem.character === value);
    let chooseArr:ICharacter[] = [];
    value === 'all' ? chooseArr = sourceArraySimpsons : chooseArr = chooseACharacterArr;
    let arrWithChosenCharacter: React.JSX.Element[] = chooseArr.map((elem, index) => <Character quote={elem.quote}
                                                                                                character={elem.character}
                                                                                                image={elem.image}
                                                                                                characterDirection={elem.characterDirection}
                                                                                                key={index}/>);
    return (<>
        <div>
            <label><select value={value}
                           onChange={(e) => setValue(e.currentTarget.value)}>
                <option disabled={true}>Choose A Character:</option>
                <option value={'all'}>All Characters</option>
                {options}
            </select></label>
        </div>
        <div className={styles.wrapperForCards}>
            {arrWithChosenCharacter}
        </div>
    </>)

}


export default SelectNameOfCharacter;