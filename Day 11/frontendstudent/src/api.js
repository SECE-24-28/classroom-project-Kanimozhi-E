import axios from "axios"
const API="http://localhost:5000/api/students";
export const getStudents=async()=>axios.get(API);//export const getStudents=async()=>axios.get(`${API}/getadddata`);
export const createStudent =(data)=>axios.post(API,data)