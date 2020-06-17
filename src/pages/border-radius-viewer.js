import React from "react"
import Layout from "../components/Layout"

import SEO from "../components/seo"

import ViewerBorderRadius from "../components/ViewerBorderRadius"

const BorderRadiusViewer = () => (
  <Layout>
    <SEO
      title="Border-radius Previewer"
      description="A propriedade border-radius pode ter vários valores alterados. Visualize a aparência da forma ao alterar esses valores."
      slugPath="border-radius-viewer"
    />
    <ViewerBorderRadius />
  </Layout>
)

export default BorderRadiusViewer
