  import React, {useContext, useEffect, useState} from 'react';
  import {getAuth} from "firebase/auth";

  const AuthContext = React.createContext();

  export function useAuth() {
    return useContext(AuthContext);
  }

  export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)
    const auth = getAuth(); // Initialize the authentication instance
    function signup(email, password) {
      return auth.createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        setLoading(false)
      });
      return unsubscribe;
    }, []);


    const value = {
      currentUser,
      signup
    }
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  };

