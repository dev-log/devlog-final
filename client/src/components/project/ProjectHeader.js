import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProjectHeader extends Component {
  render() {
    const { project } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={project.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{project.handle}</h1>
              <p className="lead text-center">
                {isEmpty(project.company) ? null : (
                  <span>at {project.company}</span>
                )}
              </p>
              <p>
                {isEmpty(project.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={project.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectHeader;
