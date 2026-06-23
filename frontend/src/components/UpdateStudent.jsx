import React, { useContext } from 'react'
import './UpdateStudent.css'
import { send } from '../App'

const UpdateStudent = () => {

    const {updateStudent , selectedStudent, editedDetails} = useContext(send)
  return (
    <div className='updateForm'>
      <h1>update Student Details</h1>
      <div className="editFormDiv">
      <form action="" className='editForm'>
        <div className="editInputDiv">
          <label htmlFor="" className='editLabel'>Student Name</label>
        <input type="text" name="stuName" id="stuName" className="editInput" value={selectedStudent.stuName} onChange={(e)=>editedDetails(e)}/>
        </div>
        <div className="editInputDiv">
          <label htmlFor="" className='editLabel'>Student Email</label>
        <input type="text" name="email" id="email" className="editInput" value={selectedStudent.email} onChange={(e)=>editedDetails(e)}/>
        </div>
        <div className="editInputDiv">
          <label htmlFor="" className='editLabel'>Student Phone Number</label>
        <input type="text" name="phone" id="phone" className="editInput" value={selectedStudent.phone} onChange={(e)=>editedDetails(e)}/>
        </div>
        <div className="editInputDiv">
          <label htmlFor="" className='editLabel'>Course</label>
        <input type="text" name="course" id="course" className="editInput" value={selectedStudent.course} onChange={(e)=>editedDetails(e)}/>
        </div>
      </form>
      </div>
      <div className='editBtnDiv'>
      <button className="updateBtn" onClick={()=>updateStudent()}><i className="fa-solid fa-file-arrow-up"></i>Update</button>
      <button className='cancelBtn' onClick={()=>updateStudent()}><i className  ="fa-solid fa-xmark"></i>Cancel</button>
      </div>
    </div>
  )
}

export default UpdateStudent
