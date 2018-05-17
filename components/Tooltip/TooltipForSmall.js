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
        setTimeout(2000, this.setState({ open: false }))
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
                leaveDelay={2000}
                onClose={this.handleTooltipClose}
                // onOpen={this.handleTooltipOpen}
                open={this.state.open}
                classes={{ tooltip: classes.tooltip }}
                placement="bottom"
                title={title}
            >
                <span className={styles.span} onClick={this.handleTooltipOpen}> i </span>
            </Tooltip>
        );
    }
}

export default withStyles(style)(ControlledTooltips);
