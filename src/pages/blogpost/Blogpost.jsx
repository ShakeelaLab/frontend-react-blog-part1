import './Blogpost.css';
import {Link, useParams} from "react-router-dom";
import posts from "../../constants/data.json"
import React from "react";
import {formatDutchDate } from "../../helpers/helpers.jsx";
import Button from "../../components/button/Button.jsx";
import {Clock, CaretLeft} from "@phosphor-icons/react";

function Blogpost() {
    const [postInfo, setPostInfo] = React.useState(null);
    const {postId} = useParams();

    async function fetchPostInfo() {
        try {
            const response = posts.find((post) => {
                return post.id === Number(postId);
            });
            console.log(response);
            setPostInfo({ ...response, dutchDate: formatDutchDate(response.created), });
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
          <Button
              type="submit"
              onClick={fetchPostInfo}
              text="Haal info
                op"
          />
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
        </>
    );
}

export default Blogpost;