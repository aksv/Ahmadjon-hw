import React from 'react'
import PropTypes from 'prop-types'

function MoviesLabel(props: { number: number }) {
    return (
        <div className="movies__label">
            <span>{props.number} </span> movies found
        </div>
    )
}

MoviesLabel.propTypes = {
    number: PropTypes.number.isRequired
}

export default MoviesLabel

