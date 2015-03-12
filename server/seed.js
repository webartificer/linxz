if (Bookmarks.find().count() === 0) {
    Bookmarks.insert({
        title: 'Introducing Linxz',
        url: 'http://linxz.oakseven.com',
        tags: ['danger', 'warning', 'muted'],
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Google',
        url: 'http://google.com/',
        tags: [],
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Github',
        url: 'http://github.com',
        tags: [],
        timestamp: new Date()
    });
    Bookmarks.insert({
        title: 'Introducing Linxz',
        url: 'http://linxz.oakseven.com',
        tags: ['primary', 'success', 'muted'],
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Google',
        url: 'http://google.com/',
        tags: [],
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Github',
        url: 'http://github.com',
        tags: [],
        timestamp: new Date()
    });
}
