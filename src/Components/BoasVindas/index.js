import React from 'react';
import Mensagem from '../Mensagems'
import './BoasVindas.css'

export default function BoasVindas(){
    return(
        <div >
            <h1 className="boas-vindas">Sejam Todos Bem Vindos</h1>
            <h2 >React na Veia</h2>
            <Mensagem/>
        </div>
    );
}