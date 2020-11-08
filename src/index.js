import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
	return (
		<div>
			<h4>This is Laura and this is my first component</h4>
		</div>
	);
}

// const Greeting = () => {
// 	return React.createElement('h1', {}, 'hello world');
// };

ReactDOM.render(<Greeting />, document.getElementById('root'));
