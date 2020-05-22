import PropTypes from "prop-types"
import React from "react"
import Btn from './btn'

const colors = {'levels':'#808080', 'newbie':'#899878', 'basic': '#CE796B', 'intermediary':'#829399', 'advanced': '#344966 ', 'expert':'#212D40', 'games': '#3D2645', 'productivity': '#58A4B0', 'static-page': '#3D348B', 'spa': '#7D4E57', 'full-site':'#364156', 'api-consuming':'#5A7D7C','plugin':'#A69888',
'cli-app':'#3F4045',
'fullstack':'#832161',
'backend':'#30321C',
'frontend':'#6B0504'}

const Tag = ({clr,item}) =>{
    {console.log(item)}
    return(
        <Btn clr={colors[clr]} name={item}/>
    )
}

export default Tag