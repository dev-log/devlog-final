import React from 'react';
import { Link } from 'react-router-dom';

const ProjectActions = () => {
    return (
        <div className="btn-group mb-4" role="group">
            <Link to="/edit-project" className="btn btn-light">
                <i className="fas fa-user-circle text-info mr-1" /> Edit Project
            </Link>

            <Link to="/create-project" className="btn btn-light">
                <i className="fas fa-graduation-cap text-info mr-1" />
                Create Project
            </Link>
        </div>
    );
};

export default ProjectActions;