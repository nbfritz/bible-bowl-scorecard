export type Player = {
    name: string
}

export type Team = {
    name: string
    players: Array<Player>
}

export type Answer = {
    teamIndex: number
    playerIndex: number
    isCorrect: boolean
}

export type Question = {
    number: number
    value: number
    answers: Array<Answer>
}

export type Category = {
    name: string
    questions: Array<Question>
    bonuses: Array<number>
}

export type Game = {
    categories: Array<Category>
    teams: Array<Team>
}