import { useEffect } from "react"
import { StackTiles} from "../components/Common/StackTiles";
import { NavLink } from "react-router-dom"
import { fetchCourses } from "../store/CourseSlice";
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])
    
    const { data, status} = useSelector(state => state.courses)

    const createHomePage = () => {
        return data.map((course) => {
            return <div key={course.id} className="ml-8 my-4 border-2 border-white text-white  hover:text-black hover:bg-white">
                <StackTiles id={course.id} title={course.title} author={course.author} duration={course.duration} />
                <NavLink to={`newquery/${course.id}/${course.title}`} className="float mx-60 bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4">Enquire</NavLink>
            </div>
        })
    }

    if (status === "loading") {
        return <h1>Loading...</h1>
    }
    if (status === "error") {
        return <h1>Error</h1>
    }
    return <>
        <div className="flex flex-cols flex-wrap justify-around bg-slate-900">
            {data && createHomePage()}
        </div>

    </>
}