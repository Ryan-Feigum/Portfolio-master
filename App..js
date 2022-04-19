import React from 'react';
import Contact from './components/Contact';
import Skills from './components/Skills';

export default function App() {
    return (
        <div>
            <h1>Ryan Feigum</h1>
            <h2>About Me</h2>
            <img src='./images/portfolio.jpg' style='width:200px;' />
            <p>
                I am a software engineer in training. Currently I am learning
                HTML, CSS, Javascript, Node.js and C#.
            </p>
            <h2>Past Experiences</h2>
            <p>
                Bartender, Server, Steel Worker, Inventory Control, Shipping and
                Recieving, Retail, Agriculture
            </p>
            <h2>Hobbies</h2>
            <p>Disc golf, longboarding, snowboarding, general outdoors</p>

            <Contact />
            <Skills />
        </div>
    );
}
