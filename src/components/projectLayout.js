import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default function ProjectLayput({siteTitle, children}) {
  return (
    <Layout drawerStyle={'unfixed'}>
        <SEO title={siteTitle} />
      {children}
    </Layout>
  );
}
