import { FaPodcast } from "react-icons/fa";

export default {
    name: "series",
    title: "Series",
    description: "Create series",
    icon: FaPodcast,
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required(),
            description:
                "Remember that if your title is too long, it may be truncated in various podcatchers-",
        },
        {
            name: "episodes",
            description: "Episodes in this series",
            type: "array",
            of: [
                {
                    type: "reference",
                    weak: true,
                    to: [{ type: "episode" }],
                },
            ],
        },
        {
            name: "subtitle",
            type: "string",
            description: "That catchy tagline.",
        },
        {
            name: "slug",
            title: "Series slug",
            type: "slug",
            validation: (Rule) => Rule.required(),
            description: "For when you need to refer to your series in a url.",
            options: {
                source: "title",
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .slice(0, 200),
            },
        },
        {
            name: "description",
            type: "text",
            rows: 3,
            description:
                "What is this series about and why people should listen to it?",
        },
        {
            name: "coverArt",
            title: "Cover art",
            type: "image",
            description: "The image should be jpg. Preferably 1920x1080.",
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
            description: "description",
            media: "coverArt",
        },
    },
};
