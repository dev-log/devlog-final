import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './src/Main.css';
import './src/grid.css';
import './src/normalize.css';
import './src/queries.css';
import { Jumbotron, Container } from 'reactstrap';
import { render } from 'react-dom'
import Ionicon from 'react-ionicons'
import Grid from '@material-ui/core/Grid';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
        <div>
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">DevLog
                                </h1>
                                <p className="lead"> Development is a story, make yours the best seller.</p>
                                <div className="div-search">
                                    <input className="search-text" type="text" placeholder="Search for projects..." />
                                    <Link to="#" className="btn btn-lg btn-warning mr-2" >
                                        Search
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container fluid>
            <Jumbotron fluid className="jumbo">
                <div className ="justify-content-center">
            <section className="section-features js--section-features centerfeatures" id="features">
                <div className="row ">
                    <h2 className="h2-features ">It's about the journey &mdash; not the destination</h2>
                    <p className="long-cpy">We're DevLog, your one stop shop to showcase your projects and collaborate with others.</p>
                </div>
                <div className="row js--wp-1">
                    <div className="col span-1-of-4 box">
                        <Ionicon icon="ios-desktop" fontSize="90px" color="white"/>
                        <h3>Project Showcase</h3>
                        <p>
                            Show others what you're working on. Upload journal entries, photos, and videos of your progress.
                        </p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <Ionicon icon="ios-card" fontSize="90px" color="white"/>

                        <h3>Get Funding</h3>
                        <p>
                            If people like what you're working on, a sponsor link is attached to your profile, for peole that want to support your project.
                        </p>
                    </div>
                    <div className="col span-1-of-4 box">
                        <Ionicon icon="ios-people" fontSize="90px" color="white"/>

                        <h3>Collaborate with others</h3>
                        <p>
                            Work with others on a bigger project, meet new developers to build on your network.
                        </p>
                    </div>
                    <div className="col span-1-of-4 box">

                        <Ionicon icon="ios-calendar" fontSize="90px" color="white"/>
                        <h3>Stay organized</h3>
                        <p>
                            Stay on top of your tasks, with your personal to-do widget.
                        </p>
                    </div>
                </div>
            </section>
                </div>
            </Jumbotron>
            </Container>
            <Container fluid>
                <Jumbotron className="jumbo">
            <section className="section-projects">
                <div className="row">
                    <h2 className="h2-top">Top Trending Projects</h2>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <figure className="project-photo">
                                <div className="desk-hand">
                                    <img src="https://images.pexels.com/photos/450595/pexels-photo-450595.jpeg?cs=srgb&dl=apple-keyboard-computer-desk-450595.jpg&fm=jpg" alt="ecommerce" />
                                </div>
                            </figure>
                        </Grid>
                        <Grid item xs={4}>
                            <figure className="project-photo">
                                <div className="desk-hand">
                                    <img src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="web grid" />
                                </div>
                            </figure>
                        </Grid>
                        <Grid item xs={4}>
                            <figure className="project-photo">
                                <div className="desk-hand">
                                    <img src="https://images.pexels.com/photos/225502/pexels-photo-225502.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="imac workstation" />
                                </div>
                            </figure>>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <figure className="project-photo">
                                <div className="desk-hand">
                                    <img src="https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="ipad on a desk" />
                                </div>
                            </figure>
                        </Grid>
                        <Grid item xs={4}>
                            <figure className="project-photo">
                                <div className="desk-hand">
                                    <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?cs=srgb&dl=adult-competition-computers-929831.jpg&fm=jpg" alt="ipad with mouse" />
                                </div>
                            </figure>
                        </Grid>
                        <Grid item xs={4}>
                            <figure className="project-photo">
                                <div className="desk-hand">
                                    <img src="https://images.pexels.com/photos/870903/pexels-photo-870903.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="ipad" />
                                </div>
                            </figure>
                        </Grid>
                    </Grid>
                </div>
            </section>
            </Jumbotron>
            </Container>
        </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
