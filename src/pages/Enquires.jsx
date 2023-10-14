import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export const Enquires = () => {
    const {c_id, c_name} = useParams();
    const userQueryRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(true);

    const submitForm = (e) => {
        e.preventDefault();
        const username = nameRef.current.value;
        const useremail = emailRef.current.value;
        const userquery = userQueryRef.current.value
        const formData = { "coursename":c_name, "username": username, "userquery": userquery, "useremail": useremail };
        if (formData.username !== "" && formData.useremail !== "") {
            // navigate to home
            navigate("/");
            setIsValid(true)
        }
        else {
            // throw an error
            setIsValid(false)
        }
    }

    return (
        <>
            <div className="min-h-screen flex justify-center bg-slate-900 text-white">
                <div className="m-10 border-2 border-white">
                    <h1 className="m-4 text-center underline">Enquiry{c_id}</h1>
                    
                    {isValid ? "" : <p className="text-red-600">Name and Email are mandatory fields.</p>}
                    
                    <label className="ml-8"><abbr className="text-red-800">*</abbr>Your Name: </label>
                    <input ref={nameRef} className="text-black mt-8 ml-3 w-60 mr-6 rounded" type="text" placeholder="  Enter Your Name" />
                    <br/>

                    <label className="ml-8"><abbr className="text-red-800">*</abbr>Your Email: </label>
                    <input ref={emailRef} className="text-black mt-8 ml-3 w-60 mr-6 rounded" type="text" placeholder="  Enter Your Email" />
                    <br/>
                    
                    <label className="ml-8">Your Doubt: </label>
                    <input ref={userQueryRef} className="text-black text-ellipsis mt-8 ml-3 mr-6 w-60 h-24 rounded" type="text" placeholder="  Enter Your Doubt here " />
                    <br/>
                    
                    <button onClick={submitForm} className='bg-orange-700 rounded-md mx-52 mt-2 px-2 text-white'>Submit</button>
                </div>
            </div>
        </>
    )
}
