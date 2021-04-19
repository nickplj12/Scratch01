var fullscreen = navigator.standalone ||
    window.matchMedia('(max-device-width: 800px) and (max-device-height: 800px)').matches;

window.onload = function() {
    var url = "https://github.com/nickpythonluajava/Scratch01/blob/main/run.image?raw=true";
    SqueakJS.runSqueak(url, sqCanvas, {
        appName: "Scratch",
        fullscreen: fullscreen,
        header: sqHeader,
        footer: sqFooter,
        spinner: sqSpinner,
        fullscreenCheckbox: sqFullscreen,
        root: "/Scratch",
        templates: ["Projects", "Media", "Help", "locale"],
    });
};
