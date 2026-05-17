import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-semibold">Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight">
            Our weighbridge facility
          </h2>
          <p className="text-text-gray mt-4 text-base sm:text-lg leading-relaxed">
            Actual photos of our weighbridge platform, operator cabin, digital
            display, receipt printer and truck entry road.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-white font-bold text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
