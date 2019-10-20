import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHp from './score-hp.js';
<<<<<<< HEAD
import scoreGhosts from './score-gold.js';
import { hpMessages, aliveGoldMessages, deadGoldMessages } from './messages.js';
=======
import scoreGhosts from './score-ghosts.js';
import { hpMessages, aliveGhostsMessages, deadGhostsMessages } from './messages.js';
>>>>>>> dev

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
<<<<<<< HEAD
const goldResult = scoreGold(user.gold);
const hpMessage = hpMessages[hpResult];

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = deadGhostMessages;
}
else {
    goldMessages = aliveGhostMessages;
}

const goldMessage = goldMessages[goldResult];

let story = 'After a hard day of Ghostbusting, ';
story += user.name + ;
story += hpMessage + ' and ' + goldMessage + '.';

storyDisplay.textContent = story;

=======
const ghostsResult = scoreGhosts(user.ghosts);
const hpMessage = hpMessages[hpResult];

let ghostsMessages = null;
if (hpResult === 'dead') {
    ghostsMessages = deadGhostsMessages;
} else {
    ghostsMessages = aliveGhostsMessages;
}

const ghostsMessage = ghostsMessages[ghostsResult];

let story = 'After your ghostbusting, ';
story += user.name + ' the ' + user.actor + ', ';
story += hpMessage + ' and ' + ghostsMessage + '.';

storyDisplay.textContent = story;
>>>>>>> dev
