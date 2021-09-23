import type {Game, Team, Category, Question, Player} from "./types";

export default function newGame(): Game {
    return {
        teams: buildArrayOf(2, newTeam),
        categories: buildArrayOf(5, newCategory)
    }
}

function buildArrayOf<Type>(length: number, builder: () => Type): Array<Type> {
    return Array.from({length}, (v, i) => builder())
}

function newTeam(): Team {
    return {
        name: "",
        players: buildArrayOf(4, newPlayer)
    }
}

function newCategory(): Category {
    return {
        name: "",
        bonuses: [],
        questions: [10, 15, 15, 20].map(newQuestion)
    }
}

function newPlayer(): Player {
    return {name: ""}
}

function newQuestion(value: number): Question {
    return { number: null, value, answers: [] }
}

