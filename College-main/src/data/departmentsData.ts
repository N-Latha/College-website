export const departmentsData = [
    {
        id: 'cse',
        code: 'CSE',
        name: 'Computer Science and Engineering',
        theme: 'bg-blue-500',
        shortDesc: 'Focuses on AI, ML, Software development and data science.',
        longDesc: 'The Department of Computer Science and Engineering focuses on modern computing technologies such as Artificial Intelligence, Cloud Computing, and Cyber Security. We prepare students for industry leadership through rigorous academics and practical innovation.',
        bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200',
        cardImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600',
        programs: [
            'B.Tech in Computer Science and Engineering',
            'M.Tech in Computer Science',
            'Minor in Artificial Intelligence & Machine Learning',
            'Minor in Cyber Security'
        ],
        hod: {
            name: 'Dr. John Doe',
            title: 'Head of Department',
            qualification: 'Ph.D. in Computer Science',
            message: 'Our vision is to empower students to build the future of technology. We focus on bridging the gap between academia and the fast-paced IT industry.',
            photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400'
        },
        laboratories: [
            'Programming Lab',
            'Data Structures Lab',
            'Artificial Intelligence & Machine Learning Lab',
            'Cloud Computing & Networks Lab',
            'Cyber Security Lab'
        ],
        faculty: [
            { name: 'Dr. Jane Smith', designation: 'Professor', research: 'Machine Learning, NLP', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300' },
            { name: 'Prof. Mark Davis', designation: 'Associate Professor', research: 'Cyber Security, Cryptography', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300' },
            { name: 'Dr. Emily Chen', designation: 'Assistant Professor', research: 'Cloud Computing, Distributed Systems', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300' },
            { name: 'Prof. Robert Wilson', designation: 'Assistant Professor', research: 'Software Engineering, Agile', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300' }
        ],
        achievements: [
            '95% Placement Record in top MNCs',
            'Active IEEE Student Chapter with over 200 members',
            'Winners of Smart India Hackathon 2024',
            '50+ Research Publications in high-impact journals this year'
        ],
        stats: {
            students: 1200,
            faculty: 85,
            labs: 12,
            placementRate: 95
        },
        facilities: [
            'Smart Classrooms with Interactive Flat Panels',
            'Advanced High-Performance Computing Cluster',
            'AI & Robotics Research Center',
            'Industry Collaborative Incubation Cell'
        ],
        projects: [
            { title: 'Autonomous Drone Navigation', category: 'AI Project', img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=400' },
            { title: 'Smart Home Automation', category: 'IoT Project', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400' },
            { title: 'College ERP System', category: 'Web App', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600',
            'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=600',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600'
        ],
        contact: {
            email: 'cse@srit.ac.in',
            phone: '+91 98765 43210',
            location: 'CSE Block, SRIT Campus'
        }
    },
    {
        id: 'ece',
        code: 'ECE',
        name: 'Electronics and Communication',
        theme: 'bg-orange-500',
        shortDesc: 'VLSI, Communications, and Embedded Systems fostering hardware innovation.',
        longDesc: 'The Electronics and Communication Engineering department drives innovation in hardware, wireless technology, and embedded systems. We equip our students to shape the future of connectivity and smart devices.',
        bannerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',
        cardImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600',
        programs: [
            'B.Tech in Electronics and Communication Engineering',
            'M.Tech in VLSI Design',
            'Minor in IoT and Embedded Systems',
        ],
        hod: {
            name: 'Dr. Alice Carter',
            title: 'Head of Department',
            qualification: 'Ph.D. in VLSI Design',
            message: 'We blend theoretical knowledge with hands-on experimentation, pushing the boundaries of what electronic systems can achieve in the modern world.',
            photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400'
        },
        laboratories: [
            'VLSI Design Lab',
            'Embedded Systems Lab',
            'Digital Signal Processing Lab',
            'Microwave and Optical Communications Lab',
            'IoT Applications Lab'
        ],
        faculty: [
            { name: 'Dr. Michael Chang', designation: 'Professor', research: 'RF and Microwave', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300' },
            { name: 'Prof. Sarah Lee', designation: 'Associate Professor', research: 'Digital Image Processing', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300' },
            { name: 'Dr. James White', designation: 'Assistant Professor', research: 'Embedded Systems', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300' },
            { name: 'Prof. Linda Brown', designation: 'Assistant Professor', research: 'VLSI Architectures', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300' }
        ],
        achievements: [
            '90% Placement Record in core hardware companies',
            'Best Department Award 2025',
            'Funding received from DST for Advanced Research',
            'Multiple patents filed in IoT technologies'
        ],
        stats: {
            students: 900,
            faculty: 65,
            labs: 10,
            placementRate: 90
        },
        facilities: [
            'Industry-Sponsored IoT Center of Excellence',
            'Advanced Antenna Testing Chamber',
            'PCB Prototyping Facility',
            'Smart Connected Digital Classrooms'
        ],
        projects: [
            { title: 'Smart Agriculture Node', category: 'Embedded System', img: 'https://images.unsplash.com/photo-1580828369019-22204d608e64?q=80&w=400' },
            { title: 'Wireless Health Monitor', category: 'Biomedical IoT', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400' },
            { title: 'High-Speed FPGA Implementation', category: 'VLSI Design', img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=400' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600',
            'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=600',
            'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600'
        ],
        contact: {
            email: 'ece@srit.ac.in',
            phone: '+91 98765 43211',
            location: 'ECE Block, SRIT Campus'
        }
    },
    {
        id: 'mech',
        code: 'MECH',
        name: 'Mechanical Engineering',
        theme: 'bg-slate-500',
        shortDesc: 'Advanced Robotics, Thermal Engineering, and Automotive Design.',
        longDesc: 'Mechanical Engineering at SRIT merges core engineering principles with modern computer-aided design, robotics, and sustainable manufacturing practices to create robust solutions to physical world problems.',
        bannerImage: 'https://images.unsplash.com/photo-1565063073994-0cf7fcd025ac?q=80&w=1200',
        cardImage: 'https://images.unsplash.com/photo-1565063073994-0cf7fcd025ac?q=80&w=600',
        programs: [
            'B.Tech in Mechanical Engineering',
            'M.Tech in Thermal Engineering',
            'Minor in Robotics and Automation',
        ],
        hod: {
            name: 'Dr. Robert Allen',
            title: 'Head of Department',
            qualification: 'Ph.D. in Thermal Science',
            message: 'Engineering is the art of directing the great sources of power in nature for the use and convenience of man. We mold students into practical innovators.',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400'
        },
        laboratories: [
            'Thermal Engineering Lab',
            'CAD/CAM & CNC Lab',
            'Fluid Mechanics & Machinery Lab',
            'Robotics & Automation Lab',
            'Material Testing Facility'
        ],
        faculty: [
            { name: 'Dr. Kevin Harris', designation: 'Professor', research: 'Thermodynamics', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300' },
            { name: 'Prof. Nancy Green', designation: 'Associate Professor', research: 'Composite Materials', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300' },
            { name: 'Dr. Paul Robinson', designation: 'Assistant Professor', research: 'Robotics', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300' },
            { name: 'Prof. Mark Clark', designation: 'Assistant Professor', research: 'Automotive Design', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300' }
        ],
        achievements: [
            '85% Placement Record in top manufacturing firms',
            'Winners of National BAJA SAE Design Competition',
            'Established State-of-the-art Robotics Lab in 2025',
            'Strong Industry Tie-ups with Automotive Sector'
        ],
        stats: {
            students: 800,
            faculty: 55,
            labs: 15,
            placementRate: 85
        },
        facilities: [
            'Heavy Machinery Workshops',
            'Advanced 3D Printing and Prototyping Center',
            'Wind Tunnel Testing Facility',
            'Smart Classrooms'
        ],
        projects: [
            { title: 'Solar Powered Vehicle', category: 'Automotive', img: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=400' },
            { title: 'Industrial Pick-and-Place Robot', category: 'Robotics', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400' },
            { title: 'Wind Turbine Optimization', category: 'Thermal', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600',
            'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=600'
        ],
        contact: {
            email: 'mech@srit.ac.in',
            phone: '+91 98765 43212',
            location: 'MECH Block, SRIT Campus'
        }
    },
    {
        id: 'civil',
        code: 'CIVIL',
        name: 'Civil Engineering',
        theme: 'bg-emerald-500',
        shortDesc: 'Sustainable Infrastructure, Smart Cities, and Structural Engineering.',
        longDesc: 'Civil Engineering forms the backbone of infrastructure. We teach the design, construction, and maintenance of the physical and naturally built environment, prioritizing sustainable and smart urban planning.',
        bannerImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200',
        cardImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600',
        programs: [
            'B.Tech in Civil Engineering',
            'M.Tech in Structural Engineering',
            'Minor in Smart City Infrastructure',
        ],
        hod: {
            name: 'Dr. Elizabeth Taylor',
            title: 'Head of Department',
            qualification: 'Ph.D. in Structural Engineering',
            message: 'We build the world. From sprawling bridges to towering skyscrapers, civil engineering is a profession of monumental impact. Are you ready to leave your mark?',
            photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400'
        },
        laboratories: [
            'Concrete Technology Lab',
            'Geotechnical Engineering Lab',
            'Environmental Engineering Lab',
            'Transportation Engineering Lab',
            'Computer Aided Design (CAD) Lab'
        ],
        faculty: [
            { name: 'Dr. Thomas Moore', designation: 'Professor', research: 'Structural Dynamics', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300' },
            { name: 'Prof. Karen Hall', designation: 'Associate Professor', research: 'Environmental Engg', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300' },
            { name: 'Dr. Andrew King', designation: 'Assistant Professor', research: 'Transportation', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300' },
            { name: 'Prof. George Wright', designation: 'Assistant Professor', research: 'Geotech', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300' }
        ],
        achievements: [
            '88% Placement Record with top construction giants',
            'Award-winning Sustainable Concrete Research',
            'Continuous consulting work with State PWD',
            'Active Builder\'s Association of India (BAI) Chapter'
        ],
        stats: {
            students: 700,
            faculty: 45,
            labs: 11,
            placementRate: 88
        },
        facilities: [
            'Advanced Surveying Equipment (Total Stations/Drones)',
            'Material Testing and Incubation Hub',
            'Water Quality Testing Centers',
            'Digital Twin and Smart City Planning Cells'
        ],
        projects: [
            { title: 'Eco-friendly Paver Blocks', category: 'Materials', img: 'https://images.unsplash.com/photo-1590496733909-64dbecb104ad?q=80&w=400' },
            { title: 'Smart Traffic Management', category: 'Transportation', img: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?q=80&w=400' },
            { title: 'Earthquake Resistant Models', category: 'Structural', img: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=400' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600',
            'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600',
            'https://images.unsplash.com/photo-1533750349088-cd071a92eb9a?q=80&w=600',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600'
        ],
        contact: {
            email: 'civil@srit.ac.in',
            phone: '+91 98765 43213',
            location: 'CIVIL Block, SRIT Campus'
        }
    }
];
