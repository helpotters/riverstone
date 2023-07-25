/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });

    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'src/content',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/products${relativeFilePath}`,
    });
  }
};
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for all MarkdownRemark nodes to get slugs
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Create pages for each Markdown file using the template and slug
  const productPostTemplate = path.resolve(
    './src/pages/products/{markdownRemark.frontmatter__slug}.jsx',
  );
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: productPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MarkdownRemarkFrontmatterDatapoints {
      label: String
      value: String
    }

    type MarkdownRemarkFrontmatter {
      date: Date @dateformat
      title: String
      datapoints: [MarkdownRemarkFrontmatterDatapoints]
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `;

  createTypes(typeDefs);
};
