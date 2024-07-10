import Illustrations from './Illustrations'
import SecArct from './SecArct'

export default function MainArct() {
    return(
        <>
            <div id = 'main-articles-container' className="main-articles-container u-flex-collumn">
                <Illustrations/>
                <article className="main-articles main-articles-first">
                    <h1 className="u-dark-font u-bold-font article-title">Bring everyone together to build better products.</h1>
                    <p className="u-pale-font main-articles-paragraph">Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.</p>
                    <a href="/" className="u-orange-btn arct-btn">Get Started</a>
                </article>

                <article className="main-articles main-articles-second">
                    <h1 className="u-dark-font u-bold-font article-title">What’s different about Manage?</h1>
                    <p className="u-pale-font main-articles-paragraph">Manage provides all the functionality your team needs, without 
                                               the complexity. Our software is tailor-made for modern digital 
                                               product teams.</p>
                </article>
                <SecArct/>
            </div>
        </>
    )
}
