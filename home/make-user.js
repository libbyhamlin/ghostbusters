function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        actor: formData.get('actor'),
        hp: 40,
        ghosts: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    actor: formData.get('actor'),
    hp: 50,
    ghosts: 0,
    completed: {}
});

export default makeUser;