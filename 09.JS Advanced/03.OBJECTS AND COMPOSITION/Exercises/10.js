function solve() {
    const canCast = (state) => {
        return {
            cast: (spell) => {
                console.log(`${state.name} cast ${[spell]}`);
            }
        }
    }

    const canFight = (state) => {
        return {
            fight: () => {
                console.log(`${state.name} slashes at the foe!`)
            }
        }
    }

    const fighter = (name) => {
        let state = {
            name, 
            health: 100, 
            stamina: 100
        }

        return Object.assign(state, canFight(state));
    }

    const mage = (name) => {
        let state = {
            name, 
            health: 100, 
            mana: 100
        }

        return Object.assign(state, canCast(state));
    }

    return {mage: mage, fighter: fighter}
}