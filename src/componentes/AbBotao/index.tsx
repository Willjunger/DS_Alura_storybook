import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background: #EB9B00;
    padding: 16px 32px;
    border: #EB9B00 2px solid;
    color: #fff;
    font-size:20px;
    cursor: pointer;
    &:hover{
        background: #B87900;
        border 2px solid #B87900;
    }
`

export const AbBotao = () => {
    return (
        <BotaoEstilizado>Clique Aqui</BotaoEstilizado>
    )
}