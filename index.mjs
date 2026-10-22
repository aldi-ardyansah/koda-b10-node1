import fs from "node:fs";

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
];

function createFileMp3() {
    songs.forEach((song) => {
        song.lists.forEach((list) => {
            const filename = `${song.artist} - ${list}.mp3`;
            fs.writeFile(filename, "", function () {});
        });
    });
}

createFileMp3();