const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
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
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        './src/templates/{MarkdownRemark.fields__slug}.jsx',
      ),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type MarkdownRemark implements Node {
      fields: MarkdownRemarkFields
      frontmatter: MarkdownRemarkFrontmatter
    }

    type MarkdownRemarkFields {
      slug: String
      collection: String
    }

    type MarkdownRemarkFrontmatter {
      date: Date @dateformat
      title: String
      datapoints: [MarkdownRemarkFrontmatterDatapoints]
    }

    type MarkdownRemarkFrontmatterDatapoints {
      label: String
      value: String
    }
  `;

  createTypes(typeDefs);
};
