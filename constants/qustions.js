const questions = [
    {
        question: 'What is your gender?',
        name: 'gender',
        type: 'BUTTON',
        inputs: [
            {
                label: 'Male',
                value: null,
            },
            {
                label: 'Female',
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
        question: 'Who makes up your household?',
        type: 'BUTTON',
        name: 'makes-household',
        alignInOnline: true,
        inputs: [
            {
                label: 'Just Me',
                value: null
            },
            {
                label: 'Me and my kid(s)',
                value: null
            },
            {
                label: 'Me and my partner',
                value: null
            },
            {
                label: 'Me, my partner and kid(s)',
                value: null
            }
        ]
    }
];

export default questions;


