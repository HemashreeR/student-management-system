import React, { useContext } from 'react'
import './StudentList.css'
import { send } from '../App'

const StudentList = () => {

  const { student_details, student_count, delete_function,refreshFunc, modalSetting} = useContext(send)

  return (
    <div className='stuDiv'>
      <div className="totalDiv">
        <div className="countDiv">
          <i className="fa-solid fa-users"></i>
          <h2 className='countHeding'>Total students: <span className='count'>{student_count}</span></h2>
        </div>
        <div className="refBtnDiv">
          <button className='refBtn' onClick={()=>refreshFunc()}><i className="fa-solid fa-rotate-right"></i>Refresh</button>
        </div>
      </div>
      <div className="stuList">
        <h2 className='listHeading'>Student List</h2>
        <div className="tabelDiv">

          <table className='stuTable' border={1}>
            <thead>

              <tr className="tablehead">
                <th className="thd">#</th>
                <th className="thd">Name</th>
                <th className="thd">Email</th>
                <th className="thd">Phone number</th>
                <th className="thd">Course</th>
                <th className="thd">CreatedAt</th>
                <th className="thd">Updated At</th>
                <th className="thd">Actions</th>
              </tr>
            </  thead>
            <tbody>
              {
                student_details.map((e, i) => {
                  return (
                    <tr className="tbr" key={i}>
                      <td className="tbd">{i + 1}</td>
                      <td className="tbd">{e.stuName}</td>
                      <td className="tbd">{e.email}</td>
                      <td className="tbd">{e.phone}</td>
                      <td className="tbd">{e.course}</td>
                      <td className="tbd">{new Date(e.createdAt).toLocaleDateString()}</td>
                      <td className="tbd">{new Date(e.updatedAt).toLocaleDateString()}</td>
                      <td className="tbd">
                        <button className='editBtn' onClick={()=>{modalSetting(e,true)}}><i className="fa-regular fa-pen-to-square"></i>Edit</button>
                        <button className='delBtn' onClick={() => { delete_function(e, i) }}><i className="fa-regular fa-trash-can"></i>Delete</button>
                      </td>
                    </tr>
                  )

                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentList
