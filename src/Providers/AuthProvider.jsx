import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../Firebase/Firebase.config";

const auth = getAuth(app)


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // creating user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const signInUser =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;