import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true,
    offset: 80,
  })
})
