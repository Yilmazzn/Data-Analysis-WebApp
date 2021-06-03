import { Typography } from '@material-ui/core'
import React from 'react'

const Title = (props) => {
    return (
        <Typography component="h2" variant="h6" gutterBottom>
            {props.text}
        </Typography>
    )
}

export default Title
