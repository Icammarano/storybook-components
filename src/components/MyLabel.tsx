import './mylabel.css'

export interface MyLabelProps {
	/**
   	* Este es el tamaño de la etiqueta
   	*/
  	size: 'normal'|'h1'|'h2'|'h3';
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
}


export const MyLabel = ( { 
	label = 'No Label',
	size = 'normal',
	allCaps = false,
	color = 'primary',
	fontColor
}: MyLabelProps) => {
  return (
	<span 
		className={`label ${size} text-${color}`}
		style={{ color: fontColor }}
	>
		{ allCaps ? label.toUpperCase() : label}
	</span>
  )
}
