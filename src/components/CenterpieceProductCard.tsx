import React, { useState } from 'react';
import { Star, Smartphone, QrCode, Sparkles, Check, ArrowRight, ShieldCheck, Ruler } from 'lucide-react';
import { ProductSample } from '../types';
import { trackEvent } from '../utils/analytics';

interface CenterpieceProductCardProps {
  product: ProductSample;
  onOpenARModal: (product: ProductSample, mode?: 'qr' | 'simulator') => void;
}

export const CenterpieceProductCard: React.FC<CenterpieceProductCardProps> = ({
  product,
  onOpenARModal,
}) => {
  const [activeFinish, setActiveFinish] = useState<'Bouclé Sand' | 'Linen Charcoal' | 'Warm Olive'>('Bouclé Sand');

  const handleTryOn = () => {
    trackEvent('try_on_interaction', 'Centerpiece Try It in Your Space Clicked', {
      product: product.name,
      price: product.price,
    });
    onOpenARModal(product, 'qr');
  };

  return (
    <section className="py-24 bg-[#FBFBF9] border-b border-[#191919]/08 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Storefront Integration Spotlight
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            The “Try It in Your Space” Centerpiece.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            This is exactly how the spatial trigger looks and behaves inside your customer’s shopping experience.
            Seamless, high-end, and completely true to your brand aesthetic.
          </p>
        </div>

        {/* Centerpiece Container with Luxury E-Commerce Furniture Styling */}
        <div className="bg-white rounded-3xl border border-[#191919]/10 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 items-center">
            
            {/* Left: Luxury Product Imagery with Subtle Spatial Reticle */}
            <div className="lg:col-span-7 p-6 sm:p-10 bg-[#F9F9F8] relative flex items-center justify-center min-h-[380px] lg:min-h-[480px]">
              
              {/* Product Image */}
              <div className="relative group max-w-md mx-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Simulated ground plane contact shadow */}
                <div className="w-[85%] h-6 bg-black/15 rounded-full blur-md mx-auto -mt-2" />
              </div>

              {/* Top Left Tag */}
              <div className="absolute top-6 left-6 text-xs text-[#737373] tracking-wide">
                <span className="uppercase text-[10px] font-semibold text-[#966A38] block">Live Product Page</span>
                <span className="font-serif text-[#191919] text-sm">Signature Living Collection</span>
              </div>

              {/* Bottom Left Dimensions Tag */}
              <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#191919]/08 text-[11px] text-[#5A5A58] flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-[#966A38]" />
                <span>{product.dimensions.width} (W) × {product.dimensions.depth} (D) × {product.dimensions.height} (H)</span>
              </div>

              {/* Powered by Tag */}
              <div className="absolute top-6 right-6 text-[11px] text-[#737373] bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#191919]/08">
                Powered by <strong className="text-[#966A38]">Innovify XR</strong>
              </div>
            </div>

            {/* Right: Contiguous Purchase Module with “Try It in Your Space” Trigger */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs uppercase font-medium tracking-wider text-[#737373]">
                    {product.category}
                  </span>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-xs">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[#191919] font-medium ml-1">5.0</span>
                    <span className="text-[#737373]">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] font-medium leading-tight">
                  {product.name}
                </h3>

                {/* Price (Tabular figure) */}
                <div className="mt-3 text-2xl font-serif text-[#191919] font-semibold tabular-nums">
                  {product.price}
                </div>

                <p className="text-xs text-[#5A5A58] mt-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Finish Selector */}
                <div className="mt-6 pt-6 border-t border-[#191919]/08">
                  <div className="flex items-center justify-between text-xs text-[#191919] mb-2">
                    <span className="font-medium">Fabric Finish:</span>
                    <span className="text-[#737373]">{activeFinish}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[
                      { name: 'Bouclé Sand', color: '#E8E3D9' },
                      { name: 'Linen Charcoal', color: '#3A3A38' },
                      { name: 'Warm Olive', color: '#5F634F' },
                    ].map((finish) => (
                      <button
                        key={finish.name}
                        type="button"
                        onClick={() => setActiveFinish(finish.name as any)}
                        className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                          activeFinish === finish.name ? 'border-[#966A38] scale-110' : 'border-transparent'
                        }`}
                        title={finish.name}
                      >
                        <span className="block w-full h-full rounded-full" style={{ backgroundColor: finish.color }} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Centerpiece Try On Trigger CTA */}
                <div className="mt-8 space-y-3">
                  <button
                    type="button"
                    onClick={handleTryOn}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#966A38] hover:bg-[#805628] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Try It in Your Space</span>
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-[#737373]">
                    <span className="flex items-center gap-1">
                      <QrCode className="w-3.5 h-3.5 text-[#966A38]" />
                      Desktop: Scan QR
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-[#966A38]" />
                      Mobile: Launch AR
                    </span>
                  </div>
                </div>

              </div>

              {/* Store Reassurance Footer */}
              <div className="pt-6 border-t border-[#191919]/08 flex items-center justify-between text-xs text-[#737373]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  White-glove Delivery
                </span>
                <span className="text-[#966A38] font-medium">Powered by Innovify XR</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
