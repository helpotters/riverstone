import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

export function HomePage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Products
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Catalog products.
            </p>
          </header>
          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Items */}
            {posts
              .filter((post) => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                const featuredImg = getImage(
                  post.frontmatter.featuredImage?.childImageSharp
                    ?.gatsbyImageData,
                );
                return (
                  <li key={post.id}>
                    <Link
                      to={post.fields.slug}
                      className="block overflow-hidden group"
                    >
                      <GatsbyImage
                        image={featuredImg}
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] bg-blue-400"
                      />

                      <div className="relative pt-3 bg-white">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                          {post.frontmatter.date}
                        </h3>

                        <p className="mt-2">
                          <span className="sr-only"> Date </span>
                          <span className="tracking-wider text-gray-900">
                            {post.frontmatter.title}
                          </span>
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
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
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default HomePage;
