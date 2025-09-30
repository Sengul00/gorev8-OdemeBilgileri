import { useState } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [code, setCode] = useState("");

  const bilgiMesaji=(e)=>{
    e.preventDefault();
    const mesaj=
      `Ödeme Bilgileri Alındı:
-------------------------
Kart Üzerindeki İsim: ${name}
Kart Numarası: ${number}
Son Kullanma Tarihi: ${month}/${year}
Güvenlik Kodu: ${code}`;
      alert(mesaj);
  };



  return (
  <div >
    <form onSubmit={bilgiMesaji} className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto mt-4">
      <h1 
    className="text-2xl font-bold text-gray-900 mb-2">
      Ödeme Bilgileri
    </h1>
    <h3 
    className="text-sm text-gray-500 mb-6">
      Kredi kartı bilgilerinizi giriniz
    </h3>
    <h3 
    className="block text-sm font-medium text-gray-700 mb-1">
      Kart Üzerindeki İsim
    </h3>
    <input 
    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150" 
    type="text" 
    placeholder="Ahmet Yılmaz" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <h3 
    className="block text-sm font-medium text-gray-700 mb-1 mt-4">
      Kart Numarası
    </h3>
    <input 
    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-150" 
    type="text" 
    placeholder="0000 0000 0000 0000"
    value={number}
    onChange={(e)=>setNumber(e.target.value)} 
    />
    <div className="flex space-x-4 mt-4">
      <div className="w-1/3">
        <h3 
        className="block text-sm font-medium text-gray-700 mb-1">
          Ay
        </h3>
        <select name="" id="" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none"
        value={month} onChange={(e)=>setMonth(e.target.value)}>
          <option value="" disabled selected>AA</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div className="w-1/3">
        <h3 
        className="block text-sm font-medium text-gray-700 mb-1">
          Yıl
        </h3>
        <select name="" id="" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none"
        value={year} onChange={(e)=>setYear(e.target.value)}>
          <option value="" disabled selected>YY</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
        </select>
        
      </div>
      <div className="w-1/3">
        <h3 
        className="block text-sm font-medium text-gray-700 mb-1">
          Güvenlik Kodu
        </h3>
        <input 
        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none" 
        type="text" 
        placeholder="123"
        value={code}
        onChange={(e)=>setCode(e.target.value)}
        />
      </div>
    </div>
    <button 
    type="submit"
    className="w-full py-3 mt-8 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 shadow-md" onClick={bilgiMesaji}>
      Şimdi Öde
    </button>
    </form>
    
  </div>
  );
};

export default App;
