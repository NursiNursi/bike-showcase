"use client";

import React from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import { ReviewData } from "@/constants/reviewData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ReviewCarouselProps {
  reviews: ReviewData[];
  gridLayout?: boolean;
}

// Custom arrow components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 cursor-pointer bg-primary-red hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 cursor-pointer bg-primary-red hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
    onClick={onClick}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({
  reviews,
  gridLayout = false,
}) => {
  if (gridLayout) {
    // Grid layout mode: 5 reviews per slide in 3+2 format
    const groupedReviews = [];
    for (let i = 0; i < reviews.length; i += 5) {
      groupedReviews.push(reviews.slice(i, i + 5));
    }

    const gridSettings = {
      dots: true,
      infinite: groupedReviews.length > 1,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 640, // sm
          settings: {
            arrows: false, // Hide arrows on mobile for better UX
          },
        },
      ],
    };

    return (
      <div className="w-full review-carousel-container">
        <Slider {...gridSettings}>
          {groupedReviews.map((group, slideIndex) => (
            <div key={slideIndex} className="outline-none px-2">
              <div className="w-full">
                {/* First row - 3 reviews */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {group.slice(0, 3).map((review, index) => (
                    <ReviewCard
                      key={`${slideIndex}-${index}`}
                      review={review.review}
                      customerName={review.customerName}
                      date={review.date}
                      rating={review.rating}
                    />
                  ))}
                </div>

                {/* Second row - 2 reviews centered (if available) */}
                {group.length > 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {group.slice(3, 5).map((review, index) => (
                      <ReviewCard
                        key={`${slideIndex}-${index + 3}`}
                        review={review.review}
                        customerName={review.customerName}
                        date={review.date}
                        rating={review.rating}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  // Original carousel mode
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile for better UX
        },
      },
    ],
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-red transition-colors duration-300" />
    ),
    dotsClass: "slick-dots !flex !justify-center !gap-2 !mt-8",
  };

  return (
    <div className="relative px-8 md:px-12">
      <style jsx global>{`
        .slick-dots li {
          margin: 0 4px;
        }
        .slick-dots li.slick-active div {
          background-color: #dc2626 !important;
        }
        .slick-dots li div {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #d1d5db;
          transition: background-color 0.3s ease;
        }
        .slick-dots li div:hover {
          background-color: #dc2626;
        }
        .slick-track {
          display: flex;
          align-items: stretch;
        }
        .slick-slide {
          padding: 0 8px;
          height: inherit;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-2">
            <ReviewCard
              review={review.review}
              customerName={review.customerName}
              date={review.date}
              rating={review.rating}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
