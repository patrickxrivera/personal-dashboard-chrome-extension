export const isEnterKey = ({ key }) => key === 'Enter';

export const getRandBetween = ({ min, max }) => Math.floor(Math.random() * (max - min + 1) + min);
