import React from 'react';
import {useForm} from "react-hook-form";
import {IUserModel} from "../models/IUserModel";
import {joiResolver} from "@hookform/resolvers/joi";
import userRegistrValidator from "../validators/userRegistrValidator";
import {apiService} from "../services/api.service";

const AuthorizationFormComponent = () => {
    const {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IUserModel>({
        mode: 'all', resolver: joiResolver(userRegistrValidator), defaultValues: {
            username: 'IrynaDone', password: 'Spider-man1507'
        }
    });

    const authorization = (data: IUserModel) => {
        console.log(data);
        apiService.authUser(data).then(({data}) => {
            console.log(data);
            localStorage.setItem('tokenPair', JSON.stringify(data));
            localStorage.setItem('tokenAccess', data.access);
            localStorage.setItem('tokenRefresh', data.refresh);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(authorization)}>
                <input
                    type={'text'}
                    placeholder={'Enter your username'}
                    {...register('username')}
                />
                {errors.username && <div className={'red'}>Error: {errors.username?.message}</div>}
                <input
                    type={'password'}
                    // type={'text'}
                    placeholder={'Enter your password'}
                    {...register('password')}
                />
                <br/>
                <button disabled={!isValid}>Log In</button>
            </form>
        </div>
    )
        ;
};

export default AuthorizationFormComponent;