import React, { useEffect, useState } from 'react'
import axios from 'axios';


function SIswa() {
  const [student, setStudent] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8081/')
    .then(response => response.json())
    .then(res => setStudent(res.data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded'>
        <button className='btn btn-success'>Add +</button>
        <table className='table'>
          <thread>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Fakultas</th>
            </tr>
          </thread>
          <tbody> 
          {
            student.map((data, i) => (
              <tr key={i}>
                <td>{data.NIM}</td>
                <td>{data.Nama}</td>
                <td>{data.Fakultas}</td>
              </tr>
            ))
          }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SIswa