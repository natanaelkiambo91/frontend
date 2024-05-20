import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Admin() {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    axios
      .get('http://localhost:8081/')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (NIM) => {
      try {
        await axios.delete('http://localhost:8081/Admin/'+NIM)
        window.location.reload()
      }catch(err) {
        console.log(err);
      }
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/Daftar" className='btn btn-success'>baru +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Fakultas</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody> 
            {students.map((student, i) => (
              <tr key={i}>
                <td>{student.NIM}</td>
                <td>{student.Nama}</td>
                <td>{student.Fakultas}</td>
                <td>
                  <Link to={`Updatesiswa/${student.NIM}`} className='btn btn-primary'>Update</Link>
                  <button className='btn btn-danger' onClick={e => handleDelete(student.NIM)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
