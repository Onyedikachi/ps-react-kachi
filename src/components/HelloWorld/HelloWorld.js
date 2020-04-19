import React from 'react';
import PropTypes from 'prop-types';

/** My Greetings Component*/
const HelloWord = ({message}) => {
    return (
        <div>
            Hello {message}
        </div>
    );
}
HelloWord.propTypes = {
    /** Message to display */
    message: PropTypes.string
}
HelloWord.defaultProps = {
    message: 'World'
}
export default HelloWord;