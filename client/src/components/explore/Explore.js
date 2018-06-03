import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import DevCard from './DevCard';
import { getProfiles } from '../../actions/profileActions';
//import CardList from './CardList';
import Scroll from './Scroll';
//import CatDropdown from './CatDropdown';
//import DevProjTab from './DevProjTab';
import MaterialUITab from './MaterialUITab';
import ProjCarousel from './ProjCarousel';
import DevProjTab from "./DevProjTab";
//imort { TabContent, TabPane, Nav, Dropdown, DropdownItem,  DropdownToggle, DropdownMenu, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Jumbotron } from 'reactstrap';
//import classnames from 'classnames';

class Explore extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.props.getProfiles();
    }


    render() {
        const { profiles, loading } = this.props.profile;
        let exploreItems;

        if (profiles === null || loading) {
            exploreItems = <Spinner />;
        } else {
            if (profiles.length > 0) {
                exploreItems = profiles.map(profile => (
                    <DevCard key={profile._id} profile={profile} />
                ));
            } else {
                exploreItems = <h4>No profiles found...</h4>;
            }
        }

        return (
            <div className="explore">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Explore</h1>
                            <p className="lead text-center">
                                Witty Subtitle
                            </p>
                            <ProjCarousel />
                            <br></br>
                            <h1 className="display-4 text-center">Categories</h1>
                            <br></br>
                            <MaterialUITab exploreItems = {exploreItems}/>
                             <br></br> <br></br>
                            <DevProjTab exploreItems = {exploreItems}/>
                        </div>
                    </div>
            </div>
        );
    }
}

Explore.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Explore);
