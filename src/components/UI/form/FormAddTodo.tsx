import React from 'react'
import ButtonPrimary from '../control/ButtonPrimary'
import Input from '../control/Input'

const FormAddTodo = () => {
  return (
    <div>
        <div style={{ marginBottom: '8px' }}>
            <Input placeholder='title' type='text'/>
        </div>

        <div style={{ marginBottom: '8px' }}>
            <Input placeholder='title' type='date'/>
        </div>

        <div>
            <ButtonPrimary text='add todo'/>
        </div>
    </div>
  )
}

export default FormAddTodo