import Image from "next/image";
import Link from "next/link";
import BikeDetailClient from "@/components/BikeDetailClient";
import DetailActionsClient from "@/components/DetailActionsClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  findBikeBySlug,
  getAllBikeSlugs,
  renderBrakingSystemLabel,
} from "@/utils";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllBikeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const bike = findBikeBySlug(params.slug);
  const title = bike?.model ? `${bike.model} — Detail` : "Detail Motor";
  const description = bike?.spec?.engineType
    ? `Spesifikasi ${bike.model} dengan mesin ${bike.spec.engineType}.`
    : bike?.model
    ? `Informasi lengkap ${bike.model}.`
    : "Detail motor Honda.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: bike?.image ? [{ url: bike.image }] : undefined,
    },
  };
}

export default async function BikeDetailPage({ params }: PageProps) {
  const bike = findBikeBySlug(params.slug);
  if (!bike) return notFound();

  const brakingLabel =
    renderBrakingSystemLabel(bike.spec?.brakingSystem) ||
    bike.spec?.brakingSystem;

  return (
    <div className="px-4 md:px-8 lg:px-12 pb-8 max-w-7xl mx-auto mt-8">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 py-2 border rounded-full border-primary-red text-sm text-primary-red hover:bg-red-50 mb-4"
          aria-label="Kembali ke daftar motor"
        >
          <span className="relative w-5 h-5">
            <Image
              src="/right-chevron.png"
              alt="Kembali"
              fill
              className="object-contain rotate-180"
            />
          </span>
          <span>Kembali</span>
        </Link>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
          {bike.model}
        </h1>

        <p className="mt-2 text-gray-600">
          Detail spesifikasi dan informasi lengkap.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Images */}
        <div className="lg:w-1/2">
          <BikeDetailClient bike={bike} />
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold">Harga mulai</h2>
            <p className="flex items-baseline gap-2 text-[28px] md:text-[36px] font-extrabold mb-4">
              <span className="text-[14px] font-semibold">Rp</span>
              {bike.price}jt{" "}
              <span className="text-[14px] font-medium">-an</span>
            </p>
            <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 border rounded-lg">
                <p className="text-gray-500">Transmisi</p>
                <p className="font-semibold">{bike.transmissionType}</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-gray-500">Kunci</p>
                <p className="font-semibold">
                  {bike.keyless ? "Smart Key" : "Anak Kunci"}
                </p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-gray-500">Rem</p>
                <p className="font-semibold">{brakingLabel || "N/A"}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Spesifikasi</h2>
            <div className="mt-3 space-y-2">
              {Object.entries(bike.spec ?? {}).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between gap-5 border-b pb-2"
                >
                  <span className="text-gray-600 capitalize">
                    {key
                      .replace(/([a-z])([A-Z])/g, "$1 $2")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </span>
                  <span className="font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <DetailActionsClient bike={bike} />
        </div>
      </div>
    </div>
  );
}

