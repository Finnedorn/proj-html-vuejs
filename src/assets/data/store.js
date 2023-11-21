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
    ],
    coursesArr: [
        {
          picture: "/images/courses-passplus.jpg",
          title: 'Pass Plus'
        },
        {
          picture: "/public/images/course-intensive.jpg",
          title: 'Intensive Course'
        },
        {
          picture: "/public/images/courses-instructor.jpg",
          title: 'Instructor'
        }
    ],
    rateArr: [
        'PASS RATE',
        'REFERRAL RATE',
        'ACCIDENT RATE'
    ]
});