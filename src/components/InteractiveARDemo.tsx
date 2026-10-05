import React, { useState } from 'react';
import { ProductSample } from '../types';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Smartphone, QrCode, RotateCw, Maximize2, Ruler, Camera, Check, ExternalLink, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface InteractiveARDemoProps {
  onOpenARModal: (product: ProductSample, mode?: 'qr' | 'simulator') => void;
}

export const InteractiveARDemo: React.FC<InteractiveARDemoProps> = ({ onOpenARModal }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductSample>(SAMPLE_PRODUCTS[0]);
  const [activeRoom, setActiveRoom] = useState<'herringbone' | 'studio'>('herringbone');
  const [sliderRotation, setSliderRotation] = useState<number>(0);
  const [showRuler, setShowRuler] = useState<boolean>(true);

  const handleProductSelect = (p: ProductSample) => {
    setSelectedProduct(p);
    trackEvent('try_on_interaction', `Selected Demo Product: ${p.name}`);
  };

  return (
    <section id="demo" className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#966A38] animate-pulse" />
            <span>Interactive AR Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            Experience the Idea Yourself.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            Test the live spatial experience that Innovify XR delivers to your customers.
            Select a sample piece, inspect real-time dimensions, rotate in 360°, or scan the QR code to launch WebAR on your smartphone.
          </p>
        </div>

        {/* Demo Studio Container */}
        <div className="bg-[#FBFBF9] rounded-3xl border border-[#191919]/10 shadow-lg overflow-hidden">
          
          {/* Top Control Bar: Product Selector Tabs */}
          <div className="p-4 sm:p-6 bg-white border-b border-[#191919]/08 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#737373]">
              <span>Sample Catalog:</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {SAMPLE_PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => handleProductSelect(prod)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedProduct.id === prod.id
                      ? 'bg-[#191919] text-white shadow-xs'
                      : 'bg-[#FBFBF9] text-[#5A5A58] hover:text-[#191919] border border-[#191919]/06'
                  }`}
                >
                  {prod.name}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#966A38] font-mono tracking-wide hidden lg:block">
              DEMO PREVIEW · NO APP REQUIRED
            </div>
          </div>

          {/* Interactive AR Stage */}
          <div className="grid lg:grid-cols-12">
            
            {/* 3D Visualizer Viewport */}
            <div className="lg:col-span-8 relative h-[420px] sm:h-[500px] overflow-hidden bg-neutral-900 select-none flex items-center justify-center">
              
              {/* Photorealistic Room Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: activeRoom === 'herringbone'
                    ? `url('/src/assets/images/hero_ar_room_placement_1791173807983.jpg')`
                    : `url('/src/assets/images/laptop_desktop_ar_flow_1791173842897.jpg')`,
                }}
              />

              {/* Surface Tracking HUD Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.12)_1px,_transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

              {/* Surface Detected Ground Ring */}
              <div className="absolute bottom-14 w-60 h-24 rounded-full border border-[#966A38]/50 border-dashed animate-pulse pointer-events-none flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-widest text-white/90 bg-black/50 px-2.5 py-0.5 rounded-full">
                  1:1 METRIC ANCHOR
                </span>
              </div>

              {/* Interactive Placed 3D Furniture Asset */}
              <div
                className="relative z-10 transition-transform duration-150 cursor-grab active:cursor-grabbing"
                style={{
                  transform: `perspective(900px) rotateY(${sliderRotation}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Contact Shadow */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/50 rounded-full blur-md" />

                {/* Main Product Graphic */}
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-64 sm:w-80 max-h-80 object-contain drop-shadow-2xl pointer-events-none"
                />

                {/* Caliper dimensions overlay */}
                {showRuler && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-md border border-white/10 whitespace-nowrap shadow-xl flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#966A38]" />
                    <span>{selectedProduct.dimensions.width} (W) × {selectedProduct.dimensions.depth} (D) × {selectedProduct.dimensions.height} (H)</span>
                  </div>
                )}
              </div>

              {/* Top Viewport Environment & Ruler Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-lg text-white text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveRoom('herringbone')}
                    className={`px-3 py-1 rounded ${activeRoom === 'herringbone' ? 'bg-white/25 text-white font-medium' : 'text-white/70'}`}
                  >
                    Herringbone Living
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveRoom('studio')}
                    className={`px-3 py-1 rounded ${activeRoom === 'studio' ? 'bg-white/25 text-white font-medium' : 'text-white/70'}`}
                  >
                    Design Studio
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowRuler(!showRuler)}
                  className={`p-2 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs transition-colors flex items-center gap-1.5 ${
                    showRuler ? 'border border-[#966A38]/80 text-[#966A38]' : 'text-white/70'
                  }`}
                  title="Toggle Metric Dimensions"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Dimensions</span>
                </button>
              </div>

              {/* Bottom Instructions */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-white/70 text-[11px]">
                Interactive 3D Demo Preview · Drag slider below for 360° rotation
              </div>
            </div>

            {/* Sidebar Controls & Cross-Device QR Launch */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#191919]/08 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#966A38] tracking-widest block">
                      Active Model
                    </span>
                    <h3 className="text-xl font-serif text-[#191919] font-medium">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <span className="text-sm font-semibold text-[#191919] font-serif tabular-nums">
                    {selectedProduct.price}
                  </span>
                </div>

                <p className="text-xs text-[#5A5A58] leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* 360 Rotation Slider */}
                <div className="space-y-2 mb-6 p-3.5 bg-[#FBFBF9] rounded-xl border border-[#191919]/06">
                  <div className="flex items-center justify-between text-xs text-[#191919]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <RotateCw className="w-3.5 h-3.5 text-[#966A38]" />
                      Rotate Angle:
                    </span>
                    <span className="font-mono text-[#737373]">{sliderRotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={sliderRotation}
                    onChange={(e) => setSliderRotation(Number(e.target.value))}
                    className="w-full accent-[#966A38] cursor-pointer h-1.5 bg-[#EAE8E3] rounded-lg"
                  />
                </div>

                {/* Specifications List */}
                <div className="space-y-1.5 text-xs text-[#5A5A58] pb-6 border-b border-[#191919]/08">
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Material:</span>
                    <span className="font-medium text-[#191919]">{selectedProduct.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Dimensions:</span>
                    <span className="font-medium text-[#191919]">{selectedProduct.dimensions.width} × {selectedProduct.dimensions.depth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">WebAR Format:</span>
                    <span className="font-mono text-[#966A38]">GLB / USDZ (1.8 MB)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Full Try-On Trigger & QR Modal */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('try_on_interaction', 'Demo Section - Try It in Your Space Clicked', {
                      productId: selectedProduct.id,
                    });
                    onOpenARModal(selectedProduct, 'simulator');
                  }}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#966A38] hover:bg-[#805628] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Launch Live AR / Camera</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    trackEvent('try_on_interaction', 'Demo Section - Scan QR Code Clicked', {
                      productId: selectedProduct.id,
                    });
                    onOpenARModal(selectedProduct, 'qr');
                  }}
                  className="w-full py-3 px-6 rounded-xl bg-white border border-[#191919]/12 hover:border-[#191919]/30 text-[#191919] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <QrCode className="w-4 h-4 text-[#966A38]" />
                  <span>Scan QR on Mobile Phone</span>
                </button>

                <p className="text-[11px] text-center text-[#737373]">
                  Clearly labeled <strong className="text-[#191919]">AR Demo</strong> for evaluation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
