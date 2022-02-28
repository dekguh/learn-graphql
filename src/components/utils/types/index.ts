import { ChangeEventHandler, MouseEventHandler } from 'react'

export interface IButton {
    text?: string;
    onClick?: MouseEventHandler;
    style?: object;
}

export interface IInput {
    placeholder?: string;
    onChange?: ChangeEventHandler;
    value?: string;
    style?: object;
    type?: 'text' | 'password' | 'email' | 'number' | 'date';
}

export interface IAlert {
    type?: 'danger' | 'info';
    text?: string;
}

export interface IFormAddTodo {
    titleOnChange?: ChangeEventHandler;
    dateOnChange?: ChangeEventHandler;
    createOnClick?: MouseEventHandler;
}

export interface IListTodo {
    list?: Array<any>;
    refetchList: () => any;
}