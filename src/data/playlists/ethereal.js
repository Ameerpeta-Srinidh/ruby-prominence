import etherealCover from '../../assets/ethereal_cover.png';

import { songsContent } from '../songs_content';

export const ethereal = {
    id: 2,
    title: "Ethereal Love",
    description: "Golden hours by the ocean. Salty air and warm light.",
    cover: etherealCover,
    theme: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
    backgroundEffect: "rays",
    tags: ["😌 Comfort", "☁️ Dreaming"],
    songs: [
        {
            id: 201,
            title: "Space Song",
            artist: "Beach House",
            duration: "5:20",
            youtubeId: "RBtlPT23PTM",
            color: "#ff9ff3",
            emotionalCategory: "Comfort Songs",
            personalRating: { feelsLikeYou: 5, hitHard: 4, hopeYouHear: 5 },
            ...songsContent[201]
        },
        {
            id: 202,
            title: "Heaven or Las Vegas",
            artist: "Cocteau Twins",
            duration: "4:56",
            youtubeId: "6KnYw4EwGVc",
            color: "#a29bfe",
            emotionalCategory: "Future You",
            personalRating: { feelsLikeYou: 4, hitHard: 3, hopeYouHear: 4 },
            ...songsContent[202]
        },
        {
            id: 203,
            title: "Fade Into You",
            artist: "Mazzy Star",
            duration: "4:55",
            youtubeId: "hsL7E56iT2M",
            color: "#fab1a0",
            emotionalCategory: "Comfort Songs",
            personalRating: { feelsLikeYou: 5, hitHard: 5, hopeYouHear: 5 },
            ...songsContent[203]
        },
        {
            id: 204,
            title: "Mystery of Love",
            artist: "Sufjan Stevens",
            duration: "4:08",
            youtubeId: "KzE_56N-l0E",
            color: "#dfe6e9",
            emotionalCategory: "Before Everything Changed",
            personalRating: { feelsLikeYou: 4, hitHard: 5, hopeYouHear: 5 },
            ...songsContent[204]
        }
    ]
};
