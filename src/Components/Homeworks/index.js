import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Swasti Baral and I am a student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
          <th>GitHub Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td></td>
          <td><a href="https://github.com"> Link to code</a> </td>
       
      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript functions</td>
          <td><a href="https://codepen.io/swasti-b/pen/dyvdqJV?editors=1111"> Link</a> </td>
          <td></td>
       
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 3.1</td>
          <td>CSS selector</td>
          <td> </td>
          <td><a href="https://github.com/Swasti-B/CSS-Selectors/tree/master/css-selectors-quiz"> Link to code</a> </td>
       
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 3.2</td>
          <td>Navigation bar</td>
          <td><a href="https://codepen.io/swasti-b/pen/YzZrKvp"> Link</a> </td>
          <td> </td>
      </tr>

      <tr>
          <th scope="row">2</th>
          <td>Homework 3.3</td>
          <td>Javascript function</td>
          <td><a href="https://codepen.io/swasti-b/pen/VwprmLJ?editors=1111"> Link</a> </td>
          <td> </td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 4.1</td>
          <td>Comcast challenge</td>
          <td><a href="https://codepen.io/swasti-b/pen/YzZEpQP"> Link</a> </td>
          <td> </td>
      </tr>
        
      <tr>
          <th scope="row">2</th>
          <td>Homework 5.1</td>
          <td>Theme Change</td>
          <td><a href="https://codepen.io/swasti-b/pen/qBrpOrO"> Link</a> </td>
          <td> </td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 5.2</td>
          <td>Frontier Challenge</td>
          <td><a href="https://codepen.io/swasti-b/pen/RwpQYWZ"> Link</a> </td>
          <td> </td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 10.2</td>
          <td>Lottery project</td>
          <td><a href="https://codepen.io/swasti-b/pen/oNZMYGZ"> Link</a> </td>
          <td> <a href="https://github.com/Swasti-B/Random-Name-Generator"> Link to code</a> </td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Homework 12.1</td>
          <td>Carousel</td>
          <td> </td>
          <td> <a href="https://github.com/Swasti-B/React-bootstrap-Carousel/tree/master"> Link to code</a> </td>
      </tr>
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
