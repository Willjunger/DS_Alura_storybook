import React from "react";
import styled, { css } from "styled-components";

export interface AbBotaoProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
    onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#fff'};
    padding: 16px 32px;
    border: #EB9B00 2px solid;
    font-size:20px;
    cursor: pointer;
    color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#fff' : '#EB9B00'};
    ${(props: AbBotaoProps) => props.tipo === 'primario'
        ? css`
            &:hover{
                background: #B87900;
                border 2px solid #B87900;
            }
        `
        : css``};
            &:hover{
                background: #fff;
                border 2px solid #B87900;
                color: #B87900;
            }
`

export const AbBotao = ({ texto, onClick, tipo = 'primario' }: AbBotaoProps) => {
    return (
        <BotaoEstilizado tipo={tipo} onClick={onClick}>{texto}</BotaoEstilizado>
    )
}