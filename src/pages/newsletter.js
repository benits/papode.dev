import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"
import FormMailChimp from "../components/FormMailChimp"

const NewsLetter = () => (
  <Layout>
    <SEO
      title="Formulário NewsLetter"
      description="Vai lá, não tenha medo. Se Registre na nossa NewsLetter."
    />
    <FormMailChimp />
  </Layout>
)

export default NewsLetter
