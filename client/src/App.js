import {useState} from 'react'


function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date: '',
  })
  
  const handleChange = (e) => {
   setForm({...form, [e.target.name]: e.target.value})

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
   const res = await fetch('http://localhost:4000/transactions', {
      method: 'POST',
      body: form,
   })
    
    console.log(res)
    
  }
  return (
    <div className="App">
      <form  onSubmit= {handleSubmit}>
        <input type="number" name='amount' value={form.amount} placeholder='Enter Transaction amount' onChange={handleChange} />
        <input type="text" name='description' value={form.description} placeholder='Enter Transaction details' onChange={handleChange} />
        <input type="date" name='date' value={form.date} onChange={handleChange} />
        <button type='submit'>Submit</button>
     </form>
    </div>
  );
}

export default App;
