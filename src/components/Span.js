import React, { useEffect, useState } from "react";

import "./Span.css";

export const Span = ({stopTwinkle:stop}) => {
	const [twinkle, setTwinkle] = useState(true);

	useEffect(() => {
		if(!stop){
			const interval = setInterval(() => {
				setTwinkle(e => !e)
			}, 500);
			return () => {
				clearInterval(interval);
			}
		}else{
			setTwinkle(false);
		}		
	}, [stop])
	
	return (
		<span className={twinkle ? 'twinkle' : ''}></span>
	)
};
