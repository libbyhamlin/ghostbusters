import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const hp = document.getElementById('hp');
    const ghosts = document.getElementById('ghosts');

    const user = getUser();

    if (!user) {
        window.location = './';
    }


    name.textContent = user.name;
    avatar.src = 'assets/avatars/' + user.actor + '.png';
    ghosts.textContent = user.ghosts;

    if (isDead(user)) {
        hp.textContent = 'You gave up the ghost!';
    } else {
        hp.textContent = user.hp;
    }
}

export default loadProfile;