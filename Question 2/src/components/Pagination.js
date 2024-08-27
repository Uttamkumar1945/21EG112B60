import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const PageButton = styled.button`
  padding: 10px 20px;
  margin: 0 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: scale(1.05);
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.lightText};
    cursor: not-allowed;
    transform: none;
  }
`;

const PageInfo = styled.div`
  margin: 0 15px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
`;

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <PaginationContainer>
      <PageButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </PageButton>
      <PageInfo>
        Page {page} of {totalPages}
      </PageInfo>
      <PageButton
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
