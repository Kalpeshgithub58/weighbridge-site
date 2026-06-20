import { products } from "@/lib/data";

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
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
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="w-14 h-14 bg-brand-blue/5 group-hover:bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-7 h-7 text-brand-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 group-hover:text-brand-blue transition-colors">
                  {product.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
