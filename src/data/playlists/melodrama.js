import melodramaCover from '../../assets/melodrama_cover.png';

import { songsContent } from '../songs_content';

export const melodrama = {
    id: 1,
    title: "Melodrama",
    description: "Main character energy only. Cinematic moments and midnight drives.",
    cover: melodramaCover,
    theme: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)",
    backgroundEffect: "rain",
    tags: ["🔥 Energy", "🖤 Understood"],
    songs: [
        {
            id: 101,
            title: "Green Light",
            artist: "Lorde",
            duration: "3:54",
            youtubeId: "dMK_npDG12Q",
            color: "#1db954",
            emotionalCategory: "Chaos & Confidence",
            personalRating: { feelsLikeYou: 5, hitHard: 4, hopeYouHear: 5 },
            ...songsContent[101]
        },
        {
            id: 102,
            title: "Video Games",
            artist: "Lana Del Rey",
            duration: "4:42",
            youtubeId: "cE6wxDqdOV0",
            color: "#ff6b6b",
            emotionalCategory: "Before Everything Changed",
            personalRating: { feelsLikeYou: 4, hitHard: 5, hopeYouHear: 4 },
            ...songsContent[102]
        },
        {
            id: 103,
            title: "Washing Machine Heart",
            artist: "Mitski",
            duration: "2:08",
            youtubeId: "3X-E5KJEawg",
            color: "#54a0ff",
            emotionalCategory: "Late-Night Thoughts",
            personalRating: { feelsLikeYou: 5, hitHard: 5, hopeYouHear: 5 },
            ...songsContent[103]
        },
        {
            id: 104,
            title: "Happier Than Ever",
            artist: "Billie Eilish",
            duration: "4:58",
            youtubeId: "5GJWxDKtqCg",
            color: "#feca57",
            emotionalCategory: "Chaos & Confidence",
            personalRating: { feelsLikeYou: 3, hitHard: 4, hopeYouHear: 3 },
            ...songsContent[104]
        }
    ]
};
