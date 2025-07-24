import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import '../Form.css'
import postUser from '../server.js'
import constants from '../constants.js'
import Loader from '../loader.jsx'


function FormPage(){
   
    const navigate = useNavigate()
    const location = useLocation();
    const isEditMode = location.state?.type === 'edit';
    const [isLoading, setisLoading] = useState(false);
    const [studentDetails, setStudentDetails] = useState({
        firstName: "",
        secondName: "",
        quota: "",
        tenth: "",
        twelth: "",
        department: "",
        gender: "",
        joinDate: "",
    });
    const [error,setError] = useState({
        firstName: "",
        secondName: "",
        quota: "",
        tenth: "",
        twelth: "",
        department: "",
        gender: "",
        joinDate: "",
    })
    
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current && inputRef.current.focus()
        console.log('use effect');
    },[]);

    useEffect(() => {
        if (location.state?.student) {
            setStudentDetails(location.state.student);
        } else {
            handleReset()
        }
    }, [location.state]);


    useLayoutEffect(()=>{
        console.log('use layout effect');
        
    },[])

    const handleInput = (e)=>{
        const {name, value} = e.target

        setStudentDetails((data) => ({
            ...data,
            [name]: value
        }));
        
        if(value!==""){
            setError((data)=>({...data,[name]:''}))            
        }
        else{
            console.log("entered else condition");
            
            let errorText = ''
            switch(name){
                case("firstName"): errorText='First Name is a required field'
                break;
                case("secondName"):errorText='Second Name is a required field'
                break;
                case("quota"):errorText='Select your quota'
                break;
                case("tenth"):errorText='Please enter your 10th marks'
                break;
                case("twelth"):errorText='Please enter your 12th marks'
                break;
                case("department"):errorText='Please select the department'
                break;
                case("joinDate"):errorText='Enter your joining date'
                break;
                case("gender"):errorText='select your gender'
                break;
                default:errorText = 'Some of the input fields were not filled'
            }
            setError((data)=>({...data,[name]:errorText}))
        }
    };
    
    const handleSubmit = async ()=>{
        console.log(studentDetails);
        // await postUser(studentDetails,constants.postApi)s
        setisLoading(true)
        navigate('/table',{state:[studentDetails]})
    };
    const handleReset = ()=>{
        setStudentDetails({
            firstName: '',
            secondName: '',
            quota: '',
            tenth: '',
            twelth: '',
            department: '',
            gender: '',
            joinDate: '',
        });
    };
    
    return(
            
            <div className="Parent">
                {isLoading && <div>Loading...</div>}
                <h1 className="Heading">Student Details</h1>
                <div className="Child">
                    <label className="Labels">Student First Name<span>*</span></label>
                    <input ref={inputRef} className="Inputs" name='firstName' type="text" placeholder="Enter Student First Name" value={studentDetails.firstName} onChange={(e)=>handleInput(e)}></input>
                    <span>{error.firstName}</span>

                    <label className="Labels">Quota<span>*</span></label><br></br>
                    <input className="RadioButton" type="radio" name='quota' value={'Govt'} checked={studentDetails.quota === "Govt"} onChange={(e)=>handleInput(e)}></input>
                     <label >Govt</label>
                    <input className="RadioButton" type="radio" name='quota' value={'Management'} checked={studentDetails.quota === "Management"} style={{
                        marginLeft:10
                    }} onChange={(e)=>handleInput(e)}></input>
                     <label >Management</label>
                     <span>{error.quota}</span>


                    <label className="Labels">10th Percentage<span>*</span></label>
                    <input className='Inputs' type={"text"} placeholder='Enter 10th marks' name='tenth' value={studentDetails.tenth} onChange={(e)=>handleInput(e)}></input>
                    <span>{error.tenth}</span>
                    
                </div>
                <div className="Child">
                    <label className="Labels">Student Second Name<span>*</span></label>
                    <input className="Inputs" type="text" placeholder="Enter Student Second Name" name='secondName' value={studentDetails.secondName} onChange={(e)=>handleInput(e)}></input>
                    <span>{error.secondName}</span>

                    <label className="Labels">Department<span>*</span></label>
                    <select name='department' className='dropdown' value={studentDetails.department} onChange={(e)=>handleInput(e)}>
                        <option value="" disabled hidden>Select Department</option>
                        <option >Mechanical</option>
                        <option>Civil</option>
                        <option>EEE</option>
                        <option>ECE</option>
                        <option>CSE</option>                    
                    </select>
                    <span>{error.department}</span>

                    <label className="Labels">12th Percentage<span>*</span></label>
                    <input name='twelth' className='Inputs' type={"text"} placeholder='Enter 12th marks' value={studentDetails.twelth} onChange={(e)=>handleInput(e)}></input>
                    <span>{error.twelth}</span>

                    
                </div>
                <div className="Child">
                    <label htmlFor="gender">Gender<span>*</span></label><br></br>

                    <input className="RadioButton" type="radio" id="gender" name='gender' value={'Male'} checked={studentDetails.gender === "Male"} onChange={(e)=>handleInput(e)}></input>
                    <label htmlFor="gender">Male</label>
                    <input className="RadioButton" type="radio" id="gender" name='gender' value={'Female'} checked={studentDetails.gender === "Female"} style={{
                        marginLeft:10
                    }} onChange={(e)=>handleInput(e)}></input>
                    <label htmlFor="gender">Female</label>
                    <input className="RadioButton" type="radio" id="gender" name='gender' value={'Others'}checked={studentDetails.gender === "Others"} style={{
                        marginLeft:10
                    }} onChange={(e)=>handleInput(e)}></input>
                    <label htmlFor="gender">Others</label>
                    <span>{error.gender}</span>

                    <label className="Labels">Date of Join<span>*</span></label>
                    <input className="Inputs" type={"date"} name='joinDate' value={studentDetails.joinDate} onChange={(e)=>handleInput(e)}></input>
                    <span>{error.joinDate}</span>
                    
                </div>
                <div className='parent'>
                    <button className="btnReset" onClick={handleReset} disabled={isEditMode} title={isEditMode ? "Reset is only available while updating the details." : ""}>Reset Details</button>
                    <button className="btnSubmit" onClick={handleSubmit} >{(location.state?.type==="edit")?"Update":"Submit"} </button>
                </div> 
                {}               
            </div>
            
            
    )
}

export default FormPage