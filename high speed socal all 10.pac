function FindProxyForURL(url, host) {
    // List of social media platforms, video streaming, and communication apps for direct connection
    var fastWebsites = [
        // Zoom and its services
        "*.zoom.us", "*.zoomgov.com", "*.zoom.com", "*.zoom.us.cn",

        // Telegram and its services
        "*.telegram.org", "*.t.me", "*.tdesktop.com", "*.telegra.ph",

        // Facebook and associated services
        "*.facebook.com", "*.fbcdn.net", "*.fb.com", "*.instagram.com", "*.m.instagram.com", 
        "*.messenger.com", "*.whatsapp.com", "*.workplace.com",

        // Twitter and associated services
        "*.twitter.com", "*.t.co", "*.twimg.com", "*.mobile.twitter.com",

        // YouTube and its services
        "*.youtube.com", "*.youtubei.com", "*.ytimg.com", "*.ytmp3.cc", "*.youtube-nocookie.com", 
        "*.googlevideo.com", "*.googleusercontent.com", "*.gstatic.com",

        // LinkedIn and associated services
        "*.linkedin.com", "*.licdn.com", "*.lnkd.in",

        // Snapchat and its services
        "*.snapchat.com", "*.sc-cdn.net", "*.scontent.snapchat.com",

        // TikTok and its services
        "*.tiktok.com", "*.musical.ly", "*.tiktokcdn.com",

        // Pinterest and its services
        "*.pinterest.com", "*.pinimg.com", "*.pdx.pinterest.com",

        // Reddit and its services
        "*.reddit.com", "*.redditmedia.com", "*.r2.pindrop.io",

        // Discord
        "*.discord.com", "*.discord.gg", "*.discordapp.com",

        // Other social media platforms (e.g., Tumblr, Quora, Medium)
        "*.tumblr.com", "*.quora.com", "*.medium.com"
    ];

    // If the host is in the list of fast websites, connect directly
    for (var i = 0; i < fastWebsites.length; i++) {
        if (shExpMatch(host, fastWebsites[i])) {
            return "DIRECT";  // No proxy, connect directly for speed
        }
    }

    // Use a proxy for all other traffic (change to your proxy server if needed)
    return "PROXY 10.0.0.1:44355";  // Replace with your own proxy server if required
}
