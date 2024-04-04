import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries'. */
  children?: ReactChild;
}

export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './componentes/AbBotao';
export * from './componentes/Card';
export * from './componentes/AbTag';
export * from './componentes/AbGrupoOpcoes';
export * from './componentes/AbCampoTexto';