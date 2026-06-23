import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import AddStudent from './components/AddStudent'
import SearchStudents from './components/SearchStudents'
import StudentList from './components/StudentList'
import UpdateStudent from './components/UpdateStudent'
import axios from 'axios'
import { toast } from 'react-toastify'


export const send = createContext()


const App = () => {
  const [data, setdata] = useState([])
  const [modal, setmodal] = useState(false)
  const [selectedStudent, setselectedStudent] = useState({
    stuName: "",
    email: "",
    phone: "",
    course: "",
  })
  const [newStudent, setnewStudent] = useState({
    stuName: "",
    email: "",
    phone: "",
    course: "",
  })

  const fetch_data = async () => {
    try {
      let d = await axios.get('http://localhost:5000/studentDetails/')
      setdata(d.data)
    }
    catch (e) {
      console.log(e, "There was error in fetching data")
    }
  }
  useEffect(() => {
    fetch_data()
  }, [])


  const info = {
    delete_function: async (ele, i) => {
      const confirmattion = confirm(`Do you want to delete the data of ${ele.stuName} the record will be permanently deleted`)
      if (confirmattion) {
        await axios.delete(`http://localhost:5000/studentDetails/${ele._id}`)
        fetch_data()
        toast.success(`Data of ${ele.stuName} was removed!.`)
      }
      else {
        toast.error(`Record was not deleted`)
      }
    },
    set_newStudent: (e) => {
      setnewStudent({
        ...newStudent,
        [e.target.name]: e.target.value
      }
      )
    },
    add_Student: async (e) => {
      e.preventDefault()
      try {

        let confirmation = confirm(`do you want to add the data of ${newStudent.stuName}`)
        if (confirmation) {
          if (newStudent.stuName.length < 1 || newStudent.email.length < 1 || newStudent.phone.length < 1 || newStudent.course.length < 1) alert("Please fill all the required details")
          else {
            await axios.post('http://localhost:5000/studentDetails/', newStudent)
            fetch_data()
            toast.success(`Student ${newStudent.stuName} record was added`)
            setnewStudent({
              stuName : "",
              email : "",
              phone : "",
              course : ""
            })
          }
        }
        else {
          toast.error(`${newStudent.stuName} was not added`)
        }
      }
      catch (e) {
        console.log(e, "there was error adding student")
      }
    },
    searchStu: async (name) => {
      let d = data.filter((e) => {
        if (e.stuName.toLowerCase().includes(name.toLowerCase()) ||e.email.toLowerCase().includes(name.toLowerCase()))
          return e
      })
      if (d.length < 1) toast.error(`no student record found with name ${name}`)
      setdata(d)

    },
    refreshFunc: async () => {
      let d = await axios.get('http://localhost:5000/studentDetails/')
      setdata(d.data)
    },
    modalSetting: (student, res) => {
      setmodal(res)
      setselectedStudent(student)
    },
    editedDetails :(e)=>{
      e.preventDefault()
      setselectedStudent({
        ...selectedStudent,
        [e.target.name] : e.target.value
      })

    },
    updateStudent: async() => {
      if(confirm("Confirm to update")){
        let id = selectedStudent._id
        await axios.patch(`http://localhost:5000/studentDetails/${id}`,selectedStudent)
        fetch_data()
        setmodal(false)
        toast.success(`details of ${selectedStudent.stuName} updated successfully`)
      }
      else{
        setmodal(false)
        toast.error("updation Failed")
      }

    },
    student_details: data,
    student_count: data.length,
    newStudent : newStudent,
    selectedStudent : selectedStudent
  }
  return (
    <send.Provider value={info}>
      <div className='appContainer'>
        <h1 className='mainHeading'>Student Management System</h1>
        <AddStudent />
        <SearchStudents />
        <StudentList />
        {
          modal && <UpdateStudent />
        }
      </div>
    </send.Provider>
  )
}

export default App
