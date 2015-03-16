if (Bookmarks.find().count() === 0) {
    Bookmarks.insert({
        title: 'Meteor',
        url: 'https://www.meteor.com/',
        tags: ['danger', 'warning', 'muted'],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'codrops',
        url: 'http://tympanus.net/codrops/',
        tags: ['primary'],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Tuts+',
        url: 'http://webdesign.tutsplus.com/',
        tags: ['danger'],
        status: true,
        timestamp: new Date()
    });
    Bookmarks.insert({
        title: 'Introducing Linxz',
        url: 'http://linxz.oakseven.com',
        tags: ['primary', 'success', 'muted'],
        status: false,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Designmodo',
        url: 'http://designmodo.com/',
        tags: ['success'],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Bashooka',
        url: 'http://bashooka.com/',
        tags: [],
        status: true,
        timestamp: new Date()
    });
    Bookmarks.insert({
        title: 'Smashing Magazine',
        url: 'http://www.smashingmagazine.com/',
        tags: ['danger', 'warning', 'muted'],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Speckboy',
        url: 'http://speckyboy.com/',
        tags: ['primary'],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Treehouse Blog',
        url: 'http://blog.teamtreehouse.com/',
        tags: [],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'CSS Tricks',
        url: 'https://css-tricks.com/',
        tags: ['danger'],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'A List Apart',
        url: 'http://alistapart.com/',
        tags: ['primary'],
        status: true,
        timestamp: new Date()
    });
    Bookmarks.insert({
        title: 'Designerfix',
        url: 'http://designrfix.com/',
        tags: ['danger', 'success', 'muted'],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Google',
        url: 'http://google.com/',
        tags: [],
        status: true,
        timestamp: new Date()
    });

    Bookmarks.insert({
        title: 'Jeet',
        url: 'jeet.gs',
        tags: [],
        status: true,
        timestamp: new Date()
    });

}
