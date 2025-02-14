const CONFIG = {
    valentineName: "Happy Valentine Day ",


    pageTitle: "Happy Valentine Day  💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                      
    },


    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dfiqkupsp/video/upload/v1739502348/ae6kcuwwcemisod6jczo.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
