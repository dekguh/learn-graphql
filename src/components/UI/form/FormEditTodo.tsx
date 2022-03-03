import React from 'react'
import { IFormAddTodo, IFormEditTodo } from '../../utils/types'
import ButtonPrimary from '../control/ButtonPrimary'
import Input from '../control/Input'

const FormEditTodo : React.FC<IFormEditTodo> = ({ titleOnChange, dateOnChange, editOnClick, setForm }) => {
    return (
        <div>
            <div style={{ marginBottom: '8px' }}>
                <Input
                    placeholder='title'
                    type='text'
                    onChange={titleOnChange}
                />
            </div>

            <div style={{ marginBottom: '8px' }}>
                <Input
                    placeholder='date'
                    type='date'
                    onChange={dateOnChange}
                />
            </div>

            <div>
                <ButtonPrimary
                    text='edit todo'
                    onClick={() => {
                        setForm(true)
                    }}
                />
            </div>
        </div>
    )
}

export default FormEditTodo