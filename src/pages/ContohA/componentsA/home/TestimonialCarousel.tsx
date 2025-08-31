import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Testimonial } from '../../dataA/testimonials';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-primary/30',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-16"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-700 leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client info */}
                <div className="flex items-center space-x-4">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600">
                      {testimonial.city}
                    </div>
                    <div className="text-sm text-accent font-medium">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;