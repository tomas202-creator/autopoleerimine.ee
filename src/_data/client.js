module.exports = {
    name: "Autopoleerimine.ee",
    email: "info@autopoleerimine.ee",
    phoneForTel: "+372 55923569",
    phoneFormatted: "+372 55923569",
    address: {
        lineOne: "Kotka 3b",
        lineTwo: "Tallinn",
        city: "Tallinn",
        state: "Harju",
        zip: "10145",
        country: "EE",
        mapLink: "https://maps.app.goo.gl/uj8S6iPWijTiuLt1A",
    },
    socials: {
        youtube: "https://www.youtube.com/@autopoleerimine.ee",
        instagram: "https://www.instagram.com/autopoleerimine.ee/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.autopoleerimine.ee",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
