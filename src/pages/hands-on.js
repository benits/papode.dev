import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"

import HandsOnComponent from "../components/HandsOnComponent"

const HandsOn = () => (
  <Layout>
    <SEO
      title="Hands-On"
      description="Aqui você pode ver na prática um pouco do que eu sei fazer. Nessa página listo alguns projetos práticos de estudo."
    />
    <HandsOnComponent />
  </Layout>
)

export default HandsOn
