import { Fragment } from "react";
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from '../lib/posts.util';

function Homepage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function  getStaticProps()  {
  const FeaturedPosts = getFeaturedPosts();

  return {
    props: {
      posts: FeaturedPosts
    }
  }
}

export default Homepage;
