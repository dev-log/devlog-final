import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'reactstrap';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonForce extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { exploreItems } = this.props;
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        scrollable
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Android" icon={<i className="devicon-android-plain colored"></i>} />
                        <Tab label="Linux" icon={<i className="devicon-linux-plain colored"></i>} />
                        <Tab label="Apple" icon={<i className="devicon-apple-original colored"></i>} />
                        <Tab label="Windows" icon={<i className="devicon-windows8-original colored"></i>} />
                        <Tab label="HTML5" icon={<i className="devicon-html5-plain colored"></i>} />
                        <Tab label="JavaScript" icon={<i className="devicon-javascript-plain colored"></i>} />
                        <Tab label="Node.js" icon={<i className="devicon-nodejs-plain colored"></i>} />
                        <Tab label="React" icon={<i className="devicon-react-original colored"></i>} />
                        <Tab label="MySQL" icon={<i className="devicon-mysql-plain colored"></i>} />
                        <Tab label="MongoDB" icon={<i className="devicon-mongodb-plain colored"></i>} />
                        <Tab label="Python" icon={<i className="devicon-python-plain colored"></i>} />

                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer><Row>{exploreItems}</Row></TabContainer>}
                {value === 1 && <TabContainer><Row>{exploreItems}</Row></TabContainer>}
                {value === 2 && <TabContainer><Row>{exploreItems}</Row></TabContainer>}
                {value === 3 && <TabContainer><Row>{exploreItems}</Row></TabContainer>}
                {value === 4 && <TabContainer><Row>{exploreItems}</Row></TabContainer>}
                {value === 5 && <TabContainer><Row>{exploreItems}</Row></TabContainer>}
                {value === 6 && <TabContainer><Row>{exploreItems}</Row></TabContainer>}
            </div>
        );
    }
}

ScrollableTabsButtonForce.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);