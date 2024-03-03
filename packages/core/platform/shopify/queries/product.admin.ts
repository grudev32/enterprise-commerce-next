export const getAdminProductQuery = `#graphql
  query SingleAdminProduct($id: ID!) {
    product(id: $id) {
      id
      handle
      title
      description
      descriptionHtml
      vendor
      options {
        id
        name
        values
      }
      collections(first: 15) {
        nodes {
          handle
          title
          description
          updatedAt
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 250) {
        edges {
          node {
            id
            title
            price
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      featuredImage {
        url
        altText
        width
        height
      }
      images(first: 20) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      seo {
        title
        description
      }
      tags
      updatedAt
      createdAt
    }
  }
`
