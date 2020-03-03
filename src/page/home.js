import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default () => {
    const content = useSelector(state => state.data) //this hook gives us redux store state
    const dispatch = useDispatch() //this hook gives us dispatch method

    function getData() {
        return dispatch => {
            axios.get("https://jsonplaceholder.typicode.com/todos/1")
                .then(res =>
                dispatch({
                    type: "FETCH_DATA",
                    data: res.data
                })
            ).finally(()=>{
                console.log(content)
            })
        };
    }

    useEffect(() => {
        dispatch(getData());
    }, []);
    
    return (
        <Grid container component="main">
            {content.data && (
                <ul>
                <li>{content.data.id}</li>
                <li>{content.data.title}</li>
                </ul>
            )}
        </Grid>
    );
}