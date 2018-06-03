import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProjectAbout extends Component {
  render() {
    const { project } = this.props;

    // Get project name
    const company = project.handle.trim().split(' ')[0];

    // Skill List
    const skills = project.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{company}'s Bio</h3>
            <p className="lead">
              {isEmpty(project.bio) ? (
                <span>{company} does not have a bio</span>
              ) : (
                <span>{project.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectAbout.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectAbout;
