import { FaChurch } from "react-icons/fa";

export default {
    name: "venue",
    title: "Venue",
    type: "document",
    icon: FaChurch,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            title: "Image",
            name: "image",
            type: "image",
        },
        {
            name: "adress",
            title: "Adress",
            type: "string",
        },
    ],
};
