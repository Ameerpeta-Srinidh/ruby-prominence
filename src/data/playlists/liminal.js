import liminalCover from '../../assets/liminal_cover.png';

import { songsContent } from '../songs_content';

export const liminal = {
    id: 3,
    title: "Liminal Spaces",
    description: "Am I dreaming? Empty hallways and 3AM fog.",
    cover: liminalCover,
    theme: "linear-gradient(135deg, #BBD2C5 0%, #536976 100%)",
    backgroundEffect: "fog",
    tags: ["🖤 Understood", "☁️ Dreaming"],
    songs: [
        {
            id: 301,
            title: "Slow Dancing in the Dark",
            artist: "Joji",
            duration: "3:29",
            youtubeId: "K3Qzzggn--s",
            color: "#ff5252",
            emotionalCategory: "Late-Night Thoughts",
            personalRating: { feelsLikeYou: 5, hitHard: 5, hopeYouHear: 4 },
            ...songsContent[301]
        },
        {
            id: 302,
            title: "#3",
            artist: "Aphex Twin",
            duration: "7:44",
            youtubeId: "07dr7T5l5AI",
            color: "#636e72",
            emotionalCategory: "Comfort Songs",
            personalRating: { feelsLikeYou: 3, hitHard: 4, hopeYouHear: 3 },
            ...songsContent[302]
        },
        {
            id: 303,
            title: "After Dark",
            artist: "Mr. Kitty",
            duration: "4:17",
            youtubeId: "hW9g3E3P_gA",
            color: "#74b9ff",
            emotionalCategory: "Late-Night Thoughts",
            personalRating: { feelsLikeYou: 5, hitHard: 4, hopeYouHear: 5 },
            ...songsContent[303]
        },
        {
            id: 304,
            title: "Chamber of Reflection",
            artist: "Mac DeMarco",
            duration: "3:51",
            youtubeId: "XYtm4UQ9izI",
            color: "#fd79a8",
            emotionalCategory: "Future You",
            personalRating: { feelsLikeYou: 4, hitHard: 3, hopeYouHear: 4 },
            ...songsContent[304]
        }
    ]
};
