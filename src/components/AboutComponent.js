import React from 'react';


export default function About() {
    return (
        <div>
            <br />
            <h3>App Information</h3>
            <p>CoVisuals is a <a className="text-info"  href="https://reactjs.org/">React.js</a> based Progressive Web App with Redux architecture that fetches covid news and covid cases data from APIs and display it in form of news templates and graphs.</p>
            <h5>Frameworks, Libraries and Packages used</h5>
            <ul className="list-unstyled">
                <li><a className="text-info"  href="https://reactjs.org/">React.js</a></li>
                <li><a className="text-info"  href="https://getbootstrap.com/">Bootstrap</a></li>
                <li><a className="text-info"  href="https://www.chartjs.org/">Chart.js</a></li>
                <li><a className="text-info"  href="https://reactrouter.com/web/guides/quick-start">React Router</a></li>
                <li><a className="text-info"  href="https://fontawesome.com/">Font-Awesome</a></li>
                <li><a className="text-info"  href="https://redux.js.org/">Redux</a></li>
            </ul>
            <h5>APIs used</h5>
            <ul className="list-unstyled">
                <li><a className="text-info"  href="https://api.rootnet.in/covid19-in/stats/">api.rootnet.in</a></li>
                <li><a className="text-info"  href="https://newscatcher.p.rapidapi.com/v1/search_free">Newscatcher</a></li>
            </ul>

            <h3>Work Profiles</h3>
            <div>
                <a rel="noopener noreferrer" href="https://github.com/vanssign" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                <i className="fa fa-lg fa-github"
                        aria-hidden="true"></i>
                </a>
                <a rel="noopener noreferrer" href="https://behance.net/thindvansh7aab" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                    <i className="fa fa-lg fa-behance"

                        aria-hidden="true"></i>
                </a>
                <a rel="noopener noreferrer" href="https://lifeviawindow.wordpress.com" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                    <i className="fa fa-lg fa-wordpress"

                        aria-hidden="true"></i>
                </a>
            </div>
            <h3>Contact Me</h3>
            <div>
                <a rel="noopener noreferrer" href="https://www.facebook.com/singh.vansh1999" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                    <i className="fa fa-lg fa-facebook-f"

                        aria-hidden="true"></i>
                </a>

                <a rel="noopener noreferrer" href="https://in.linkedin.com/in/vansh-singh" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                    <i className="fa fa-lg fa-linkedin"

                        aria-hidden="true"></i>
                </a>

                <a rel="noopener noreferrer" href="https://www.instagram.com/vanssign" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                    <i className="fa fa-lg fa-instagram"

                        aria-hidden="true"></i>
                </a>

                <a rel="noopener noreferrer" href="https://wa.me/918279762669" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                    <i className="fa fa-lg fa-whatsapp"

                        aria-hidden="true"></i>
                </a>
                <a rel="noopener noreferrer" href="mailto:thindvansh1999@gmail.com" target="_blank" className="btn btn-light py-1 px-2 mx-1">
                    <i className="fa fa-lg fa-envelope"

                        aria-hidden="true"></i>
                </a>
            </div>
            <br />
            <br />


        </div>
    )
}
