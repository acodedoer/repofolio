import PropTypes from "prop-types"
import React from "react"

const Btn = ({clr, name}) =>(
    <button
        style={{backgroundColor: clr, color: 'white' ,borderRadius: '5px', outline:'none', border: 'none', paddingTop: '0.3rem', paddingBottom: '0.3rem', paddingLeft:'0.5rem', paddingRight:'0.5rem',boxShadow:'0px 1px 2px 0.2px #66663399', margin: '0.3rem'}}>
    {name}
    </button>
)

export default Btn