import React from 'react';
import Layout from '../components/layout'

export default function ProjectLayput({children}) {
  return (
    <Layout drawerStyle={'notFixed'}>
      {children}
    </Layout>
  );
}
