import './Blogpost.css';
import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {formatDutchDate } from "../../helpers/helpers.jsx";
import Button from "../../components/button/Button.jsx";
import {Clock, CaretLeft} from "@phosphor-icons/react";
import axios from "axios";

function Blogpost() {
    const [postInfo, setPostInfo] = React.useState(null);
    const {postId} = useParams();
    const [error, setError] = React.useState(false);

    async function fetchPostInfo() {
        try {
            setError(false);
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {
                    'novi-education-project-id': 'fc3b1d4e-24cf-4767-8ccb-fce51b54f7f8',
                },
            });
            const responseData = response.data.find((post) => {
                return post.id === Number(postId);
            });
            console.log(response);
            setPostInfo({ ...responseData, dutchDate: formatDutchDate(response.created), });
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    useEffect(() => {
        void fetchPostInfo();
        console.log('Het mounting effect is afgevuurd!👶'); },[])

    return (
        <>
            {/*Button niet meer nodig*/}
          {/*<Button*/}
          {/*    type="submit"*/}
          {/*    onClick={fetchPostInfo}*/}
          {/*    text="Haal info*/}
          {/*      op"*/}
          {/*/>*/}
            {postInfo &&
                <article className="blog-post">
                    <h1>{postInfo.title}</h1>
                    <h2>{postInfo.subtitle}</h2>
                    <p>Geschreven
                        door {postInfo.author} op {postInfo.dutchDate}</p>

                    <div className="reading">
                        <Clock size={22} />
                            <span>{postInfo.readTime} minuten lezen</span> </div>
                    <p>{postInfo.content}</p>
                    <span
                        className="comments-shares"><p>{postInfo.comments} reacties -</p><p> {postInfo.shares} keer gedeeld</p></span>
                    <div className="return-link"> <CaretLeft className="caretLeft" size={22} /> <Link className="article-link" to="/allposts"> <strong>Terug naar de overzichtspagina</strong> </Link> </div>

                </article>
            }
            {error && <p>{error.message} :Geen blog kunnen ophalen</p>}
        </>
    );
}

export default Blogpost;