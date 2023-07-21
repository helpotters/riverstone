import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

export function HomePage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      {posts
        .filter((post) => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <article
              key={post.id}
              className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
              <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                <time
                  datetime={post.frontmatter.date}
                  className="block text-xs text-gray-500"
                >
                  {post.frontmatter.date}
                </time>
                <a href={`${post.fields.slug}`} className="">
                  <h3 className="mt-0.5 text-lg no-underline font-medium text-gray-900">
                    {post.frontmatter.title}
                  </h3>
                </a>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    Snippet
                  </span>
                </div>
              </div>
            </article>
          );
        })}
    </Layout>
  );
}
export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "content" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
export default HomePage;
