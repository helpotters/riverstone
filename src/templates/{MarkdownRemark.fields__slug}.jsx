import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from 'src/components/Layout';
import SEO from 'src/components/SEO';

export default function ProductPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { fields, frontmatter, html } = markdownRemark; // Use "fields" instead of "frontmatter__slug"
  let featuredImg = getImage(
    frontmatter.featuredImage?.childImageSharp?.gatsbyImageData,
  );
  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-center items-start flex-grow gap-2.5 p-2.5 border-t-0 border-r-0 border-b-[28px] border-l-0 border-[#159500]">
        {/* Product Image */}
        <div className="flex flex-col justify-start items-center self-stretch flex-grow relative gap-2.5">
          <GatsbyImage
            image={featuredImg}
            className="flex-grow-0 flex-shrink-0 w-[100%] h-auto md:w-[568px] md:h-[421px] object-cover"
          />
        </div>
        {/* Product General Information */}
        <div className="flex flex-col justify-start items-center md:items-start flex-grow gap-2.5 p-2.5">
          <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-6 border-t-0 border-r-0 border-b-0 border-l-2 border-black">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
              {frontmatter.title}
            </p>
            <p className="flex-grow-0 flex-shrink-0 md:w-[337px] text-base font-medium text-left text-black">
              <span className="flex-grow-0 flex-shrink-0 w-[100%] md:w-[337px] h-[auto] md:h-[72px] text-base font-medium text-left text-black">
                Placeholder description line 1
              </span>
              <br />
              <span className="flex-grow-0 flex-shrink-0 w-[100%] md:w-[337px] h-[auto] md:h-[72px] text-base font-medium text-left text-black">
                Placeholder description line 2
              </span>
            </p>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[22px] rounded-md bg-gray-800">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-semibold text-center text-white">
                  Download PDF
                </p>
              </div>
            </div>
          </div>
          {/* Product Data */}
          <div
            id="product-data"
            className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-6 border-t-0 border-r-0 border-b-0 border-l-2 border-black"
          >
            {frontmatter.datapoints.map((datapoint, index) => (
              <div
                key={index}
                className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5"
              >
                <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-gray-500">
                  {datapoint.label}:
                </p>
                <p className="flex-grow w-[100%] md:w-[394px] text-lg font-medium text-right text-black">
                  {datapoint.value}
                </p>
              </div>
            ))}
          </div>
          {/* Main Text  */}
          <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-6 border-t-0 border-r-0 border-b-0 border-l-2 border-black">
            <p className="self-stretch flex-grow-0 flex-shrink-0 md:w-[557px] text-lg font-medium text-left text-black">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[100%] md:w-[557px] text-lg font-medium text-left text-black">
                <article className="prose">
                  <section dangerouslySetInnerHTML={{ __html: html }} />
                </article>
              </span>
              <br />
            </p>
          </div>
        </div>
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
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        datapoints {
          label
          value
        }
      }
    }
  }
`;
