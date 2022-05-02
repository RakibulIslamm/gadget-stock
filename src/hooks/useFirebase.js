import { useEffect, useState } from "react";
import firebaseInitAuthentication from "../Firebase/firebaseInit";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'


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

    // Email Sign In
    const login = (email, password, reset) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // Create User with  Email And Pass
    const signUp = (email, password, name, reset) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                user.displayName = name;
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {

                    })
                    .catch((error) => {
                        setError(error.Message)
                    })
                setUser(user)
                reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => {
                setIsLoading(false)
            })
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