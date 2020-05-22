import React from 'react'

const divStyle = {borderBottom : '2rem solid white', textAlign: 'right', margin:'0px'}
const btnStyle = {marginTop:'0.2rem', marginBottom:'0.2rem', backgroundColor:'#e1e4e8', borderTop : '1px solid #e1e4e8',borderBottom : '1px solid #e1e4e8',display:'block', width:'100%', textAlign:'right',padding:'0.5rem'}

const Filter = ({levels, tags, types}) => (
    <div
        style={{
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'start',
           alignItems: 'stretch', 
           width: '15em',
           minHeight: '90vh',
           borderRight: '1px solid #e1e4e8',
           textAlign: 'right'
        }}>
            <div style={divStyle}>
                {levels.map(item => (<div style={btnStyle}><a href={`/levels/${item}`}>{item}</a></div>))}
            </div>
            <div style={divStyle}>
                {types.map(item => (<div style={btnStyle}><a href={`/types/${item}`}>{item}</a></div>))}
            </div>
            <div style={divStyle} >
                {tags.map(item => (<div style={btnStyle}><a href={`/tags/${item}`}>{item}</a></div>))}
            </div>
    </div>
)

export default Filter