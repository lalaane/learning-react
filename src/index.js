import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//setup variables
const firstBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
	title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
	author: 'James Clear',
};
const secondBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/71A0CJuGSeL._AC_UL200_SR200,200_.jpg',
	title: 'Burn After Writing',
	author: 'Sharon Jones',
};

function Booklist() {
	return (
		<section className='booklist'>
			<Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente odit excepturi cupiditate dolor vitae saepe
					tempora voluptatem itaque exercitationem? Vero, cum ratione in optio nesciunt ipsa et veritatis enim
					doloribus.
				</p>
			</Book>
			<Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
		</section>
	);
}
const Book = (props) => {
	// const { img, title, author } = props; // kui nii kirjutada ss ei pea props allpool kgg ette kirjutama et valuesid saada
	return (
		<article className='book'>
			<img src={props.img} alt='bookcase' />
			<h1>{props.title}</h1>
			<h4>{props.author}</h4>
			{props.children} {/*children on special prop, siin kasutame selleks et booki p sisu lehel n2ha*/}
		</article>
	);
};

ReactDOM.render(<Booklist />, document.getElementById('root'));
