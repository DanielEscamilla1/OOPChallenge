class Pokemon {
    constructor(name, type, attack){
        this.name = name,
        this.type = type,
        this.attack = attack
    }
    attackMove = () => {
        console.log(`${this.name}, used ${this.attack}`)
    }
}

const pickachu = new Pokemon("Pickachu", "Electric","Thunderbolt")
const jolteon = new Pokemon("Jolteon", "Electric","Thunderbolt")
const gengar = new Pokemon("Gengar",["Ghost", "Poison"], "Shadow ball")


pickachu.attackMove()
jolteon.attackMove()
gengar.attackMove()