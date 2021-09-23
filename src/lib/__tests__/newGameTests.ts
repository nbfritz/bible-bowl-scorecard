import type { Game } from '../types'
import newGame from "../newGame"

describe('newGame', () => {
    test('is structured correctly', () => {
        const expected: Game = {
            teams: [
                {
                    name: "",
                    players: [{name: ""}, {name: ""}, {name: ""}, {name: ""}]
                },
                {
                    name: "",
                    players: [{name: ""}, {name: ""}, {name: ""}, {name: ""}]
                }
            ],
            categories: [
                {
                    name: "",
                    questions: [
                        { number: null, value: 10, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 20, answers: []},
                    ],
                    bonuses: []
                },
                {
                    name: "",
                    questions: [
                        { number: null, value: 10, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 20, answers: []},
                    ],
                    bonuses: []
                },
                {
                    name: "",
                    questions: [
                        { number: null, value: 10, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 20, answers: []},
                    ],
                    bonuses: []
                },
                {
                    name: "",
                    questions: [
                        { number: null, value: 10, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 20, answers: []},
                    ],
                    bonuses: []
                },
                {
                    name: "",
                    questions: [
                        { number: null, value: 10, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 15, answers: []},
                        { number: null, value: 20, answers: []},
                    ],
                    bonuses: []
                }
            ]
        }

        expect(newGame()).toEqual(expected)
    })
})