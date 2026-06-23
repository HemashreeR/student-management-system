import React, { useContext } from 'react'
import './AddStudent.css'
import { send } from '../App'


const AddStudent = () => {

    const { set_newStudent , add_Student , newStudent} = useContext(send)
    return (
        <div>
            <div id="container">
                <form action="" id="form">
                    <h3 className="formHeading">Add Student</h3>
                    <div className="inputs">

                    <div className="inputDiv">
                        <label htmlFor="stuName" className="formLabel">Student Name</label>
                        <input type="text" name="stuName" id="stuName" className="formInput" placeholder="Enter name" value = {newStudent.stuName} onChange={(e)=>set_newStudent(e)}/>
                       <i  className="formIcons fa-regular fa-user" ></i>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="email" className="formLabel">Email</label>
                        <input type="email" name="email" id="email" className="formInput" placeholder='Enter email' value = {newStudent.email}  onChange={(e)=>{set_newStudent(e)}}/>
                        <i  className="formIcons fa-regular fa-envelope"></i>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="phno" className="formLabel">Phone Number</label>
                        <input type="tel" name="phone" id="phno" className='formInput' placeholder='Enter phoneNumber' value = {newStudent.phone}  onChange={(e)=>{set_newStudent(e)}}/>
                        <i  className="formIcons fa-solid fa-phone"> </i>
            
                    </div>
                    <div className="inputDiv">

                        <label htmlFor="course" className="formLabel">Course</label>
                        <input type="text" name="course" id="course" className="formInput" placeholder='Enter course' value = {newStudent.course}  onChange={(e)=>{set_newStudent(e)}}/>
                        <i  className="formIcons fa-solid fa-graduation-cap"></i>
                    </div>
                    </div>
                    <div className="buttons">
                        <button className='addStudent'onClick={(e)=>add_Student(e)}><i className="fa-solid fa-circle-plus"></i> Add Student</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddStudent
