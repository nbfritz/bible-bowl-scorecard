import {allQuestions, teamScore, playerScore} from '../scoring'
import newGame from "../newGame";

describe("allQuestions", () => {
    test("it extracts all questions", () => {
        const game = newGame()
        expect(allQuestions(game).length).toEqual(20)
    })
})

describe("teamScore", () => {
    test("it tallys one question correctly", () => {
        const game = newGame()
        game.categories[0].questions[0].number = 1
        game.categories[0].questions[0].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]

        game.categories[1].questions[1].number = 2
        game.categories[1].questions[1].answers = [{teamIndex: 1, playerIndex: 0, isCorrect: true}]

        expect(teamScore(game, 0)).toEqual(10)
    })

    test("it tallys 2 questions", () => {
        const game = newGame()
        game.categories[0].questions[0].number = 1
        game.categories[0].questions[0].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]
        game.categories[2].questions[2].number = 3
        game.categories[2].questions[2].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]

        game.categories[1].questions[1].number = 2
        game.categories[1].questions[1].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: false}]

        game.categories[3].questions[3].number = 4
        game.categories[3].questions[3].answers = [{teamIndex: 1, playerIndex: 0, isCorrect: true}]

        expect(teamScore(game, 0)).toEqual(25)
    })

    test("it tallys 2 question and 2 bonuses", () => {
        const game = newGame()
        game.categories[0].questions[0].number = 1
        game.categories[0].questions[0].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]
        game.categories[2].questions[2].number = 3
        game.categories[2].questions[2].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]

        game.categories[1].questions[1].number = 2
        game.categories[1].questions[1].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: false}]

        game.categories[3].questions[3].number = 4
        game.categories[3].questions[3].answers = [{teamIndex: 1, playerIndex: 0, isCorrect: true}]

        game.categories[0].bonuses[0] = 20
        game.categories[1].bonuses[0] = 20
        game.categories[2].bonuses[0] = 0

        game.categories[0].bonuses[1] = 20

        expect(teamScore(game, 0)).toEqual(65)
    })
})

describe("playerScore", () => {
    test("it tallys one question correctly", () => {
        const game = newGame()
        game.categories[0].questions[0].number = 1
        game.categories[0].questions[0].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]

        game.categories[1].questions[1].number = 2
        game.categories[1].questions[1].answers = [{teamIndex: 0, playerIndex: 1, isCorrect: true}]

        expect(playerScore(game, 0, 0)).toEqual(10)
    })

    test("it tallys 2 questions", () => {
        const game = newGame()
        game.categories[0].questions[0].number = 1
        game.categories[0].questions[0].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]
        game.categories[2].questions[2].number = 3
        game.categories[2].questions[2].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: true}]

        game.categories[1].questions[1].number = 2
        game.categories[1].questions[1].answers = [{teamIndex: 0, playerIndex: 0, isCorrect: false}]

        game.categories[3].questions[3].number = 4
        game.categories[3].questions[3].answers = [{teamIndex: 0, playerIndex: 1, isCorrect: true}]

        expect(playerScore(game, 0, 0)).toEqual(25)
    })
})
