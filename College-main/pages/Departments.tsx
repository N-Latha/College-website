import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { departmentsData } from '../src/data/departmentsData';
import { ArrowRight, BookOpen, Users, ChevronRight } from 'lucide-react';

const Departments: React.FC = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary-500 selection:text-white pb-20">

            {/* Breadcrumbs */}
            <div className="bg-secondary-50 border-b border-gray-100 py-3">
                <div className="container mx-auto px-4 md:px-12">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-secondary-500 hover:text-primary-500 transition-colors font-medium">Home</Link>
                        <ChevronRight size={14} className="text-secondary-400" />
                        <span className="text-secondary-900 font-semibold">Departments</span>
                    </nav>
                </div>
            </div>

            {/* Page Hero Banner */}
            <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 bg-secondary-950 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600" 
                        alt="Departments Banner" 
                        className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 to-transparent"></div>
                </div>
                <div className="container mx-auto relative z-10 flex flex-col items-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase text-white tracking-tighter mb-4 drop-shadow-2xl"
                    >
                        OUR ACADEMIC DEPARTMENTS
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-primary-400 text-lg md:text-xl font-bold uppercase tracking-[0.3em] drop-shadow-md max-w-2xl mx-auto"
                    >
                        Explore the Engineering Programs at SRIT
                    </motion.p>
                    <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2 }}
                         className="text-secondary-300 mt-6 max-w-3xl leading-relaxed text-lg"
                    >
                        Our departments provide high-quality technical education, research opportunities, and industry collaboration to prepare students for global careers.
                    </motion.p>
                </div>
            </section>

            {/* Departments Grid */}
            <section className="container mx-auto px-4 md:px-12 relative z-20 -mt-12 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {departmentsData.map((dept, index) => (
                        <motion.div
                            key={dept.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] border border-gray-100/80 overflow-hidden flex flex-col group transition-all duration-300"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img 
                                    src={dept.cardImage} 
                                    alt={dept.name} 
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-900/40 to-transparent"></div>
                                <div className={`absolute top-4 right-4 ${dept.theme} text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg`}>
                                    {dept.code}
                                </div>
                                <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-black text-white leading-tight">
                                    {dept.name}
                                </h3>
                            </div>
                            
                            <div className="p-8 flex-grow flex flex-col">
                                <p className="text-secondary-600 leading-relaxed flex-grow border-l-2 border-primary-500 pl-4 mb-8 text-sm">
                                    {dept.shortDesc}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-secondary-50 text-secondary-500 group-hover:${dept.theme} group-hover:text-white transition-colors`}>
                                            <Users size={16} />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-secondary-900 leading-none">{dept.stats.students}+</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-secondary-500 mt-1">Students</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg bg-secondary-50 text-secondary-500 group-hover:${dept.theme} group-hover:text-white transition-colors`}>
                                            <BookOpen size={16} />
                                        </div>
                                        <div>
                                            <div className="text-xl font-black text-secondary-900 leading-none">{dept.programs.length}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-secondary-500 mt-1">Programs</div>
                                        </div>
                                    </div>
                                </div>

                                <Link 
                                    to={`/department/${dept.id}`}
                                    className={`inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all text-white shadow-lg ${dept.theme} hover:bg-secondary-900 focus:ring-4 focus:ring-secondary-200`}
                                >
                                    <span>View Department</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Departments;
