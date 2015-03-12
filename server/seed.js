if (Bookmarks.find().count() === 0) {
    Bookmarks.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        tags: 'example',
        timestamp: Date.now()
    });

    Bookmarks.insert({
        title: 'Google',
        url: 'http://google.com/',
        tags: 'example',
        timestamp: Date.now()
    });

    Bookmarks.insert({
        title: 'Github',
        url: 'http://github.com',
        tags: 'example',
        timestamp: Date.now()
    });
}
