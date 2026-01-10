import './NewPost.css';
import Button from "../../components/button/Button.jsx";
import { useForm } from 'react-hook-form';
import {readTime} from "../../helpers/helpers.jsx";
import axios from "axios";
import React from "react";

function NewPost() {
    const { register, handleSubmit, formState: {errors}  } = useForm();
    const [postSubmitted, setPostSubmitted] = React.useState('');

   async function handleFormSubmit(data) {

       try {
           const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                       ...data,
                       "created": new Date().toISOString(),
                       "readTime": readTime(data.content),
                       "comments": 0,
                       "shares": 0,
           },
               {headers: {
                       'novi-education-project-id': 'fc3b1d4e-24cf-4767-8ccb-fce51b54f7f8',

               }
       });
           console.log(response);
           console.log('Nieuwe post is gelukt')
           setPostSubmitted(response);
           } catch (error) {
           console.error(error);
           console.log('Er is iets misgegaan, probeer het nog eens')
       }

    }

    return (
        <>
            <section>

                <form
                    className="outer-container"
                    onSubmit={handleSubmit(handleFormSubmit)}
                >
                    <div className="inner-container">
                        <h1>Post toevoegen</h1>
                        <label htmlFor="title-field">Title</label>
                        <input
                            type="text"
                            id="title-field"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                            })}
                        />
                        {errors.title && <p className="message">{errors.title.message}</p>}
                        <label htmlFor="subtitle-field">Subtitle</label>
                        <input
                            type="text"
                            id="subtitle-field"
                            {...register("subtitle", {
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                            })}
                        />
                        {errors.subtitle && <p className="message">{errors.subtitle.message}</p>}
                        <label htmlFor="author-field">Naam en
                            achternaam</label>
                        <input
                            type="text"
                            id="author-field"
                            {...register("author", {
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                            })}
                        />
                        {errors.author && <p className="message">{errors.author.message}</p>}
                        <label htmlFor="message-field">Blogpost</label>
                        <textarea
                            id="message-field"
                            cols="40"
                            rows="15"
                            {...register("content", {
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                                minLength: {
                                    value: 300,
                                    message: "Input moet minstens 300 karakters bevatten"
                                },
                                maxLength: {
                                    value: 2000,
                                    message: "Input mag maximaal 2000 karakters bevatten"
                                },
                            })}
                        ></textarea>
                        {errors.content && <p className="message">{errors.content.message}</p>}
                        <Button
                            type="submit"
                            text="Toevoegen"
                            className="new-post-button"
                        />
                    </div>
                </form>
                {postSubmitted && <p>Je blog is geplaatst</p>}
            </section>

        </>
    );
}

export default NewPost;