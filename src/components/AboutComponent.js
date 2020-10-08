import React from 'react';


export default function About() {
    return (
<div>
    <br/>
    <h3>APP Information</h3>
    <p>The App uses <a href="https://api.rootnet.in/covid19-in/stats/history">api.rootnet.in</a> as backend</p>
    <p ><bold>Dependencies and Packages used:</bold><br/>
        "axios": "^0.20.0"<br/>
    "bootstrap": "^4.5.2"<br/>
    "chart.js": "^2.9.3"<br/>
    "font-awesome": "^4.7.0"<br/>
    "react": "^16.13.1"<br/>
    "react-chartjs-2": "^2.10.0"<br/>
    "react-dom": "^16.13.1"<br/>
    "react-redux": "^7.2.1"<br/>
    "react-router-dom": "^5.2.0"<br/>
    "react-scripts": "3.4.3"<br/>
    "reactstrap": "^8.5.1"<br/>
    "redux": "^4.0.5"<br/>
    "redux-thunk": "^2.3.0"</p>
<h3>Check My Works</h3>
        <div>
            <a href="https://github.com/vanssign" target="_blank" class="btn">
                <i class="fa fa-lg fa-github"
                    style={
                        {color: 'orange'}
                    }
                    aria-hidden="true"></i>
            </a>
            <a href="https://behance.net/thindvansh7aab" target="_blank" class="btn">
                <i class="fa fa-lg fa-behance"
                    style={
                        {color: 'orange'}
                    }
                    aria-hidden="true"></i>
            </a>
            <a href="https://lifeviawindow.wordpress.com" target="_blank" class="btn">
                <i class="fa fa-lg fa-wordpress"
                    style={
                        {color: 'orange'}
                    }
                    aria-hidden="true"></i>
            </a>
        </div>
        <br/>
        <h3>Contact Me</h3>
        <div>
            <a href="https://www.facebook.com/singh.vansh1999" target="_blank" class="btn btn-social-icon btn-facebook">
                <i class="fa fa-lg fa-facebook-f"
                    style={
                        {color: 'blue'}
                    }
                    aria-hidden="true"></i>
            </a>

            <a href="https://in.linkedin.com/in/vansh-singh" target="_blank" class="btn btn-linkedin">
                <i class="fa fa-lg fa-linkedin"
                    style={
                        {color: 'blue'}
                    }
                    aria-hidden="true"></i>
            </a>

            <a href="https://www.instagram.com/vanssign" target="_blank" class="btn btn-instagram">
                <i class="fa fa-lg fa-instagram"
                    style={
                        {color: 'blue'}
                    }
                    aria-hidden="true"></i>
            </a>

            <a href="https://wa.me/918279762669" target="_blank" class="btn btn-whatsapp">
                <i class="fa fa-lg fa-whatsapp"
                    style={
                        {color: 'blue'}
                    }
                    aria-hidden="true"></i>
            </a>
            <a href="mailto:thindvansh1999@gmail.com" target="_blank" class="btn">
                <i class="fa fa-lg fa-envelope"
                    style={
                        {color: 'blue'}
                    }
                    aria-hidden="true"></i>
            </a>
        </div>
        <br/>
        <br/>
       

    </div>
    )
}
