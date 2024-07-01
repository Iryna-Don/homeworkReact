import React, {FC, useEffect, useState} from "react";
import {IUser} from "../../Interfaces/IUser";
import {requests} from "../../Services/services.api";
import UserFullInfo from "../User/UserFullInfo";

type UsersProps={takePostsByUserId:(id:number)=>void}&{children?:React.ReactNode};
const Users: FC<UsersProps> = ({takePostsByUserId}) => {
    const [allUsers, setAllUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [skip, setSkip] = useState<number>(0);

    useEffect(() => {
        requests.getAllUsers(limit, skip).then(({data}) => {
            setAllUsers(data.users);
            setTotal(data.total);
        })
    }, [limit, skip]);


    return (
        <div>
            <button disabled={skip <= 0}
                    onClick={() => {
                        setSkip((skip - limit));
                    }
                    }>Previous</button>


            <button disabled={skip >= total - limit}
                    onClick={() => {
                        setSkip((skip + limit))
                    }}>Next</button>

            {allUsers.map(({
                               id,
                               firstName,
                               lastName,
                               maidenName,
                               age,
                               gender,
                               email,
                               phone,
                               username,
                               password,
                               birthDate,
                               image,
                               bloodGroup,
                               height,
                               weight,
                               eyeColor,
                               hair,
                               ip,
                               address,
                               macAddress,
                               university,
                               bank,
                               company,
                               ein,
                               ssn,
                               userAgent,
                               crypto,
                               role,

                           }) => <UserFullInfo key={id}
                                               id={id}
                                               firstName={firstName}
                                               lastName={lastName}
                                               maidenName={maidenName}
                                               age={age}
                                               gender={gender}
                                               email={email}
                                               phone={phone}
                                               username={username}
                                               password={password}
                                               birthDate={birthDate}
                                               image={image}
                                               bloodGroup={bloodGroup}
                                               height={height}
                                               weight={weight}
                                               eyeColor={eyeColor}
                                               hair={hair}
                                               ip={ip}
                                               address={address}
                                               macAddress={macAddress}
                                               university={university}
                                               bank={bank}
                                               company={company}
                                               ein={ein}
                                               ssn={ssn}
                                               userAgent={userAgent}
                                               crypto={crypto}
                                               role={role}
                                               takePostsByUserId={takePostsByUserId}
            />)}
        </div>
    );
};

export default Users;
