import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreHp from './score-hp.js';
import scoreGhosts from './score-ghosts.js';
import { hpMessages, aliveGhostsMessages, deadGhostsMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const hpResult = scoreHp(user.hp);
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
