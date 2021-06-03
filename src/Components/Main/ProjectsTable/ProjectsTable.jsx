import { Box, Collapse, IconButton, Link, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import useStyles from './styles'
import Title from './Title';

const projects = [
    {
        id: 1, 
        name: "Project 1", 
        description: "Short Description here",
        state: "Date Curation",
        creationDate: "01.01.2021",
        details: {
            dataSetSize: 350000
        }
    },
    {
        id: 2, 
        name: "Project 2", 
        description: "Another Description",
        state: "Model Training",
        creationDate: "06.06.2021",
        details: {
            dataSetSize: 720187
        }
    }
]

const Row = (props) => {
    const { project } = props;
    const [open, setOpen] = useState(false);
    const classes = makeStyles(theme => ({
        root: {
            '& > *': {
                borderBottom: 'unset',
            }
        }
    }))

    return(
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria_label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row"> {project.name} </TableCell>
                <TableCell align="right">{project.description}</TableCell>
                <TableCell align="right">{project.state}</TableCell>
                <TableCell align="right">{project.creationDate}</TableCell>
            </TableRow>
            {/* Collapsed Detail Table */}
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box maring={1}>
                            <Typography> Details </Typography>
                        </Box>
                        <Table size="small" aria_label="details">
                            <TableHead>
                                <TableRow>
                                    <TableCell> Dataset Size </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={project.details.dataSetSize}>
                                    <TableCell component="th" scope="row">
                                        {project.details.dataSetSize}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}


const ProjectsTable = () => {
    
    const classes = useStyles();
    //useSelector(state => state.projects);

    return (
        <div className={classes.table}>
            <Title title="Test" />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Creation Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map(project => (
                            <Row project={project} />
                        ))}
                    </TableBody>
                </Table>
                <div className={classes.seeMore}>
                    <Link href="/projects"> 
                        <Typography>See more projects </Typography>
                    </Link>
                </div>
            </TableContainer>
        </div>
    )
}

export default ProjectsTable
