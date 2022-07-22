/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Este es el mensaje de la etiqueta
    */
    label: string;
    /**
    * Todo capitalizado
    */
    allCaps?: boolean;
    /**
    * Este es el color de la etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de fuente
     */
    fontColor?: string;
    /**
     * Color personalizado de fuente
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
