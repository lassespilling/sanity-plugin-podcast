import { GiPublicSpeaker } from "react-icons/gi";

export default {
    name: "host",
    title: "Host",
    type: "document",
    icon: GiPublicSpeaker,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "email",
            type: "email",
        },
        {
            name: "image",
            type: "image",
        },
    ],
};
