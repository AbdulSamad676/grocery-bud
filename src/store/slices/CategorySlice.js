import { createSlice } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebase"; // Adjust this path to your Firebase config

// Step 1: Initial state
const initialState = {
  categories: [], // All categories
  singleCategory: null, // Data of a single category
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSingleCategory: (state, action) => {
      state.singleCategory = action.payload;
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

// Export actions
export const {
  setLoading,
  setError,
  setCategories,
  setSingleCategory,
  addCategory,
  deleteCategory,
} = categorySlice.actions;

// Async actions
export const getAllCategories = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const querySnapshot = await getDocs(collection(db, "category"));
    const categories = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setCategories(categories));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addNewCategory = (category) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const docRef = await addDoc(collection(db, "category"), category);
    dispatch(addCategory({ id: docRef.id, ...category }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteCategoryById = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const docRef = doc(db, "category", id);
    await deleteDoc(docRef);
    dispatch(deleteCategory(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getSingleCategory = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const docRef = doc(db, "category", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(setSingleCategory({ id, ...docSnap.data() }));
    } else {
      dispatch(setError("Category not found"));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Export reducer
export default categorySlice.reducer;
