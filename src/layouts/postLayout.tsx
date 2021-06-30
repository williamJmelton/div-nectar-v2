import React from "react"
import { MDXProvider } from "@mdx-js/react"
import codeWrapper from "../components/codeWrapper";

const customComponents = { codeWrapper }

export default function Layout({ children }) {
  return (
    <MDXProvider components={customComponents}>{children}</MDXProvider>
  )
}
