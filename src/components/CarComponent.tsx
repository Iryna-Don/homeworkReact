import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    car: ICarWithAuth,
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <div>
            <h3><i>#{car.id}:</i> {car.brand}</h3>
            <p>Price: <b>{car.price}</b>€</p>
            <p>
                <img width={'200px'} src={car?.photo} alt={car.brand}/>
            </p>
        </div>
    );
};

export default CarComponent;