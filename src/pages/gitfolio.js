import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"

import Gitfolio from "../components/Gitfolio"

const Experience = () => (
  <Layout>
    <SEO
      title="Gitfolio"
      description="Sinta-se a vontade, e descubra tudo que eu já codei."
      slugPath="gitfolio"
    />
    <Gitfolio />
  </Layout>
)

export default Experience
