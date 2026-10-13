// Template for a new playlist
// Copy this file to create a new one!

import { songsContent } from '../songs_content';

export const roadtrip = {
    id: 4,
    title: "Late Night Drive",
    description: "Windows down, volume up. The world is ours.",
    // You can use a new image or reuse existing ones
    // cover: yourImageImport,
    // For now using a placeholder color/gradient if no image
    cover: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    theme: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    backgroundEffect: "rays", // Options: 'rain', 'rays', 'fog'
    tags: ["🔥 Energy"],
    songs: [
        {
            id: 401,
            title: "Midnight City",
            artist: "M83",
            duration: "4:03",
            youtubeId: "dX3k_QDnzHE",
            color: "#a55eea",
            emotionalCategory: "Chaos & Confidence",
            personalRating: { feelsLikeYou: 5, hitHard: 3, hopeYouHear: 5 },
            ...songsContent[401]
        }
    ]
};
