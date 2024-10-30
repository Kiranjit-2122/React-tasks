import { Fragment } from 'react';
import Country from './components/pages/Country';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Student from './components/pages/Student';
import Forms from './components/pages/Forms';
// import CompName from "FileName"
function App() {
  return (
    <Fragment>
      <Student sname="Kiran" course="React"/>
      <Student sname="jyoti" course="Angular"/>
      <Student sname="Rahul" course="php"/>
      <Student sname="jashan"/>
      <Forms/>
      <Country/>
    </Fragment>
  );
}






































export default App;
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min.js"
// import Circle from './components/pages/Circle';
// import Introduction from './components/pages/Introduction';
// import Country from './components/pages/Country';
// import Restaurant from './components/pages/Restaurant';
// import Friends from './components/pages/Friends';
// import Style from './components/pages/Style';
// import Courses from './components/pages/Courses';
// import Songs from './components/pages/Songs';
// import Ternaryconditions from './components/pages/Ternaryconditions';
// import Counter from './components/pages/Counter';
// import Theme from './components/pages/Theme';
// import Playergame from './components/pages/Playergame';
// import Forms from './components/pages/Forms';
// import { BrowserRouter } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';

// function App() {
//   let songs=[
//     {song_name:"295",
//       singer:"sidhumoosevala"
//     },
//     {
//       song_name:"killa",
//       singer:"dilpeet dhillon"
//     },
//     {
//       song_name:"kala tikka",
//       singer:"ravneet"
//     }
//   ]
  
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/'/>
//       <Route path='/Introduction' element={<Introduction/>}/>
//       <Route path ='/Circle'  element={<Circle/>}/>
//       <Route path='/Country' element={<Country/>}/>
//       <Route  path='/Restaurant' element={<Restaurant/>}  />
//       <Route path='/Friends' element={<Friends/>} />
//       <Route path='/Songs' element={<Songs data={songs}/>} />
//       <Route path='/Courses' element={<Courses name="kiran" Course="React" Duration="4months" Price="25000"/>} />
//       <Route path='Ternaryconditions' element={<Ternaryconditions/>} />
//       <Route path='Counter' element={<Counter/>} />
//       <Route path='/Playergame' element={<Playergame/>} />
//       <Route path='/Forms' element={<Forms/>} />
//       <Route path='/Style' element={<Style/>}/>
//     </Routes>
//     </BrowserRouter>
// {/* 
//     // <Courses  name="kiran" Course="React" Duration="4months" Price="25000"/>
//       // <Courses  name="meet" Course="Angular" Duration="3months" Price="20000"/>
//       // <Courses  name="jass" Course="Node" Duration="2months" Price="15000"/>
//       // <Courses  name="nav" Course="PHP" Duration="1months" Price="12000"/>
//       // <Courses  name="riya" Course="AI" Duration="6months" Price="35000"/> */} 






      

//     </>
//   )
// }
// export default App;



