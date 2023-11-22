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
    ],
    valueArr: [
      {
        value: 95,
        title: 'PASS RATE'
      },
      {
        value: 100,
        title: 'REFERRAL RATE'
      },
      {
        value: 0,
        title: 'ACCIDENT RATE'
      }
    ],
    footerLinkArr: [
      'Basic Driving Course',
      'Pass Plus Driving Course',
      'Intensive Driving Course',
      'Instructors Training'
    ],
    footerInfoArr: [
      {
        icon:'fa-solid fa-house',
        info: '50 North Main Street, New York, NY 98765'
      },
      {
        icon:'fa-solid fa-phone',
        info: 'Toll Free: 1-800-555-555'
      },
      {
        icon:'fa-solid fa-envelope',
        info: 'info@your-domain.com'
      },
      {
        icon:'fa-solid fa-turn-up',
        info: 'Mon to Sat: 8 am - 5 am'
      }
    ]
});