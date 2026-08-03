'use client';

import { motion } from 'framer-motion';
import { Magnetic } from '@/components/shared/magnetic';
import { ArrowUpRight, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/constants/site';

const EASE = [0.22, 1, 0.36, 1] as const;

export function StudioInfo() {
    return (
        <section id="studio-map" className="relative w-full px-4 md:px-12 py-16 lg:py-32 mx-auto max-w-[1920px] scroll-mt-24">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.8, ease: EASE }}
                className="w-full bg-foreground/[0.03] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch"
            >
                {/* Left Column: Info */}
                <div className="w-full lg:w-[45%] flex flex-col pr-0 lg:pr-8 shrink-0 relative z-10">
                    <h2 className="text-5xl lg:text-[70px] xl:text-[85px] font-heading font-medium tracking-tight text-foreground leading-[1.05] mb-8">
                        Our Workspace
                    </h2>
                    <p className="text-[17px] lg:text-[19px] leading-[1.6] text-foreground/80 font-medium max-w-lg mb-12">
                        Located in the prime business hub of the city. Our workspace is designed to foster innovation, strategy, and seamless collaboration with our partners.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 mb-16">
                        {/* Address */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[14px] text-foreground/50 mb-2 tracking-tight">Office Address</p>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-foreground/60 shrink-0 mt-0.5" />
                                <div className="text-[16px] xl:text-[18px] text-foreground font-medium leading-[1.5]">
                                    <p className="font-bold mb-1 tracking-tight">RapSora Technologies</p>
                                    <p>Office No.1, 3rd Floor, 17/5</p>
                                    <p>Mall Rd, Roland Tower, Patkapur</p>
                                    <p>Kanpur, UP - 208001</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col gap-4">
                            <p className="text-[14px] text-foreground/50 mb-1 tracking-tight">Follow us</p>
                            <div className="flex gap-3 flex-wrap max-w-[200px]">
                                {[
                                    { name: 'LinkedIn', icon: Linkedin, color: 'hover:bg-[#0077b5] hover:text-white', link: siteConfig.socials?.linkedin || '#' },
                                    { name: 'Twitter', icon: Twitter, color: 'hover:bg-black hover:text-white', link: siteConfig.socials?.twitter || '#' },
                                    { name: 'Instagram', icon: Instagram, color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white', link: siteConfig.socials?.instagram || '#' },
                                    { name: 'Facebook', icon: Facebook, color: 'hover:bg-[#1877F2] hover:text-white', link: siteConfig.socials?.facebook || '#' },
                                ].map((social) => (
                                    <Magnetic key={social.name}>
                                        <a 
                                            href={social.link} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            title={social.name}
                                            data-cursor-ignore
                                            className={`w-11 h-11 rounded-full bg-primary/20 text-primary flex items-center justify-center transition-colors duration-300 ${social.color}`}
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </a>
                                    </Magnetic>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <Magnetic>
                            <a 
                                href="https://www.google.com/maps/dir/?api=1&destination=RapSora+Technologies+Pvt.+Ltd.+Kanpur" 
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-between h-[60px] pl-8 pr-2 w-[220px] rounded-full bg-foreground text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                            >
                                <span className="font-bold text-[15px]">Get directions</span>
                                <div className="w-12 h-12 rounded-full bg-background/10 text-background group-hover:bg-primary-foreground group-hover:text-primary flex items-center justify-center transition-colors shrink-0">
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                                </div>
                            </a>
                        </Magnetic>
                    </div>
                </div>

                {/* Right Column: Google Map */}
                <div className="w-full lg:flex-1 h-[400px] lg:h-auto min-h-[450px] overflow-hidden rounded-xl lg:rounded-2xl relative shadow-lg border border-foreground/10 self-stretch">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5537192844636!2d80.35601237400012!3d26.47011077897381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3900188ee45b%3A0xd81ca98e862c02e!2sRapSora%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1785700097040!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="w-full h-full rounded-xl lg:rounded-2xl absolute inset-0"
                    />
                </div>
            </motion.div>
        </section>
    );
}
