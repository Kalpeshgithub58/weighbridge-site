import { products } from "@/lib/data";

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">What We Supply & Install</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Precision at Every Scale
          </h2>
          <p className="text-text-gray mt-5 text-base sm:text-lg leading-relaxed">
            Premium hardware matched with expert integration. Choose the right system for your Industrial, Commercial and Lab scale needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-brand-orange transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
