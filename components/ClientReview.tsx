"use client";

import ReviewCarousel from "./ReviewCarousel";
import { allReviews } from "@/constants/reviewData";

const ClientReview = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width">
      <div className="w-full gap-5 py-4">
        <div className="home__text-container mb-8">
          <h1 className="text-4xl font-extrabold">Ulasan Pelanggan</h1>
          <p className="text-grey">Apa kata mereka tentang Honda</p>
        </div>

        {/* Grid Layout Carousel */}
        <ReviewCarousel reviews={allReviews} gridLayout={true} />
      </div>
    </div>
  );
};

export default ClientReview;
