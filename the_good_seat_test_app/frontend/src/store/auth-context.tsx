import React, { useState } from 'react';
import { SignInPayload } from '../models/auth.model';

type AuthContextObj = {
    isLogged: boolean;
    signUser: (token: string, id: string) => void;
    signOutUser: () => void;
}

export const AuthContext = React.createContext<{
    isLogged: boolean;
    signUser: (token: string, id: string) => void;
    signOutUser: () => void;
}>({
    isLogged: !!localStorage.getItem('token'),
    signUser: (token: string, id: string) => { },
    signOutUser: () => { }
})

type Props = {
    children?: React.ReactNode
}

const AuthContextProvider: React.FC<Props> = (props) => {
    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'))

    const signUser = (token: string, id: string) => {
        localStorage.setItem('token', token)
        localStorage.setItem('uid', id)
        setIsLogged(true)
    }

    const signOutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        setIsLogged(false);
    }

    const contextValue: AuthContextObj = {
        isLogged: isLogged,
        signUser: signUser,
        signOutUser: signOutUser
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContextProvider