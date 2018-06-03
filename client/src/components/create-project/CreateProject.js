import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProject } from '../../actions/projectActions';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      company: '',
      website: '',
        skills: '',
        bio: '',
       errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
              <h1 className="display-4 text-center">Create Your Project</h1>
              <p className="lead text-center">
                Let's get some information to make your project stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Project Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  info="A unique handle for your project URL. Your full name, company name, nickname"
                  error={errors.handle}

                />
                  <TextFieldGroup
                      placeholder="Company Name"
                      name="company"
                      value={this.state.company}
                      onChange={this.onChange}
                      info="Your companies name"
                      error={errors.company}

                  />
                  <TextFieldGroup
                      placeholder="Website"
                      name="website"
                      value={this.state.website}
                      onChange={this.onChange}
                      info="Could be your own website or a company one"
                      error={errors.website}

                  />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                  error={errors.skills}

                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  info="If you want your latest repos and a Github link, include your username"
                  error={errors.githubusername}

                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  info="Tell us a little about yourself"
                  error={errors.bio}

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
  createProject:PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  errors: state.errors
});

export default connect(mapStateToProps, { createProject })(
  withRouter(CreateProject)
);
