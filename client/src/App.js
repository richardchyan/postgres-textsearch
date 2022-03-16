import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit =  async(e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://postgres-search.herokuapp.com/people/?name=${name}`)
      const data = await response.json()
      setPeople(data)
    } catch (error) {
       console.log(error.message)   
    }

  };

  return (
    <div className="App">
      <h1 className="text-5xl text-[#5995da] underline decoration-black ">
          GlobalMart Employee Database
      </h1>
      {/* Form */}
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-lg border-2 border-black py-2 px-3 rounded-lg w-full max-w-screen-md"
          placeholder="Search for names here"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="bg-blue-400 rounded-md p-2 text-white border-4 border-blue-400 ">
          Submit
        </button>
      </form>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>  
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
              <td>{person.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* No found notice */}
      {people.length === 0 && <p className="text-lg">No people with that name found</p>}
    </div>
  );
}

export default App;
