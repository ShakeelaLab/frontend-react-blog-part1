import './AllPosts.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Button from "../../components/button/Button.jsx";

function AllPosts() {

    const [allPosts, setAllPosts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            toggleLoading(true);
        }, 2000);

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
            } finally {
                toggleLoading(false);
                clearTimeout(loadingTimeout);
            }
        }

        fetchBlogposts();

        return function cleanup() {
            clearTimeout(loadingTimeout);
        }

    }, []);


        async function removeBlogpost(id) {
            try {
                const response = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`, {
                    headers: {
                        'novi-education-project-id': 'fc3b1d4e-24cf-4767-8ccb-fce51b54f7f8',
                    },
                });

                setAllPosts(prev => prev.filter(post => post.id !== id));
                console.log(response);
                console.log('Post verwijderd');
            } catch (error) {
                console.error(error);
                console.log('deze id bestaat niet');
            }
        }

        return (
            <>
                <section>
                    {/*de tekst "Aan het laden" verschijnt heel even voordat alles is geladen wanneer verbinding goed is en niet op 3G, hoe kan je dit vertragen?*/}
                    {loading ?
                        <p className="loading-status">Aan
                            het laden...</p> : null}
                    {loading ? null : <h1>Bekijk
                        alle {allPosts.length} posts op het
                        platform</h1>}
                    <ul className="blog-list">
                        {allPosts && allPosts.map((post) => (
                            <li key={post.id}>
                                <article
                                    className="post-item">
                                <span
                                    className="title-author">
                                <Link
                                    className="article-link"
                                    to={`/allposts/${post.id}`}>{post.title}</Link>
                                <p>( {post.author} )</p></span>
                                    <span
                                        className="comments-shares"><p>{post.comments} reacties -</p><p> {post.shares} keer gedeeld</p></span>
                                    {error &&
                                        <p>{error.message}:Helaas
                                            geen post
                                            beschikbaar</p>}
                                </article>
                                <Button
                                    text="Verwijder deze blog"
                                    type="button"
                                    onClick={() => removeBlogpost(post.id)}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            </>
        );
    }

    export default AllPosts;