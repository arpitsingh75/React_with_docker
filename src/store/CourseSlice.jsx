const { createSlice } = require("@reduxjs/toolkit");

export const STATUS = {
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
}
const CourseSlice = createSlice({
    name: "courses",
    initialState: {
        data: [],
        status: STATUS.IDLE
    },
    reducers: {
        setCourse(state, action) {
            state.data = action.payload;
        },

        setStatus(state, action) {
            state.status = action.payload;
        }
    }
})

export const { setCourse, setStatus } = CourseSlice.actions;

export default CourseSlice.reducer;

export function fetchCourses() {
    return async function fetchCourseThunk(dispatch, getState){
        dispatch(setStatus(STATUS.LOADING))
        try{
            const res = await fetch("http://localhost:3000/courses")
            const data = await res.json();
            dispatch(setCourse(data));
            dispatch(setStatus(STATUS.IDLE))
        }
        catch(err){
            console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}