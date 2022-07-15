import styled from "styled-components";

export const Container = styled.div`
  padding-left:260px;
  padding-right:260px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 28px;
  row-gap: 47px;
`;

export const ItemTitle = styled.div`
  margin-top: 48px;
  color: black;
  font-size: 24px;
  font-weight: 800;
`;

export const SubTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 48px;
  color: black;
  font-size: 20px;
  font-weight: 500;
`;