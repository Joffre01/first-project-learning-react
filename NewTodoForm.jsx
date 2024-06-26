import { useState } from "react"
export  function NewTodoForm(props){
    props.onSubmit
    const[newItem, setNewItem] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        if(newItem ==='') return
    
       props.onSubmit(newItem)
        setNewItem('')
      }
    return(
        <form  onSubmit={handleSubmit}className='new-item-form'>
        <div className='form-row'>
          <lable htmlFor='item'>New Item</lable>
          <input 
            value={newItem} onChange={e => setNewItem(e.target.value)}
          
          type='text' id='item' />
        </div>
        <button className='btn'>Add</button>
    
      </form>
    )

}
