import React, { useState } from "react";

function RequestForm(props) {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		alert("입력한 이름 : " + value);
		event.preventDefault();
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>
				요청사항 : <textarea type="text" value={value} onChange={handleChange} />
			</label>
			<button type="submit">제출</button>
		</form>
	);
}

export default RequestForm;
