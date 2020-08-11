get randomTraits () {
    const traits = [];
    TRAITS.array.forEach(TRAITS => {
        const traitType = TRAIT.type;
        const traitValues = TRAIT.values;
        const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];
        )}
    }