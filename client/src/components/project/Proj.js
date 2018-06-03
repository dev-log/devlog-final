import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProjectHeader from './ProjectHeader';
import ProjectAbout from './ProjectAbout';
import ProjectGithub from './ProjectGithub';
import Spinner from '../common/Spinner';
import { getProjectByHandle } from '../../actions/projectActions';
import { getPosts } from '../../actions/postActions';
import PostFeed from '../posts/PostFeed';



class Proj extends Component {
  componentDidMount() {

      if (this.props.match.params.handle) {
          this.props.getProjectByHandle(this.props.match.params.handle);
      }
      this.props.getPosts();

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project.project === null && this.props.project.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { project, loading } = this.props.project;
     let projectContent;

    if (project === null || loading) {
      projectContent = <Spinner />;
    } else {
      projectContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/projects" className="btn btn-light mb-3 float-left">
                Back To Projects
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProjectHeader project={project} />
          <ProjectAbout project={project} />
          {project.githubusername ? (
            <ProjectGithub username={project.githubusername} />
          ) : null}

        </div>
      );
    }

      const { posts } = this.props.post;
      let postContent;

      if (posts === null ) {
          postContent = <Spinner />;
      } else {
          postContent = <PostFeed posts={posts} />;
      }

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{projectContent}</div>
              Project Feed
              <div className="col-md-12">{postContent}</div>


          </div>
        </div>
      </div>
    );
  }
}

Proj.propTypes = {
  getProjectByHandle: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
   post: state.post
});

export default connect(mapStateToProps,
    { getProjectByHandle,
        getPosts
    })(Proj);
