import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Copyright from './copyright.js'



const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
	const classes = useStyles();
	const data = useSelector(state => state.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const [user, setUser] = useState({
		username: data.user.username,
		password: data.user.password,
		is_logined: data.user.is_logined
	})

	function updateForm(field, value){
		setUser(user =>({
			...user,
			[field] : value
		}))
	}

	useEffect(()=>{
		if(data.user.username != ''){
			history.push("/dashboard")
		}
	},[data.user])


	function handleSubmit(event){
		event.preventDefault()
		dispatch({
			type: 'UPDATE_USER',
			user
		})
		
	}

	return (
		<form className={classes.form} noValidate onSubmit={handleSubmit}>
			<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="username"
					label="Username"
					name="username"
					value={user.username}
					onChange={(event)=> updateForm('username', event.target.value)}
					autoComplete="username"
					autoFocus
			/>
			<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					value={user.password}
					onChange={(event)=> updateForm('password', event.target.value)}
					autoComplete="current-password"
			/>
			<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
			>
					Sign In
			</Button>
			<Box mt={5}>
					<Copyright />
			</Box>
		</form>
	);
}