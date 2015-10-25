Package.describe({
    name: 'polyroid:iron-flex-layout',
    version: '1.0.4',
    summary: 'Provide flexbox-based layouts',
    git: 'https://github.com/Polyroid/iron-flex-layout.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'classes/iron-flex-layout.html',
        'classes/iron-shadow-flex-layout.html',
        'iron-flex-layout.html'
    ], 'client');
});
