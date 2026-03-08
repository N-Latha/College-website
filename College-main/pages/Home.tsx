import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, BookOpen, Briefcase, ChevronRight, Library, Monitor, Activity, Home as HomeIcon, Bus } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

const Home: React.FC = () => {
   return (
      <div className="bg-white text-secondary-900 font-sans selection:bg-primary-500 selection:text-white pb-0 antialiased">
         
         {/* Hero Banner */}
         <section className="relative h-[90vh] min-h-[500px] w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/50 via-secondary-950/60 to-secondary-950/80 z-10" /> 
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
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                     <Link to="/departments" className="group relative px-8 py-4 bg-primary-500 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3">
                        <span>Explore Departments</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                     </Link>
                     <Link to="/admissions" className="group px-8 py-4 bg-white/10 border-2 border-white/40 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-secondary-900 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
                        <span>Apply Now</span>
                     </Link>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Institutional Highlights & Rankings */}
         <section className="relative z-30 pt-20 md:pt-28 pb-8 container mx-auto px-4 md:px-12">
            <div className="max-w-3xl mx-auto mb-10 text-center">
               <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.25em] text-[11px] mb-5">
                  Recognitions &amp; Key Statistics
               </span>
               <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tight text-secondary-900 mb-5 leading-tight">
                  Trusted Autonomous B.Tech Institution
               </h2>
               <p className="text-secondary-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  NAAC A+ and NBA accredited programs with a strong focus on student-centric learning,
                  outcome-based education, and industry collaboration. Our graduates consistently secure
                  placements in top product and service companies.
               </p>
            </div>
            <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 md:p-12 border border-gray-100/80 space-y-6 max-w-5xl mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
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
                        className="flex flex-col items-center text-center px-4 w-full pt-6 md:pt-0 first:pt-0 group cursor-default"
                     >
                        <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-2xl flex items-center justify-center mb-4">
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

               <div className="pt-6 md:pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-secondary-500">
                     Quick Access
                  </h3>
                  <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm font-semibold">
                     {[
                        { label: 'ERP Portal', href: '#' },
                        { label: 'Exam Results', href: '#' },
                        { label: 'Fee Payment', href: '#' },
                        { label: 'Digital Library', href: '#' }
                     ].map((item) => (
                        <Link
                           key={item.label}
                           to={item.href}
                           className="px-5 py-2.5 rounded-full bg-secondary-50 hover:bg-primary-500 hover:text-white transition-all duration-300 border border-gray-200/80 hover:border-primary-500 hover:shadow-md"
                        >
                           {item.label}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* About College Section */}
         <section id="about" className="py-24 md:py-32 bg-secondary-50/50">
            <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-16 max-w-7xl">
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
                  <p className="text-lg text-secondary-600 leading-relaxed font-light max-w-xl">
                     Srinivasa Ramanujan Institute of Technology (SRIT) brings innovation to life through quality education. Established in 2008, we have been challenging boundaries, ensuring our students excel on the global technology stage.
                  </p>
                  <p className="text-lg text-secondary-600 leading-relaxed font-light max-w-xl">
                     Our autonomous institution is more than a campus—it's an incubator for the next generation of thought leaders, complete with NAAC A+ and NBA accreditations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-secondary-700">
                     <div>
                        <h3 className="font-bold uppercase tracking-widest text-xs text-primary-500 mb-2">
                           Mission
                        </h3>
                        <p className="leading-relaxed">
                           To impart value-based technical education, nurture innovation and research,
                           and produce socially responsible engineers for a sustainable world.
                        </p>
                     </div>
                     <div>
                        <h3 className="font-bold uppercase tracking-widest text-xs text-primary-500 mb-2">
                           Vision
                        </h3>
                        <p className="leading-relaxed">
                           To be a preferred institute of engineering that transforms learners into global
                           professionals and entrepreneurs.
                        </p>
                     </div>
                  </div>
                  <Link to="#about" className="inline-flex items-center gap-3 text-secondary-900 font-bold uppercase tracking-widest text-sm hover:text-primary-500 transition-all duration-300 group border-b-2 border-secondary-900 hover:border-primary-500 pb-1">
                     Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </motion.div>
               <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 relative"
               >
                  <div className="absolute -inset-4 bg-primary-500/5 transform rotate-2 rounded-3xl -z-10"></div>
                  <img 
                     src="/College.jpg" 
                     alt="SRIT Campus" 
                     className="w-full h-auto rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] object-cover aspect-[4/3]"
                  />
               </motion.div>
            </div>
         </section>

         {/* Leadership Section */}
         <section className="py-24 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-12 max-w-6xl">
               <div className="text-center mb-16">
                  <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                     Our Guiding Light
                  </span>
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
                     className="bg-white p-8 rounded-3xl text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] border border-gray-100/80 transition-all duration-300 group"
                  >
                     <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-8 border-4 border-white shadow-lg relative">
                        <img 
                           src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" 
                           alt="Chairperson" 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                     className="bg-white p-8 rounded-3xl text-center shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 group relative md:-mt-4 border border-gray-100/80 z-10"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-primary-500 rounded-b-lg"></div>
                     <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-8 border-4 border-primary-100 shadow-lg mt-4 relative">
                        <img 
                           src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" 
                           alt="Principal" 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                     className="bg-white p-8 rounded-3xl text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] border border-gray-100/80 transition-all duration-300 group"
                  >
                     <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-8 border-4 border-white shadow-lg relative">
                        <img 
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" 
                           alt="Vice Principal" 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

         {/* Departments & Academics Section */}
         <section id="academics" className="py-24 md:py-28 bg-secondary-50/70">
            <div className="container mx-auto px-4 md:px-12 max-w-7xl">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                     <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                        Academics
                     </span>
                     <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight text-secondary-900">
                        Our Departments
                     </h2>
                     <p className="mt-4 text-secondary-600 text-sm max-w-xl">
                        Explore our B.Tech curriculum, academic regulations, and semester-wise syllabi
                        designed in line with the latest industry needs.
                     </p>
                     <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
                        <a
                           href="#"
                           className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 shadow-sm"
                        >
                           Academic Calendar
                        </a>
                        <a
                           href="#"
                           className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 shadow-sm"
                        >
                           Curriculum &amp; Regulations
                        </a>
                        <a
                           href="https://liet.in/blog/btech-syllabus-subjects.html"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 shadow-sm"
                        >
                           Syllabus
                        </a>
                        <a
                           href="#"
                           className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 shadow-sm"
                        >
                           Academic Council
                        </a>
                     </div>
                  </div>
                  <Link to="/departments" className="flex items-center gap-2 text-primary-500 font-bold uppercase tracking-widest text-sm hover:text-secondary-900 transition-all duration-300 group">
                     View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     { id: 'cse', code: 'CSE', name: 'Computer Science', desc: 'AI, Data Science, and Software Development programs focusing on tomorrow\'s technology.', img: 'https://images.unsplash.com/photo-1526378722484-cc5c51074c23?q=80&w=900', color: 'bg-blue-500' },
                     { id: 'ece', code: 'ECE', name: 'Electronics', desc: 'VLSI, Communications, and Embedded Systems fostering hardware innovation.', img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=900', color: 'bg-orange-500' },
                     { id: 'mech', code: 'MECH', name: 'Mechanical', desc: 'Advanced Robotics, Thermal Engineering, and Automotive Design.', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=900', color: 'bg-slate-500' },
                     { id: 'civil', code: 'CIVIL', name: 'Civil Engineering', desc: 'Sustainable Infrastructure, Smart Cities, and Structural Engineering.', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900', color: 'bg-emerald-500' }
                  ].map((dept, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100/80 overflow-hidden flex flex-col h-full"
                     >
                        <div className="h-48 w-full relative overflow-hidden rounded-t-2xl">
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
                           <Link to={`/departments`} className="inline-flex mt-auto items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-500 group-hover:text-secondary-900 transition-all duration-300">
                              View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Research & Placements Overview */}
         <section id="research-placement" className="py-24 md:py-28 bg-gradient-to-b from-secondary-900 via-secondary-950 to-secondary-950 text-white">
            <div className="container mx-auto px-4 md:px-12">
               <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
                  <div className="max-w-xl">
                     <span className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-4 block">
                        Research &amp; Innovation
                     </span>
                     <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight mb-4">
                        Research &amp; Placements
                     </h2>
                     <p className="text-secondary-200 text-sm md:text-base leading-relaxed">
                        Dedicated R&amp;D centers, industry-sponsored labs, and funded projects encourage students
                        to work on real-world problems, while a proactive placement cell ensures excellent
                        campus recruitment records.
                     </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:max-w-xl">
                     {[
                        { title: 'Funded Projects', desc: 'Collaborations with government and industry agencies for cutting-edge research.' },
                        { title: 'Patents & Publications', desc: 'Faculty and students regularly publish in reputed conferences and journals.' },
                        { title: 'Training & Internships', desc: 'Pre-placement trainings and internships with leading companies.' },
                        { title: 'Placement Support', desc: '360° career guidance, mock interviews, and alumni mentoring.' }
                     ].map((item) => (
                        <div key={item.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                           <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">
                              {item.title}
                           </h3>
                           <p className="text-secondary-200 text-xs md:text-sm leading-relaxed">
                              {item.desc}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="flex flex-wrap items-center justify-between gap-6">
                  <div className="flex gap-8">
                     <div>
                        <span className="text-xs uppercase tracking-widest text-secondary-300 font-bold">
                           Highest Package
                        </span>
                        <p className="text-2xl md:text-3xl font-heading font-black text-primary-400">
                           25 LPA
                        </p>
                     </div>
                     <div>
                        <span className="text-xs uppercase tracking-widest text-secondary-300 font-bold">
                           Average Package
                        </span>
                        <p className="text-2xl md:text-3xl font-heading font-black text-white">
                           6.5 LPA
                        </p>
                     </div>
                  </div>
                  <Link
                     to="/placements"
                     className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-white hover:text-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                     View Placement Cell <ArrowRight size={16} />
                  </Link>
               </div>
            </div>
         </section>

         {/* Campus Life & Facilities Section */}
         <section id="campus-life" className="py-24 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-12 text-center max-w-7xl">
               <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                  Infrastructure
               </span>
               <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900 mb-16">
                  Campus Life &amp; Facilities
               </h2>
               <p className="max-w-3xl mx-auto mb-12 text-secondary-600 text-sm md:text-base leading-relaxed">
                  A vibrant residential campus with state-of-the-art laboratories, modern learning spaces,
                  hostels, transport, and sports facilities, complemented by active student clubs, forums,
                  and NSS/NCC units.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {[
                     { name: "Library", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800" },
                     { name: "Computer Labs", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800" },
                     { name: "Sports Complex", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800" },
                     { name: "Hostel", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800" },
                     { name: "Transport", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" }
                  ].map((facility, i) => (
                     <motion.div 
                        key={i}
                        whileHover={{ y: -8 }}
                        className="bg-white border border-gray-100/80 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col overflow-hidden"
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

         {/* Top Recruiters Marquee */}
         <section className="py-20 md:py-24 bg-secondary-50/70 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 mb-10 text-center">
               <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.2em] text-[11px] mb-3">
                  Placements
               </span>
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
               <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-secondary-50 to-transparent pointer-events-none z-10"></div>
               <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-secondary-50 to-transparent pointer-events-none z-10"></div>
            </div>
         </section>

         {/* Student Testimonials Section */}
         <section className="py-24 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-12 max-w-6xl">
               <div className="text-center mb-16">
                  <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                     Voices of SRIT
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                     Student Testimonials
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[
                     { quote: "SRIT helped me gain strong technical skills and land my dream job at a product company.", name: "Rahul Sharma", dept: "CSE", batch: "Class of 2026", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" },
                     { quote: "Excellent faculty and placement support. The labs and curriculum are industry-relevant.", name: "Priya Reddy", dept: "ECE", batch: "Class of 2025", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200" },
                     { quote: "The campus culture and research opportunities shaped my engineering journey.", name: "Arjun Patel", dept: "Mechanical", batch: "Class of 2025", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200" }
                  ].map((student, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100/80 transition-all duration-300 relative group"
                     >
                        <div className="text-primary-200 absolute top-6 right-6 text-6xl font-serif leading-none group-hover:text-primary-500 transition-colors duration-500">
                           "
                        </div>
                        <p className="text-lg text-secondary-700 italic font-medium leading-relaxed mb-6 relative z-10">
                           "{student.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-100 shadow-md">
                              <img 
                                 src={student.img} 
                                 alt={student.name} 
                                 className="w-full h-full object-cover"
                              />
                           </div>
                           <div>
                              <h4 className="font-bold text-secondary-900">{student.name}</h4>
                              <span className="text-xs text-secondary-500 uppercase tracking-wider font-bold">{student.dept} • {student.batch}</span>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* News, Events & Exam Corner */}
         <section id="news-events" className="py-24 md:py-28 bg-gradient-to-b from-secondary-900 via-secondary-950 to-secondary-950 text-white">
            <div className="container mx-auto px-4 md:px-12 max-w-6xl">
               <div className="text-center mb-16">
                  <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-primary-300 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                     Stay Updated
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
                     News &amp; Events
                  </h2>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <div className="space-y-4">
                     <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400">
                        News &amp; Events
                     </h3>
                     {[
                        { title: "National Level Hackathon", date: "Oct 15, 2026", category: "Competition" },
                        { title: "Technical Symposium", date: "Oct 22, 2026", category: "Event" },
                        { title: "Campus Placement Drive", date: "Nov 05, 2026", category: "Placements" },
                        { title: "Cultural Fest", date: "Nov 18, 2026", category: "Campus Life" }
                     ].map((news, i) => (
                        <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-5 group"
                        >
                           <div className="w-3 h-3 rounded-full bg-primary-500 group-hover:scale-150 transition-transform"></div>
                           <div>
                              <div className="text-[11px] text-secondary-400 font-bold uppercase tracking-[0.25em] mb-1">
                                 {news.category} • {news.date}
                              </div>
                              <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                                 {news.title}
                              </h4>
                           </div>
                        </motion.div>
                     ))}
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400">
                        Exam Corner
                     </h3>
                     <p className="text-secondary-300 text-sm leading-relaxed mb-2">
                        Stay updated with examination notifications, timetables, and results for all B.Tech programmes.
                     </p>
                     <div className="space-y-3">
                        {[
                           { title: "Mid-Term Exam Schedule – III B.Tech", date: "Oct 10, 2026" },
                           { title: "End-Sem Timetable – I &amp; II B.Tech", date: "Nov 01, 2026" },
                           { title: "Revaluation Notification", date: "Nov 20, 2026" }
                        ].map((item) => (
                           <div
                              key={item.title}
                              className="bg-white/5 border border-white/5 rounded-xl px-4 py-3 flex flex-col gap-1"
                           >
                              <span className="text-xs text-secondary-400 uppercase tracking-[0.25em] font-bold">
                                 {item.date}
                              </span>
                              <span className="text-sm text-white font-semibold">
                                 {item.title}
                              </span>
                           </div>
                        ))}
                     </div>
                     <div className="flex flex-wrap gap-3 pt-2">
                        <a
                           href="#"
                           className="text-xs font-bold uppercase tracking-widest bg-white text-secondary-900 px-4 py-2 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
                        >
                           Exam Notifications
                        </a>
                        <a
                           href="#"
                           className="text-xs font-bold uppercase tracking-widest border border-white/40 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                           Timetables
                        </a>
                        <a
                           href="#"
                           className="text-xs font-bold uppercase tracking-widest border border-white/40 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                           Results
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Gallery Section */}
         <section className="py-24 md:py-28 bg-secondary-50/50">
            <div className="container mx-auto px-4 md:px-12 max-w-7xl">
               <div className="text-center mb-16">
                  <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">
                     Discover
                  </span>
                  <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                     Campus Gallery
                  </h2>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800", // Campus graduation
                     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800", // Team collaboration
                     "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", // Meeting
                     "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", // Students
                     "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800", // Library interior
                     "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"  // Engineering lab
                  ].map((img, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative overflow-hidden group rounded-2xl aspect-[4/3] bg-secondary-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                     >
                        <img 
                           src={img} 
                           alt="Gallery image" 
                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/20 transition-colors duration-300"></div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

      </div>
   );
};

export default Home;
