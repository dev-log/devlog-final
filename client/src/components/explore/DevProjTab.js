// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import classnames from "classnames";
// import { TabContent, TabPane, Nav, Dropdown, DropdownItem,  DropdownToggle, DropdownMenu, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Jumbotron } from 'reactstrap';
// import DevCard from './DevCard';
// import Spinner from '../common/Spinner';
// import PropTypes from "prop-types";
// import { getProfiles } from '../../actions/profileActions';
//
// export default class DevProjTab extends Component {
//     constructor(props) {
//         super(props);
//
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             activeTab: '1'
//         };
//     }
//
//     toggle(tab) {
//         if (this.state.activeTab !== tab) {
//             this.setState({
//                 activeTab: tab
//             });
//         }
//     }
//     render() {
//         const { exploreItems } = this.props;
//         return (
//             <div>
//                 <Nav tabs fill>
//                     <NavItem>
//                         <NavLink
//                             className={classnames({ active: this.state.activeTab === '1' })}
//                             onClick={() => { this.toggle('1'); }}
//                         >
//                             <h1 className="display-6 text-center">New Developers</h1>
//                         </NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink
//                             className={classnames({ active: this.state.activeTab === '2' })}
//                             onClick={() => { this.toggle('2'); }}
//                         >
//                             <h1 className="display-6 text-center">New Projects</h1>
//
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//                 <TabContent activeTab={this.state.activeTab}>
//                     <TabPane tabId="1">
//                         <Row>
//                             <Col sm="12">
//                                 <Row>{exploreItems}</Row>
//                             </Col>
//                         </Row>
//                     </TabPane>
//                     <TabPane tabId="2">
//                         <Row>
//                             <Col sm="12">
//                                 <Row>{exploreItems}</Row>
//                             </Col>
//                         </Row>
//                     </TabPane>
//                 </TabContent>
//             </div>
//         );
//     }
// }
//
//



import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'reactstrap';


function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;
        const { exploreItems } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="relative" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        centered
                    >
                        <Tab label="New Developers" />
                        <Tab label="New Projects" />
                    </Tabs>
                </AppBar>
                    <div className="flex-center">
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer width="100%" dir={theme.direction}>
                        <Row>
                            <Col md="20" width="100%" className="centered">
                                <Row width="100%">{exploreItems}</Row>
                            </Col>
                        </Row>
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <Row>
                            <Col sm="12">
                                <Row>{exploreItems}</Row>
                            </Col>
                        </Row>
                    </TabContainer>
                </SwipeableViews>
                    </div>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
