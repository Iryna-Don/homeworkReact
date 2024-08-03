import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    allCars:ICarWithAuth[],
}
const CarsComponent:FC<IProps> = ({allCars}) => {
    return (
        <div>
            {allCars.map(car=><>{car.id}: {car.brand} - {car.price} <p><img src={car?.photo} alt={car.brand}/></p></>)}
        </div>
    );
};

export default CarsComponent;