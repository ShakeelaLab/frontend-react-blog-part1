import './NewPost.css';
import Button from "../../components/button/Button.jsx";
import { useForm } from 'react-hook-form';
import {readTime} from "../../helpers/helpers.jsx";

function NewPost() {
    const { register, handleSubmit, formState: {errors}  } = useForm();

    function handleFormSubmit(data) {
        const allData = {
            ...data,
            created: new Date().toISOString(),
            readTime: readTime(data.content),
            comments: 0,
            shares: 0,
        }

        console.log(allData);
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
            </section>

        </>
    );
}

export default NewPost;