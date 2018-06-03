import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function RaisedButtons(props) {
    const { classes, variant, color, size, text } = props;
    return (
        <div>
            <Button variant={variant} color={color} size={size} className={classes.button}>
                {text}
            </Button>
        </div>
    );
}

RaisedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);