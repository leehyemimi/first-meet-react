import React from "react";

function Book(props) {
	return (
		<div>
			<h1>{`내 이름은 ${props.name}입니다.`}</h1>
			<h2>{`나이는 ${props.age}입니다.`}</h2>
		</div>
	);
}

export default Book;
