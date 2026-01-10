import './AllPosts.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";
import React from "react";

function AllPosts() {

    const [allPosts, setAllPosts] = React.useState([]);
    const [error, setError] = React.useState(false);

    async function fetchBlogposts() {
        try {
            setError(false);
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': 'fc3b1d4e-24cf-4767-8ccb-fce51b54f7f8',
                },
            });
            setAllPosts(response.data);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    useEffect(() => {
        void fetchBlogposts();
        console.log('Het mounting effect is afgevuurd!👶'); },[])

    return (
        <>
            <section>
            <h1>Bekijk alle {allPosts.length} posts op het platform</h1>
                <ul className="blog-list">
                    {allPosts && allPosts.map((post) => (
                        <li key={post.id}>
                            <article className="post-item">
                                <span className="title-author">
                                <Link className="article-link" to={`/allposts/${post.id}`}>{post.title}</Link>
                                <p>( {post.author} )</p></span>
                                <span className="comments-shares"><p>{post.comments} reacties -</p><p> {post.shares} keer gedeeld</p></span>
                                {error && <p>{error.message}:Helaas geen post beschikbaar</p>}
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default AllPosts;