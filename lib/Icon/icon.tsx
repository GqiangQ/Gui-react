import React, { SVGAttributes } from 'react'

import classes from '../tools/classes'
import './icon.scss'
import './svg.js'

interface IconProps extends SVGAttributes<SVGElement> {
    name: string,
}
classes()
const Icon:React.FunctionComponent<IconProps> =
({className,name,...restProps})=> {
    return (
        // <svg className={`gui-icon ${className || ''}`} 
        <svg className={classes('gui-icon',className)}
            {...restProps} >
            <use xlinkHref={`#icon-${name}`} />
        </svg>
    )
}
export default Icon