const { ipcRenderer, remote } = require('electron'), path = require('path'), { dev } = require('electron-is');

require(path.resolve(`./src/main/gearbox.js`)); // Start 'Geass' (gearbox)

function isMultiplicador(a, b) {
    for (let i = 1; i < 10; i++) {
        let r = a / i;
        if (r == b) {
            return true;
        }
    }
    return false;
}

(async() => {
    await gearbox.GetFromMain('Renderer/icp.js')(ipcRenderer); // Start events from ipcRenderer
    await gearbox.Component('Renderer/Titlebar')(require('electron')); // Start component "Titlebar"
    await gearbox.Component('Database'); // Start component "Database"
    await gearbox.Component('Menu'); // Start component "Menu"

    $('.blur').css('z-index', '-1');
    $('.loading-init').css('opacity', '0');
    setTimeout(() => {
        $('.loading-init').remove();
    }, 450);
})();