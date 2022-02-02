import { v4 as uuidv4 } from 'uuid';

const names = ['Arun', 'Varun', 'Chris', 'Daria', 'Etan', 'Fred', 'George'];

export const people = names.map((name, index) => ({
    label: name,
    value: uuidv4(),
}));

export const peopleMap = people.reduce((acc, { value, label }) => {
    acc[value] = label;
    return acc;
}, {});

const [one, two, three, four, five, six, seven] = people;

export const relationship = {
    [one.value]: [two.value, three.value, six.value, seven.value],
    [two.value]: [one.value, four.value, six.value, seven.value],
    [three.value]: [one.value],
    [four.value]: [two.value],
    [five.value]: [six.value],
    [six.value]: [five.value, seven.value],
    [seven.value]: [six.value]
};

