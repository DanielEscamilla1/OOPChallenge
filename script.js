class Pokemon {
    constructor(name, type, attack){
        this.name = name,
        this.type = type,
        this.attack = attack
    }
    thunderBolt = () => {
        console.log(`${this.name}, used ${this.attack}`)
    }
}

const pickachu = new Pokemon("Pickachu", "Electric","Thunderbolt")
const jolteon = new Pokemon("Jolteon", "Electric","Thunderbolt")


pickachu.thunderBolt()
jolteon.thunderBolt()