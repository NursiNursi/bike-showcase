"use client";

import ReviewCard from "./ReviewCard";

const ClientReview = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="client-review">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Cerita dari Pelanggan Kami</h1>
        <p className="text-gray-600 mt-4">
          Dengarkan langsung dari beberapa pelanggan kami yang puas di tahun
          ini.
        </p>
      </div>

      <div className="mt-8">
        {/* First row - 3 reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <ReviewCard
            review="Teh Mia sangat membantu dari awal sampai akhir saya dan ibu saya datang, semua pertanyaan dijawab dengan baik. proses pembelian motor pun lancar, Teh Mia orang nya sabar dan senyum selalu, membuat saya dan ibu saya menjadi tenang dan suasana santai saat membayar. Saya sangat puas dengan pembelian motor saya di Sinar Rezeki PT Lembang 😊"
            customerName="Salsabila Permata"
            date="10 September 2025"
            rating={5}
            bikeModel="PCX 160"
          />
          <ReviewCard
            review="Terima kasih Sinar Rejeki Lembang dan Teh Mia atas pelayanannya yang sangat memuaskan, terutama untuk hadiah ulang tahunnya. Terima kasih banyak! Semoga Teh Mia selalu sukses, dilancarkan rezekinya, diberikan kesehatan, dan senantiasa diberkahi. Doa terbaik juga untuk Sinar Rejeki. Pokoknya, semoga usaha ini semakin maju!"
            customerName="Ananda Kartini"
            date="15 Februari 2025"
            rating={5}
            bikeModel="Scoopy"
          />
          <ReviewCard
            review="Alhamdulillah Allahumma Baarik, Makasih Honda Sinar Rejeki Lembang terutama teteh sales yang baik hati teteh mia oktari dari awal proses pengajuan dibantu sampai unitnya mendarat dihalaman rumah, semoga motornya jadi ladang rejeki untuk aku yah doakan hihi hatur nuhun sekali lagi ❤️❤️❤️"
            customerName="Kharisma Nurfadillah"
            date="8 April 2025"
            rating={5}
            bikeModel="Stylo 160"
          />
        </div>

        {/* Second row - 2 reviews centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ReviewCard
            review="Seneng dan puas banget bisa beli motor disini apalagi dilayani dengan ramah jadi semakin memudahkan proses semuanya.. salah satunya teh mia hihi baik banget bantuin semuanya sampe lancar dan mudah 🤗🩷"
            customerName="Tryani Mila Agustina"
            date="20 Agustus 2025"
            rating={5}
            bikeModel="ADV 160"
          />
          <ReviewCard
            review="Terimakasih banyak sinar rezeki lembang , motor yg k 3 kalinyaa didealer ini 😍 Makasih banyak teh miaaa dari pengajuan , proses dan done udh dibantuuu 🥰 Terbaik pokonyaa sinar rezeki lembang & teh miahondalembang 😍"
            customerName="Intan Budiarti"
            date="5 Mei 2025"
            rating={5}
            bikeModel="CUV-E"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
