import { useEffect,useState } from "react";
import {getStudents} from "../api";
import{Link} from "react-router-dom";
function StudentList(){
    const[students,setStudents]=useState([]);
    const loadStudents=()=>{
        getStudents().then(res=>setStudents(res.data));
    };
    useEffect(()=>{
        loadStudents();
    },[]);
    return(
        <div>
        <h2>Student List</h2>
        <Link to="/add" >Add Student</Link>
        <table>

        <thead>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map(s=>(
                    <tr key={s.rollno}>
                        <td>{s.rollno}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </div>
    );
}
export default StudentList;