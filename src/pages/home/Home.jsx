import './Home.css';
import whiteLogo from "../../assets/logo-white.png";
import billboard from "../../assets/billboard-logo.png"

function Home() {
    return (
        <>
            <div className="outer-container">
            <header className="header-white-logo">
            <img src={whiteLogo} alt="logo black"/>
            </header>
            <h2>Bij Blogventure geloven we in de kracht van woorden.</h2>
            <img src={billboard} alt="image of a billboard"/>
            <p>• En in billboards. Die zijn niet te missen namelijk.
                We geloven dat iedereen een verhaal te vertellen heeft, avonturen te delen en kennis te verspreiden. Daarom
                hebben we een platform gecreëerd waar creativiteit, passie en ontdekking samenkomen.
                Of je nu een doorgewinterde schrijver bent of gewoon je gedachten wilt delen, Blogventure is de plek waar jouw
                stem wordt gehoord. Duik in een wereld van verhalen, reizen, koken, en nog veel meer. Ontdek nieuwe
                perspectieven en maak deel uit van een gemeenschap van gepassioneerde bloggers.
                Dus waar wacht je nog op? Stap aan boord van deze spannende reis en laat jouw avontuur beginnen op
                Blogventure! </p>
            </div>
        </>
    );
}

export default Home;