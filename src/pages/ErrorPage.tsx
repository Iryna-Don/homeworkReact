import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className={'errorWrapper'}>
            <h1>Die gewünschte Seite existiert nicht </h1>
            <img width={'400px'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJADxsQcoyhC1zAhlPny9TD2NIcTVM2HZhg&s'} alt={'error 404'}/>
            <br/>
            <br/>
            <button className={'errorBtn'}><Link className={'withoutDecoration'} to={'./'}>Zur Startseite</Link></button>
        </div>
    );
};

export default ErrorPage;