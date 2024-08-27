import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled component for the card container
const Card = styled(Link)`
  display: block;
  background-color: #ffffff; /* White background */
  border-radius: 12px; /* Rounded corners */
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Deeper shadow for better depth */
  transition: transform 0.3s, box-shadow 0.3s; /* Smoother transition effects */
  text-decoration: none;
  color: ${(props) => props.theme.colors.text || "#333"};

  &:hover {
    transform: translateY(-10px); /* Higher lift on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }
`;

// Styled component for the card image
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid ${(props) => props.theme.colors.border || "#ddd"}; /* Border under the image */
`;

// Styled component for the card content
const CardContent = styled.div`
  padding: 20px; /* Increased padding for better spacing */
`;

// Styled component for the card title
const CardTitle = styled.h2`
  font-size: 1.5rem; /* Larger font size for the title */
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.title || "#333"}; /* Customizable title color */
`;

// Styled component for card info (price and rating)
const CardInfo = styled.p`
  font-size: 1.1rem; /* Slightly larger font size */
  color: ${(props) => props.theme.colors.lightText || "#555"}; /* Customizable text color */
  margin-bottom: 8px; /* Increased margin for spacing */
`;

// ProductCard component
const ProductCard = ({ product }) => {
  const randomImageUrl = `https://picsum.photos/seed/${product.id}/300/200`;

  return (
    <Card to={`/product/${product.id}`}>
      <CardImage src={randomImageUrl} alt={product.name} />
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <CardInfo>Price: Rs.{product.price}</CardInfo>
        <CardInfo>Rating: {product.rating}</CardInfo>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
