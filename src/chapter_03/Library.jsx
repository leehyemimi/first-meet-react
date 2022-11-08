import React from "react";
import Book from "./Book";

function Library(props) {
	return (
		<div>
			<Book name="마이클" age="20살" />
			<Book name="크러쉬" age="30살" />
		</div>
	);
}

export default Library;
