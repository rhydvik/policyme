const questions = [
    {
        question: 'Hi, I\'m Alex, and I\'ll be helping you with your life insurance checkup today.\n',
        inputs: [],
        overrideValidation: true,
    },
    {
        question: 'How old are you?',
        type: 'INPUT',
        name: 'age',
        inputs: [
            {
                label: 'AGE',
                value: '',
                type: 'number',
                placeholder: 'Age',
                validationRules: {
                    minimum: 18,
                    maximum: 60,
                }
            }
        ]
    },
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
    },
    {
        question: 'How old is your partner?',
        type: 'INPUT',
        name: 'age',
        inputs: [
            {
                label: 'AGE',
                value: '',
                type: 'number',
                placeholder: 'Age',
                validationRules: {
                    minimum: 18,
                    maximum: 60,
                }
            }
        ],
        subQuestion: [
            {
                question: 'What is your partner\'s gender?',
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
                isSubQuestion: true,
            },
        ],
    },
    {
        question: 'How old are your kids?'
    },
    {
        question: 'Do you smoke?',
        type: 'BUTTON',
        inputs: [
            {
                label: 'Yes',
                value: null,
            },
            {
                label: 'No',
                value: null,
            }
        ],
    },
    {
        question: ' Have you ever been diagnosed with a serious health condition?',
        type: 'BUTTON',
        inputs: [
            {
                label: 'Yes',
                value: null,
            },
            {
                label: 'No',
                value: null,
            }
        ],
        popupText: 'Select ‘yes’ if you’ve any of the following: \n' +
        '- heart attack\n' +
        '- stroke\n' +
        '- cancer\n' +
        '- lung disease\n' +
        '- diabetes\n' +
        '- psychiatric illness\n' +
        '- AIDS\n' +
        'or any othe major illness.'
    },
    {
        question: 'What is your income?',
        type: 'INPUT',
        name: 'income',
        inputs: [
            {
                label: 'You',
                value: '',
                placeholder: '$'

            }
        ]
    },
    {
        question: 'What is your family income?',
        type: 'INPUT',
        name: 'income',
        inputs: [
            {
                label: 'You',
                value: '',
                placeholder: '$'
            },
            {
                label: 'You partner',
                value: '',
                placeholder: '$'
            }
        ]
    },
    {
        question: 'Do you rent or do you own?',
        name: 'gender',
        type: 'BUTTON',
        inputs: [
            {
                label: 'Rent',
                value: null,
                subQuestionIndex: 0
            },
            {
                label: 'Own',
                value: null,
                subQuestionIndex: 1
            }
        ],
        subQuestion: [
            {
                question: 'What is your rent?',
                type: 'INPUT',
                name: 'income',
                inputs: [
                    {
                        label: 'Monthly rent',
                        value: '',
                        type: 'number',
                        placeholder: '$',
                        
                    },
                ]
            },
            {
                question: 'What is your mortgage amount?',
                type: 'INPUT',
                name: 'income',
                inputs: [
                    {
                        label: 'Current mortgage',
                        value: '',
                        placeholder: '$'
                    },
                    {
                        label: 'Monthly payment',
                        value: '',
                        placeholder: '$'
                    }
                ]
            },
        ]
    },
    {
        question: 'Do you have any family savings or investments?',
        name: 'savingsOrInvestment',
        type: 'BUTTON',
        inputs: [
            {
                label: 'Yes',
                value: null,
                subQuestionIndex: 0
            },
            {
                label: 'No',
                value: null,
            }
        ],
        subQuestion: [
            {
                question: 'What is your rent?',
                type: 'INPUT',
                name: 'income',
                inputs: [
                    {
                        label: 'Retirement savings (RRSPs, pension plans)',
                        value: '',
                        placeholder: '$'
                    },
                    {
                        label: 'Non-retirement savings (bank accounts, investments)',
                        value: '',
                        placeholder: '$'
                    },
                ]
            },
        ],
        popupText: 'Include both your personal retirement accounts (e.g. RRSPs) and your employer retirement accounts (e.g. pensions). Do not include TFSA accounts as they belong in the ‘non-retirement savings’ category below'
    },
    {
        question: 'Do you have any debts?\n',
        name: 'debts',
        type: 'BUTTON',
        inputs: [
            {
                label: 'Yes',
                value: null,
                subQuestionIndex: 0
            },
            {
                label: 'No',
                value: null,
            }
        ],
        subQuestion: [
            {
                question: 'Add debts',
                type: 'INPUT',
                name: 'income',
                inputs: [
                    {
                        label: 'Credit cards',
                        value: '',
                        placeholder: '$'
                    },
                    {
                        label: 'Student loans',
                        value: '',
                        placeholder: '$'
                    },
                    {
                        label: 'Home equity loans',
                        value: '',
                        placeholder: '$'
                    },
                    {
                        label: 'Lines of credit',
                        value: '',
                        placeholder: '$'
                    },
                    {
                        label: 'Other',
                        value: '',
                        placeholder: '$'
                    },
                ],
                isSubQuestion: true,
            },
        ],
        popupText: 'Include both your personal retirement accounts (e.g. RRSPs) and your employer retirement accounts (e.g. pensions). Do not include TFSA accounts as they belong in the ‘non-retirement savings’ category below'
    },
    {
        question: 'Hi, I\'m Alex, and I\'ll be helping you with your life insurance checkup today.\n'
    }
];

export default questions;


