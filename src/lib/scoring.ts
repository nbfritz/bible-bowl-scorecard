import type {Game, Question} from "./types";

export function allQuestions(game): Array<Question> {
    let questions = []
    game.categories.forEach((c) => c.questions.forEach((q) => questions.push(q)))
    return questions
}

export function teamScore(game: Game, teamIndex: number): number {
    const questionScore = allQuestions(game)
        .filter((q) =>
            q.answers.filter((a) =>
                (a.isCorrect && a.teamIndex == teamIndex)).length > 0)
        .map((q) => q.value || 0)
        .reduce((a, b) => a + b)

    const bonusScore = game.categories
        .map((c) => c.bonuses[teamIndex] || 0)
        .reduce((a, b) => a + b)

    return questionScore + bonusScore
}

export function playerScore(game: Game, teamIndex: number, playerIndex: number): number {
    return allQuestions(game)
        .filter((q) =>
            q.answers.filter((a) =>
                (a.isCorrect && a.teamIndex == teamIndex && a.playerIndex == playerIndex)).length > 0)
        .map((q) => q.value || 0)
        .reduce((a, b) => a + b)
}
