import './AllPosts.css';
import {Link} from "react-router-dom";
import posts from "../../constants/data.json"

function AllPosts() {
    return (
        <>
            <section>
            <h1>Bekijk alle 17 posts op het platform</h1>
                <ul className="blog-list">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <article className="post-item">
                                <span className="title-author">
                                <Link className="article-link" to={`/allposts/${post.id}`}>{post.title}</Link>
                                <p>( {post.author} )</p></span>
                                <span className="comments-shares"><p>{post.comments} reacties -</p><p> {post.shares} keer gedeeld</p></span>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default AllPosts;