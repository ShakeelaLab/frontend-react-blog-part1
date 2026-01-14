import './App.css'
import {Routes, Route} from "react-router-dom";
import Navigation
    from "./components/navigation/Navigation.jsx";
import Home from "./pages/home/Home.jsx"
import AllPosts from "./pages/allPosts/AllPosts.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import NotFound from "./pages/notFound/notFound.jsx";
import Blogpost from "./pages/blogpost/Blogpost.jsx";


function App() {
    return (
        <>
            <Navigation />
            <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/allposts" element={<AllPosts />}/>
                <Route path="/newpost" element={<NewPost />}/>
                <Route path="/allposts/:postId" element={<Blogpost />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
            </main>
        </>
    )
}

export default App
