import api from '../../services/api';
import { useState, useEffect } from 'react';
import './sidebar.css'



const Sidebar = ({setAllNotes})=>{
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  

 

  async function handleSubmit (e)  {
        e.preventDefault();

        const response = await api.post('/annotations', {title, notes, priority: false})

        setTitle('')
        setNotes('')

       
  }




  useEffect(()=>{
    function enabelSubmitButton(){
        const btn = document.getElementById('btn');
        btn.style.background= '# ';
        if(title && notes){
          btn.style.background = '#eb8f7a'
        }
    }

    enabelSubmitButton()
  },[title,notes])
  return(
        <div className='aside'>
        <strong>Caderno de notas</strong>
          <form onSubmit={handleSubmit}>

            <div className="input-block">
              <label htmlFor="title">Título da Anotação</label>
              <input maxLength={'50'} value={title} onChange={e=>setTitle(e.target.value)}></input>
            </div>
              <div className="input-block">
                <label htmlFor="nota">Anotações</label>
                <textarea value={notes} onChange={e=> setNotes(e.target.value)}></textarea>
              </div>
              <button id='btn' type="submit" >Salvar</button>

          </form>
              
          </div>
    )
}

export default Sidebar
