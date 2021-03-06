import React from 'react';

export default function Contact() {
    <div>
        <head>
            <title>Ryan Feigum - Contact</title>
        </head>
        <body>
            <h3>Navigation</h3>
            <a href='index.html'>Home</a>
            <a href='skills.html'>Skills</a>
            <h1>Ryan Feigum</h1>
            <h2>Contact Me</h2>
            <form action='#' method='post'>
                <div>
                    <label id='fullNameLabel' for='fullName'>
                        Full Name:
                    </label>
                    <input id='fullName' name='fullName' type='text' />
                </div>
                <div>
                    <label id='emailLabel' for='email'>
                        Email Address:
                    </label>
                    <input id='email' name='email' type='text' />
                </div>
                <div>
                    <label id='phoneLabel' for='phone'>
                        Phone Number:
                    </label>
                    <input id='phone' name='phone' type='text' />
                </div>
                <div>
                    <label id='messageLabel' for='message'>
                        Message:
                    </label>
                    <textarea id='message' name='message'></textarea>
                </div>
                <div>
                    <input type='submit' id='submitButton' value='Send' />
                </div>
            </form>
        </body>
    </div>;
}
