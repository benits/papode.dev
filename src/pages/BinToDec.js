import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"

import BinToDecComponent from "../components/BinToDecComponent"

const BinToDecPage = () => (
  <Layout>
    <SEO
      title="Bin2Dec - Number Converter"
      description="Conversor de Número."
      slugPath="BinToDec"
    />
    <BinToDecComponent />
  </Layout>
)

export default BinToDecPage
