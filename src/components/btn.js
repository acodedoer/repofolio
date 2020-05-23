import PropTypes from "prop-types"
import React from "react"

const Btn = ({clr, label, name}) =>{
    {console.log(clr)}
    return(
    <button
        style={{color: 'white' , outline:'none', border: 'none', padding:0, marginRight: '1rem', marginBottom: '1rem', borderRadiust: '5px'}}>
    <div style={{backgroundColor: "#464655", display:'inline-block', paddingLeft:'0.4rem', paddingBottom:'0.1rem', paddingTop:'0.1rem'}}>{label}:</div><div style={{backgroundColor: clr, display:'inline-block', paddingRight:'0.4rem', paddingBottom:'0.1rem', paddingTop:'0.1rem'}}>{name}</div>
    </button>)
}

export default Btn