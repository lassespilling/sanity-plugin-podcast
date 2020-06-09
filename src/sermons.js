import { MdPlayArrow } from "react-icons/md";

export default {
    name: "sermons",
    title: "Episode",
    type: "document",
    icon: MdPlayArrow,
    fields: [
        {
            name: "podcastsArray",
            description: "Create podcasts",
            type: "array",
            of: [{ type: "podcast" }],
        },
        {
            name: "seriesArray",
            description: "Create series",
            type: "array",
            of: [{ type: "series" }],
        },
        {
            name: "episodesArray",
            description: "Create episode",
            type: "array",
            of: [{ type: "reference", weak: true, to: [{ type: "episode" }] }],
        },
    ],
};
