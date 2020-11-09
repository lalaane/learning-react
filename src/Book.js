import React from 'react';

const Book = ({ img, title, author }) => {
	// const { img, title, author } = props; // one way for kui nii kirjutada ss ei pea props allpool kgg ette kirjutama et valuesid saada

	// attribute, eventHandler
	// onClick onMouseOver
	const clickHandler = (e) => {
		alert('yo yo yo');
		console.log(e);
		console.log(e.target);
	};
	const complexExample = (author) => {
		console.log(author);
	};
	return (
		<article
			className='book'
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={img} alt='' />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type='button' onClick={clickHandler}>
				Reference example
			</button>
			<button type='button' onClick={() => complexExample(author)}>
				more complex example
			</button>
		</article>
	);
};

export default Book;
