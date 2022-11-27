import React, { useState } from "react";

function WarningBanner(props) {
	if (!props.warning){
		return null;
	}
	return (
		<div>
			경고!
		</div>
	);
}

function Manpage(props){
	const [showWarning,setShowWarning] = useState(false);
	const handleToggleClick = () =>{
		setShowWarning(prevShowWarning => !prevShowWarning);
	}

	return(
		<>
			<WarningBanner warning={showWarning}/>
			<button onClick={handleToggleClick}>
				{showWarning?'감추기':'보이기'}
			</button>
		</>
	)
}

export default Manpage;
