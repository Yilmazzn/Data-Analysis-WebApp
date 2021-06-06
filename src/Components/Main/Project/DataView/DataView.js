import { Box, Button, Grid, Typography } from "@material-ui/core";
import { AddAlertSharp } from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectData, uploadProjectData } from "../../../../Action_Creators/dataActions";
import { setLoadingState } from "../../../../Action_Creators/loadingActions";
import LoadingComponent from "../../../Loading/LoadingComponent";
import csv from 'csv'
import csvParse from "../../../../computations/csvParse";

const DataView = props => {

    const { project } = props; 
    const loading = useSelector(state => state.loading);
    const data = useSelector(state => state.data)

    const dispatch = useDispatch();
    useEffect(() => {
        if(data.id !== project.id){
            dispatch(fetchProjectData(project.id))
        }
    }, []);

    // Loading data
    if(data.id !== project.id){
        return <LoadingComponent text="Fetching Data..." />
    }


    let fileName = "";
    const handleImport = event => {
        const file = event.target.files[0];
        fileName = file.name;
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            dispatch(setLoadingState(true));
            handleData(reader.result);
        })
        reader.readAsText(file);

    }
    const handleData = result => {
        const csvData = csvParse(result);
        console.log(csvData);
        dispatch(uploadProjectData(project.id, csvData))
    }


    // No Data 
    if(data.id === project.id && Object.keys(data.data).length === 0){
        return (
            <Grid container direction="column" alignItems="center" spacing={5}>
                <Grid item>
                    <Typography> No data </Typography>
                </Grid>
                <Grid container item direction="column" alignItems="center">
                    <Typography variant="h4">Get Started now</Typography>
                    <Box pt={3} />
                    {!loading ?  
                        <Button variant="contained" color="primary" component="label" type="button">
                            Import Data
                            <input type="file" hidden accept=".csv" onChange={handleImport}/>
                        </Button>
                        : 
                        <LoadingComponent text={`Importing ${fileName} ....`} />
                    }
                    
                </Grid>
            </Grid>
        )
    }

    // Data
    return ( 
        <div>
            <Typography>HELO</Typography>
        </div>
     );
}
 
export default DataView;