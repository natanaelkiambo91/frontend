import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Updatesiswa() {
  const [Nama, setNama] = useState('')
  const [Fakultas, setFakultas] = useState('')
  const {NIM} = useParams()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if ( !Nama || !Fakultas) {
      setError("Semua bidang harus diisi!");
      return;
    }
    axios.put('http://localhost:8081/Updatesiswa/'+NIM, { Nama, Fakultas })
      .then(res => {
        setSuccess("Data berhasil ditambahkan!");
        navigate('/');
      }).catch(err => {
        setError("Terjadi kesalahan saat menambahkan data!");
        console.log(err);
      });
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-10'>
      <form onSubmit={handleSubmit}>
        <h2>Update Mahasiswa</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        
        <div className='mb-2'>
          <label htmlFor=''><strong>Nama Lengkap</strong></label>
          <input type="text" placeholder='Masukkan Nama Lengkap anda' className='form-control'
            value={Nama}
            onChange={e => setNama(e.target.value)} />

        </div>
        <div className='mb-2'>
          <label htmlFor=''><strong>Fakultas</strong></label>
          <input type="text" placeholder='Masukkan Fakultas anda' className='form-control'
            value={Fakultas}
            onChange={e => setFakultas(e.target.value)} />

        </div>
        <button className='btn btn-success'>Update</button>
      </form>
    </div>
  </div>
  )
}

export default Updatesiswa;