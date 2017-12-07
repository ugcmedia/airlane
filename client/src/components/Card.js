import React, { Component } from "react";
import { Button, Image, Media, Planeinfo, Col, Heading} from "react-bootstrap";

class Card extends Component {
	render() {
		return (
			<div className="container list two">
				<div className="row">
			    <Media>
			      <Media.Left align="top">
			        <img width={300} height={250} src="http://imgproc.airliners.net/photos/airliners/1/8/3/1148381.jpg?v=v40" alt="G550" />
			      </Media.Left>
			      <Media.Body>
			        <h1>G550</h1>
			        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
			        <div className="Planeinfo">

			        <Col md={3}>
			        <h5>Available Trips</h5>
			        <ul>
					  <li>03:00</li>
					  <li>06:30</li>
					  <li>13:00</li>
					  <li>18:00</li>
					  <li>22:00</li>
					</ul>
			        </Col>

			        <Col md={3}>
			        <h5>Price</h5>
			        <ul>
					  <li>$5000.00</li>
					  <li>$8000.00</li>
					  <li>$7000.00</li>
					  <li>$200.00</li>
					  <li>$3000.00</li>
					</ul>
			        </Col>

			        <Col md={6}>
			        <h5>Available Trips</h5>
			        <ul>
					  <li><Button bsStyle="primary" bsSize="xsmall">Book</Button></li>
<li><Button bsStyle="primary" bsSize="xsmall">Book</Button></li><li><Button bsStyle="primary" bsSize="xsmall">Book</Button></li><li><Button bsStyle="primary" bsSize="xsmall">Book</Button></li>
					</ul>
			        </Col>

			        </div>
			      </Media.Body>
			    </Media>
			    </div>
			  </div>
		);
	}
}

class Card2 extends Component {
	render() {
		return (
			<div className="container list two">
				<div className="row">

<li><Button bsStyle="primary" bsSize="xsmall">Book</Button></li><li><Button bsStyle="primary" bsSize="xsmall">Book</Button></li><li><Button bsStyle="primary" bsSize="xsmall">Book</Button></li>
					</ul>
			        </Col>

			        </div>
			    </div>
			  </div>
		);
	}
}

export default Card2;



