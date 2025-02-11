import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App(){ 
  return <div className='container'>
   <Card />
  </div>;
}

function Card(){
  return <div className='card'>
   <Images alt="images" />
   <Abstract/>
   <SkillList/>
  </div>
}

function Images(){
  return <div >
    <img className='img'src='./download.jpg' alt='images'/>
  </div>
}

function Abstract(){
  return <div className='abstract'>
    <h2>Akshay Zagade</h2>
    <p>Here is a brief abstract of the article.</p>
  </div>
}

function SkillList(){
  // return <div className='skillList'>
  //   <Skills skill='React'  color='red'/>
  //   <Skills skill='Html' color='blue'/>
  //   <Skills skill='Javascript' color='black'/>
  //   <Skills skill='Java' color='yellow'/>
  //   <Skills skill='SQL' color='orange'/>
  // </div>
  let skillList = skills;
  return (
    <>
      {skillList.map((skillInArray) => (<Skills skillObj = {skillInArray} key={skillInArray.skill}/>))}
    </>
  )
}


function Skills({skillObj}){
  
  return <div className='skills' style={{ backgroundColor: skillObj.color }}  >
   <span>{skillObj.skill}</span>
   <span>
    {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
    </span>  
  </div>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);


