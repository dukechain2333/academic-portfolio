import React from "react";

const CustomLink = ({href, children}) => (
	<a
		href={href}
		className="border-b-[1px] border-gray-600 transition hover:bg-gray-200 rounded-t-sm mr-2"
		target="_blank"
		rel="noopener noreferrer">
		{children}
	</a>
);

export default CustomLink;