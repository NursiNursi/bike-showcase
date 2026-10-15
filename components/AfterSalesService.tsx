const warranties = [
  {
    name: "Rangka Bodi",
    duration: "5 tahun",
    details:
      "Berlaku untuk semua motor Honda. Hanya rangka bodi, tidak termasuk part fast moving.",
  },
  {
    name: "PGM-FI",
    duration: "5 tahun / 60.000 km",
    details: "Mana yang tercapai lebih dahulu.",
  },
  {
    name: "Mesin",
    duration: "3 tahun / 36.000 km",
    details: "Mana yang tercapai lebih dahulu.",
  },
  {
    name: "Komponen Rangka & Kelistrikan",
    duration: "1 tahun / 12.000 km",
    details: "Mana yang tercapai lebih dahulu.",
  },
  {
    name: "EV Battery & Unit",
    duration: "2 tahun / 1 tahun",
    details: "2 tahun untuk Battery dan 1 tahun untuk Unit.",
  },
] as const;

const serviceSchedule = [
  {
    period: "KPB 1",
    interval4000: "1.000 Km / 2 Bulan",
    interval6000: "1.000 Km / 2 Bulan",
  },
  {
    period: "KPB 2",
    interval4000: "4.000 Km / 4 Bulan",
    interval6000: "6.000 Km / 6 Bulan",
  },
  {
    period: "KPB 3",
    interval4000: "8.000 Km / 8 Bulan",
    interval6000: "12.000 Km / 12 Bulan",
  },
  {
    period: "KPB 4",
    interval4000: "12.000 Km / 12 Bulan",
    interval6000: "18.000 Km / 18 Bulan",
  },
  {
    period: "KPB 5-12",
    interval4000: "Setiap 4.000 Km / 4 Bulan",
    interval6000: "Setiap 6.000 Km / 6 Bulan",
  },
] as const;

const serviceBenefits = [
  "Teknisi Bersertifikat",
  "Suku Cadang Asli Honda",
  "Perawatan Sesuai Standar",
  "Garansi Resmi Terjamin",
] as const;

const warrantyTerms = [
  "Kesalahan proses produksi",
  "Kesalahan bahan/material produk",
  "Kesalahan konstruksi",
] as const;

const intervalModels = [
  {
    interval: "Interval 4.000",
    models: "Revo, Supra X, BeAT, Genio, Scoopy, Vario, Verza, Sonic",
  },
  {
    interval: "Interval 6.000",
    models: "GTR, PCX, ADV, CB150, CBR",
  },
] as const;

const AfterSalesService = () => {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-600 to-rose-500 px-6 py-12 text-white shadow-xl sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[36px] border-white/10"
          />
          <div className="relative max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-100">
              Honda After Sales Service
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Semua untuk <span className="text-amber-200">KETENANGAN</span>{" "}
              PERJALANANMU
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-medium text-red-50 sm:text-xl">
              Honda Memberikan Jaminan Kualitas Terbaik
            </p>
            <p className="mt-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold tracking-wide text-white sm:text-base">
              #Cari_aMaN saat naik motor
            </p>
          </div>
        </header>

        <section aria-labelledby="warranty-heading" className="mt-14">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
              Perlindungan untuk perjalanan Anda
            </p>
            <h3
              id="warranty-heading"
              className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
            >
              Jaminan garansi resmi Honda
            </h3>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {warranties.map((warranty) => (
              <li
                key={warranty.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-500">
                  Garansi {warranty.name}
                </p>
                <p className="mt-2 text-xl font-extrabold text-red-700">
                  {warranty.duration}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {warranty.details}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-6 sm:p-8">
            <h4 className="text-lg font-bold text-slate-900">
              Syarat klaim garansi
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Garansi berlaku untuk kerusakan akibat:
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
              {warrantyTerms.map((term) => (
                <li key={term} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-600"
                  />
                  {term}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-red-200 pt-4 text-sm leading-6 text-slate-700">
              Garansi berlaku selama motor digunakan dalam kondisi normal dan
              dirawat berkala di AHASS.
            </p>
          </div>
        </section>

        <section aria-labelledby="schedule-heading" className="mt-16">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
              Jadwalkan perawatan Anda
            </p>
            <h3
              id="schedule-heading"
              className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
            >
              Jadwal servis berkala AHASS
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Servis sesuai interval kilometer atau waktu, mana yang tercapai
              lebih dahulu.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Jadwal KPB dan servis berkala berdasarkan interval motor
                </caption>
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-bold">
                      Servis
                    </th>
                    <th scope="col" className="px-5 py-4 font-bold">
                      Interval 4.000
                    </th>
                    <th scope="col" className="px-5 py-4 font-bold">
                      Interval 6.000
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {serviceSchedule.map((service) => (
                    <tr key={service.period} className="even:bg-slate-50">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-5 py-4 font-bold text-slate-900"
                      >
                        {service.period}
                      </th>
                      <td className="px-5 py-4 text-slate-700">
                        {service.interval4000}
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        {service.interval6000}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {intervalModels.map((item) => (
              <p
                key={item.interval}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"
              >
                <span className="font-bold text-slate-900">
                  {item.interval}:{" "}
                </span>
                {item.models}
              </p>
            ))}
          </div>
          <p className="mt-5 rounded-xl bg-amber-50 px-5 py-4 text-sm font-semibold leading-6 text-amber-900">
            Tips: Servis berkala tepat waktu = Performa optimal, aman, dan awet!
          </p>
        </section>

        <section aria-labelledby="benefits-heading" className="mt-16">
          <div className="rounded-3xl bg-slate-900 px-6 py-9 text-white sm:px-10">
            <h3
              id="benefits-heading"
              className="text-2xl font-extrabold sm:text-3xl"
            >
              Servis nyaman, motor tetap prima
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {serviceBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4 text-sm font-semibold"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold"
                  >
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="contact-heading"
          className="mt-14 flex flex-col gap-7 rounded-3xl border border-red-100 bg-white p-6 shadow-sm sm:p-9 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
              Dealer Honda Lembang
            </p>
            <h3
              id="contact-heading"
              className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl"
            >
              Honda, Selalu Bersama Anda
            </h3>
            <p className="mt-3 text-slate-600">
              Kami siap membantu Anda dengan sepenuh hati!
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic leading-6 text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">
                  Contact Person:
                </span>{" "}
                Mia (Honda Lembang)
              </p>
              <p>
                <span className="font-semibold text-slate-900">Alamat:</span>{" "}
                Jl Tangkuban Perahu No 16 Lembang
              </p>
            </address>
          </div>
          <a
            href="https://wa.me/628112340753"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-red-600 px-7 py-3 text-center font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
            aria-label="Hubungi Mia di Honda Lembang melalui WhatsApp, 081 1234 0753"
          >
            WhatsApp 081 1234 0753
          </a>
        </section>
      </div>
    </div>
  );
};

export default AfterSalesService;
