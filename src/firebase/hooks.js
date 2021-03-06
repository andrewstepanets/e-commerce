import { useState, useEffect } from 'react';

import { auth, createUserProfileDocument } from './firebase.utils';

export function useGoogleUser() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // add the user to the database if we have a new user
        createUserProfileDocument(userAuth).then((userRef) => {
          // listen for changes in the database
          if (userRef) {
            userRef.onSnapshot((snapShot) => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
            })
          }
        })
      } else {
        setCurrentUser(null)
      }
    })
    return unsubscribe
  }, [])
  return currentUser
}