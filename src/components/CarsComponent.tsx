import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";
import CarComponent from "./CarComponent";

interface IProps {
    allCars:ICarWithAuth[],
}
const CarsComponent:FC<IProps> = ({allCars}) => {
    return (
        <div>
            {allCars.map(car=><CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsComponent;