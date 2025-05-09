import React from 'react';
import { SiComma } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function KraftellFounder() {
  const testimonials = [
    {
      title: "Partner Success Stories",
      description: "Kraftell has transformed how we connect with clients. The platform brings us pre-qualified orders that match our expertise perfectly.",
      author: "Thomas Weber",
      tech: "PrecisionTech GmbH"
    },
    {
      title: "Streamlined Manufacturing",
      description: "The platform streamlined our entire manufacturing process, reducing lead times by 30%.",
      author: "Michael Schmidt",
      tech: "CEO, Precision Parts GmbH"
    },
    {
      title: "Cost Efficiency",
      description: "We reduced costs by 15% while improving quality control through Kraftell's network.",
      author: "Sarah Chen",
      tech: "Operations Director, TechManufacture"
    }
  ];

  return (
    <div className='bg-primary py-16'>
      <div className='max-w-4xl mx-auto px-6 lg:px-14 relative'> {/* Added relative positioning */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            type: 'bullets',
          }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='text-start pb-12'> {/* Added padding bottom for pagination space */}
                <h2 className='text-center text-2xl lg:text-3xl font-bold mb-6 px-4'>
                  {testimonial.title}
                </h2>
                <p className='text-lg text-start text-gray-600 mx-auto mb-8'>
                  {testimonial.description}
                </p>
                <div className='mt-6'>
                  <p className='font-bold text-black'>{testimonial.author}</p>
                  <p className='text-gray-500'>{testimonial.tech}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom pagination container */}
        <div className="custom-pagination absolute bottom-4 left-0 right-0 flex justify-center gap-2" />
      </div>
    </div>
  );
}

export default KraftellFounder;