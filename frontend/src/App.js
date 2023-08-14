import './global.css'
import './app.css'
import api from './services/api'
import { useState, useEffect } from 'react';

import Sidebar from './components/sidebar/index.js';
import Card from './components/card/index.js';
import { getAll } from './services/getAll';




function App() {
  const [allNotes, setAllNotes] = useState([])
  
  useEffect(()=>{
    async function getNotes(){
      const response = await api.get('/annotations');
      setAllNotes(response.data);
    }
  
  getNotes()
  },[])
  
  async function handleChange() {
    const params = { priority: true };
    const response = await api.get('/priorities', { params });
    setAllNotes(response.data);
}
  async function getAllNotes(){
    const response = await getAll();
    setAllNotes(response.data)
  }
  
  return (
    <div className='app'>
      <aside>
          <Sidebar 
          allNotes={allNotes}
          setAllNotes={setAllNotes}
          
          />
       
      </aside>
      <main>
      <button className='btn-pri' onClick={handleChange}>Prioridade</button>  
      <button className='btn-pri' onClick={getAllNotes}>Todos</button>
        <ul className='lista'>
          {allNotes.map(data=>(
              <Card id={data._id}  title={data.title} notes={data.notes} priority={data.priority}/>
          ))}
          


        </ul>
      
      </main>

    </div>
  );
}

export default App;
