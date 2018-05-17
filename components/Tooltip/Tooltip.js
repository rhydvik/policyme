import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

import styles from './Tooltip.sass';

const style = {
    tooltip: {
        width: 200,
        backgroundColor: '#004f78',
        lineHeight: 1.5,
        letterSpacing: 'normal',
        color: '#ffffff',
        marginTop: '1.5rem'
    },
};


class ControlledTooltips extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    state = {
        open: false,
    };

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { title, classes } = this.props;
        return (
            <Tooltip
                enterDelay={300}
                id="tooltip-controlled"
                leaveDelay={300}
                onClose={this.handleTooltipClose}
                onOpen={this.handleTooltipOpen}
                open={this.state.open}
                classes={{ tooltip: classes.tooltip }}
                placement="right"
                title={title}
            >
                <span className={styles.span}> i </span>
            </Tooltip>
        );
    }
}

export default withStyles(style)(ControlledTooltips);
