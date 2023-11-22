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
          picture: "/images/course-intensive.jpg",
          title: 'Intensive Course'
        },
        {
          picture: "/images/courses-instructor.jpg",
          title: 'Instructor'
        }
    ],
    rateArr: [
        'PASS RATE',
        'REFERRAL RATE',
        'ACCIDENT RATE'
    ],
    instructorArr: [
      {
        name:'Mike Hart',
        portrait: '/images/instructor-mikehart.jpg'
      },
      {
        name:'John Smith',
        portrait: '/images/instructor-johnsmith.jpg'
      },
      {
        name:'Angela Hart',
        portrait: '/images/instructor-angelahart.jpg'
      }
    ],
    carouselArr: [
      {
        name:'Sophia Jones',
        portrait:'/images/testimonial-sophia.png'
      },
      {
        name:'Harold Green',
        portrait:'/images/testimonial-harold.png'
      },
      {
        name:'Grant Harvey',
        portrait:'/images/testimonial-grant.png'
      },
      {
        name:'Kate Lewis',
        portrait:'/images/testimonial-kate.png'
      },
      {
        name:'Kelly Johnson',
        portrait:'/images/testimonial-kelly.png'
      }
    ],
    newsArr: [
      {
        title: 'What Car to Start With?',
        picture: '/public/images/blog-choosecar-700x441.jpg'
      },
      {
        title: 'Avada Driving School Expanding',
        picture: '/public/images/blogpost-10and2-700x441.jpg'
      }
    ]
});