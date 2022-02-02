import React from 'react';
import PeopleSelect from './PeopleSelect';
import { relationship, peopleMap } from './data';
import {Container, FlexBox, Header, ListItem} from './atoms';

const colors = ['red', 'green', 'antiquewhite', 'azure'];

const DisplayMutualFriends = () => {
    const [selected, setSelected] = React.useState([]);

    const [mutualFriends, setMutualFriends] = React.useState([]);

    const getMutualFriends = (selectedPeople) => {
        if (selectedPeople.length < 2)
            return [];
        const [ one, two, ...rest ] = selectedPeople;
        const friendsOfPerson1 = relationship[one.value];
        const friendsOfPerson2 = relationship[two.value];

        console.log(friendsOfPerson1);
        console.log(friendsOfPerson2);


        const result = friendsOfPerson1.filter((entry) => friendsOfPerson2.includes(entry))
        console.log(result);
        return result;
    };

    const handleSelect = (selectedPeople) => {
        const mutualFriends = getMutualFriends(selectedPeople);
        setMutualFriends(mutualFriends);
        setSelected(selectedPeople);
    }

    console.log(mutualFriends)

    return <Container>
        <PeopleSelect selected={selected} onSelect={handleSelect}/>

        <FlexBox>
            <Header>Mutual Friends</Header>
        <ul>
            { mutualFriends.map((friend, index) => (
                <ListItem color={colors[index]} key={friend}>{ peopleMap[friend] }</ListItem>
            ))}
        </ul>
        </FlexBox>
    </Container>

}

export default DisplayMutualFriends;