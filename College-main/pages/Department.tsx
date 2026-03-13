import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Phone, Mail, MapPin, Users, Award, BookOpen, Monitor, Briefcase, GraduationCap, Quote } from 'lucide-react';
import { departmentsData } from '../src/data/departmentsData';
import AnimatedCounter from '../components/AnimatedCounter';

type DepartmentTab = 'home' | 'faculty' | 'academics' | 'labs' | 'projects' | 'gallery' | 'contact';

const DepartmentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [dept, setDept] = useState(departmentsData[0]);
    const location = useLocation();
    const navigate = useNavigate();

    const tabFromUrl = new URLSearchParams(location.search).get('tab') as DepartmentTab | null;
    const [activeTab, setActiveTab] = useState<DepartmentTab>('home');

    useEffect(() => {
        const foundDept = departmentsData.find(d => d.id === id);
        if (foundDept) {
            setDept(foundDept);
        } else {
            setDept(departmentsData[0]); // fallback
        }
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const allowedTabs: DepartmentTab[] = ['home', 'faculty', 'academics', 'labs', 'projects', 'gallery', 'contact'];
        if (tabFromUrl && allowedTabs.includes(tabFromUrl)) {
            setActiveTab(tabFromUrl);
        } else {
            setActiveTab('home');
        }
    }, [tabFromUrl]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: DepartmentTab) => {
        e.preventDefault();
        navigate({ search: `?tab=${tabId}` });
    };

    return (
        <div className="bg-secondary-50 min-h-screen pb-20">
            {/* 1️⃣ Hero Section */}
            <section id="overview" className="relative h-[60vh] md:h-[70vh] w-full flex flex-col justify-end pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-secondary-950/70 mix-blend-multiply z-10" />
                    <img 
                        src={dept.bannerImage} 
                        alt={dept.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 container mx-auto px-4 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className={`px-4 py-1 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest rounded-full ${dept.theme}`}>
                                <Award size={14} /> SRIT Academics
                            </span>
                            <span className="text-secondary-300 font-bold text-sm tracking-widest">{dept.code}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-tight mb-6">
                            {dept.name}
                        </h1>
                        <p className="text-xl text-secondary-200 md:text-2xl font-light leading-relaxed max-w-3xl">
                            {dept.shortDesc}
                        </p>
                    </motion.div>
                </div>
                {/* Tabs Navigation (always visible on banner) */}
                <div className="absolute bottom-0 left-0 right-0 z-30">
                    <div className="bg-white/95 backdrop-blur border-t border-white/30 shadow-[0_-10px_30px_rgba(0,0,0,0.15)]">
                        <div className="container mx-auto px-4 md:px-12">
                            <div className="flex overflow-x-auto gap-2 md:gap-3 py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary-600">
                                {[
                                    { id: 'home' as DepartmentTab, label: 'Home' },
                                    { id: 'faculty' as DepartmentTab, label: 'Faculty' },
                                    { id: 'academics' as DepartmentTab, label: 'Academics' },
                                    { id: 'labs' as DepartmentTab, label: 'Labs' },
                                    { id: 'projects' as DepartmentTab, label: 'Projects' },
                                    { id: 'gallery' as DepartmentTab, label: 'Gallery' },
                                    { id: 'contact' as DepartmentTab, label: 'Contact' }
                                ].map(link => (
                                    <a
                                        key={link.id}
                                        href={`?tab=${link.id}`}
                                        onClick={(e) => handleNavClick(e, link.id)}
                                        className={`px-4 py-2 rounded-full whitespace-nowrap border transition-colors ${
                                            activeTab === link.id
                                                ? 'border-primary-500 text-primary-500 bg-white'
                                                : 'border-transparent hover:border-primary-500 hover:text-primary-500 bg-secondary-50/50 hover:bg-white'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-12 -mt-10 relative z-30">
                {/* 2️⃣ Quick Stats Bar – only on Home & Academics tabs */}
                {(activeTab === 'home' || activeTab === 'academics') && (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-wrap justify-between items-center gap-8 mb-24">
                    <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg ${dept.theme}`}>
                            <Users size={28} />
                        </div>
                        <div>
                            <AnimatedCounter end={dept.stats.students} suffix="+" className="text-4xl font-black text-secondary-900 font-heading mb-1" />
                            <div className="text-secondary-500 font-bold uppercase tracking-widest text-xs">Students</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg ${dept.theme}`}>
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <AnimatedCounter end={dept.stats.faculty} suffix="+" className="text-4xl font-black text-secondary-900 font-heading mb-1" />
                            <div className="text-secondary-500 font-bold uppercase tracking-widest text-xs">Faculty Members</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg ${dept.theme}`}>
                            <Monitor size={28} />
                        </div>
                        <div>
                            <AnimatedCounter end={dept.stats.labs} suffix="+" className="text-4xl font-black text-secondary-900 font-heading mb-1" />
                            <div className="text-secondary-500 font-bold uppercase tracking-widest text-xs">Laboratories</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg ${dept.theme}`}>
                            <Briefcase size={28} />
                        </div>
                        <div>
                            <AnimatedCounter end={dept.stats.placementRate} suffix="%" className="text-4xl font-black text-secondary-900 font-heading mb-1" />
                            <div className="text-secondary-500 font-bold uppercase tracking-widest text-xs">Placement Rate</div>
                        </div>
                    </div>
                </div>
                )}

                {/* Home & Academics content */}
                {(activeTab === 'home' || activeTab === 'academics') && (
                <div className="flex flex-col lg:flex-row gap-16 mb-24">
                    <div className="lg:w-2/3 space-y-16">
                        {/* 3️⃣ About, Vision & Academics */}
                        <section>
                            <div className="flex items-center gap-4 mb-6">
                                <span className={`h-px w-12 ${dept.theme}`}></span>
                                <span className={`font-bold uppercase tracking-widest text-xs text-${dept.theme.replace('bg-', '')}`}>About {dept.code}</span>
                            </div>
                            <h2 className="text-4xl font-heading font-black uppercase text-secondary-900 mb-6">Department Overview</h2>
                            <p className="text-lg text-secondary-600 leading-relaxed font-light mb-8">
                                {dept.longDesc}
                            </p>
                            
                            {/* Vision & Mission */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-secondary-900 mb-3">Vision</h3>
                                    <p className="text-secondary-600 text-sm leading-relaxed">
                                        {dept.vision}
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                                    <h3 className="text-xl font-bold text-secondary-900 mb-3">Mission</h3>
                                    <p className="text-secondary-600 text-sm leading-relaxed">
                                        {dept.mission}
                                    </p>
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-3">
                                <BookOpen className={`text-${dept.theme.replace('bg-', '')}`} /> Programs Offered
                            </h3>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                                <ul className="space-y-4">
                                    {dept.programs.map((prog, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${dept.theme}`}></div>
                                            <span className="font-bold text-secondary-800">{prog}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* 4️⃣ HOD Profile */}
                        <section>
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
                                <div className="md:w-2/5 relative h-64 md:h-auto">
                                    <img src={dept.hod.photo} alt={dept.hod.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent"></div>
                                </div>
                                <div className="md:w-3/5 p-8 relative">
                                    <Quote className={`absolute top-6 right-6 w-16 h-16 opacity-10 text-${dept.theme.replace('bg-', '')}`} />
                                    <h3 className="text-3xl font-black text-secondary-900 mb-1">{dept.hod.name}</h3>
                                    <p className={`font-bold uppercase tracking-widest text-xs mb-4 text-${dept.theme.replace('bg-', '')}`}>
                                        {dept.hod.title}
                                    </p>
                                    <p className="text-secondary-500 font-medium mb-6 flex items-center gap-2">
                                        <GraduationCap size={16} /> {dept.hod.qualification}
                                    </p>
                                    <p className="text-secondary-600 leading-relaxed italic text-lg border-l-4 border-gray-200 pl-4">
                                        "{dept.hod.message}"
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:w-1/3 space-y-8">
                        {/* Right Sidebar – Laboratories & Facilities */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sticky top-32">
                            <h3 className="text-2xl font-black text-secondary-900 mb-8 border-b border-gray-100 pb-4">
                                Excellent Facilities
                            </h3>
                            
                            <div className="mb-8">
                                <h4 className="font-bold uppercase tracking-widest text-xs text-secondary-500 mb-4">Core Laboratories</h4>
                                <ul className="space-y-4">
                                    {dept.laboratories.map((lab, i) => (
                                        <li key={i} className="flex items-center gap-3 group">
                                            <div className={`p-2 rounded-lg bg-secondary-50 text-secondary-400 group-hover:${dept.theme} group-hover:text-white transition-colors`}>
                                                <Monitor size={16} />
                                            </div>
                                            <span className="font-bold text-secondary-700 text-sm">{lab}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs text-secondary-500 mb-4">Department Infrastructure</h4>
                                <ul className="space-y-4 text-sm text-secondary-600">
                                    {dept.facilities.map((fac, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <ChevronRight size={16} className={`text-${dept.theme.replace('bg-', '')} mt-0.5`} />
                                            {fac}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {/* 5️⃣ Faculty Grid */}
                {activeTab === 'faculty' && (
                <section className="mb-24">
                    <div className="text-center mb-16">
                        <span className={`font-bold uppercase tracking-widest text-xs mb-4 block text-${dept.theme.replace('bg-', '')}`}>Academic Leaders</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                            Faculty Members
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {dept.faculty.map((member, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="p-6 relative bg-white border-t-4 border-transparent group-hover:border-current" style={{ borderTopColor: dept.theme.includes('blue') ? '#3b82f6' : dept.theme.includes('orange') ? '#f97316' : dept.theme.includes('emerald') ? '#10b981' : '#64748b' }}>
                                    <h4 className="text-xl font-bold text-secondary-900 mb-1">{member.name}</h4>
                                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 text-${dept.theme.replace('bg-', '')}`}>{member.designation}</p>
                                    {member.qualification && (
                                        <p className="text-secondary-600 text-xs mb-2">
                                            <strong className="text-secondary-800">Qualification:</strong> {member.qualification}
                                        </p>
                                    )}
                                    {member.email && (
                                        <p className="text-secondary-600 text-xs mb-2 break-all">
                                            <strong className="text-secondary-800">Email:</strong> {member.email}
                                        </p>
                                    )}
                                    <p className="text-secondary-500 text-xs">
                                        <strong className="text-secondary-700">Research:</strong> {member.research}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                )}

                {/* 6️⃣ Student Projects */}
                {activeTab === 'projects' && (
                <section className="mb-24 bg-secondary-950 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${dept.theme}`}></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className={`font-bold uppercase tracking-widest text-xs mb-4 block text-${dept.theme.replace('bg-', '')}`}>Innovation</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-white">
                                Student Projects
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {dept.projects.map((proj, i) => (
                            <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent"></div>
                                    <span className={`absolute bottom-4 left-4 px-3 py-1 bg-white text-secondary-900 text-[10px] font-black uppercase tracking-widest rounded-full`}>
                                        {proj.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-2">{proj.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                )}

                {/* 7️⃣ Achievements & Contact */}
                {activeTab === 'contact' && (
                <section className="mb-24 flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                        <h3 className="text-3xl font-heading font-black uppercase text-secondary-900 mb-8 border-b border-gray-100 pb-4">
                            Key Achievements
                        </h3>
                        <ul className="space-y-6">
                            {dept.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className={`mt-1 p-2 rounded-full bg-secondary-50 text-${dept.theme.replace('bg-', '')}`}>
                                        <Award size={20} />
                                    </div>
                                    <p className="text-lg font-bold text-secondary-800 leading-snug">{ach}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className={`lg:w-1/2 rounded-3xl p-8 md:p-12 shadow-xl text-white ${dept.theme}`}>
                        <h3 className="text-3xl font-heading font-black uppercase mb-8 border-b border-white/20 pb-4 text-white drop-shadow-sm">
                            Department Contact
                        </h3>
                        <div className="space-y-8">
                            <p className="text-lg leading-relaxed font-medium">
                                Have questions about admissions, research opportunities, or academic curriculum? Reach out to us directly.
                            </p>
                            <div className="space-y-4 text-lg font-bold">
                                <div className="flex items-center gap-4 bg-black/10 p-4 rounded-xl backdrop-blur-sm">
                                    <Mail size={24} className="opacity-80" />
                                    <span>{dept.contact.email}</span>
                                </div>
                                <div className="flex items-center gap-4 bg-black/10 p-4 rounded-xl backdrop-blur-sm">
                                    <Phone size={24} className="opacity-80" />
                                    <span>{dept.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-4 bg-black/10 p-4 rounded-xl backdrop-blur-sm">
                                    <MapPin size={24} className="opacity-80" />
                                    <span>{dept.contact.location}</span>
                                </div>
                            </div>

                            {dept.contact.mapEmbedUrl && (
                                <div className="mt-8 rounded-2xl overflow-hidden bg-black/20 border border-white/20">
                                    <iframe
                                        src={dept.contact.mapEmbedUrl}
                                        title={`${dept.name} Location Map`}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-64 md:h-72 border-0"
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                )}

                {/* 8️⃣ Gallery */}
                {activeTab === 'gallery' && (
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                            Department Gallery
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {dept.gallery.map((img, i) => (
                            <div key={i} className={`rounded-2xl overflow-hidden aspect-square ${i === 0 || i === 3 ? 'md:col-span-2 aspect-video md:aspect-auto' : ''}`}>
                                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </section>
                )}
            </div>
        </div>
    );
};

export default DepartmentDetail;