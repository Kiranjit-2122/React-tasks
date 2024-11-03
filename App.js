import { Fragment } from 'react';
import Country from './components/pages/Country';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Student from './components/pages/Student';
import Forms from './components/pages/Forms';
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





































