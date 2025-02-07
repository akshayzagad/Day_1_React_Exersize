import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



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

function Skills(props){
  return <div className='skills' style={{backgroundColor: props.color}}>
   <span>{props.skill}</span>  
  </div>
}

function SkillList(){
  return <div className='skillList'>
    <Skills skill='React'  color='red'/>
    <Skills skill='Html' color='blue'/>
    <Skills skill='Javascript' color='black'/>
    <Skills skill='Java' color='yellow'/>
    <Skills skill='SQL' color='orange'/>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);


