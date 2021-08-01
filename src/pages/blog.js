import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import "../styles/styles.scss"
import Layout from '../components/layout'

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/2000"
const MEDIUM_URL = "https://medium.com"

const BlogPage = () => {

  return (
    <Layout pageTitle="blog" title="blog" description="articoli, blog, risorse, brutti versi e altra roba">
      <h2>stuff I write</h2>
      <p>articles, resources, blog posts, bad poems and other stuff</p>

      <h3>from my Medium publication:</h3>
    <StaticQuery
      query={graphql`
        query Medium {
          allMediumPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
            totalCount
            edges {
              node {
                id
                uniqueSlug
                title
                createdAt(formatString: "MMM YYYY")
                virtuals {
                  subtitle
                  readingTime
                  previewImage {
                    imageId
                  }
                }
                author {
                  username
                }
              }
            }
          }
        }
      `}
      render={({ allMediumPost }) => (
        <div>
          {allMediumPost.edges.map(post => (
            <Link
              style={{ textDecoration: "none" }}
              to={`${MEDIUM_URL}/@${post.node.author.username}/${post.node.uniqueSlug}`}
            >
              <div>
                <h4>{post.node.title}</h4>
                {/* {allMediumPost.edges[0].node.image && ( */}
                <img style={{ backgroundSize: "cover", height: "auto", maxHeight: "320px"}}
                  src={`${MEDIUM_CDN}/${post.node.virtuals.previewImage.imageId}`}
                  alt={allMediumPost.edges[0].node.image}
                />
                {/* )} */}
                <p>{post.node.virtuals.subtitle}</p>
                <p>
                  {" "}
                  {`${post.node.createdAt} - ${Math.ceil(
                    post.node.virtuals.readingTime
                  )} min`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    />
  <p>So, was it that easy?</p>
    </Layout>
  )
}

export default BlogPage