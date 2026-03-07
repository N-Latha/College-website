import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, BookOpen, Briefcase, ChevronRight, Library, Monitor, Activity, Home as HomeIcon, Bus } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const Home: React.FC = () => {
   return (
      <div className="bg-white text-secondary-900 font-sans selection:bg-primary-500 selection:text-white pb-0">
         
         {/* 3️⃣ Hero Banner */}
         <section className="relative h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-secondary-950/60 z-10" /> 
               <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
               >
                  <source src="/video.mp4" type="video/mp4" />
               </video>
            </div>
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col items-center max-w-4xl"
               >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl leading-tight">
                     WELCOME TO <br/> SRIT
                  </h1>
                  <p className="text-xl md:text-2xl text-primary-400 font-bold uppercase tracking-[0.2em] mb-12 drop-shadow-lg text-center max-w-3xl">
                     Srinivasa Ramanujan Institute of Technology
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <Link to="/departments" className="group relative px-8 py-4 bg-primary-500 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-xl hover:shadow-primary-500/50 flex items-center gap-3">
                        <span>Explore Departments</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                     <Link to="/admissions" className="group px-8 py-4 bg-white/10 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/20 transition-colors backdrop-blur-md flex items-center gap-3">
                        <span>Apply Now</span>
                     </Link>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* 4️⃣ Quick Info Section */}
         <section className="relative z-30 -mt-16 container mx-auto px-4 md:px-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
               {[
                  { icon: Users, end: 5000, suffix: "+", label: "Students" },
                  { icon: Award, end: 200, suffix: "+", label: "Faculty" },
                  { icon: BookOpen, end: 25, label: "Years of Excellence" },
                  { icon: Briefcase, end: 90, suffix: "%", label: "Placements" }
               ].map((item, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex flex-col items-center text-center px-4 w-full pt-6 md:pt-0 first:pt-0"
                  >
                     <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4">
                        <item.icon size={28} />
                     </div>
                     <AnimatedCounter 
                        end={item.end} 
                        suffix={item.suffix} 
                        className="text-4xl font-black text-secondary-900 mb-2 font-heading" 
                     />
                     <p className="text-secondary-500 font-bold uppercase tracking-wider text-xs">{item.label}</p>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* 5️⃣ About College Section */}
         <section className="py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-16">
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 space-y-8"
               >
                  <div className="flex items-center gap-4">
                     <span className="h-px w-12 bg-primary-500"></span>
                     <span className="text-primary-500 font-bold uppercase tracking-widest text-xs">Our Legacy</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter text-secondary-900 leading-none">
                     About <br className="hidden md:block"/> SRIT
                  </h2>
                  <p className="text-lg text-secondary-600 leading-relaxed font-light">
                     Srinivasa Ramanujan Institute of Technology (SRIT) brings innovation to life through quality education. Established in 2008, we have been challenging boundaries, ensuring our students excel on the global technology stage.
                  </p>
                  <p className="text-lg text-secondary-600 leading-relaxed font-light">
                     Our autonomous institution is more than a campus—it's an incubator for the next generation of thought leaders, complete with NAAC A+ and NBA accreditations.
                  </p>
                  <Link to="#about" className="inline-flex items-center gap-3 text-secondary-900 font-bold uppercase tracking-widest text-sm hover:text-primary-500 transition-colors group border-b-2 border-secondary-900 hover:border-primary-500 pb-1">
                     Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </motion.div>
               <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 relative"
               >
                  <div className="absolute -inset-4 bg-primary-500/10 transform rotate-3 rounded-3xl -z-10"></div>
                  <img 
                     src="/College.jpg" 
                     alt="SRIT Campus" 
                     className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/3]"
                  />
               </motion.div>
            </div>
         </section>

         {/* 5.5️⃣ Leadership Section */}
         <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-12">
               <div className="text-center mb-16">
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Guiding Light</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                     Leadership
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Chairperson */}
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-secondary-50 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                     <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 border-4 border-white shadow-md relative">
                        <img 
                           src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" 
                           alt="Chairperson" 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                     </div>
                     <span className="text-primary-500 font-bold uppercase tracking-widest text-xs block mb-2">Chairperson</span>
                     <h3 className="text-2xl font-black text-secondary-900 mb-4">Dr. Arthur Pendelton</h3>
                     <p className="text-secondary-600 text-sm leading-relaxed px-4">
                        "Education is not the learning of facts, but the training of the mind to think. At SRIT, we strive to build innovators for tomorrow."
                     </p>
                  </motion.div>

                  {/* Principal */}
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="bg-white p-8 rounded-3xl text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 group relative md:-mt-8 border border-gray-100 z-10"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-primary-500 rounded-b-xl"></div>
                     <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 border-4 border-primary-100 shadow-md mt-4 relative">
                        <img 
                           src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" 
                           alt="Principal" 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                     </div>
                     <span className="text-primary-500 font-bold uppercase tracking-widest text-xs block mb-2">Principal</span>
                     <h3 className="text-2xl font-black text-secondary-900 mb-4">Dr. Sarah Jenkins</h3>
                     <p className="text-secondary-600 text-sm leading-relaxed px-4">
                        "Committed to fostering an environment where academic rigor meets practical excellence. Together, we raise the bar for engineering education."
                     </p>
                  </motion.div>

                  {/* Vice Principal */}
                  <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="bg-secondary-50 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                     <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 border-4 border-white shadow-md relative">
                        <img 
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" 
                           alt="Vice Principal" 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                     </div>
                     <span className="text-primary-500 font-bold uppercase tracking-widest text-xs block mb-2">Vice Principal</span>
                     <h3 className="text-2xl font-black text-secondary-900 mb-4">Prof. Michael Chen</h3>
                     <p className="text-secondary-600 text-sm leading-relaxed px-4">
                        "Focusing on holistic student development, ensuring our graduates are not just industry-ready, but life-ready."
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* 6️⃣ Departments Section */}
         <section className="py-24 bg-secondary-50">
            <div className="container mx-auto px-4 md:px-12">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                     <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Academics</span>
                     <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight text-secondary-900">
                        Our Departments
                     </h2>
                  </div>
                  <Link to="/departments" className="flex items-center gap-2 text-primary-500 font-bold uppercase tracking-widest text-sm hover:text-secondary-900 transition-colors group">
                     View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { id: 'cse', code: 'CSE', name: 'Computer Science', desc: 'AI, Data Science, and Software Development programs focusing on tomorrow\'s technology.', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600', color: 'bg-blue-500' },
                     { id: 'ece', code: 'ECE', name: 'Electronics', desc: 'VLSI, Communications, and Embedded Systems fostering hardware innovation.', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600', color: 'bg-orange-500' },
                     { id: 'mech', code: 'MECH', name: 'Mechanical', desc: 'Advanced Robotics, Thermal Engineering, and Automotive Design.', img: 'https://images.unsplash.com/photo-1565063073994-0cf7fcd025ac?q=80&w=600', color: 'bg-slate-500' },
                     { id: 'civil', code: 'CIVIL', name: 'Civil Engineering', desc: 'Sustainable Infrastructure, Smart Cities, and Structural Engineering.', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600', color: 'bg-emerald-500' }
                  ].map((dept, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
                     >
                        <div className="h-48 w-full relative overflow-hidden">
                           <img 
                              src={dept.img} 
                              alt={dept.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                           <div className={`absolute top-4 right-4 ${dept.color} text-white px-3 py-1 rounded-full text-xs font-black shadow-lg`}>
                              {dept.code}
                           </div>
                           <h3 className="absolute bottom-4 left-6 text-2xl font-black text-white">{dept.name}</h3>
                        </div>
                        <div className="p-6 md:p-8 flex-grow flex flex-col">
                           <p className="text-secondary-600 text-sm leading-relaxed mb-8 flex-grow">
                              {dept.desc}
                           </p>
                           <Link to={`/departments`} className="inline-flex mt-auto items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-500 group-hover:text-secondary-900 transition-colors">
                              View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* 7️⃣ Facilities Section */}
         <section className="py-24">
            <div className="container mx-auto px-4 md:px-12 text-center">
               <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Infrastructure</span>
               <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900 mb-16">
                  Campus Facilities
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                     { name: "Library", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400" },
                     { name: "Computer Labs", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400" },
                     { name: "Sports Complex", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=400" },
                     { name: "Hostel", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=400" },
                     { name: "Transport", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400" }
                  ].map((facility, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
                     >
                        <div className="h-40 w-full relative overflow-hidden">
                           <img 
                              src={facility.img} 
                              alt={facility.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                           <div className="absolute inset-0 bg-primary-500/20 group-hover:bg-primary-500/0 transition-colors duration-300" />
                        </div>
                        <div className="p-4 flex flex-col items-center justify-center bg-white z-10">
                           <h4 className="font-bold text-secondary-900 uppercase tracking-wide text-sm">{facility.name}</h4>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* 7.5️⃣ Top Recruiters Marquee */}
         <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-12 mb-8 text-center">
               <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">Placements</span>
               <h3 className="text-3xl font-heading font-black uppercase tracking-tight text-secondary-900">
                  Our Top Recruiters
               </h3>
            </div>
            
            {/* Infinite Marquee Animation Container */}
            <div className="relative flex overflow-x-hidden group mt-12">
               {/* We create two identical blocks of logos to animate seamlessly seamlessly */}
               <div className="animate-marquee whitespace-nowrap flex items-center justify-around gap-16 md:gap-24 py-4 group-hover:[animation-play-state:paused] min-w-full">
                  {/* Repeated 1 */}
                  {[
                     { name: "TCS", src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
                     { name: "Infosys", src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
                     { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                     { name: "wipro", src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
                     { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                     { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
                     { name: "Cognizant", src: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
                     { name: "Accenture", src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_201x_logo.svg" },
                     { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
                  ].map((company, i) => (
                     <img 
                        key={`1-${i}`} 
                        src={company.src} 
                        alt={company.name} 
                        className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 shrink-0"
                     />
                  ))}
               </div>
               
               <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center justify-around gap-16 md:gap-24 py-4 group-hover:[animation-play-state:paused] min-w-full">
                  {/* Repeated 2 */}
                  {[
                     { name: "TCS", src: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
                     { name: "Infosys", src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
                     { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
                     { name: "wipro", src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
                     { name: "Amazon", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
                     { name: "Microsoft", src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
                     { name: "Cognizant", src: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
                     { name: "Accenture", src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_201x_logo.svg" },
                     { name: "IBM", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
                  ].map((company, i) => (
                     <img 
                        key={`2-${i}`} 
                        src={company.src} 
                        alt={company.name} 
                        className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 shrink-0"
                     />
                  ))}
               </div>
               
               {/* Fade Gradients for smooth entrance/exit */}
               <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
               <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
         </section>

         {/* 7.75️⃣ Student Testimonials Section */}
         <section className="py-24 bg-secondary-50">
            <div className="container mx-auto px-4 md:px-12">
               <div className="text-center mb-16">
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Voices of SRIT</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                     Student Testimonials
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative group"
                  >
                     <div className="text-primary-200 absolute top-6 right-8 text-7xl font-serif leading-none group-hover:text-primary-500 transition-colors duration-500">
                        "
                     </div>
                     <p className="text-xl text-secondary-700 italic font-medium leading-relaxed mb-8 relative z-10">
                        "SRIT helped me gain strong technical skills."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold text-lg">
                           S
                        </div>
                        <div>
                           <h4 className="font-bold text-secondary-900">CSE Student</h4>
                           <span className="text-xs text-secondary-500 uppercase tracking-wider font-bold">Class of 2026</span>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative group"
                  >
                     <div className="text-primary-200 absolute top-6 right-8 text-7xl font-serif leading-none group-hover:text-primary-500 transition-colors duration-500">
                        "
                     </div>
                     <p className="text-xl text-secondary-700 italic font-medium leading-relaxed mb-8 relative z-10">
                        "Excellent faculty and placement support."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold text-lg">
                           E
                        </div>
                        <div>
                           <h4 className="font-bold text-secondary-900">ECE Student</h4>
                           <span className="text-xs text-secondary-500 uppercase tracking-wider font-bold">Class of 2025</span>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* 8️⃣ Events / News Section */}
         <section className="py-24 bg-gradient-to-b from-secondary-900 to-secondary-950 text-white">
            <div className="container mx-auto px-4 md:px-12">
               <div className="text-center mb-16">
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Stay Updated</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
                     Latest News
                  </h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {[
                     { title: "National Level Hackathon", date: "Oct 15, 2026", category: "Competition" },
                     { title: "Technical Symposium", date: "Oct 22, 2026", category: "Event" },
                     { title: "Campus Placement Drive", date: "Nov 05, 2026", category: "Placements" },
                     { title: "Cultural Fest", date: "Nov 18, 2026", category: "Campus Life" }
                  ].map((news, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-6 group"
                     >
                        <div className="w-4 h-4 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></div>
                        <div>
                           <div className="text-xs text-secondary-400 font-bold uppercase tracking-widest mb-1">{news.category} • {news.date}</div>
                           <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{news.title}</h4>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* 9️⃣ Gallery Section */}
         <section className="py-24">
            <div className="container mx-auto px-4 md:px-12">
               <div className="text-center mb-16">
                  <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Discover</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                     Campus Gallery
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                     "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800", // Campus
                     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", // Labs
                     "https://images.unsplash.com/photo-1523580494112-071ddce58c9d?q=80&w=800", // Events
                     "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", // Students
                     "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800", // Library
                     "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"  // Meeting
                  ].map((img, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative overflow-hidden group rounded-xl aspect-[4/3] bg-secondary-100"
                     >
                        <img 
                           src={img} 
                           alt="Gallery image" 
                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/30 transition-colors duration-300"></div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

      </div>
   );
};

export default Home;
