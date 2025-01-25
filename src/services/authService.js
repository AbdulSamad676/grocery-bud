import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase";

const auth = getAuth(app);

// Sign up function
export const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update the user's profile with their name
    await updateProfile(user, { displayName: name });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Log in function
export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user; // Return the logged-in user
  } catch (error) {
    throw new Error(error.message); // Handle login errors
  }
};
// Log out function
export const logOut = () => {
  return signOut(auth);
};
