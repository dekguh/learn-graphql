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