const DefaultLanding = ({ backgroundColor }) => {
    return (
        <div className="landing--information-container">
            <div className="landing--title-container">
                <h1 className="landing--title">Welcome.</h1>
            </div>
            <div
              className="landing--description-container"
              style={{ borderImage: `var(${backgroundColor[1]}) 0 80%`}}
            >
                <p className="landing--information-text">
                    My name is Adam Purcell, and I'm a front-end developer based near Chicago, IL. I have developed many personal applications. I have experience using HTML5, CSS3 including responsive design, JavaScript including React.JS, git for version control, APIs, and more.
                </p>
                <p className="landing--information-text">
                    I have a deep enthusiasm for creating stunning, state-of-the-art, flawlessly precise user interfaces.
                </p>
            </div>
        </div>
    );
}
 
export default DefaultLanding;