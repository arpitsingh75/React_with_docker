import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./CourseSlice";

const Store = configureStore({
    reducer: {
        courses: courseReducer
    }
})

export default Store;