import React from 'react';
import './Main.css';
import photo from './photo.jpg'
function Main()
{
    return(
     <div>
    
    <div id='main'>
        <div>
        <img src={photo} height={200} width={200}></img>
        </div>
        <div>
        <h1>DIYA PATEL</h1>
        </div>
        <div></div>
        <div>

        </div>
    </div>
    <div id='description'>
    A React Front-End Developer with 5 years of experience specializing in the development of responsive,<br></br> high-performance web applications. 
    <br></br>Skilled in JavaScript, React.js, and Redux with a focus on building dynamic and intuitive user interfaces.
    </div>
    <div id="main2">
        <div id='education' myclass="col-6 left-side">
            <br></br>
       <h1> Education:</h1>
<br></br>
Bachelor of Science in Web Development
<br></br>
University of California, Los Angeles, CA | 2016
<hr></hr>
<hr></hr>
<h1>Key Skills:</h1>
<ol>

<li>React.js, JavaScript, Redux</li>

<li>HTML5, CSS3, SASS</li>

<li>RESTful APIS</li>

<li>Cross-browser compatibility</li>

<li>Git, GitHub</li>
</ol>
        </div>
        <div id='exp' myclass="col-6 right-side">
        

            <h1>Experience:</h1>
        •Professional Experience<br></br>

        •React Front-End Developer<br></br>

        •WebX Technologies, Los Angeles, CA | May 2018 Current<br></br>

        •Developed dynamic, responsive websites using React.js, improving overall user satisfaction by 30%<br></br>

        •Collaborated with back-end developers to integrate RESTful APIS and enhance site functionality<br></br>

        •Implemented Redux for state management, improving data flow and consistency across components<br></br>

        •Junior Front-End Developer<br></br>

        •BrightWeb Solutions, Los Angeles, CA June 2016<br></br>



• Built and optimized responsive websites using HTML, CSS, and JavaScript

•Assisted in the development and integration of interactive features, improving site performance by 15%

•Participated in code reviews and bug-fixing sprints, reducing the number of issues by 10%
<hr></hr>
<hr></hr>
<h1>Certifications:</h1>

•WS Certified Developer - Associate<br></br>



•React.js Developer Certification<br></br>

•Technisgal Certified
        </div>
    </div>
</div>
    );
}
export default Main;