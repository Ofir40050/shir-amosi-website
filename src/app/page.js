'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// SWIPER IMPORTS:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

// גלריית תמונות
const galleryImages = [
  "/Gallery/12.webp",
  "/Gallery/13.webp",
  "/Gallery/14.webp",
  "/Gallery/15.webp",
  "/Gallery/16.webp",
  "/Gallery/17.webp",
  "/Gallery/18.webp",
  "/Gallery/19.webp",
  "/Gallery/20.webp",
  "/Gallery/22.webp",
  "/Gallery/23.webp",
  "/Gallery/24.webp",
  "/Gallery/25.webp",
  "/Gallery/26.webp",
  "/Gallery/27.webp",
  "/Gallery/28.webp",
  "/Gallery/29.webp",
  "/Gallery/30.webp",
  "/Gallery/31.webp",
  "/Gallery/32.webp",
  "/Gallery/33.webp",
  "/Gallery/34.webp",
  "/Gallery/35.webp",
  "/Gallery/36.webp",
  "/Gallery/37.webp",
  "/Gallery/38.webp",
  "/Gallery/40.webp",
  "/Gallery/41.webp",
  "/Gallery/42.webp",
  "/Gallery/43.webp",
];

function ImageGallery() {
  return (
    <div id="Gallery" className="w-full max-w-5xl mx-auto my-10">
      <h2 className="text-4xl font-bold mb-4 text-center text-[#c384ff]">
        Gallery
      </h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={18}
          slidesPerView={4}
          className="shadow-xl"
          style={{ maxWidth: 1200, padding: 16 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`gallery-img-${idx}`}
                className="w-full h-80 object-cover transition-all duration-300 shadow-lg hover:scale-105"
              />
            </SwiperSlide>
          ))}
          {/* חצים מותאמים */}
          <button className="custom-prev absolute top-1/2 left-0 z-20 -translate-y-1/2 text-white shadow-lg transition-all">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="custom-next absolute top-1/2 right-0 z-20 -translate-y-1/2 text-white shadow-lg transition-all">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState(null);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const musicProjects = [
    {
      title: "Performances",
      description: "Sensual, artistic pole & burlesque acts that light up any event.",
      longDesc: "My pole and burlesque performances are a luxurious fusion of sensuality, refined artistry, and commanding stage presence — crafted to elevate your event with timeless elegance and unforgettable allure. From high-end productions to intimate private soirées, each performance is a curated experience — a story told through movement, mood, and magnetic energy. This is not just a show. It’s a statement. A celebration of bold femininity at its most exquisite.",
      image: "/Booking/06.webp",
      image2: "/Booking/16.webp",
      buttons: [
        {
          label: "Book Now",
          onClick: () => window.open("mailto:Shiramosibooking@gmail.com", "_blank"),
          style: "primary",
          icon: <ExternalLink className="w-4 h-4 mr-2" />
        },
        {
          label: "WhatsApp",
          onClick: () => window.open(
            "https://wa.me/972506591965?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F%20%D7%94%D7%95%D7%A4%D7%A2%D7%94",
            "_blank"
          ),
          style: "secondary"
        }
      ]
    },
    {
      title: "Private Classes",
      description: "Explore movement, sensuality & body connection in a safe, intimate space.",
      longDesc: "Just you and me - a safe, soulful space where your body can speak freely. These one-on-one sessions are tailored to your rhythm, your needs, your energy. Whether you&apos;re a complete beginner or seeking deeper embodiment, we&apos;ll move with intention, sensuality, and care. Let&apos;s melt self-doubt, build confidence, and awaken your unique magic -from the inside out. This is your time. Your body. Your choice.",
      image: "/Booking/07.webp",
      image2: "/Booking/17.webp",
      buttons: [
        {
          label: "Book Now",
          onClick: () => window.open("https://lee.co.il/b/1mVIX"),
          style: "primary"
        },
        {
          label: "WhatsApp",
          onClick: () => window.open(
            "https://wa.me/972506591965?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%A2%D7%95%D7%A8%20%D7%A4%D7%A8%D7%98%D7%99%20%D7%90%D7%95%20%D7%A7%D7%91%D7%95%D7%A6%D7%AA%D7%99",
            "_blank"
          ),
          style: "secondary"
        }
      ]
    },
    {
      title: "Group classes",
      description: "Safe and empowering group classes to move, express & grow together.",
      longDesc: "Come as you are, and move as you feel. My group classes are more than just a workout — they&apos;re a community. A space of girlies to feel free to share their voice, their body, and their vulnerability, where strength meets softness, and movement becomes medicine. Through pole and sensual flow, we explore the body together in a supportive, professional environment. No judgment. No pressure. Just real connection — with yourself and others. You don&apos;t have to do it alone. Let&apos;s rise together.",
      image: "/Booking/05.webp",
      image2: "/Booking/15.webp",
      buttons: [
        {
          label: "Book to Jaffa",
          onClick: () => window.open("https://new.boostapp.co.il/online.php?CreateCode=678cf1fc4aacd173729023612620556811631395678cf1fc4aadc&fbclid=PAQ0xDSwLfhw5leHRuA2FlbQIxMQABp5WttTYAHADNLaPR5aLT3iiwse1H3ShRSrvQshBldnr6DZ_oAWUV8-GHBLV__aem_k8gNIYNhwwzEKSDz067VQw", "_blank"),
          style: "primary"
        },
        {
          label: "WhatsApp",
          onClick: () => window.open(
            "https://wa.me/972506591965?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%A2%D7%95%D7%A8%20%D7%A4%D7%A8%D7%98%D7%99%20%D7%90%D7%95%20%D7%A7%D7%91%D7%95%D7%A6%D7%AA%D7%99",
            "_blank"
          ),
          style: "secondary"
        }
      ]
    },
    {
      title: "Workshops",
      description: "Workshops to build confidence, embrace sensuality & express your feminine.",
      longDesc: "Whether it&apos;s a bachelorette night, a women&apos;s circle, or a soulful event — my workshops are created to awaken what&apos;s already inside you: power, joy, confidence, and feminine flow. With themes like burlesque, high heels, and sensual movement, we&apos;ll laugh, feel, and move through energy, emotion, and expression — together. Perfect for intimate gatherings, special celebrations, or any moment where women want to feel alive. Let&apos;s create an unforgettable experience for you and your women.",
      image: "/Booking/08.webp",
      image2: "/Booking/18.webp",
      buttons: [
        {
          label: "Book a Workshop",
          onClick: () => window.open("mailto:Shiramosibooking@gmail.com", "_blank"),
          style: "primary"
        },
        {
          label: "WhatsApp",
          onClick: () => window.open(
            "https://wa.me/972506591965?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F%20%D7%A1%D7%93%D7%A0%D7%94",
            "_blank"
          ),
          style: "secondary"
        }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", imageSrc: "/images/instagram.webp", url: "https://www.instagram.com/shiramosi8/" },
    { name: "YouTube", imageSrc: "/images/youtube.webp", url: "https://youtube.com/@shiramosi007?si=sC_fmAdHz93QbaSa" },
    { name: "Email", imageSrc: "/images/email.webp", url: "mailto:Shiramosibooking@gmail.com" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0a6c] via-[#17043b] to-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex justify-center md:justify-start items-center w-full md:w-auto">
              <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-2xl md:text-xl font-bold bg-gradient-to-r from-[#d975e9] to-[#4c01c7] bg-clip-text text-transparent leading-tight hover:scale-105 transition">
                <button
                  onClick={() => scrollToSection('Shir Amosi')}
                >
                  Shir Amosi
                </button>
              </div>
            </div>
            <div className="hidden md:flex space-x-10">
              {['About', 'Booking', 'Gallery', 'Contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white/80 hover:text-white transition-colors duration-300 capitalize font-xl hover:scale-120"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="Shir Amosi" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/Pic/Shir.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.6)", objectPosition: "center 115%" }}
          />
        </div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="">
            <h1 className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8) text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#d975e9] to-[#4c01c7] bg-clip-text text-transparent leading-tight">
              Shir Amosi
            </h1>
            <p className="text-small md:text-2xl text-white/80 font-light tracking-wide">
              Performer &amp; Instructor | Burlesque, Pole &amp; Heels
            </p>
            <p className="text-small md:text-2xl text-white/80 font-light tracking-wide">
              Workshops &amp; Shows
            </p>
            <div className="mt-8">
              <Button
                onClick={() => scrollToSection('Booking')}
                className="bg-[#1f023b] px-8 py-7 transition-all duration-300 transform w-auto shadow-lg opacity-80 hover:opacity-100 hover:shadow-xl hover:scale-105 "
              >
                <span className="text-xl md:text-2xl font-semibold text-white/100 font-light tracking-wide">
                  Book With Me
                </span>
              </Button>
            </div>
            <div className="mt-8 flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  onClick={() => window.open(link.url, "_blank")}
                  className="bg-transparent opacity-80 hover:opacity-90 p-0  hover:scale-110"
                >
                  <img
                    src={link.imageSrc}
                    alt={link.name}
                    className="w-10 h-10 object-contain"
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="About" className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 p-10 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="flex flex-col gap-5 w-full md:w-1/4 items-center">
              <img
                src="/About/04.webp"
                alt="Shir performing"
                className="w-60 h-70 object-cover shadow-lg hover:scale-105 transition"
              />
              <img
                src="/About/01.webp"
                alt="Pole dance"
                className="w-60 h-70 object-cover shadow-lg hover:scale-105 transition"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold mb-4 text-[#c384ff] leading-relaxed">
                About Me
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Hi, I&apos;m <span className="font-semibold text-[#c384ff]">Shir Amosi</span>! I&apos;m a passionate pole-dance instructor, burlesque and high-heels dancer, performer, and creative spirit dedicated to empowering women through movement, self-expression, and inner connection.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                With eight years of experience on and off the stage, I&apos;ve had the honor of competing in pole-dance competitions both in Israel and internationally. These moments helped shape my unique voice as an artist and deepen my belief in the transformative power of dance.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                In addition to teaching, I&apos;m an experienced performer who has graced numerous stages, blending pole-dance with theatrical styles like burlesque, cabaret and vogue. I bring storytelling, sensuality, and bold feminine energy to every performance.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I specialize in working with beginners, helping them build confidence, strength, and body awareness from the very first class. My teaching style combines technique, emotion, and sensual expression, creating a safe and uplifting space where every woman can explore her rhythm and reconnect with her magic.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                <span className="font-semibold text-[#c384ff]">Private classes and live performances are available for booking.</span> Whether you&apos;re looking to start your pole journey or bring unforgettable energy to your next event, I&apos;d love to connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="Booking" className="py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#c384ff]">
            Booking
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {musicProjects.map((project, index) => (
              <Card key={index} className="p-1 rounded-none backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <CardContent className="p-0 h-full flex flex-col">
                  <div
                    className="aspect-square relative overflow-hidden cursor-pointer"
                    onClick={() => setOpenIndex(index)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
                    <p className="text-white/70 mb-4 text-sm mt-1 leading-relaxed">{project.description}</p>
                    <Button
                      onClick={() => setOpenIndex(index)}
                      className="rounded-none w-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-white border border-white/20 font-medium transition-all duration-300 mt-auto"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-[#190033] rounded-2xl shadow-2xl p-10 w-full max-w-3xl min-h-[650px] relative mx-4">
            {/* סגור */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-3 text-[#c384ff]">
              {musicProjects[openIndex].title}
            </h3>
            <p className="text-white/90 mb-4">
              {musicProjects[openIndex].longDesc}
            </p>
            <img
              src={musicProjects[openIndex].image2}
              alt={musicProjects[openIndex].title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute left-0 right-0 bottom-6 flex justify-center">
              {musicProjects[openIndex].buttons?.map((btn, idx) => (
                <Button
                  key={idx}
                  onClick={btn.onClick}
                  className={
                    (btn.style === "primary"
                      ? "rounded-none w-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-white border border-white/20 font-medium transition-all duration-300"
                      : "rounded-none bg-white text-[#2b0a6c]"
                    ) +
                    " flex justify-center items-center text-base py-2 px-6 border border-[#c384ff] hover:scale-105 transition-all w-[170px] h-[52px] mx-3"
                  }
                >
                  {btn.icon}
                  {btn.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- גלריה --- */}
      <ImageGallery />

      {/* Contact Section */}
      <section id="Contact" className="py-10 px-1">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 p-5 border border-white/10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 mt-5 text-center text-[#c384ff]">
              Let&apos;s Connect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  onClick={() => window.open(link.url, '_blank')}
                  className={`rounded-none h-16 backdrop-blur-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={link.imageSrc}
                      alt={link.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="font-semibold">{link.name}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 backdrop-blur-xl bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2025 Shir Amosi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
