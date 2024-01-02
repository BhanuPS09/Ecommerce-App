import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../../firebase/firebase.db.js";

export const userContext = createContext({
    currentState: null,
    changeState: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentState, changeState] = useState(null);
    var value = { currentState, changeState };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener(async (user) => {

            if ((user !== undefined) && (user !== null)) {
                await createUserDocumentFromAuth(user);
            }

            changeState(user);
            console.log(user);

            return unsubscribe;

        })
    }, []);
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );

}