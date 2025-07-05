import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import './Projects.css';

const projects = [
  {
    title: "QA and Summarizer App",
    description: "Developed a FullStack QA and Summarizer web app enabling passage-based question answering and text summarization.",
    tech: "React, Bootstrap, Python, FastAPI, SQLite, Huggingface Transformers, Torch, ML Models"
  },
  {
    title: "Smart ROCF Scoring System",
    description: "Developed a Smart ROCF Scoring System using computer vision and machine learning to automatically extract shapes and structures from original and patient-drawn images for comparative scoring.",
    tech: "Python, OpenCV, Scikit-learn, NumPy, Matplotlib, React"
  },
  {
    title: "Dream Vividness Prediction",
    description: "Used sleep behavior datasets to predict vivid dream levels using Gradient Boosting. Feature engineering included sleep quality, duration, and psychological indicators.",
    tech: "Python, Scikit-learn, Pandas"
  },
  {
    title: "Medical Lab Dashboard",
    description: "Designed a Power BI dashboard to visualize lab testing data across demographics and trends, aiding in healthcare decision-making.",
    tech: "Power BI, Excel, DAX"
  },
  {
    title: "Hotel Reservation App",
    description: "Built a GUI desktop app to handle hotel room bookings using Tkinter and SQLite. Includes locations, pricing, and availability.",
    tech: "Python, Tkinter, SQLite"
  },
  {
    title: "Smoking Analysis Tool",
    description: "Streamlit dashboard visualizing smoking patterns across years and demographics with interactive plots and filters.",
    tech: "Streamlit, Seaborn, Pandas"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <div className="projects-carousel-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index}>
              <motion.div className="project-card" whileHover={{ scale: 1.02 }}>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <span>{proj.tech}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-navigation">
          <div className="swiper-button-prev-custom">←</div>
          <div className="swiper-button-next-custom">→</div>
        </div>
      </div>
    </motion.section>
  );
}
