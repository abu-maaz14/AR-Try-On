import React, { useState, useRef, useEffect } from 'react';
import { ProductSample } from '../types';
import { trackEvent } from '../utils/analytics';
import { 
  X, 
  QrCode, 
  Smartphone, 
  Maximize2, 
  RotateCw, 
  Sun, 
  Moon, 
  Ruler, 
  Camera, 
  Check, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ARModalProps {
  product: ProductSample | null;
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'qr' | 'simulator';
}

export const ARModal: React.FC<ARModalProps> = ({
  product,
  isOpen,
  onClose,
  initialMode = 'qr',
}) => {
  const [activeTab, setActiveTab] = useState<'qr' | 'simulator'>(initialMode);
  const [backgroundType, setBackgroundType] = useState<'room1' | 'room2' | 'camera'>('room1');
  const [rotation, setRotation] = useState<number>(15);
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showDimensions, setShowDimensions] = useState<boolean>(true);
  const [lighting, setLighting] = useState<'day' | 'warm'>('day');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [captured, setCaptured] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    setActiveTab(initialMode);
  }, [initialMode, isOpen]);

  useEffect(() => {
    if (isOpen && product) {
      trackEvent('try_on_interaction', `Opened Try-On for ${product.name}`, {
        productId: product.id,
        initialMode,
      });
    }
  }, [isOpen, product, initialMode]);

  // Clean up camera stream on unmount or tab switch
  useEffect(() => {
    let stream: MediaStream | null = null;

    if (activeTab === 'simulator' && backgroundType === 'camera') {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: { facingMode: 'environment' } })
          .then((s) => {
            stream = s;
            if (videoRef.current) {
              videoRef.current.srcObject = s;
              videoRef.current.play().catch(() => {});
            }
            setCameraActive(true);
            setCameraError(null);
            trackEvent('camera_permission_granted', 'Camera enabled for AR Try-On');
          })
          .catch((err) => {
            console.warn('Camera access error:', err);
            setCameraError('Camera access not granted or unavailable on this device. Using high-resolution room backdrop.');
            setBackgroundType('room1');
            setCameraActive(false);
          });
      } else {
        setCameraError('Camera not supported by browser. Using simulated room.');
        setBackgroundType('room1');
      }
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const s = videoRef.current.srcObject as MediaStream;
        s.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      setCameraActive(false);
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (videoRef.current && videoRef.current.srcObject) {
        const s = videoRef.current.srcObject as MediaStream;
        s.getTracks().forEach((track) => track.stop());
      }
    };
  }, [activeTab, backgroundType]);

  if (!isOpen || !product) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleCaptureSnapshot = () => {
    setCaptured(true);
    trackEvent('try_on_interaction', 'Captured AR Placement Snapshot', { productId: product.id });
    setTimeout(() => setCaptured(false), 2400);
  };

  // QR Code URL target: current app URL with anchor or simulated try-on
  const qrTargetUrl = typeof window !== 'undefined' ? `${window.location.origin}/#try-on-demo` : 'https://innovifyxr.com';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#141413]/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#191919]/10 rounded-2xl shadow-2xl overflow-hidden text-[#191919] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#191919]/08 bg-[#FBFBF9]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#966A38] animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-[#191919] tracking-tight">
                  {product.name}
                </h3>
                <span className="text-xs text-[#966A38] font-medium tracking-wide uppercase">
                  · AR Demo
                </span>
              </div>
              <p className="text-xs text-[#737373]">
                {product.price} · {product.material}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 bg-[#EAE8E3] rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('qr');
                  trackEvent('try_on_interaction', 'Switched to QR Mode');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'qr'
                    ? 'bg-white text-[#191919] shadow-xs'
                    : 'text-[#5A5A58] hover:text-[#191919]'
                }`}
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Scan for Phone</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('simulator');
                  trackEvent('try_on_interaction', 'Switched to 3D Simulator Mode');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'simulator'
                    ? 'bg-white text-[#191919] shadow-xs'
                    : 'text-[#5A5A58] hover:text-[#191919]'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Space Simulator</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#737373] hover:text-[#191919] hover:bg-[#F0EEEA] rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 flex-1">
          {activeTab === 'qr' ? (
            /* QR Code Scan Experience (Desktop -> Phone Flow) */
            <div className="grid md:grid-cols-2 gap-8 items-center py-2">
              <div className="flex flex-col items-center justify-center p-6 bg-[#FBFBF9] border border-[#191919]/08 rounded-xl text-center">
                <div className="relative p-5 bg-white rounded-xl shadow-xs border border-[#191919]/06 mb-4">
                  {/* Clean SVG QR code representation */}
                  <svg className="w-48 h-48 sm:w-56 sm:h-56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="white" />
                    {/* Corner Position Targets */}
                    <rect x="8" y="8" width="24" height="24" rx="3" stroke="#191919" strokeWidth="4" />
                    <rect x="14" y="14" width="12" height="12" fill="#966A38" />
                    <rect x="68" y="8" width="24" height="24" rx="3" stroke="#191919" strokeWidth="4" />
                    <rect x="74" y="14" width="12" height="12" fill="#966A38" />
                    <rect x="8" y="68" width="24" height="24" rx="3" stroke="#191919" strokeWidth="4" />
                    <rect x="14" y="74" width="12" height="12" fill="#966A38" />

                    {/* QR Matrix Elements */}
                    <rect x="38" y="10" width="5" height="5" fill="#191919" />
                    <rect x="48" y="10" width="5" height="5" fill="#191919" />
                    <rect x="58" y="10" width="5" height="5" fill="#191919" />
                    <rect x="38" y="20" width="10" height="5" fill="#191919" />
                    <rect x="53" y="20" width="5" height="10" fill="#191919" />
                    <rect x="10" y="38" width="5" height="10" fill="#191919" />
                    <rect x="20" y="42" width="10" height="5" fill="#191919" />
                    <rect x="38" y="38" width="8" height="8" rx="2" fill="#966A38" />
                    <rect x="50" y="38" width="5" height="5" fill="#191919" />
                    <rect x="62" y="38" width="10" height="5" fill="#191919" />
                    <rect x="78" y="38" width="12" height="5" fill="#191919" />
                    <rect x="38" y="52" width="5" height="12" fill="#191919" />
                    <rect x="48" y="52" width="14" height="5" fill="#191919" />
                    <rect x="68" y="48" width="5" height="15" fill="#191919" />
                    <rect x="80" y="52" width="8" height="8" fill="#191919" />
                    <rect x="38" y="70" width="10" height="5" fill="#191919" />
                    <rect x="54" y="70" width="5" height="12" fill="#191919" />
                    <rect x="65" y="72" width="14" height="6" fill="#191919" />
                    <rect x="42" y="82" width="8" height="6" fill="#191919" />
                    <rect x="82" y="80" width="8" height="8" fill="#966A38" />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-[#191919]/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold tracking-tighter text-[#966A38]">XR</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#191919] mb-1">
                  <Smartphone className="w-4 h-4 text-[#966A38]" />
                  <span>Scan with any smartphone camera</span>
                </div>
                <p className="text-xs text-[#737373] max-w-xs">
                  No app download required. Instant WebAR launches directly in Safari or Chrome.
                </p>

                <div className="mt-4 pt-4 border-t border-[#191919]/08 w-full flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('simulator');
                      trackEvent('try_on_interaction', 'Launched simulator from QR card');
                    }}
                    className="text-xs font-semibold text-[#966A38] hover:text-[#805628] flex items-center gap-1 transition-colors"
                  >
                    <span>Or preview simulator directly on laptop</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Step by step explanation of Desktop -> Mobile */}
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-semibold text-[#966A38] tracking-widest uppercase">
                    Cross-Device Handoff
                  </span>
                  <h4 className="text-2xl font-serif text-[#191919] mt-1 mb-2">
                    Experience It in Real Dimensions
                  </h4>
                  <p className="text-sm text-[#5A5A58] leading-relaxed">
                    When customers browse on a laptop or desktop, Innovify XR provides a dynamic,
                    product-specific QR code. Scanning it with an iPhone or Android launches WebAR instantly
                    without requiring an app install.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFBF9] border border-[#191919]/05">
                    <div className="w-7 h-7 rounded-full bg-[#191919] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-[#191919]">Open Camera &amp; Scan</h5>
                      <p className="text-xs text-[#737373] mt-0.5">
                        Point phone camera at the code. A native notification banner appears.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFBF9] border border-[#191919]/05">
                    <div className="w-7 h-7 rounded-full bg-[#966A38] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-[#191919]">Surface Detection</h5>
                      <p className="text-xs text-[#737373] mt-0.5">
                        The phone detects floor plane and lighting to scale the 3D model to exact 1:1 metric size.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFBF9] border border-[#191919]/05">
                    <div className="w-7 h-7 rounded-full bg-[#191919] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-[#191919]">Inspect &amp; Decide</h5>
                      <p className="text-xs text-[#737373] mt-0.5">
                        Walk around, check clearance against doorways, and confirm texture before buying.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-[#737373] border-t border-[#191919]/08">
                  <span>Product SKU: <strong className="text-[#191919]">{product.id.toUpperCase()}</strong></span>
                  <span className="text-[#966A38] font-medium">Powered by Innovify XR</span>
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Space Simulator View */
            <div className="flex flex-col gap-4">
              {/* Simulator Canvas Viewport */}
              <div 
                className="relative w-full h-[400px] sm:h-[460px] rounded-xl overflow-hidden border border-[#191919]/10 select-none bg-neutral-900 shadow-inner"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* Background Layer: Real Camera or Curated Architectural Rooms */}
                {backgroundType === 'camera' ? (
                  <div className="absolute inset-0 bg-black">
                    <video
                      ref={videoRef}
                      playsInline
                      muted
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                    {!cameraActive && (
                      <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white bg-black/70">
                        <div>
                          <Camera className="w-8 h-8 mx-auto mb-2 text-[#966A38] animate-bounce" />
                          <p className="text-sm font-medium">Requesting camera access...</p>
                          <p className="text-xs text-white/60 mt-1 max-w-sm">
                            Allow camera access to view this product right in your current room.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : backgroundType === 'room1' ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: `url('/src/assets/images/hero_ar_room_placement_1791173807983.jpg')`,
                      filter: lighting === 'warm' ? 'sepia(0.2) brightness(0.95)' : 'none'
                    }}
                  />
                ) : (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: `url('/src/assets/images/laptop_desktop_ar_flow_1791173842897.jpg')`,
                      filter: lighting === 'warm' ? 'sepia(0.25) brightness(0.9)' : 'none'
                    }}
                  />
                )}

                {/* AR Surface Tracking Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-40" />

                {/* AR Floor Reticle Ring */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full border border-[#966A38]/50 border-dashed animate-pulse pointer-events-none flex items-center justify-center">
                  <span className="text-[10px] tracking-wider font-mono text-white/80 bg-black/40 px-2 py-0.5 rounded">
                    SURFACE DETECTED · 100% SCALE
                  </span>
                </div>

                {/* 3D Product Mockup Container (Interactive Drag & Rotate) */}
                <div
                  className="absolute cursor-grab active:cursor-grabbing transition-transform duration-75"
                  style={{
                    left: `calc(50% + ${position.x}px)`,
                    bottom: `calc(18% - ${position.y}px)`,
                    transform: `translateX(-50%) scale(${scale})`,
                  }}
                >
                  <div 
                    className="relative group"
                    style={{
                      transform: `perspective(1000px) rotateY(${rotation}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.15s ease-out',
                    }}
                  >
                    {/* Contact Ground Shadow */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/45 rounded-full blur-md" />

                    {/* Product Graphic */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-56 sm:w-72 max-h-72 object-contain drop-shadow-2xl pointer-events-none"
                    />

                    {/* Dimension Calipers Tooltip */}
                    {showDimensions && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[11px] px-3 py-1 rounded-md backdrop-blur-md whitespace-nowrap shadow-lg flex items-center gap-2 border border-white/10">
                        <Ruler className="w-3 h-3 text-[#966A38]" />
                        <span>{product.dimensions.width} (W) × {product.dimensions.depth} (D) × {product.dimensions.height} (H)</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Captured Flash Notification */}
                {captured && (
                  <div className="absolute inset-0 bg-white/90 flex items-center justify-center transition-all animate-fade-in z-20">
                    <div className="text-center p-4 bg-white shadow-xl rounded-xl border border-[#191919]/10">
                      <Check className="w-8 h-8 text-emerald-600 mx-auto mb-1" />
                      <p className="text-sm font-semibold text-[#191919]">AR Snapshot Saved</p>
                      <p className="text-xs text-[#737373]">Simulated capture downloaded to device photos.</p>
                    </div>
                  </div>
                )}

                {/* Top Viewport Controls */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                  {/* Environment Switcher */}
                  <div className="flex items-center gap-1 p-1 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs">
                    <button
                      type="button"
                      onClick={() => setBackgroundType('room1')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        backgroundType === 'room1' ? 'bg-white/25 text-white font-medium' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      Sunlit Living Room
                    </button>
                    <button
                      type="button"
                      onClick={() => setBackgroundType('room2')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        backgroundType === 'room2' ? 'bg-white/25 text-white font-medium' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      Minimal Studio
                    </button>
                    <button
                      type="button"
                      onClick={() => setBackgroundType('camera')}
                      className={`px-2.5 py-1 rounded flex items-center gap-1 transition-colors ${
                        backgroundType === 'camera' ? 'bg-[#966A38] text-white font-medium' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <Camera className="w-3 h-3" />
                      <span>Live Camera</span>
                    </button>
                  </div>

                  {/* Dimension & Lighting Toggles */}
                  <div className="flex items-center gap-1 p-1 bg-black/60 backdrop-blur-md rounded-lg text-white">
                    <button
                      type="button"
                      onClick={() => {
                        setShowDimensions(!showDimensions);
                        trackEvent('dimension_toggle', `Dimensions ${!showDimensions ? 'ON' : 'OFF'}`);
                      }}
                      className={`p-1.5 rounded transition-colors ${
                        showDimensions ? 'bg-white/25 text-white' : 'text-white/60 hover:text-white'
                      }`}
                      title="Toggle Dimension Calipers"
                    >
                      <Ruler className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setLighting(lighting === 'day' ? 'warm' : 'day')}
                      className="p-1.5 rounded text-white/80 hover:text-white transition-colors"
                      title="Toggle Ambient Lighting"
                    >
                      {lighting === 'day' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-amber-200" />}
                    </button>

                    <button
                      type="button"
                      onClick={handleCaptureSnapshot}
                      className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                      title="Take Snapshot"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom Viewport Hint */}
                <div className="absolute bottom-3 left-3 text-white/70 text-[11px] bg-black/60 backdrop-blur-md px-3 py-1 rounded-md pointer-events-none">
                  Drag to move · Use sliders below to rotate &amp; scale
                </div>
              </div>

              {cameraError && (
                <div className="text-xs text-amber-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  {cameraError}
                </div>
              )}

              {/* Fine Controls Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#FBFBF9] rounded-xl border border-[#191919]/08">
                {/* 360 Rotation Slider */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#191919]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <RotateCw className="w-3.5 h-3.5 text-[#966A38]" />
                      Rotate 360°
                    </span>
                    <span className="font-mono text-[#737373]">{rotation}°</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={rotation}
                    onChange={(e) => setRotation(Number(e.target.value))}
                    className="w-full accent-[#966A38] cursor-pointer h-1.5 bg-[#EAE8E3] rounded-lg"
                  />
                </div>

                {/* Scale Slider */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-[#191919]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Maximize2 className="w-3.5 h-3.5 text-[#966A38]" />
                      Metric Scale
                    </span>
                    <span className="font-mono text-[#737373]">{Math.round(scale * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.6"
                    max="1.5"
                    step="0.05"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="w-full accent-[#966A38] cursor-pointer h-1.5 bg-[#EAE8E3] rounded-lg"
                  />
                </div>
              </div>

              {/* Bottom Info Banner */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373] pt-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Interactive WebAR Simulation · Powered by Innovify XR</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('qr');
                    trackEvent('try_on_interaction', 'Switched to QR from bottom bar');
                  }}
                  className="text-[#966A38] hover:underline font-medium"
                >
                  Send to iPhone / Android via QR Code →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
