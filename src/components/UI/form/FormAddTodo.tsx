import React from 'react'
import { IFormAddTodo } from '../../utils/types'
import ButtonPrimary from '../control/ButtonPrimary'
import Input from '../control/Input'

const FormAddTodo : React.FC<IFormAddTodo> = ({ titleOnChange, dateOnChange, createOnClick }) => {
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
                    text='add todo'
                    onClick={createOnClick}
                />
            </div>
        </div>
    )
}

export default FormAddTodo