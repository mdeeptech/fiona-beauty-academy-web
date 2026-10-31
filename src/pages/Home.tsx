import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import WhyChooseFiona from '../components/home/WhyChooseFiona';
import Founder from './Founder';
import AnnouncementMarquee from '../components/home/AnnouncementMarquee';
import { courses } from '../data/courses';
import influencerVideo1 from '../../assets/video/video 1.mp4';
import influencerVideo2 from '../../assets/video/video 2.mp4';
import influencerVideo3 from '../../assets/video/video 3.mp4';

const influencerVideos = [influencerVideo1, influencerVideo2, influencerVideo3];

const studentReviews = [
  {
    quote: 'Classes are regular.',
    note: 'The review also mentions hands-on practice and extra sessions for students.',
    name: 'Tulsi',
    date: '20 January 2025',
    focus: 'CLASSES & PRACTICE',
  },
  {
    quote: 'Comprehensive and well-structured.',
    note: 'The reviewer also praised knowledgeable instructors and practical training.',
    name: 'CHANDAKL',
    date: '13 January 2025',
    focus: 'STRUCTURED LEARNING',
  },
  {
    quote: 'Really amazing attention to detail!',
    note: 'A short, positive note from a Fiona Beauty Academy reviewer.',
    name: 'Mercy',
    date: '19 January 2022',
    focus: 'ATTENTION TO DETAIL',
  },
  {
    quote: 'Good experience.',
    note: 'The reviewer shared a positive experience and recommends the academy.',
    name: 'Sneha',
    date: '19 January 2022',
    focus: 'STUDENT EXPERIENCE',
  },
];

const studentReviewsUrl = 'https://www.justdial.com/Tinsukia/Fiona-Beauty-Academy-Near-Tamul-Bari-Truck-Stand-At-Road-Tinsukia/9999PX374-X374-220119201513-T3J9_BZDET';

