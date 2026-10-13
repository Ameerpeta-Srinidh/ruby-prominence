import mismatchedCover from '../../assets/mismatched_cover.jpg';

import { songsContent } from '../songs_content';

// Playlist: Mismatched Paglu
// "Paglu" - a term of endearment, often meaning crazy/mad in a loving way.

export const mismatchedPaglu = {
    id: 5,
    title: "Mismatched Paglu",
    description: "being a Dimpshi fanboy",
    cover: mismatchedCover,
    theme: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
    backgroundEffect: "rain",
    songs: [
        {
            id: 501,
            title: "Aise Kyun",
            artist: "Anurag Saikia, Raghav C",
            duration: "4:00",
            youtubeId: "blRe2wQP-_U", // Verified Season 1
            ...songsContent[501]
        },
        {
            id: 502,
            title: "Love Is Love",
            artist: "Anoushka Maskey",
            duration: "2:52",
            youtubeId: "7y-10dAzZGM",
            ...songsContent[502]
        },
        {
            id: 503,
            title: "Mehmaan",
            artist: "Sickflip",
            duration: "2:45",
            youtubeId: "z957oUHfqxQ",
            ...songsContent[503]
        },
        {
            id: 504,
            title: "Aise Kyun (Ghazal Ver.)",
            artist: "Rekha Bhardwaj",
            duration: "4:30",
            youtubeId: "25B35c1LkBQ",
            ...songsContent[504]
        },
        {
            id: 505,
            title: "Pipni",
            artist: "Anurag Saikia",
            duration: "3:10",
            youtubeId: "_sfW4HTtDCo",
            ...songsContent[505]
        },
        {
            id: 506,
            title: "Kho Gaye",
            artist: "Taaruk Raina",
            duration: "3:35",
            youtubeId: "lmhKXQBgEQU",
            ...songsContent[506]
        },
        {
            id: 507,
            title: "Jaanu Na",
            artist: "Danish Sood",
            duration: "3:20",
            youtubeId: "RJarTarsY18",
            ...songsContent[507]
        },
        {
            id: 508,
            title: "Pugaipadam",
            artist: "Sublahshini",
            duration: "3:15",
            youtubeId: "E2p4yrN1evY",
            ...songsContent[508]
        },
        {
            id: 509,
            title: "Ishq Hai",
            artist: "Romy",
            duration: "3:40",
            youtubeId: "BcSejVIxB0E",
            ...songsContent[509]
        }
    ]
};
