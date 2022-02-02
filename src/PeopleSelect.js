import React from 'react';
import { people } from './data';
import {FlexBox, Header, StyledMultiSelect} from "./atoms";

const PeopleSelect = ({ selected, onSelect}) => {
    return <FlexBox>
        <Header>Select Friends...</Header>
        <StyledMultiSelect
        options={people}
        value={selected}
        onChange={onSelect}
        labelledBy="Select"
    />
    </FlexBox>
}

export default PeopleSelect;