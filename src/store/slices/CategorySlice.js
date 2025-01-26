// import { createSlice } from "@reduxjs/toolkit";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   getDoc,
// } from "firebase/firestore";
// import { db } from "../../../firebase"; // Adjust this path to your Firebase config

// // Step 1: Initial state
// const initialState = {
//   categories: [], // All categories
//   singleCategory: null, // Data of a single category
//   loading: false,
//   error: null,
// };

// const categorySlice = createSlice({
//   name: "categories",
//   initialState,
//   reducers: {
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     setCategories: (state, action) => {
//       state.categories = action.payload;
//     },
//     setSingleCategory: (state, action) => {
//       state.singleCategory = action.payload;
//     },
//     addCategory: (state, action) => {
//       state.categories.push(action.payload);
//     },
//     deleteCategory: (state, action) => {
//       state.categories = state.categories.filter(
//         (category) => category.id !== action.payload
//       );
//     },
//   },
// });

// // Export actions
// export const {
//   setLoading,
//   setError,
//   setCategories,
//   setSingleCategory,
//   addCategory,
//   deleteCategory,
// } = categorySlice.actions;

// // Async actions
// export const getAllCategories = () => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const querySnapshot = await getDocs(collection(db, "category"));
//     const categories = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     dispatch(setCategories(categories));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const addNewCategory = (category) => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const docRef = await addDoc(collection(db, "category"), category);
//     dispatch(addCategory({ id: docRef.id, ...category }));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const deleteCategoryById = (id) => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const docRef = doc(db, "category", id);
//     await deleteDoc(docRef);
//     dispatch(deleteCategory(id));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const getSingleCategory = (id) => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const docRef = doc(db, "category", id);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       dispatch(setSingleCategory({ id, ...docSnap.data() }));
//     } else {
//       dispatch(setError("Category not found"));
//     }
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// // Export reducer
// export default categorySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
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
    addListToCategory: (state, action) => {
      const { categoryId, newList } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.lists.push(newList);
      }
    },
    addItemToList: (state, action) => {
      const { categoryId, listName, newItem } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        const list = category.lists.find((list) => list.name === listName);
        if (list) {
          list.items.push(newItem);
        }
      }
    },
    deleteListFromCategory: (state, action) => {
      const { categoryId, listName } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.lists = category.lists.filter(
          (list) => list.name !== listName
        );
      }
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
  addListToCategory,
  addItemToList,
  deleteListFromCategory,
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

// Async actions for adding lists and items
export const addNewList = (categoryId, newList) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const categoryRef = doc(db, "category", categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (!categorySnap.exists()) throw new Error("Category not found!");

    const categoryData = categorySnap.data();
    const updatedLists = [...categoryData.lists, newList];

    await updateDoc(categoryRef, { lists: updatedLists });
    dispatch(addListToCategory({ categoryId, newList }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addItemToCategoryList =
  (categoryId, listName, newItem) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const categoryRef = doc(db, "category", categoryId);
      const categorySnap = await getDoc(categoryRef);

      if (!categorySnap.exists()) throw new Error("Category not found!");

      const categoryData = categorySnap.data();
      const updatedLists = categoryData.lists.map((list) =>
        list.name === listName
          ? { ...list, items: [...list.items, newItem] }
          : list
      );

      await updateDoc(categoryRef, { lists: updatedLists });
      dispatch(addItemToList({ categoryId, listName, newItem }));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

// Async action to delete a list from a category
export const deleteList = (categoryId, listName) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const categoryRef = doc(db, "category", categoryId);
    const categorySnap = await getDoc(categoryRef);

    if (!categorySnap.exists()) throw new Error("Category not found!");

    const categoryData = categorySnap.data();
    const updatedLists = categoryData.lists.filter(
      (list) => list.name !== listName
    );

    await updateDoc(categoryRef, { lists: updatedLists });
    dispatch(deleteListFromCategory({ categoryId, listName }));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Export reducer
export default categorySlice.reducer;
