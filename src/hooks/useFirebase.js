import { useEffect, useState } from "react";
import firebaseInitAuthentication from "../Firebase/firebaseInit";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'firebase/auth'


firebaseInitAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()

    // Google SignIn
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // Email Pass Sign In
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    // Create User with  Email And Pass
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    // Current User
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
            setIsLoading(false);
        })
    }, [auth]);

    // Logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                console.log('Logged Out Successfully');
            })
    };


    return {
        user, setUser,
        error, setError,
        googleSignIn,
        login,
        signUp,
        isLoading,
        logOut
    }

}

export default useFirebase;