// Game Objects
let games = [
    {
        id: "1",
        title: "The Legend of Zelda: Breath of the Wild",
        platforms: ["Nintendo Switch", "Wii U"]
    },
    {
        id: "2",
        title: "Cyberpunk 2077",
        platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"]
    },
    {
        id: "3",
        title: "Minecraft",
        platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "iOS", "Android"]
    },
    {
        id: "4",
        title: "God of War",
        platforms: ["PlayStation 4", "PlayStation 5", "PC"]
    },
    {
        id: "5",
        title: "Among Us",
        platforms: ["PC", "iOS", "Android", "Nintendo Switch"]
    }
];
// Review Objects
let reviews = [
    {
        id: "1",
        ratings: 5,
        content: "An absolutely phenomenal game with an immersive world and engaging gameplay!",
        author_id: "1",
        game_id: "1"
    },
    {
        id: "2",
        ratings: 3,
        content: "The game has potential but is plagued by numerous bugs and performance issues.",
        author_id: "2",
        game_id: "2"
    },
    {
        id: "3",
        ratings: 4,
        content: "Great storyline and characters, but the multiplayer mode is a bit lacking.",
        author_id: "3",
        game_id: "3"
    },
    {
        id: "4",
        ratings: 2,
        content: "Disappointing experience due to repetitive quests and shallow characters.",
        author_id: "4",
        game_id: "4"
    },
    {
        id: "5",
        ratings: 5,
        content: "Fantastic game with beautiful graphics and an emotional story.",
        author_id: "5",
        game_id: "5"
    }
];
// Author Objects
let authors = [
    {
        id: "1",
        name: "John Doe",
        verified: true
    },
    {
        id: "2",
        name: "Jane Smith",
        verified: false
    },
    {
        id: "3",
        name: "Alex Johnson",
        verified: true
    },
    {
        id: "4",
        name: "Emily Davis",
        verified: false
    },
    {
        id: "5",
        name: "Michael Brown",
        verified: true
    }
];
export default { authors, games, reviews };
