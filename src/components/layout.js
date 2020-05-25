import React from 'react';
import Header from '../components/header'

function Layout(props) {
  
  const {children} = props
  return (
    <Header drawerStyle={props.drawerStyle}>
        {children}
    </Header>
  );
}

export default Layout;
