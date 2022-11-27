import React, { useState } from "react";

const students = [
	{
		name: "mark",
	},
	{
		name: "mark2",
	},
	{
		name: "mark3",
	},
	{
		name: "mark4",
	},
];
function AttendanceBook(props) {
	return (
		<ul>
			{students.map((students, index) => {
				return <li key={index}>{students.name}</li>;
			})}
		</ul>
	);
}

export default AttendanceBook;
