const questions = [
    {
        question: 'Hi, I\'m Alex, and I\'ll be helping you with your life insurance checkup today.\n',
        inputs: [],
        category: null,
        overrideValidation: true,
    },
    {
        question: 'How old are you?',
        type: 'INPUT',
        name: 'age',
        category: 'family',
        json_key: 'userAge',
        inputs: [
            {
                label: 'AGE',
                value: '',
                type: 'number',
                placeholder: 'Age',
                validationRules: {
                    minimum: 18,
                    maximum: 99,
                }
            }
        ],
    },
    {
        question: 'What is your gender?',
        name: 'gender',
        type: 'BUTTON',
        category: 'family',
        json_key: 'userGender',
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
        infoText: 'Men and woman have different life expectancies and therefore insurers take gender into account when pricing life insurance policies.'
    },
    {
        question: 'Who makes up your household?',
        type: 'BUTTON',
        name: 'makes-household',
        category: 'family',
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
        ],
        infoText: 'Partner includes married or common-law\n' + '\n' + 'Only include kids that you are financially supporting (usually 25 and younger.',
        questionText: 'What if I\'m planning to have kids?'
    },
    {
        question: 'How old is your partner?',
        type: 'INPUT',
        category: 'family',
        name: 'age',
        json_key: 'spouse',
        inputs: [
            {
                label: 'AGE',
                value: '',
                type: 'number',
                placeholder: 'Age',
                validationRules: {
                    minimum: 18,
                    maximum: 99,
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
                infoText: 'Men and woman have different life expectancies and therefore insurers take gender into account when pricing life insurance policies.'
            },
        ],
    },
    {
        question: 'How old are your kids?',
        addOn: 'input',
        category: 'family',
        subQuestion: [],
        inputs: [],
        json_key: 'children',
        infoText: 'Only include kids that you are financially supporting (usually 25 and younger)',
        questionText: 'What if I\'m planning to have kids?',
    },
    {
        question: 'Do you smoke?',
        type: 'BUTTON',
        category: 'family',
        json_key: 'smoke',
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
        questionText: 'What if I used to smoke?',
        infoText: 'Select ‘yes’ if you’ve used any nicotine products in the past year'
    },
    {
        question: ' Have you ever been diagnosed with a serious health condition?',
        type: 'BUTTON',
        category: 'family',
        json_key: 'healthIssue',
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
        category: 'family',
        name: 'income',
        json_key: 'userIncome',
        inputs: [
            {
                label: 'You',
                value: '',
                placeholder: '$',
                validationRules: {
                    minimum: 1,
                    maximum: 999999999,
                }
            }
        ],
        questionText: 'What about non-employment income?',
        infoText: 'missing'
    },
    {
        question: 'What is your family income?',
        type: 'INPUT',
        category: 'family',
        name: 'income',
        json_key: 'spouseIncome',
        inputs: [
            {
                label: 'You',
                value: '',
                placeholder: '$',
                validationRules: {
                    minimum: 1,
                    maximum: 99999999,
                }
            },
            {
                label: 'You partner',
                value: '',
                placeholder: '$',
                validationRules: {
                    minimum: 1,
                    maximum: 99999999,
                }
            }
        ],
        questionText: 'What about non-employment income?',
        infoText: 'Give us a ballpark estimate of your pre-tax income – do not include investments, we’ll get to that soon',
    },
    {
        question: 'Do you rent or do you own?',
        name: 'gender',
        type: 'BUTTON',
        category: 'finances',
        json_key: 'mortage',
        inputs: [
            {
                label: 'Rent',
                value: null,
                subQuestionOpen: 0
            },
            {
                label: 'Own',
                value: null,
                subQuestionOpen: 1
            }
        ],
        questionText: 'What if I\'m in the market to buy?',
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
                        subQuestionIndex: 0 ,
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    },
                ],
                isSubQuestion: true,
            },
            {
                question: 'What is your mortgage amount?',
                type: 'INPUT',
                name: 'income',
                index:1,
                inputs: [
                    {
                        label: 'Current mortgage',
                        value: '',
                        subQuestionIndex: 1 ,
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    },
                    {
                        label: 'Monthly payment',
                        value: '',
                        subQuestionIndex: 1 ,
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    }
                ],
                isSubQuestion: true,
            },
        ]
    },
    {
        question: 'Do you have any family savings or investments?',
        name: 'savingsOrInvestment',
        type: 'BUTTON',
        exception: {
            question: 'yesNoButtons'
        },
        category: 'finances',
        json_key: 'savings',
        inputs: [
            {
                label: 'Yes',
                value: null,
                subQuestionOpen: 0
            },
            {
                label: 'No',
                value: null,
            }
        ],
        questionText: 'What if my savings are in my corporation?',
        subQuestion: [
            {
                question: 'Your Savings?',
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
                ],
                isSubQuestion: true,
            },
        ],
        infoText: 'Include both your personal retirement accounts (e.g. RRSPs) and your employer retirement accounts (e.g. pensions). Do not include TFSA accounts as they belong in the ‘non-retirement savings’ category below'
    },
    {
        question: 'Do you have any debts?\n',
        name: 'debts',
        last:true,
        exception: {
            question: 'yesNoButtons'
        },
        category: 'finances',
        json_key:'debts',
        type: 'BUTTON',
        inputs: [
            {
                label: 'Yes',
                value: null,
                subQuestionOpen: 0
            },
            {
                label: 'No',
                value: null,
            }
        ],
        infoText: 'Not including a mortgage on your primary residence',
        subQuestion: [
            {
                question: 'Add debts',
                type: 'INPUT',
                name: 'income',
                isSubQuestion: true,
                inputs: [
                    {
                        label: 'Credit cards',
                        value: '',
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    },
                    {
                        label: 'Student loans',
                        value: '',
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    },
                    {
                        label: 'Home equity loans',
                        value: '',
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    },
                    {
                        label: 'Lines of credit',
                        value: '',
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    },
                    {
                        label: 'Other',
                        value: '',
                        placeholder: '$',
                        validationRules: {
                            minimum: 1,
                            maximum: 99999999,
                        }
                    },
                ],
                infoText: 'Only include if you typically carry a balance',
            },
        ],
    },
];

export default questions;


