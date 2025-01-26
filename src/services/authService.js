// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { setUser, clearUser } from "../store/slices/AuthSlice";
// import app from "../../firebase";
// import store from "../store/store"; // Import the store to dispatch actions

// const auth = getAuth(app);

// // Sign up function
// export const signUp = async (email, password, name) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     // Update the user's profile with their name
//     await updateProfile(user, { displayName: name });

//     store.dispatch(setUser(user)); // Dispatch user to Redux store
//     return user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Log in function
// export const logIn = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     store.dispatch(setUser(user)); // Dispatch user to Redux store
//     return user;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Log out function
// export const logOut = () => {
//   return signOut(auth).then(() => {
//     store.dispatch(clearUser()); // Clear the user from Redux store on logout
//   });
// };

// // Firebase listener to listen to auth state changes
// export const listenToAuthStateChanges = () => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       store.dispatch(setUser(user)); // If the user is logged in, update Redux store
//     } else {
//       store.dispatch(clearUser()); // If the user is logged out, clear Redux store
//     }
//   });

//   return unsubscribe;
// };
