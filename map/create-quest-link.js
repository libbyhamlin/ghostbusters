function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest?' + searchParams.toString();
    link.href = '../quest/?id=' + quest.id;

    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;
    link.img = '../assets/quests/' + quest.img;
    

    return link;
}

export default createQuestLink;