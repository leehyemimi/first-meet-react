import React, { useState } from "react";

function UseStatus(props) {
	const [isLoggedIn,setIsLoggedIn] = useState(props);
	return (
		<div>
			이 사용자는 현재 <strong>{props.isLoggedIn ? '로그인':'로그인하지 않은'}</strong>상태입니다.
		</div>
	);
}

export default UseStatus;
