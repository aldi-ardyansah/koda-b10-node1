const fs = require("node:fs");

const songs = [
    {
        artist: "Avenged Sevenfold",
        lists: [
            "Nightmare",
            "Afterlife",
            "Dear God",
            "Sidewinder",
            "City of Evil"
        ]
    },
    {
        artist: "Jasad",
        lists: [
            "Pasukan Karuhun",
            "Rebirth of Jatisunda",
            "Siliwangi",
            "Kujang Rompang",
            "Cengkram Garuda"
        ]
    },
    {
        artist: "Burgerkill",
        lists: [
            "Shadow of Sorrow",
            "Anjing Tanah",
            "Under the Scars",
            "My Worst Enemy",
            "Only the Strong"
        ]
    }
]

for (let i = 0; i < songs.length; i++) {
    for (let j = 0; j < songs[i].lists.length; j++) {
        const filename = `${songs[i].artist} - ${songs[i].lists[j]}.mp3`;
        fs.writeFile(filename, "", function () {});
    }
}