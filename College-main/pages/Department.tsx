import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Users, BookOpen, Award, Building, Mail, Phone, MapPin } from 'lucide-react';
import { departmentsData } from '../src/data/departmentsData';

const Department: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    
    // Find department by ID. If not found, fallback to CSE for demo purposes.
    const dept = departmentsData.find(d => d.id === id) || departmentsData[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Breadcrumbs */}
            <div className="bg-secondary-50 border-b border-gray-100 py-3">
                <div className="container mx-auto px-4 md:px-12">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-secondary-500 hover:text-primary-500 transition-colors font-medium">Home</Link>
                        <ChevronRight size={14} className="text-secondary-400" />
                        <Link to="/departments" className="text-secondary-500 hover:text-primary-500 transition-colors font-medium">Departments</Link>
                        <ChevronRight size={14} className="text-secondary-400" />
                        <span className="text-secondary-900 font-semibold">{dept.code}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-4 shadow-inner overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={dept.bannerImage} 
                        alt={`${dept.name} Banner`} 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-secondary-950/80 backdrop-blur-[2px]"></div>
                </div>
                <div className="container mx-auto relative z-10">
                    <Link to="/departments" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft size={16} /> Back to Departments
                    </Link>
                    <div className={`inline-block px-4 py-1.5 rounded-full ${dept.theme} text-white text-xs font-black uppercase tracking-widest shadow-lg mb-6`}>
                        {dept.code}
                    </div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-black uppercase text-white tracking-tighter mb-6 leading-tight max-w-4xl"
                    >
                        Department of <br className="hidden md:block"/>{dept.name}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-secondary-200 text-lg md:text-xl leading-relaxed max-w-3xl"
                    >
                        {dept.shortDesc}
                    </motion.p>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="container mx-auto px-4 md:px-12 relative z-20 -mt-10 mb-16">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
                        <div className="flex flex-col items-center text-center px-4">
                            <Users size={32} className="text-primary-500 mb-3" />
                            <div className="text-3xl font-black text-secondary-900">{dept.stats.students}+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-secondary-500 mt-1">Students</div>
                        </div>
                        <div className="flex flex-col items-center text-center px-4">
                            <Award size={32} className="text-primary-500 mb-3" />
                            <div className="text-3xl font-black text-secondary-900">{dept.stats.faculty}+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-secondary-500 mt-1">Faculty</div>
                        </div>
                        <div className="flex flex-col items-center text-center px-4">
                            <Building size={32} className="text-primary-500 mb-3" />
                            <div className="text-3xl font-black text-secondary-900">{dept.stats.labs}</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-secondary-500 mt-1">Labs</div>
                        </div>
                        <div className="flex flex-col items-center text-center px-4">
                            <BookOpen size={32} className="text-primary-500 mb-3" />
                            <div className="text-3xl font-black text-secondary-900">{dept.stats.placementRate}%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-secondary-500 mt-1">Placement</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-12 max-w-7xl pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* About */}
                        <section>
                            <h2 className="text-3xl font-heading font-black uppercase text-secondary-900 mb-6 flex items-center gap-4">
                                <span className="w-8 h-1 bg-primary-500 inline-block"></span>
                                About the Department
                            </h2>
                            <p className="text-secondary-600 leading-relaxed text-lg mb-8">
                                {dept.longDesc}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 bg-secondary-50 p-8 rounded-2xl">
                                <div>
                                    <h3 className="font-bold text-primary-500 uppercase tracking-widest text-sm mb-3">Vision</h3>
                                    <p className="text-secondary-700 text-sm leading-relaxed">{dept.vision}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary-500 uppercase tracking-widest text-sm mb-3">Mission</h3>
                                    <p className="text-secondary-700 text-sm leading-relaxed">{dept.mission}</p>
                                </div>
                            </div>
                        </section>

                        {/* Message from HOD */}
                        <section className="bg-white border border-gray-100 shadow-md rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-xl transition-shadow">
                            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner">
                                <img src={dept.hod.photo} alt={dept.hod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-secondary-900 mb-1">{dept.hod.name}</h3>
                                <div className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4">{dept.hod.title}</div>
                                <p className="text-secondary-600 italic leading-relaxed text-lg mb-4">"{dept.hod.message}"</p>
                                <p className="text-secondary-500 font-semibold text-sm">{dept.hod.qualification}</p>
                            </div>
                        </section>

                        {/* Programs */}
                        <section>
                            <h2 className="text-3xl font-heading font-black uppercase text-secondary-900 mb-8 flex items-center gap-4">
                                <span className="w-8 h-1 bg-primary-500 inline-block"></span>
                                Programs Offered
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {dept.programs.map((prog, i) => (
                                    <div key={i} className="bg-white border border-gray-100 shadow-sm p-5 rounded-xl flex items-start gap-4 hover:shadow-md transition-shadow">
                                        <div className={`mt-1 w-2 h-2 rounded-full ${dept.theme} shrink-0`}></div>
                                        <h4 className="font-bold text-secondary-800 leading-snug">{prog}</h4>
                                    </div>
                                ))}
                            </div>
                        </section>
                        
                        {/* Facilities & Labs */}
                        <section>
                            <h2 className="text-3xl font-heading font-black uppercase text-secondary-900 mb-8 flex items-center gap-4">
                                <span className="w-8 h-1 bg-primary-500 inline-block"></span>
                                Facilities &amp; Labs
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-secondary-900 uppercase tracking-widest text-sm mb-4">Laboratories</h3>
                                    <ul className="space-y-3">
                                        {dept.laboratories.map((lab, i) => (
                                            <li key={i} className="flex items-center gap-3 text-secondary-600">
                                                <ChevronRight size={16} className="text-primary-500 shrink-0" />
                                                <span>{lab}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-secondary-900 uppercase tracking-widest text-sm mb-4">Key Facilities</h3>
                                    <ul className="space-y-3">
                                        {dept.facilities.map((fac, i) => (
                                            <li key={i} className="flex items-center gap-3 text-secondary-600">
                                                <ChevronRight size={16} className="text-primary-500 shrink-0" />
                                                <span>{fac}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        
                        {/* Extra Details */}
                        {dept.aboutDepartment && (
                            <section>
                                <h2 className="text-3xl font-heading font-black uppercase text-secondary-900 mb-6 flex items-center gap-4">
                                    <span className="w-8 h-1 bg-primary-500 inline-block"></span>
                                    Department Legacy
                                </h2>
                                <p className="text-secondary-600 leading-relaxed mb-4">{dept.aboutDepartment.history}</p>
                                <p className="text-secondary-600 leading-relaxed">{dept.aboutDepartment.significance}</p>
                            </section>
                        )}
                    </div>

                    {/* Sidebar Content */}
                    <div className="space-y-8">
                        {/* Contact Widget */}
                        <div className="bg-secondary-950 text-white rounded-2xl p-8 shadow-xl">
                            <h3 className="font-heading font-black uppercase text-xl mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                Contact Us
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="text-primary-400 mt-1 shrink-0" size={20} />
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-secondary-400 mb-1">Email</div>
                                        <a href={`mailto:${dept.contact.email}`} className="text-sm hover:text-primary-400 transition-colors">{dept.contact.email}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="text-primary-400 mt-1 shrink-0" size={20} />
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-secondary-400 mb-1">Phone</div>
                                        <a href={`tel:${dept.contact.phone.replace(/\s+/g, '')}`} className="text-sm hover:text-primary-400 transition-colors">{dept.contact.phone}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-primary-400 mt-1 shrink-0" size={20} />
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-secondary-400 mb-1">Location</div>
                                        <p className="text-sm leading-relaxed">{dept.contact.location}</p>
                                    </div>
                                </div>
                            </div>
                            {dept.contact.mapEmbedUrl && (
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <a href={dept.contact.mapEmbedUrl} target="_blank" rel="noreferrer" className="block w-full text-center py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-xs font-bold uppercase tracking-widest">
                                        View on Map
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Key Achievements */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
                            <h3 className="font-heading font-black uppercase text-xl text-secondary-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                                Achievements
                            </h3>
                            <ul className="space-y-4">
                                {dept.achievements.map((ach, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-secondary-600 leading-relaxed">
                                        <Award className="text-primary-500 shrink-0 mt-0.5" size={16} />
                                        <span>{ach}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Faculty Section (Full width at bottom) */}
                <div className="mt-20 pt-16 border-t border-gray-100">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-widest text-xs mb-4">
                            Our Experts
                        </span>
                        <h2 className="text-4xl font-heading font-black uppercase text-secondary-900">
                            Key Faculty Members
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dept.faculty.slice(0, 4).map((member, i) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                                <div className="h-48 overflow-hidden bg-secondary-100">
                                    {member.photo ? (
                                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="flex items-center justify-center h-full bg-secondary-100 text-secondary-300">
                                            <Users size={48} />
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="font-black text-secondary-900 mb-1">{member.name}</h4>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary-500 mb-3">{member.designation}</div>
                                    <p className="text-xs text-secondary-500 mb-2 truncate">{member.qualification}</p>
                                    <p className="text-xs text-secondary-600 font-medium">Research: {member.research}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;
