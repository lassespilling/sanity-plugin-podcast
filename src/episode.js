import { FaPodcast } from "react-icons/fa";

export default {
    name: "episode",
    title: "Episode",
    type: "document",
    icon: FaPodcast,
    fields: [
        {
            name: "file",
            title: "Podcast media file",
            description:
                "Most podcatchers support .mp3, but other audio-formats may work as well",
            type: "file",
        },
        {
            name: "fileUrl",
            title: "External location for podcast media file",
            description: "For when you host your podcast media file elsewhere",
            type: "url",
            options: {
                accept: "audio/mpeg",
            },
        },
        {
            name: "title",
            title: "Title",
            description:
                "Remember that long titles can be truncated in podcast apps",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "hosts",
            title: "Who are the host(s) / speaker(s) in this episode",
            description: "Choose podcast(s) to publish this episode in",
            type: "array",
            of: [{ type: "reference", weak: true, to: [{ type: "host" }] }],
        },
        {
            name: "venue",
            title: "Location",
            description: "Choose where the podcast was recorded",
            type: "array",
            of: [{ type: "reference", weak: true, to: [{ type: "venue" }] }],
        },
        {
            name: "podcast",
            description: "Choose podcast(s) to publish this episode in",
            type: "array",
            of: [{ type: "reference", weak: true, to: [{ type: "podcast" }] }],
        },
        {
            name: "date",
            type: "datetime",
            title: "Date",
            options: {
                inputUtc: false,
                dateFormat: "DD.MM.YYYY",
                timeFormat: "HH:mm",
                inputDate: true,
                inputTime: true,
                timeStep: 15,
                calendarTodayLabel: "Today",
                placeholderDate: "21.10.2021",
                placeholderTime: "11:00",
            },
        },
        // {
        //     name: "duration",
        //     title: "Duration",
        //     description: "HH:MM:SS",
        //     type: "string",
        // },
        {
            name: "subtitle",
            type: "string",
            title: "Subtitle",
        },
        // {
        //     name: "explicit",
        //     title: "Explicit content",
        //     type: "boolean",
        // },
        {
            name: "summary",
            title: "Summary",
            description:
                "An episode summary is a string containing one or more descriptive sentences summarizing your episode for potential listeners. You can specify up to 4000 characters.",
            type: "text",
            rows: 2,
        },
        // {
        //     name: "description",
        //     title: "Description",
        //     description: `An episode description is a string containing one or more sentences describing your episode to potential listeners. You can specify up to 4000 characters.`,
        //     type: "text",
        //     rows: 2,
        //     validation: (Rule) => Rule.max(4000),
        // },
        // {
        //     name: "content",
        //     title: "Content",
        //     description:
        //         "An episode note. Where encoded is a string containing information about your episode.",
        //     type: "array",
        //     of: [
        //         {
        //             type: "block",
        //         },
        //     ],
        // },
        // {
        //     name: "linkList",
        //     title: "Link list",
        //     description:
        //         "A more structured way to add links for show notes. Will be compiled at the end of the episode content field in a podcast RSS feed",
        //     type: "array",
        //     of: [
        //         {
        //             type: "linkListItem",
        //         },
        //     ],
        // },
        {
            name: "slug",
            title: "Episode slug",
            type: "slug",
            description:
                "When you need to refer to your podcast episode in a url",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/å/g, "a")
                        .replace(/ø/g, "o")
                        .replace(/æ/g, "ae")
                        .replace(/ä/g, "a")
                        .replace(/ö/g, "o")
                        .replace(/[^\w\s]/gi, "")
                        .replace(/\s+/g, "-")
                        .slice(0, 200),
            },
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            options: {
                layout: "tags",
            },
            of: [
                {
                    type: "string",
                },
            ],
        },
        // {
        //     name: "itunes",
        //     title: "iTunes Settings",
        //     type: "itunesEpisodeSettings",
        // },
        {
            name: "coverArt",
            title: "Cover art",
            type: "image",
        },
    ],
    orderings: [
        {
            title: "Publish Date, New",
            name: "publishDateDesc",
            by: [{ field: "date", direction: "desc" }],
        },
        {
            title: "Publish Date, Old",
            name: "publishDateAsc",
            by: [{ field: "date", direction: "asc" }],
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "podcast.0.title",
            description: "summary",
            media: "coverArt",
            date: "date",
        },
        prepare({ title, subtitle, description, media, date }) {
            return {
                title: `${title} - ${new Date(date).toLocaleDateString()}`,
                subtitle: `${new Date(date).toDateString()} – ${subtitle}`,
                description,
                media,
            };
        },
    },
    initialValue: () => ({
        slug: title
            ? title
                  .toLowerCase()
                  .replace(/å/g, "a")
                  .replace(/ø/g, "o")
                  .replace(/æ/g, "ae")
                  .replace(/ä/g, "a")
                  .replace(/ö/g, "o")
                  .replace(/[^\w\s]/gi, "")
                  .replace(/\s+/g, "-")
                  .slice(0, 200)
            : "",
    }),
};