function InfluencerVideoGallery() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const videos = videoRefs.current.filter((video): video is HTMLVideoElement => video !== null);
    const visibility = new Map<HTMLVideoElement, number>();
    const mobileViewport = window.matchMedia('(max-width: 767px)');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target as HTMLVideoElement, entry.intersectionRatio));

      if (!mobileViewport.matches) {
        videos.forEach((video) => video.pause());
        return;
      }

      const activeVideo = videos
        .filter((video) => (visibility.get(video) ?? 0) >= 0.6)
        .sort((a, b) => (visibility.get(b) ?? 0) - (visibility.get(a) ?? 0))[0];

      videos.forEach((video) => {
        if (video !== activeVideo) {
          video.pause();
          return;
        }

        video.muted = false;
        void video.play().catch(() => {
          // Mobile browsers may block audible autoplay until the viewer interacts.
          video.muted = true;
          void video.play().catch(() => {});
        });
      });
    }, { threshold: [0, 0.6, 0.75, 1] });

    videos.forEach((video) => observer.observe(video));
    return () => {
      observer.disconnect();
      videos.forEach((video) => video.pause());
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
      {influencerVideos.map((video, index) => (
        <article key={video} className="group mx-auto w-full max-w-[440px] overflow-hidden rounded-2xl border border-fiona-champagne/35 bg-white p-2 shadow-[0_16px_45px_rgba(59,19,31,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(59,19,31,0.17)] sm:max-w-none">
          <div className="relative aspect-[9/16] max-h-[580px] overflow-hidden rounded-xl bg-fiona-burgundy">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/55 to-transparent px-4 pb-8 pt-4">
              <span className="text-[9px] font-semibold tracking-[0.2em] text-white/90">FIONA CREATOR STORY</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/55 bg-black/20 font-serif text-sm text-white backdrop-blur-sm">0{index + 1}</span>
            </div>
            <video
              ref={(element) => { videoRefs.current[index] = element; }}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              controls
              playsInline
              preload="metadata"
              aria-label={`Influencer video ${index + 1}`}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
          <div className="flex items-center gap-3 px-3 pb-2 pt-4 sm:px-4">
            <span className="h-px w-7 bg-fiona-champagne" />
            <span className="text-[9px] font-medium tracking-[0.16em] text-fiona-burgundy/65">A CREATORÃ¢â‚¬â„¢S VIEW OF FIONA</span>
            <span className="ml-auto font-serif text-lg italic text-fiona-champagne">Fiona</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-fiona-ivory">
      {/* 01. Luxury Hero */}
      <Hero />

      {/* 02. Brand Introduction */}
      <section className="pt-24 md:pt-32 pb-14 md:pb-16 px-4 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-fiona-burgundy mb-8 tracking-wide">
          WHERE PASSION <br /> BECOMES A PROFESSION.
        </h2>
        <div className="gold-line mx-auto w-24 mb-10"></div>
        <p className="text-fiona-black/80 leading-relaxed md:text-lg max-w-3xl mx-auto font-light">
          Fiona Beauty Academy focuses on creating skilled beauty professionals through industry-oriented training, practical exposure, professional mentorship and dedicated trainers. We empower individuals with professional beauty, hair, makeup and wellness skills through expert guidance, hands-on training, innovative learning, excellence, integrity and lifelong learning.
        </p>
      </section>

      {/* Announcement Marquee */}
      <AnnouncementMarquee />

      {/* 03. Why Choose Fiona */}
      <WhyChooseFiona />

      {/* 04. Trust / Certifications */}
      <section className="py-20 bg-fiona-cream border-y border-fiona-taupe/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-fiona-burgundy mb-4">QUALITY. STRUCTURE. PROFESSIONALISM.</h3>
          <p className="text-sm tracking-widest text-fiona-burgundy/60 mb-12 uppercase">Recognized By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90 transition-all duration-500">
            <img src="/certifications/iso-removebg-preview.png" alt="ISO" className="h-16 md:h-20 object-contain" />
            <img src="/certifications/QRO.png" alt="QRO" className="h-16 md:h-20 object-contain" />
            <img src="/certifications/iaf-removebg-preview.png" alt="IAF" className="h-16 md:h-20 object-contain" />
            <img src="/certifications/msme-removebg-preview.png" alt="MSME" className="h-16 md:h-20 object-contain" />
            <img src="/certifications/EGAC.png" alt="EGAC" className="h-16 md:h-20 object-contain" />
            <img src="/certifications/DPIIT Startup India.png" alt="Startup India" className="h-16 md:h-20 object-contain" />
          </div>
        </div>
      </section>

      {/* 05. Featured Courses */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <div className="w-full">
            <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] leading-none font-serif text-fiona-burgundy mb-3 md:mb-4">OUR PROGRAMS</h2>
            <p className="text-fiona-black/70 tracking-wide text-[14px] md:text-base">Industry-oriented training for your future.</p>
          </div>
          <Link to="/courses" className="inline-block mt-2 md:mt-0 shrink-0 border-b border-fiona-champagne text-fiona-burgundy pb-1 hover:text-fiona-champagne transition-colors uppercase tracking-widest text-[11px] md:text-xs font-semibold">
            View All Courses Ã¢â€ â€™
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course, idx) => (
            <Link key={course.slug} to={`/courses/${course.slug}`} className="group block bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1 tracking-widest text-fiona-burgundy">
                  {course.category}
                </div>
              </div>
              <div className="p-8">
                <div className="text-fiona-champagne text-sm font-semibold tracking-widest mb-3">0{idx + 1} / {course.duration}</div>
                <h3 className="font-serif text-2xl text-fiona-burgundy mb-4 line-clamp-2">{course.title}</h3>
                <div className="gold-line w-0 group-hover:w-full transition-all duration-500 mb-4"></div>
                <p className="text-fiona-black/60 text-sm line-clamp-2 mb-6">
                  {course.overview}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-fiona-burgundy">{"\u20B9"}{course.price.toLocaleString('en-IN')}</span>
                  <span className="text-fiona-champagne group-hover:translate-x-2 transition-transform duration-300">EXPLORE {"\u2192"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Founder & Leadership */}
      <Founder embedded />

      {/* Influencer stories */}
      <section className="bg-fiona-ivory py-16 md:py-24" aria-labelledby="influencer-stories-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-9 md:mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.24em] font-semibold text-fiona-champagne mb-3">FIONA IN THE SPOTLIGHT</p>
            <h2 id="influencer-stories-title" className="font-serif text-3xl sm:text-4xl md:text-5xl text-fiona-burgundy mb-4">Influencer Stories</h2>
            <div className="gold-line mx-auto w-20 mb-5" />
            <p className="text-sm md:text-base leading-relaxed text-fiona-black/65">See what creators have to say about their Fiona experience.</p>
          </div>

          <InfluencerVideoGallery />
        </div>
      </section>

      {/* 06. Beauty Express Promo */}
      <section className="py-20 bg-fiona-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-fiona-champagne text-fiona-burgundy text-xs font-bold px-3 py-1 tracking-widest mb-6">FEATURED COURSE</div>
            <h2 className="text-4xl md:text-6xl font-serif text-fiona-burgundy mb-4">Beauty Express</h2>
            <div className="md:hidden w-full max-w-[300px] sm:max-w-[360px] mx-auto relative my-6">
              <div className="aspect-square bg-fiona-burgundy/5 rounded-full absolute inset-0 scale-105"></div>
              <img src="/courses/Beauty express.png" alt="Beauty Express course" className="w-full aspect-square object-cover rounded-full relative z-10 shadow-2xl border-8 border-white" />
            </div>
            <div className="text-fiona-taupe text-sm font-semibold tracking-widest mb-2">1 month</div>
            <div className="text-5xl md:text-6xl font-serif gold-text mb-6">{"\u20B9"}8,098</div>
            <p className="text-fiona-burgundy/80 mb-8 max-w-md mx-auto md:mx-0">
              100% Job Guaranteed* Flow: Learn the course Ã¢â€ â€™ Get Placed Ã¢â€ â€™ Fly to Bangalore. Includes Manicure, Pedicure, Waxing, Threading, Facial.
            </p>
            <Link 
              to="/courses/beauty-express"
              className="inline-block bg-fiona-burgundy text-fiona-ivory px-8 py-3.5 text-xs tracking-widest font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              VIEW COURSE
            </Link>
          </div>
          <div className="hidden md:block flex-1 w-full relative">
            <div className="aspect-square bg-fiona-burgundy/5 rounded-full absolute inset-0 scale-110"></div>
            <img src="/courses/Beauty express.png" alt="Beauty Express course" className="w-full h-full object-cover rounded-full aspect-square relative z-10 shadow-2xl border-8 border-white" />
          </div>
        </div>
      </section>

      {/* 07. Student Reviews */}
      <section className="student-reviews-section" aria-labelledby="student-reviews-title">
        <div className="student-reviews-inner">
          <header className="student-reviews-heading">
            <p>STUDENT VOICES</p>
            <h2 id="student-reviews-title">A few words from our students</h2>
            <span aria-hidden="true" />
          </header>

          <div className="student-reviews-grid">
            {studentReviews.map((review, index) => (
              <article className="student-review" key={review.name}>
                <div className="student-review-topline">
                  <span className="student-review-number">0{index + 1}</span>
                  <span className="student-review-focus">{review.focus}</span>
                </div>
                <blockquote>
                  <span className="student-review-quote-mark" aria-hidden="true">{"\u201C"}</span>
                  <p>{review.quote}</p>
                </blockquote>
                <p className="student-review-note">{review.note}</p>
                <footer className="student-review-footer">
                  <div>
                    <strong>{review.name}</strong>
                    <span>Student review {"\u00B7"} {review.date}</span>
                  </div>
                  <a href={studentReviewsUrl} target="_blank" rel="noreferrer" aria-label={`Read ${review.name}'s review on Justdial`}>
                    {"\u2197"}
                  </a>
                </footer>
              </article>
            ))}
          </div>

          <a className="student-reviews-source" href={studentReviewsUrl} target="_blank" rel="noreferrer">
            READ ALL REVIEWS ON JUSTDIAL <span aria-hidden="true">{"\u2197"}</span>
          </a>
        </div>
      </section>

      {/* 08. Final CTA */}
      <section className="bg-fiona-burgundy text-fiona-ivory py-32 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF62 0%, transparent 70%)' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">YOUR PASSION <br /> HAS A PROFESSION.</h2>
          <p className="text-fiona-ivory/70 text-lg mb-10 tracking-wide font-light">Start your journey with Fiona Beauty Academy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses"
              className="bg-gold-gradient text-fiona-burgundy px-8 py-4 text-xs tracking-widest font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,98,0.3)]"
            >
              EXPLORE COURSES
            </Link>
            <Link 
              to="/book-counselling"
              className="border border-fiona-champagne text-fiona-ivory px-8 py-4 text-xs tracking-widest font-bold hover:bg-fiona-champagne hover:text-fiona-burgundy transition-all duration-300"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
