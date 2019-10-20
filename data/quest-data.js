const librarian = {
    id: 'librarian',
    title: 'A Ghostly Reader',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'librarian.jpg',
    audio: 'librarian.wav',
    action: 'librarian-scream.wav',
    description: `
        Disturbances are being reported at the New York City Public Library. Alice, one of the librarians, just fainted after seeing what she swears was a ghost and you've been called in to investigate. You suspect the entity is a Free-Roaming, Vaporous, Full Torso Apparition. You make your way down to the basement where you see a translucent figure with no feet floating amid the stacks. She appears to be reading. How do you proceed?  
    `,
    choices: [{
        id: 'negotiate',
        description: 'Try to talk to her',
        result: `
            Hush, she's reading.
        `,
        hp: 0,
        ghosts: 0
    }, {
        id: 'fight',
        description: 'Get her!',
        result: `
            She looks harmless enough and you have no idea what you're doing, so you try to attack her with your physical body. She transfoms into a terryifying apparition. You run screaming from the stacks. You don't get the ghost, and you hurt your pride.
        `,
        hp: -5,
        ghosts: 0
    }, {
        id: 'run',
        description: 'Leave her be',
        result: `
            You try to talk to her but she ignores you. You back slowly out of the stacks and resolve to get yourself a proton pack.
        `,
        hp: 0,
        gold: 0
    }]
};

const slimer = {
    id: 'slimer',
    title: 'Slimer',
    map: {
        top: '31%',
        left: '5%'
    },
    // image: 'treasure-chests.png',
    // audio: 'treasure-chests.wav',
    // action: 'chest-opening.wav',
    description: `
        You are called to the Sedgewick Hotel, where the manager reports a series of paranormal disturbances. On the 12th floor, you encounter a an ugly little spud: Slimer. You succesfully test your new proton packs by blasting a maid's cart.  Slimer barricades himself in the hotel ballroom.  Do you head back to headquarters for more equipment, wait for the little guy to come back out, or enter the ballroom, destroy as much stuff as possible with erratic proton back blasts, and try and capture slimer in a ghost trap?
    `,
    choices: [{
        id: 'run',
        description: 'An Equipment run back to HQ',
        result: 'Slimer dissapears in your absence.  But by the time you get back the hotel it\'s Happy Hour.',
        hp: 20,
        ghosts: 0
    }, {
        id: 'negotiate',
        description: 'Lay Seige to the Ballroom',
        result: 'Slimer lays waste to the ballroom, then disapparates. The hotel manager personally disinvites you from Happy Hour.',
        hp: -20,
        ghosts: 0
    }, {
        id: 'fight',
        description: 'A Jeweled Chest',
        result: 'You entrap a a focused, non-terminal repeating phantasm, or a Class Five full roaming vapor. Real nasty one, too! The hotel manager rewards you with steak tartare and a flight of single malt Scotches.',
        hp: 35,
        ghosts: 20
    }]
};

const marshmallow = {
    id:'marshmallow',
    title: 'The Battle of Stay Puft!',
    image: '',
    audio: '',
    description: 'Mother Puft Bucket! You thought the enemies were defeated and your fighting was done. But NAY!! You were wrong. You tried to think of the most harmless thing I could think of. Something you loved from your childhood. Behold! Stay Puft! Everyone is terrified beyond the point of rational thought. What do you do???????????'
    ,

    choices: [{
        id: 'negotiate',
        description: 'Try to talk Stay Puft down to size',
        result: 'Sorry, Puft is out to take over the world and you were wrong to think he was reasonable. You were crushed under the consuming size of Puft. All HP depleted and you died. Sorry not sorry. I\'d say take this as a life lesson, but you\'re no longer alive. You tried to reason with a monster.',
        hp: -100,
        ghosts: 0,
    }, {
        id: 'run',
        description: 'Run away and make a plan!!!!',
        result: 'That was close!!! Stay Puft is big but not fast! Peter and Raymond got away, but let\'s not talk about Egon...',
        hp: -50,
        ghosts: 0,
    }, {
        id: 'fight',
        description: 'Fight Stay Puft!!!!',
        result: 'Congratulations!!! You defeated Stay Puft!!! The enemy was slain and the hero has won! You are now the town heros! You saved everybody from a large, dangerous marshmallow.',
        hp: 0,
        ghosts: 1000000, 
    }]
};

const quests = [librarian, slimer, marshmallow];
export default quests;