import { reactive } from "vue";

export const store = reactive({
    navArr: [
        'HOME',
        'ABOUT',
        'PRICES',
        'COURSES',
        'LOCATIONS',
        'BLOG'
    ],
    formPlaceHolderArr: [
        'Your Name*',
        'Email',
        'Telephone',
        'Location'
    ]
});