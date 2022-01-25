import AllPosts from "../../components/posts/all-posts";


const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "getting-started-with-nextjs",
      excerpt:
        "bet-youare-done bet-youare-donebet-youare-donebet-youare-donebet-youare-donebet-youare-done",
      image: "getting-started-with-nextjs.png",
      date: "2021-12-02",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "getting-started-with-nextjs",
      excerpt:
        "bet-youare-done bet-youare-donebet-youare-donebet-youare-donebet-youare-donebet-youare-done",
        image: "getting-started-with-nextjs.png",
      date: "2021-12-02",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "getting-started-with-nextjs",
      excerpt:
        "bet-youare-done bet-youare-donebet-youare-donebet-youare-donebet-youare-donebet-youare-done",
        image: "getting-started-with-nextjs.png",
      date: "2021-12-02",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "getting-started-with-nextjs",
      excerpt:
        "bet-youare-done bet-youare-donebet-youare-donebet-youare-donebet-youare-donebet-youare-done",
        image: "getting-started-with-nextjs.png",
      date: "2021-12-02",
    },
  ];

function AllPostspage() {
 return <AllPosts  posts={DUMMY_POSTS}/>
}

export default AllPostspage;

// Welcome page
// Featured posts section
