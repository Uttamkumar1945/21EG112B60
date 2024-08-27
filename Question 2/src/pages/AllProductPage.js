import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import styled from "styled-components";
// Styled component for the page container
const PageContainer = styled.div`
  max-width: 1400px; /* Increased max-width for more spacious layout */
  margin: 0 auto;
  padding: 40px 20px; /* Increased padding for better spacing */
  background-color: #f9f9f9; /* Light background color for contrast */
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 3rem; /* Larger font size for more impact */
  font-weight: 700; /* Bold font weight for emphasis */
  color: ${(props) => props.theme.colors.primary || "#333"}; /* Fallback color if theme not provided */
  margin-bottom: 30px; /* Increased margin for better separation from content */
  text-align: center; /* Center align title for better visual balance */
`;

// Styled component for the product grid
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Increased min-width for grid items */
  gap: 24px; /* Larger gap for better spacing between items */
  align-items: start; /* Align items to the start for a more consistent layout */
`;

export { PageContainer, Title, ProductGrid };


const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "Laptop",
    company: "",
    rating: 0,
    minPrice: 1,
    maxPrice: 10000,
    availability: "all",
  });
  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [filters, sortBy, order, page]);

  const fetchProducts = async () => {
    const { category, minPrice, maxPrice } = filters;
    try {
      const response = await axios.get(
        `http://localhost:5000/categories/${category}/products`,
        {
          params: { n: 10, page, sort_by: sortBy, order, minPrice, maxPrice },
        }
      );
      setProducts(response.data);
      setTotalPages(Math.ceil(response.data.length / 10));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <PageContainer>
      <Title>All Products</Title>
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </PageContainer>
  );
};

export default AllProductsPage;
