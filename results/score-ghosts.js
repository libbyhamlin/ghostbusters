function scoreGhosts(ghosts) {
    if (ghosts === 0) {
        return 'poor';
    } 
    else if (ghosts === 1) {
        return 'modest';
    }
    return 'rich';
}

export default scoreGhosts;