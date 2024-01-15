import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    id: "",
    nomorPemeriksaan: "",
    waktuPermintaan: "",
    unitPengirim: "",
    prioritasPemeriksaan: "tinggi",
    catatanPermintaan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic, you can send data to server or perform other actions
    console.log("Form Data:", formData);
  };

  return (
    <div className="App">
      <h2>Form Pemeriksaan</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />

        <label htmlFor="nomorPemeriksaan">Nomor Pemeriksaan:</label>
        <input type="text" id="nomorPemeriksaan" name="nomorPemeriksaan" value={formData.nomorPemeriksaan} onChange={handleChange} required />

        <label htmlFor="waktuPermintaan">Waktu Permintaan Pemeriksaan:</label>
        <input type="datetime-local" id="waktuPermintaan" name="waktuPermintaan" value={formData.waktuPermintaan} onChange={handleChange} required />

        <label htmlFor="unitPengirim">Unit Pengirim:</label>
        <input type="text" id="unitPengirim" name="unitPengirim" value={formData.unitPengirim} onChange={handleChange} required />

        <label htmlFor="prioritasPemeriksaan">Prioritas Pemeriksaan:</label>
        <select id="prioritasPemeriksaan" name="prioritasPemeriksaan" value={formData.prioritasPemeriksaan} onChange={handleChange} required>
          <option value="tinggi">0</option>
          <option value="sedang">1</option>
        </select>

        <label htmlFor="catatanPermintaan">Catatan Permintaan:</label>
        <textarea id="catatanPermintaan" name="catatanPermintaan" value={formData.catatanPermintaan} onChange={handleChange} rows="4" required />

        <button type="submit">Kirim Permintaan</button>
      </form>
    </div>
  );
}

export default App;
