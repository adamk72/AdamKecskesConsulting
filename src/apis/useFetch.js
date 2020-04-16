/* Example code */

// import post1 from '../blog-post.1.md';
// import post2 from '../blog-post.2.md';
// import post3 from '../blog-post.3.md';
// const rawMdPosts = [post1, post2, post3];

// const [posts, setPosts] = useState([]);
// const [doneWithPosts, setDoneWithPosts] = useState(false);

// const fetchPosts = useCallback(() => {
//   if (!doneWithPosts) {
//     fetch(rawMdPosts[posts.length])
//       .then((response) => {
//         if (response.ok) {
//           return response.text();
//         } else return Promise.reject("Didn't fetch text correctly");
//       })
//       .then((text) => {
//         if (posts.length === rawMdPosts.length - 1) {
//           setDoneWithPosts((d) => (d = true));
//         } else {
//           setPosts([...posts, text]);
//         }
//       })
//       .catch((error) => console.error(error));
//   }
// }, [posts, doneWithPosts]);

// useEffect(() => {
//   fetchPosts();
// }, [fetchPosts]);
