import React from 'react'

const Filter = ({levels, tags, types}) => (
    <div id="sideBar">
            <div className='sideGroup'>
                {levels.map((item,key) => (<div key={key} className="sideLink"><a href={`/${item.toLowerCase()}`}>{item}</a></div>))}
            </div>
            <div className='sideGroup'>
                {types.map((item,key) => (<div key={key} className="sideLink"><a href={`/${item.toLowerCase()}`}>{item}</a></div>))}
            </div>
            <div className='sideGroup'>
                {tags.map((item,key)=> (<div key={key} className="sideLink"><a href={`/${item.toLowerCase()}`}>{item}</a></div>))}
            </div>
    </div>
)

export default Filter