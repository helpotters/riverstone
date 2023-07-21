import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

export default function ProductPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="container">
        <div className="flex justify-center items-center">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </div>
        <article className="prose">
          <section dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
