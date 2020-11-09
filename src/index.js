import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
	{
		id: 1,
		img: 'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
		title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
		author: 'James Clear',
	},
	{
		id: 2,
		img: 'https://images-na.ssl-images-amazon.com/images/I/71A0CJuGSeL._AC_UL200_SR200,200_.jpg',
		title: 'Burn After Writing',
		author: 'Sharon Jones',
	},
	{
		id: 3,
		img: 'https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg',
		title: 'Untamed',
		author: 'Glennon Doyle',
	},
];

function Booklist() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book key={book.id} book={book}></Book>;
			})}
		</section>
	);
}
const Book = (props) => {
	// const { img, title, author } = props; // kui nii kirjutada ss ei pea props allpool kgg ette kirjutama et valuesid saada
	const { img, title, author } = props.book; //props.book peab kirjutama sest praegu ylemine map tagastab objecti
	return (
		<article className='book'>
			<img src={img} alt='bookcase' />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{/* {props.children} children on special prop, siin kasutasime selleks et book tagide vahel olevat sisu kuvataks*/}
		</article>
	);
};

ReactDOM.render(<Booklist />, document.getElementById('root'));
