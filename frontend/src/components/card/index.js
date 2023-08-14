import './card.css'
import {AiOutlineDelete, AiOutlineExclamationCircle} from 'react-icons/ai'

import { apagarNota } from '../../services/apagarNota'
import { useState } from 'react'
import api from '../../services/api'
import { mudarPrioridade } from '../../services/mudarPrioridade'

const Card = ({id, title, notes,priority})=>{
  const [changedNote, setChangedNote] = useState('')

  async function handleSave(e, notes){
      if(changedNote&& changedNote !== notes  ){
        await api.post(`/contents/${id}`, {notes: changedNote})
      }
  }

  
  async function handleDelete() {
  
      await apagarNota(id)

  }
  async function handlePriority(){
    await mudarPrioridade(id);
  }

    return(

        <div className='container'>
         
          <li className={priority ? 'notepad-infos-priority' : 'notepad-infos'}>
          <AiOutlineDelete size='20'className='excluir' onClick={() => handleDelete()}></AiOutlineDelete>
            <div>
              <h1>{title}</h1>
              <div></div>
            </div>

            <textarea 
                defaultValue={notes}
               
                onChange={e=>setChangedNote(e.target.value)}
                onBlur={e=> handleSave(e.target, notes)}
            ></textarea>
           
            <span className={priority ? 'exclamation-priority' : 'exclamation'}>
              <AiOutlineExclamationCircle onClick={handlePriority}size='25'></AiOutlineExclamationCircle>
            </span>

          </li>
    

        </div>
    )
}
export default Card