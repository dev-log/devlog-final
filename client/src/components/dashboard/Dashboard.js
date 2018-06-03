import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import { getCurrentProject, deleteProject } from '../../actions/projectActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import ProjectActions from './ProjectActions';
import RaisedButton from './RaisedButton';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile
    this.props.getCurrentProject();

  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { project } = this.props.project;


    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      /*##########################################
                Check to see if the currently
                logged in user has any profile 
                data
    #############################################*/
     
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted text-black">
              Welcome, <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <ProjectActions />
            <div style={{ marginBottom: '60px' }} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        /*##########################################
                User has logged in but
                no profile is set up.
        #############################################*/
        
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome home, {user.name}</p>
            <p>It seems you haven't added a profile to your account yet, please create one
            now to begin connecting with followers and fellow developers!</p>
            <Link to="/create-profile" >
            <RaisedButton variant="raised" color="secondary" size="large" text="Create Profile"/>
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Control Center</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getCurrentProject: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  project: state.project

});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount,getCurrentProject })(
  Dashboard
);
