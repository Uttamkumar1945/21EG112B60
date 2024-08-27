import React from "react";
import styled from "styled-components";

// Container for the filter options
const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* Increased gap for better spacing */
  margin-bottom: 20px;
  background-color: #fff; /* White background for contrast */
  padding: 15px;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled select element
const Select = styled.select`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
  border-radius: 5px;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary || "#007bff"};
    outline: none;
  }
`;

// Styled input element
const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border || "#ddd"};
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  max-width: 150px; /* Limit the width */
  box-sizing: border-box; /* Ensure padding is included in width */
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary || "#007bff"};
    outline: none;
  }
`;

// FilterBar component
const FilterBar = ({ filters, setFilters, setSortBy, setOrder }) => {
  const validCategories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];
  const validCompanies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];

  return (
    <FilterContainer>
      <Select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        {validCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>

      <Select
        value={filters.company}
        onChange={(e) => setFilters({ ...filters, company: e.target.value })}
      >
        <option value="">All Companies</option>
        {validCompanies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </Select>

      <Select
        value={filters.rating}
        onChange={(e) =>
          setFilters({ ...filters, rating: Number(e.target.value) })
        }
      >
        <option value={0}>All Ratings</option>
        <option value={4}>4 Stars & Up</option>
        <option value={3}>3 Stars & Up</option>
      </Select>

      <Input
        type="number"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={(e) =>
          setFilters({ ...filters, minPrice: Number(e.target.value) })
        }
      />
      <Input
        type="number"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: Number(e.target.value) })
        }
      />

      <Select onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
        <option value="discount">Sort by Discount</option>
      </Select>

      <Select onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </FilterContainer>
  );
};

export default FilterBar;
