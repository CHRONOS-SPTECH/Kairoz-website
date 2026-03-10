import { couterBarNumbersDimanic } from "./components/counter-bar.js";

const section = document.querySelector('.bar-statistic');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        couterBarNumbersDimanic();
        observer.unobserve(section);
    }
}, { threshold: 0.2 });

if(section) observer.observe(section);