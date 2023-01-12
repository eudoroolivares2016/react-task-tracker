import React from 'react'
import PropTypes from 'prop-types'

// The event object can be accessed as well which has useful data in it

export const Button = ({color, text, onClick}) => {
  return (
            <button style= {{"backgroundColor": color}} onClick={onClick} className= "btn"> {text} </button> )
}

// If the components properties are not being set then they default to these values
Button.defaultProps = {
    color:'steelBlue'
}

// This is lowercase because it is a property of our Button "object"
// Most likely you want a button to click
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


export default Button