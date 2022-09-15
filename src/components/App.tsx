import React from 'react';
import '../css/main.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello 👋</h1>
        <h2>&#129302;I am Andrew Castillo, I'm a full-stack software engineer passionate on building functional interfaces and useful products.</h2>
        <h3>Get in touch with me on LinkedIn</h3>
      </header>

      <section className="section_background">
        <div className="section_title">Background</div>
        <div className="section_content">
          <p><span></span>I graduated a rigorous six-month long bootcamp, learning from the very basics to advanced site structures, requiring not only determination but also the ability to critically think and problem solve.</p>
          <p>My communication skills and problem solving allow me to be a valuable asset to any team that I am a part of. I provide the essentials when it comes to group thinking and finding the best solutions to the puzzle of making websites functional and appealing.</p>
          <p>If I'm not behind my keyboard typing up a storm, I'm usually thinking of new Magic the Gathering decks to brew, trying to further my learning in Japanese and German, or taking a breather taking in everything with my cat.</p>
        </div>
      </section>

      <section className="section_skills">
        <div className="section_title">Skills</div>
        <div className="section_content">
          <div className="skills">
            <div className='skills_category'>
              <div className="skills_label">Languages</div>
              <ul>
                <li className='skills_category_item'>JavaScript (ES6)</li>
                <li className='skills_category_item'>HTML</li>
                <li className='skills_category_item'>CSS/SCSS</li>
                <li className='skills_category_item'>Python</li>
                <li className='skills_category_item'>SQL</li>
              </ul>
            </div>

            <div className="skills_category">
              <div className="skills_label">Frameworks</div>
              <ul>
                <li className="skills_category_item">React</li>
                <li className="skills_category_item">NodeJS</li>
                <li className="skills_category_item">Express</li>
              </ul>
            </div>

            <div className="skills_category">
              <div className="skills_label">Tools</div>
              <ul>
                <li className="skills_category_item">Git & Github</li>
                <li className="skills_category_item">Postman</li>
                <li className="skills_category_item">Insomnia</li>
                <li className="skills_category_item">Bash</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default App;
