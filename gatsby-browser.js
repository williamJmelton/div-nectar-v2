import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import MdxComponents from "/src/components/mdxComponents"

const CodeWrapper = styled.div`
  width: 70%;
`


export const wrapRootElement = ({ element }) => {
  return <CodeWrapper>
      <MDXProvider components={MdxComponents}>{element}</MDXProvider>
    </CodeWrapper>
};
