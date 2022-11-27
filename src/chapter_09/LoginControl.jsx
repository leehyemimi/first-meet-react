import React, { useState } from "react";

function UseGreeting(props){
	return <h1>다시오셨군요</h1>
}

function GuestGreeting(props){
	return <h1>회원가입을 해주세요</h1>
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <UseGreeting/>
	}else{
		<GuestGreeting/>
	}
}

function LoginButton(props){
	return (
		<button onClick={props.onClick}>로그인</button>
	)
}

function LogoutButton(props){
	return (
		<button onClick={props.onClick}>로그아웃</button>
	)
}

function LoginControl(props) {
	const [isLoggedIn,setIsLoggedIn] = useState(props);
	
	const handleLoginClick = () =>{
		setIsLoggedIn(true)
	}

	const handleLogoutClick = () =>{
		setIsLoggedIn(false)
	}

	let button;
	if(isLoggedIn){
		button = <LogoutButton onClick={handleLogoutClick}/>
	}else{
		button = <LoginButton onClick={handleLoginClick}/>
	}
	
	return (
		<div>
			<Greeting isLoggedIn={isLoggedIn}/>
			{isLoggedIn
			?	<LogoutButton onClick={handleLogoutClick}/>
			: <LoginButton onClick={handleLoginClick}/>
			}
		</div>
	);
}

export default LoginControl;
