const questions = [
    {
        question: 'What is your gender?',
        name: 'gender',
        type: 'BUTTON',
        inputs: [
            {
                label: 'MALE',
                value: null,
            },
            {
                label: 'FEMALE',
                value: null,
            }
        ],
        requiredField: 'gender',
    },
    {
        question: 'How old are you?',
        type: 'INPUT',
        name: 'age',
        inputs: [
            {
                label: 'AGE',
                value: ''
            }
        ]
    },
    {
        question: 'second question',
        type: 'INPUT',
        name: 'age',
        inputs: [
            {
                name: 'age1'
            },
            {
                name: 'age1'
            },
            {
                name: 'age1'
            },
            {
                name: 'age1'
            }
        ]
    }
];

export default questions;


