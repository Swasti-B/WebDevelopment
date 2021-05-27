import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : baralswasti@gmail.com </p>
          <p className="lead">Phone : 682-802-1197 </p>
          <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamp. I will available 12AM-2AM EST via slack </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
