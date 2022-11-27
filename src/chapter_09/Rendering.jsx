import React, { useState } from "react";
import Counter from "./Counter";
import Mailbox from './Mailbox'
import UseStatus from "./UseStatus";
import LoginControl from "./LoginControl";
import Manpage from "./WarningBanner";

function Rendering() {
	const messages = ['React', 'Re: React', 'Re:Re: React'];
	return (
		<>
				<Mailbox unreadMessages={messages} />
				<Counter/>
				<UseStatus isLoggedIn={false}/>
				<LoginControl />
				<h3>렌더링 막기</h3>
				<Manpage/>
		</>
	);
}

export default Rendering;
