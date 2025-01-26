import { createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../../firebase";

// Initialize Firebase Authentication
const auth = getAuth(app);

// Define the initial state
const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

// Create the authSlice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearUser(state) {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Export actions
export const { setUser, clearUser, setLoading, setError } = authSlice.actions;

// Export reducer
export default authSlice.reducer;

// Firebase Authentication Thunks

// Sign Up
export const signUp = (email, password, name) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // Update the user's profile with the name
    await updateProfile(user, { displayName: name });
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Log In
export const logIn = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Log Out
export const logOut = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Listen to Authentication State Changes
export const listenToAuthStateChanges = () => (dispatch) => {
  dispatch(setLoading(true));
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(clearUser());
    }
    dispatch(setLoading(false)); // Set loading to false once the state change is detected
  });
};
