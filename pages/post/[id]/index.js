// Example of dynamic routing using useRouter hook

// import {useRouter} from 'next/router';

// import Header from '../../../components/header';

// const Post = () => {
//     const router = useRouter();
//     const {id} = router.query;

//     return (
//         <>
//             <Header />
//             <h1>Post id: {id}</h1>
//         </>
//     )
// }

// export default Post;




// exmaple Using API data

// getInitialProps lifecycle method for next.js which allows us to fetch some data
// before page renders

// jsonplaceholderapi is api returns dummy data https://jsonplaceholder.typicode.com/

import Header from '../../../components/header';

const Post = ({title, body}) => (
    <>
        <Header />
        <h1>{title}</h1>
        <p>{body}</p>
    </>
);

Post.getInitialProps = async ({query}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post = res.json();

    return post;
}   

export default Post;