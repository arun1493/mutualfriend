import styled from 'styled-components';
import { MultiSelect } from "react-multi-select-component";

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.h3`
 margin: 5px
`

export const StyledMultiSelect = styled(MultiSelect)`
 min-width: 300px;
  margin: 20px;
`;

export const Container = styled.div`
    padding: 2em;
    display: flex;
    text-align: center;
    flex-direction: row;
`;

export const ListItem = styled.li`
  margin: 5px;
 list-style: none;
  min-width: 50px;
  text-overflow: ellipsis;
  border: 1px solid black;
  text-align: center;
  border-radius: 5px;
  color: white;
  background-color: ${({color}) => color};
`;