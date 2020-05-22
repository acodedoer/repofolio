import PropTypes from "prop-types"
import React from "react"

const Btn = ({clr, name}) =>{
    {console.log(clr)}
    return(
    <button
        style={{backgroundColor: clr, color: 'white' , outline:'none', border: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem', paddingLeft:'0.5rem', paddingRight:'0.5rem', marginRight: '1rem'}}>
    {name}
    </button>)
}

export default Btn