import React from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#fbf9f5] border-t border-[#e6dcce] text-[#14261b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#c59e47]" />
              <span className="w-2 h-2 rotate-45 bg-[#c59e47]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#9b7528] uppercase">
                Kroonstad, Free State
              </span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#12281b] mb-6 leading-tight">
              COMMITTED TO THE LIVESTOCK INDUSTRY & THE SOUTH AFRICAN FARMER
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                At <strong className="text-[#14261b]">Van Wyk Krippe</strong>, we know that farming in South Africa is not for the faint of heart. From blistering Karoo droughts to freezing Free State winter nights, equipment must endure relentless environmental conditions and heavy herd pressure.
              </p>
              <p>
                We established our workshop at <em>No. 32 9de Weg, Industria, Kroonstad</em> with an uncompromising vision: to design and build livestock feeding and water troughs that never need premature replacement. We eliminate the frustration of brittle plastics, flimsy thin-gauge frames, and hazardous sharp edges.
              </p>
              <p className="italic text-neutral-800 border-l-2 border-[#c59e47] pl-4 my-4 font-script text-lg text-[#9b7528]">
                &ldquo;Strong. Practical. Reliable. Made for livestock, built for the people who work the land.&rdquo;
              </p>
            </div>

            {/* Credibility Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-neutral-200">
                <ShieldCheck className="w-5 h-5 text-[#9b7528] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#14261b]">
                    Heavy-Duty Welds
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Continuous robotic and artisan structural welding built to withstand headbutts and crowding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-neutral-200">
                <HeartHandshake className="w-5 h-5 text-[#9b7528] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#14261b]">
                    Direct Personal Service
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Speak directly with Frans or Steven on the phone or WhatsApp for prompt advice and quotes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Workshop & Depot Location Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#122419] text-white rounded-2xl p-8 border-2 border-[#c59e47]/60 shadow-2xl relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rotate-45 bg-[#c59e47]" />
                <span className="font-cinzel text-xs uppercase tracking-widest text-[#f3dc98]">
                  Headquarters & Depot
                </span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold mb-4">
                VAN WYK KRIPPE WORKSHOP
              </h3>

              <div className="space-y-4 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e8ca6b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Depot Physical Address:</strong>
                    <span>No. 32 9de Weg, Industria</span>
                    <span className="block">Kroonstad, Free State, 9499, South Africa</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#e8ca6b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Line:</strong>
                    <a href="tel:0783644383" className="text-[#f3dc98] hover:underline font-semibold block">
                      Frans van Wyk: 078 364 4383
                    </a>
                    <a href="tel:0810883945" className="text-[#f3dc98] hover:underline font-semibold block">
                      Steven: 081 088 3945
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#e8ca6b] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Official Email:</strong>
                    <a href="mailto:admin@vanwykkrippe.co.za" className="text-[#f3dc98] hover:underline">
                      admin@vanwykkrippe.co.za
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#c59e47]/30">
                <div className="text-xs text-neutral-400 mb-2">
                  Operating Hours for Collections & Transport Pickups:
                </div>
                <div className="text-xs font-semibold text-neutral-200">
                  Monday – Friday: 07:30 – 17:00 <br />
                  Saturday: By Farm Appointment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
