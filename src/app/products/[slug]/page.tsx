import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { links } from "@/lib/config";

// This function is required for static export (output: 'export')
// It tells Next.js which paths to pre-render at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-[72px] min-h-screen bg-light">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center gap-2 text-sm text-text-gray font-medium">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-brand-blue transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{product.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center shadow-lg mb-4">
                  <product.icon className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight mb-6">
                {product.title}
              </h1>
              <p className="text-lg sm:text-xl text-text-gray leading-relaxed mb-8">
                {product.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={links.call}
                  className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-blue-dark transition-all duration-300 shadow-lg shadow-brand-blue/30 text-center"
                >
                  Request a Quote
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 text-center"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Key Features */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-8">
              Key Features
            </h2>
            <div className="space-y-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
                  </div>
                  <p className="text-lg text-text-gray leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-8">
              Technical Specifications
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
              <div className="divide-y divide-gray-100">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="grid grid-cols-3 p-5 sm:p-6 hover:bg-gray-50 transition-colors">
                    <div className="col-span-1 text-sm sm:text-base font-bold text-charcoal">
                      {spec.label}
                    </div>
                    <div className="col-span-2 text-sm sm:text-base font-medium text-text-gray">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
