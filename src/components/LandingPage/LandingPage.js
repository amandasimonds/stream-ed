import React from "react";
import {Jumbotron, Button} from "reactstrap"
import classes from "./LandingPage.css"
import {Link} from "react-router-dom"
import "./LandingPage.css"

const landingPage = (props) => {
    return(
    <div>
      <Jumbotron fluid className={classes.LandingPage}>
        <h1 className="display-3">Stream Ed</h1>
        <p className="lead"></p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
          <Link to="/stream"><Button color="primary">Login</Button></Link>
          <Button color="primary">Sign Up</Button>
        </p>
      </Jumbotron>
    </div>
    )
    }

export default landingPage