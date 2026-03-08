import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Phone, Mail, MapPin, Users, Award, BookOpen, Monitor, Briefcase, GraduationCap, Quote, Target, Calendar, FileText, Building2, Mic, ArrowLeft } from 'lucide-react';
import { departmentsData } from '../src/data/departmentsData';
import AnimatedCounter from '../components/AnimatedCounter';

const DepartmentDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [dept, setDept] = useState(departmentsData[0]);

    useEffect(() => {
        const foundDept = departmentsData.find(d => d.id === id);
        if (foundDept) {
            setDept(foundDept);
        } else {
            setDept(departmentsData[0]); // fallback
        }
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="bg-secondary-50 min-h-screen pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-100 py-3 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 md:px-12">
                    <nav className="flex items-center gap-2 text-sm flex-wrap">
                        <Link to="/" className="text-secondary-500 hover:text-primary-500 transition-colors font-medium">Home</Link>
                        <ChevronRight size={14} className="text-secondary-400 shrink-0" />
                        <Link to="/departments" className="text-secondary-500 hover:text-primary-500 transition-colors font-medium">Departments</Link>
                        <ChevronRight size={14} className="text-secondary-400 shrink-0" />
                        <span className="text-secondary-900 font-semibold">{dept.code}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[55vh] md:h-[65vh] w-full flex flex-col justify-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-secondary-950/70 mix-blend-multiply z-10" />
                    <img 
                        src={dept.bannerImage} 
                        alt={dept.name} 
                        loading="eager"
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
                        <Link to="/departments" className="inline-flex items-center gap-2 mt-6 text-white/90 hover:text-white font-semibold text-sm transition-colors group/link">
                            <ArrowLeft size={16} className="group-hover/link:-translate-x-1 transition-transform" />
                            Back to Departments
                        </Link>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-12 -mt-8 relative z-30 max-w-7xl">
                {/* Quick Stats Bar */}
                <div className="relative rounded-2xl shadow-[0_4px_24px_rgba(242,90,34,0.1)] border border-orange-200/60 bg-gradient-to-br from-orange-50/60 via-white to-orange-100/50 p-8 flex flex-wrap justify-between items-center gap-8 mb-20 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
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

                {/* Quick Nav - Sticky */}
                <div className="hidden lg:block sticky top-20 z-30 mb-12">
                    <div className="relative rounded-xl border border-orange-200/60 bg-gradient-to-br from-orange-50/70 via-white to-orange-100/40 p-4 shadow-[0_4px_20px_rgba(242,90,34,0.08)] overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary-500 mb-3">On this page</p>
                        <div className="flex flex-wrap gap-2">
                            <a href="#about" className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 hover:text-primary-600 text-secondary-700 text-xs font-semibold transition-colors border border-orange-100">About</a>
                            <a href="#academics" className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 hover:text-primary-600 text-secondary-700 text-xs font-semibold transition-colors border border-orange-100">Academics</a>
                            <a href="#faculty" className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 hover:text-primary-600 text-secondary-700 text-xs font-semibold transition-colors border border-orange-100">Faculty</a>
                            <a href="#infrastructure" className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 hover:text-primary-600 text-secondary-700 text-xs font-semibold transition-colors border border-orange-100">Infrastructure</a>
                            <a href="#student-life" className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 hover:text-primary-600 text-secondary-700 text-xs font-semibold transition-colors border border-orange-100">Student Life</a>
                            <a href="#contact" className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 hover:text-primary-600 text-secondary-700 text-xs font-semibold transition-colors border border-orange-100">Contact</a>
                            <a href="#gallery" className="px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 hover:text-primary-600 text-secondary-700 text-xs font-semibold transition-colors border border-orange-100">Gallery</a>
                        </div>
                    </div>
                </div>

                {/* 1. About the Department */}
                <section id="about" className="mb-24 scroll-mt-24">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`h-px w-12 ${dept.theme}`}></span>
                        <span className="font-bold uppercase tracking-widest text-xs text-secondary-500">About the Department</span>
                    </div>
                    <h2 className="text-4xl font-heading font-black uppercase text-secondary-900 mb-8">About the Department</h2>
                    <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden p-8 md:p-10 space-y-6">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                        <p className="text-lg text-secondary-600 leading-relaxed">{dept.longDesc}</p>
                        {'aboutDepartment' in dept && (dept as any).aboutDepartment && (
                            <>
                                <p className="text-secondary-600 leading-relaxed"><strong className="text-secondary-900">History:</strong> {(dept as any).aboutDepartment.history}</p>
                                <p className="text-secondary-600 leading-relaxed"><strong className="text-secondary-900">Significance:</strong> {(dept as any).aboutDepartment.significance}</p>
                            </>
                        )}
                    </div>

                    {/* Vision & Mission */}
                    {'visionMission' in dept && (dept as any).visionMission && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Target size={20} /></span> Vision</h3>
                                <p className="text-secondary-600 leading-relaxed">{(dept as any).visionMission.vision}</p>
                            </div>
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Target size={20} /></span> Mission</h3>
                                <p className="text-secondary-600 leading-relaxed">{(dept as any).visionMission.mission}</p>
                            </div>
                        </div>
                    )}

                    {/* HOD's Message */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-heading font-black uppercase text-secondary-900 mb-6">HOD&apos;s Message</h3>
                        <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(242,90,34,0.12)] border border-orange-200/60 bg-gradient-to-br from-orange-50/30 via-white to-orange-100/30 flex flex-col md:flex-row">
                            <div className="md:w-2/5 relative h-64 md:h-auto">
                                <img src={dept.hod.photo} alt={dept.hod.name} loading="lazy" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent"></div>
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                            </div>
                            <div className="md:w-3/5 p-8 relative">
                                <Quote className="absolute top-6 right-6 w-16 h-16 opacity-10 text-secondary-300" />
                                <h4 className="text-2xl font-black text-secondary-900 mb-1">{dept.hod.name}</h4>
                                <p className={`font-bold uppercase tracking-widest text-xs mb-4 ${dept.theme}`}>{dept.hod.title}</p>
                                <p className="text-secondary-500 font-medium mb-6 flex items-center gap-2"><GraduationCap size={16} /> {dept.hod.qualification}</p>
                                <p className="text-secondary-600 leading-relaxed italic text-lg border-l-4 border-gray-200 pl-4">&quot;{dept.hod.message}&quot;</p>
                            </div>
                        </div>
                    </div>

                    {/* Advisory Board */}
                    {'advisoryBoard' in dept && (dept as any).advisoryBoard?.length > 0 && (
                        <div className="mt-16">
                            <h3 className="text-2xl font-heading font-black uppercase text-secondary-900 mb-6">Advisory Board</h3>
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <p className="text-secondary-600 mb-8">Industry and academic experts who guide the department&apos;s curriculum and growth.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {(dept as any).advisoryBoard.map((member: { name: string; role: string; affiliation: string; photo?: string }, i: number) => (
                                        <div key={i} className="rounded-2xl overflow-hidden border border-orange-200/50 bg-gradient-to-b from-white to-orange-50/50 shadow-[0_4px_16px_rgba(242,90,34,0.06)] hover:shadow-[0_8px_24px_rgba(242,90,34,0.12)] transition-all duration-300 group">
                                            <div className="h-48 overflow-hidden bg-secondary-100">
                                                <img src={member.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400'} alt={member.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                            <div className="p-5">
                                                <h4 className="font-bold text-secondary-900 text-lg">{member.name}</h4>
                                                <p className="text-sm text-primary-600 font-semibold mt-1">{member.role}</p>
                                                <p className="text-sm text-secondary-500 mt-1">{member.affiliation}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* 2. Academics & Curriculum */}
                <section id="academics" className="mb-24 scroll-mt-24 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`h-px w-12 ${dept.theme}`}></span>
                        <span className="font-bold uppercase tracking-widest text-xs text-secondary-500">Academics & Curriculum</span>
                    </div>
                    <h2 className="text-4xl font-heading font-black uppercase text-secondary-900 mb-8">Academics &amp; Curriculum</h2>
                    
                    <div className="space-y-8">
                        <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                            <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><BookOpen size={20} /></span> Programmes Offered</h3>
                            <ul className="space-y-3">
                                {dept.programs.map((prog, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-1.5 flex-shrink-0 w-2 h-2 rounded-full ${dept.theme}`}></div>
                                        <span className="font-semibold text-secondary-800">{prog}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {'syllabus' in dept && (dept as any).syllabus && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><FileText size={20} /></span>
                                    Syllabus &amp; Course Structure
                                </h3>
                                <p className="text-secondary-600 leading-relaxed">{(dept as any).syllabus}</p>
                            </div>
                        )}
                        {'academicCalendar' in dept && (dept as any).academicCalendar?.length > 0 && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Calendar size={20} /></span>
                                    Academic Calendar
                                </h3>
                                <ul className="space-y-3">
                                    {(dept as any).academicCalendar.map((item: { event: string; date: string }, i: number) => (
                                        <li key={i} className="flex justify-between items-center py-2 border-b border-orange-100 last:border-0">
                                            <span className="font-semibold text-secondary-800">{item.event}</span>
                                            <span className="text-primary-600 font-bold text-sm">{item.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {'regulations' in dept && (dept as any).regulations && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><FileText size={18} /></span>
                                    Regulations
                                </h3>
                                <p className="text-secondary-600 leading-relaxed">{(dept as any).regulations}</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* 3. Faculty & Research */}
                <section id="faculty" className="mb-24 scroll-mt-24 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`h-px w-12 ${dept.theme}`}></span>
                        <span className="font-bold uppercase tracking-widest text-xs text-secondary-500">Faculty & Research</span>
                    </div>
                    <h2 className="text-4xl font-heading font-black uppercase text-secondary-900 mb-8">Faculty &amp; Research</h2>
                    
                    <h3 className="text-2xl font-bold text-secondary-900 mb-6">Faculty Profiles</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {dept.faculty.map((member, i) => (
                            <motion.div key={i} whileHover={{ y: -8 }} className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] border border-orange-200/60 bg-gradient-to-b from-white to-orange-50/50 group">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300 z-10" />
                                <div className="h-56 overflow-hidden relative">
                                    <img src={member.photo} alt={member.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="p-6 border-t-4 border-orange-200 group-hover:border-primary-500 transition-colors">
                                    <h4 className="text-lg font-bold text-secondary-900 mb-1">{member.name}</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest mb-2 text-secondary-500">{member.designation}</p>
                                    <p className="text-secondary-500 text-sm"><strong>Research:</strong> {member.research}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {'researchDevelopment' in dept && (dept as any).researchDevelopment && (
                        <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 mb-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                            <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Monitor size={20} /></span> Research &amp; Development (R&amp;D)</h3>
                            <p className="text-secondary-600 mb-6">{(dept as any).researchDevelopment.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-bold text-secondary-800 mb-2">Ongoing Projects</h4>
                                    <ul className="space-y-1 text-sm text-secondary-600">{(dept as any).researchDevelopment.projects?.map((p: string, i: number) => <li key={i}>• {p}</li>)}</ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary-800 mb-2">Patents</h4>
                                    <ul className="space-y-1 text-sm text-secondary-600">{(dept as any).researchDevelopment.patents?.map((p: string, i: number) => <li key={i}>• {p}</li>)}</ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary-800 mb-2">Research Centers</h4>
                                    <ul className="space-y-1 text-sm text-secondary-600">{(dept as any).researchDevelopment.centers?.map((c: string, i: number) => <li key={i}>• {c}</li>)}</ul>
                                </div>
                            </div>
                        </div>
                    )}
                    {'publications' in dept && (dept as any).publications?.length > 0 && (
                        <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                            <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><FileText size={20} /></span> Publications</h3>
                            <ul className="space-y-3">
                                {(dept as any).publications.map((pub: { title: string; journal: string; year: string }, i: number) => (
                                    <li key={i} className="flex flex-wrap items-baseline gap-2 text-secondary-600">
                                        <span className="font-semibold text-secondary-800">&quot;{pub.title}&quot;</span>
                                        <span>— {pub.journal}, {pub.year}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                {/* 4. Infrastructure & Facilities */}
                <section id="infrastructure" className="mb-24 scroll-mt-24 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`h-px w-12 ${dept.theme}`}></span>
                        <span className="font-bold uppercase tracking-widest text-xs text-secondary-500">Infrastructure &amp; Facilities</span>
                    </div>
                    <h2 className="text-4xl font-heading font-black uppercase text-secondary-900 mb-8">Infrastructure &amp; Facilities</h2>
                    <div className="space-y-8">
                        <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                            <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Monitor size={20} /></span> Laboratories</h3>
                            {'labDetails' in dept && (dept as any).labDetails?.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {(dept as any).labDetails.map((lab: { name: string; equipment?: string; img?: string }, i: number) => (
                                        <div key={i} className="rounded-2xl overflow-hidden border border-orange-200/50 bg-gradient-to-b from-white to-orange-50/50 shadow-[0_4px_16px_rgba(242,90,34,0.06)] hover:shadow-[0_8px_24px_rgba(242,90,34,0.12)] transition-all duration-300 group">
                                            <div className="h-40 overflow-hidden bg-orange-100/50 relative">
                                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 to-primary-500 z-10" />
                                                <img src={lab.img || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600'} alt={lab.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                            <div className="p-4">
                                                <h4 className="font-bold text-secondary-900">{lab.name}</h4>
                                                {lab.equipment && <p className="text-sm text-secondary-600 mt-1">{lab.equipment}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-3">{dept.laboratories.map((lab, i) => <li key={i} className="flex items-center gap-2"><ChevronRight size={16} /> {lab}</li>)}</ul>
                            )}
                        </div>
                        {'departmentalLibrary' in dept && (dept as any).departmentalLibrary && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><BookOpen size={20} /></span> Departmental Library</h3>
                                <p className="text-secondary-600 leading-relaxed mb-6">{(dept as any).departmentalLibrary}</p>
                                {'libraryBooks' in dept && (dept as any).libraryBooks?.length > 0 ? (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {(dept as any).libraryBooks.map((img: string, i: number) => (
                                            <div key={i} className="relative rounded-xl overflow-hidden aspect-[3/4] border border-orange-200/40 shadow-[0_4px_16px_rgba(242,90,34,0.06)] hover:shadow-[0_8px_24px_rgba(242,90,34,0.12)] transition-all duration-300 group bg-gradient-to-b from-orange-50/30 to-white">
                                                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-400 to-primary-500 z-10" />
                                                <img src={img} alt={`${dept.code} Library Books`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        )}
                        {'specializedCenters' in dept && (dept as any).specializedCenters?.length > 0 && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/50 via-white to-orange-100/40 overflow-hidden shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300 z-10" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                    <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                                        <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Building2 size={20} /></span> Specialized Centers</h3>
                                        <ul className="space-y-3">{(dept as any).specializedCenters.map((c: string, i: number) => <li key={i} className="flex items-center gap-2"><ChevronRight size={16} /> {c}</li>)}</ul>
                                    </div>
                                    <div className="h-64 md:h-auto min-h-[200px] overflow-hidden order-1 md:order-2">
                                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" alt="Specialized Centers" loading="lazy" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* 5. Student Life & Placements */}
                <section id="student-life" className="mb-24 scroll-mt-24 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`h-px w-12 ${dept.theme}`}></span>
                        <span className="font-bold uppercase tracking-widest text-xs text-secondary-500">Student Life &amp; Placements</span>
                    </div>
                    <h2 className="text-4xl font-heading font-black uppercase text-secondary-900 mb-8">Student Life &amp; Placements</h2>
                    <div className="space-y-8">
                        {'placementRecords' in dept && (dept as any).placementRecords && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Briefcase size={20} /></span> Placement Records</h3>
                                <div className="flex flex-wrap gap-8 mb-4">
                                    <div><span className="text-xs uppercase text-secondary-500 font-bold">Highest Package</span><p className="text-2xl font-black text-primary-500">{(dept as any).placementRecords.highestPackage}</p></div>
                                    <div><span className="text-xs uppercase text-secondary-500 font-bold">Average Package</span><p className="text-2xl font-black text-secondary-900">{(dept as any).placementRecords.averagePackage}</p></div>
                                </div>
                                <p className="text-sm text-secondary-500 mb-2">Top recruiters:</p>
                                <div className="flex flex-wrap gap-2">{(dept as any).placementRecords.topRecruiters?.map((r: string, i: number) => <span key={i} className="px-3 py-1 rounded-full bg-orange-100 text-primary-700 text-sm font-semibold border border-orange-200/50">{r}</span>)}</div>
                            </div>
                        )}
                        {'studentClubs' in dept && (dept as any).studentClubs?.length > 0 && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Users size={20} /></span> Student Clubs &amp; Professional Chapters</h3>
                                <p className="text-secondary-600 mb-4">Activities related to IEEE, ACM, CSI and technical clubs.</p>
                                <div className="flex flex-wrap gap-3">{(dept as any).studentClubs.map((c: string, i: number) => <span key={i} className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-200/50 font-semibold text-secondary-800">{c}</span>)}</div>
                            </div>
                        )}
                        {'workshopsEvents' in dept && (dept as any).workshopsEvents?.length > 0 && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><Mic size={20} /></span> Workshops &amp; Events</h3>
                                <ul className="space-y-3">{(dept as any).workshopsEvents.map((e: { title: string; date: string }, i: number) => <li key={i} className="flex justify-between items-center py-2 border-b border-orange-100 last:border-0"><span className="font-semibold text-secondary-800">{e.title}</span><span className="text-primary-600 font-bold text-sm">{e.date}</span></li>)}</ul>
                            </div>
                        )}
                        {'alumniNetwork' in dept && (dept as any).alumniNetwork && (
                            <div className="relative rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 p-8 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.12)] transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2"><span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-primary-600"><GraduationCap size={20} /></span> Alumni Network</h3>
                                <p className="text-secondary-600 leading-relaxed mb-6">{(dept as any).alumniNetwork}</p>
                                {'alumni' in dept && (dept as any).alumni?.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {(dept as any).alumni.map((alum: { name: string; role: string; company: string; photo: string; quote: string }, i: number) => (
                                            <div
                                                key={i}
                                                className="group relative rounded-2xl overflow-hidden border border-orange-200/60 bg-gradient-to-br from-orange-50 via-white to-orange-100/40 shadow-[0_8px_26px_rgba(242,90,34,0.14)] hover:shadow-[0_14px_44px_rgba(242,90,34,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/80 hover:ring-2 hover:ring-orange-200/60"
                                            >
                                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                                                <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-orange-200/40 blur-3xl" />

                                                <div className="relative h-44 overflow-hidden bg-orange-100">
                                                    <img src={alum.photo} alt={alum.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-orange-950/55 via-orange-950/15 to-transparent" />
                                                    <div className="absolute bottom-3 left-3 right-3">
                                                        <p className="font-black text-white text-lg drop-shadow-md">{alum.name}</p>
                                                        <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                                                            <span className="text-orange-100 text-sm font-semibold">{alum.role}</span>
                                                            <span className="text-orange-200/90 text-xs font-bold">•</span>
                                                            <span className="text-orange-100 text-sm font-semibold">{alum.company}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-5 bg-gradient-to-b from-white to-orange-50/70 border-t border-orange-200/50">
                                                    <p className="text-secondary-700 text-sm leading-relaxed italic">
                                                        <Quote size={16} className="inline-block -mt-0.5 mr-2 text-primary-500" />
                                                        {alum.quote}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                </section>

                {/* Student Projects */}
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
                            <div key={i} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange-500/0 via-primary-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                <div className="h-48 overflow-hidden relative">
                                    <img src={proj.img} alt={proj.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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

                {/* Achievements & Contact */}
                <section id="contact" className="mb-24 scroll-mt-24 pt-8 border-t border-gray-200 flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2 relative rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(242,90,34,0.12)] border border-orange-200/60 bg-gradient-to-br from-orange-50/80 via-white to-orange-100/40 overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-primary-500 to-orange-300" />
                        <h3 className="text-3xl font-heading font-black uppercase text-secondary-900 mb-8 border-b border-orange-200 pb-4 flex items-center gap-2">
                            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 text-primary-600"><Award size={24} /></span>
                            Key Achievements
                        </h3>
                        <ul className="space-y-6">
                            {dept.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 p-2 rounded-full bg-orange-100 text-primary-600">
                                        <Award size={20} />
                                    </div>
                                    <p className="text-lg font-bold text-secondary-800 leading-snug">{ach}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className={`lg:w-1/2 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-white ${dept.theme} ring-2 ring-white/20`}>
                        <h3 className="text-3xl font-heading font-black uppercase mb-8 border-b border-white/20 pb-4 text-white drop-shadow-sm">
                            Department Contact
                        </h3>
                        <p className="text-lg font-bold mb-6">
                            Have questions about admissions, research opportunities, or academic curriculum?
                        </p>
                        <p className="text-base leading-relaxed font-medium mb-8 opacity-95">
                            Reach out to us directly — we&apos;re here to help.
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
                    </div>
                </section>

                {/* Department Gallery */}
                <section id="gallery" className="mb-8 scroll-mt-24 pt-8 border-t border-gray-200">
                    <div className="text-center mb-12">
                        <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 font-bold uppercase tracking-[0.2em] text-[11px] mb-4">Discover</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-secondary-900">
                            Department Gallery
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {dept.gallery.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`rounded-2xl overflow-hidden border border-orange-200/40 shadow-[0_4px_20px_rgba(242,90,34,0.08)] hover:shadow-[0_8px_28px_rgba(242,90,34,0.14)] transition-all duration-300 group aspect-[4/3] bg-gradient-to-b from-orange-50/20 to-white ${i === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto' : ''}`}
                            >
                                <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[140px] md:min-h-[200px]" />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DepartmentDetail;