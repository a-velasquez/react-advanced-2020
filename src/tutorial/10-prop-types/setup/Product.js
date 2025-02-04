import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
	// checks if image is truthy, if so checks for image.url
	const url = image && image.url
	return (
		<article className='product'>
			{/* if object image has url else render defaultImage */}
			<img src={url || defaultImage} alt={name} />
			<h4>{name}</h4>
			<p>${price || 3.99}</p>
		</article>
	)
}

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}

export default Product
