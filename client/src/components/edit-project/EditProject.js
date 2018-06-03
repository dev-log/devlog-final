import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProject, getCurrentProject } from '../../actions/projectActions';
import isEmpty from '../../validation/is-empty';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      skills: '',
      githubusername: '',
      bio: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProject();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.project.project) {
      const project = nextProps.project.project;

      // Bring skills array back to CSV
      const skillsCSV = project.skills.join(',');

      // If project field doesnt exist, make empty string
      project.company = !isEmpty(project.company) ? project.company : '';
      project.website = !isEmpty(project.website) ? project.website : '';
      project.githubusername = !isEmpty(project.githubusername)
        ? project.githubusername
        : '';
      project.bio = !isEmpty(project.bio) ? project.bio : '';
      project.social = !isEmpty(project.social) ? project.social : {};

      // Set component fields state
      this.setState({
        handle: project.handle,
        company: project.company,
        website: project.website,
        skills: skillsCSV,
        githubusername: project.githubusername,
        bio: project.bio,
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const projectData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,

    };

    this.props.createProject(projectData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      const { errors } = this.state;

      return (
      <div className="create-project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Project</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Project Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your project URL. Your full name, company name, nickname"
                />

                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Could be your own company or one you work for"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own website or a company one"
                />

                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />
                  <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  getCurrentProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  errors: state.errors
});

export default connect(mapStateToProps, { createProject, getCurrentProject })(
  withRouter(CreateProject)
);
