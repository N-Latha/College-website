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
        },
        // 1. About the Department
        aboutDepartment: {
            history: 'The Department of Computer Science and Engineering was established in 2008 with a mission to deliver world-class education in computing. Over the years we have grown into a leading center for AI, software engineering, and cybersecurity.',
            significance: 'CSE is at the heart of digital transformation across industries. Our graduates drive innovation in IT services, product companies, startups, and research organizations worldwide.'
        },
        visionMission: {
            vision: 'To be a globally recognized department in computer science education and research, nurturing innovators who shape the future of technology.',
            mission: 'To impart quality technical education through outcome-based learning, industry collaboration, and research, producing socially responsible engineers.'
        },
        advisoryBoard: [
            { name: 'Mr. Rajesh Kumar', role: 'Industry Advisor', affiliation: 'Tech Mahindra', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200' },
            { name: 'Dr. Smita Nair', role: 'Academic Advisor', affiliation: 'IIT Hyderabad', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200' },
            { name: 'Ms. Priya Sharma', role: 'Industry Advisor', affiliation: 'Infosys Labs', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200' }
        ],
        // 2. Academics & Curriculum
        syllabus: 'Semester-wise breakdown includes Engineering Mathematics, Programming in C, Data Structures, Algorithms, DBMS, Computer Networks, AI/ML, and electives in Cloud, Cyber Security, and IoT. Total credits: 160 for B.Tech.',
        academicCalendar: [
            { event: 'Semester begins', date: 'Jul 15' },
            { event: 'Mid-term examinations', date: 'Sep 10–20' },
            { event: 'Industrial visit / Hackathon', date: 'Oct' },
            { event: 'End-semester examinations', date: 'Nov 20 – Dec 10' }
        ],
        regulations: 'Grading: 10-point scale. Minimum 75% attendance required. CGPA ≥ 5.0 for pass. Details in JNTUH / AICTE norms and department handbook.',
        // 3. Faculty & Research
        researchDevelopment: {
            description: 'Active R&D in AI/ML, cybersecurity, and distributed systems with funded projects from DST and industry.',
            projects: ['Smart City IoT Platform', 'Secure Voting System', 'Healthcare Analytics'],
            patents: ['Patent on Anomaly Detection in Networks', 'Patent on Low-power Edge AI'],
            centers: ['Center for AI & Data Science', 'Cyber Security Research Lab']
        },
        publications: [
            { title: 'Deep Learning for NLP', journal: 'IEEE Access', year: '2025' },
            { title: 'Secure Cloud Architecture', journal: 'Springer CCIS', year: '2024' }
        ],
        // 4. Infrastructure (lab details extend laboratories)
        labDetails: [
            { name: 'Programming Lab', equipment: 'High-end PCs, Linux/Windows, IDEs', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600' },
            { name: 'AI & ML Lab', equipment: 'GPU servers, TensorFlow, PyTorch', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600' },
            { name: 'Cyber Security Lab', equipment: 'Kali Linux, Wireshark, simulation tools', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600' }
        ],
        departmentalLibrary: 'Department library holds 2000+ titles in computer science, 50+ print journals, and access to ACM, IEEE Xplore, and Springer.',
        libraryBooks: [
            'https://images.unsplash.com/photo-1512820790803-83ca750daa84?q=80&w=400',
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400',
            'https://images.unsplash.com/photo-1589998059171-988d314df74f?q=80&w=400',
            'https://images.unsplash.com/photo-1497633762265-9d179a989aa8?q=80&w=400'
        ],
        alumniImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
        specializedCenters: ['AI & Robotics Research Center', 'Industry Incubation Cell', 'Center of Excellence in Cloud'],
        // 5. Student Life & Placements
        placementRecords: {
            highestPackage: '25 LPA',
            averagePackage: '6.5 LPA',
            topRecruiters: ['Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Accenture']
        },
        studentClubs: ['IEEE Student Branch', 'ACM Chapter', 'CSI Chapter', 'Coding Club', 'Robotics Club'],
        workshopsEvents: [
            { title: 'Guest Lecture: AI in Industry', date: 'Oct 2025' },
            { title: 'National Hackathon', date: 'Nov 2025' },
            { title: 'Industrial Visit – Tech Park', date: 'Dec 2025' }
        ],
        alumni: [
            { name: 'Rahul Sharma', role: 'Software Engineer', company: 'Microsoft', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300', quote: 'SRIT CSE gave me the foundation to crack top product companies. The labs and faculty mentorship were invaluable.' },
            { name: 'Priya Reddy', role: 'Data Scientist', company: 'Amazon', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300', quote: 'The AI/ML curriculum and project exposure prepared me for real-world data challenges.' },
            { name: 'Arjun Kumar', role: 'Tech Lead', company: 'Google', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300', quote: 'From coding clubs to hackathons, SRIT shaped my problem-solving mindset. Forever grateful.' },
            { name: 'Sneha Patel', role: 'Product Manager', company: 'Flipkart', photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300', quote: 'The industry connect and placement support at SRIT opened doors I never imagined.' },
            { name: 'Vikram Singh', role: 'Cybersecurity Analyst', company: 'TCS', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300', quote: 'Cyber Security Lab and faculty guidance helped me specialize in a niche that\'s in high demand.' },
            { name: 'Ananya Gupta', role: 'ML Engineer', company: 'Infosys', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300', quote: 'SRIT\'s research culture and IEEE chapter sparked my interest in machine learning early on.' }
        ],
        alumniNetwork: 'Our alumni network spans 5000+ professionals. Connect via LinkedIn group "SRIT CSE Alumni" and annual alumni meet.'
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
        },
        aboutDepartment: {
            history: 'The ECE department was established in 2008 to offer strong foundations in electronics, communications, and embedded systems. We have since built state-of-the-art labs and industry partnerships.',
            significance: 'ECE drives innovation in wireless systems, IoT, VLSI, and signal processing. Our graduates excel in core electronics, semiconductor, and telecom sectors.'
        },
        visionMission: {
            vision: 'To be a leading department in electronics and communication engineering, recognized for quality education and research in VLSI, IoT, and communications.',
            mission: 'To provide industry-relevant curriculum, hands-on training, and research opportunities that produce employable and entrepreneurial engineers.'
        },
        advisoryBoard: [
            { name: 'Dr. Amit Verma', role: 'Academic Advisor', affiliation: 'IIIT Hyderabad', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200' },
            { name: 'Mr. Suresh Reddy', role: 'Industry Advisor', affiliation: 'Qualcomm India', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200' }
        ],
        syllabus: 'B.Tech ECE covers Analog & Digital Electronics, Signals & Systems, Communication Engineering, VLSI, Embedded Systems, and electives. Total 160 credits.',
        academicCalendar: [
            { event: 'Semester begins', date: 'Jul 15' },
            { event: 'Mid-term examinations', date: 'Sep 10–20' },
            { event: 'Workshop / Industry talk', date: 'Oct' },
            { event: 'End-semester examinations', date: 'Nov 20 – Dec 10' }
        ],
        regulations: '10-point grading. 75% attendance mandatory. Department follows AICTE/JNTUH regulations.',
        researchDevelopment: {
            description: 'R&D in VLSI design, IoT, and signal processing with DST and industry funding.',
            projects: ['Low-power IoT Node', '5G Prototype'],
            patents: ['Patent on Energy-efficient RF front-end'],
            centers: ['IoT Center of Excellence', 'VLSI Design Lab']
        },
        publications: [
            { title: 'VLSI Design for IoT', journal: 'IEEE TVLSI', year: '2024' }
        ],
        labDetails: [
            { name: 'VLSI Design Lab', equipment: 'Cadence, Xilinx FPGA kits', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600' },
            { name: 'Embedded Systems Lab', equipment: 'ARM boards, Raspberry Pi, sensors', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600' }
        ],
        departmentalLibrary: 'ECE library: 1500+ titles, IEEE journals, and e-resources.',
        libraryBooks: [
            'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=400',
            'https://images.unsplash.com/photo-1589998059171-988d314df74f?q=80&w=400',
            'https://images.unsplash.com/photo-1512820790803-83ca750daa84?q=80&w=400',
            'https://images.unsplash.com/photo-1507845267040-c6e22b9e28e8?q=80&w=400'
        ],
        alumni: [
            { name: 'Karthik Rao', role: 'VLSI Design Engineer', company: 'Qualcomm', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300', quote: 'ECE labs and Cadence training gave me the edge in VLSI. SRIT\'s industry tie-ups made all the difference.' },
            { name: 'Divya Nair', role: 'Embedded Systems Engineer', company: 'Texas Instruments', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300', quote: 'The IoT and embedded labs were world-class. I landed my dream job right after graduation.' },
            { name: 'Manoj Kumar', role: 'RF Engineer', company: 'Intel', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300', quote: 'From microwave lab to antenna testing—SRIT prepared me for core electronics roles.' },
            { name: 'Lakshmi Reddy', role: 'Signal Processing Specialist', company: 'Wipro', photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300', quote: 'DSP and communications courses were rigorous. The faculty pushed us to excel.' },
            { name: 'Suresh Babu', role: 'IoT Solutions Architect', company: 'L&T', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300', quote: 'IoT Center of Excellence at SRIT was my launchpad into smart systems and Industry 4.0.' },
            { name: 'Meera Krishnan', role: 'Hardware Validation Engineer', company: 'Qualcomm', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300', quote: 'Hands-on PCB prototyping and FPGA labs made me industry-ready from day one.' }
        ],
        specializedCenters: ['IoT CoE', 'Industry-Sponsored VLSI Lab'],
        placementRecords: {
            highestPackage: '18 LPA',
            averagePackage: '5.5 LPA',
            topRecruiters: ['Qualcomm', 'Texas Instruments', 'Intel', 'Wipro', 'L&T']
        },
        studentClubs: ['IEEE ECE Chapter', 'IoT Club', 'Robotics Club'],
        workshopsEvents: [
            { title: 'VLSI Workshop', date: 'Oct 2025' },
            { title: 'Industrial Visit', date: 'Nov 2025' }
        ],
        alumniNetwork: 'SRIT ECE Alumni network – connect via annual meet and LinkedIn.'
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
        },
        aboutDepartment: {
            history: 'Mechanical Engineering at SRIT started in 2008 with a focus on thermal, manufacturing, and design. We have evolved with robotics, automation, and industry 4.0 labs.',
            significance: 'Mechanical engineers are essential in manufacturing, automotive, energy, and aerospace. Our department prepares students for core and interdisciplinary roles.'
        },
        visionMission: {
            vision: 'To be a center of excellence in mechanical engineering education and research, with strong industry and research linkages.',
            mission: 'To deliver outcome-based education, hands-on training in labs and workshops, and research in thermal, design, and automation.'
        },
        advisoryBoard: [
            { name: 'Mr. Ravi Kumar', role: 'Industry Advisor', affiliation: 'Hyundai Motor', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200' },
            { name: 'Dr. Anitha Rao', role: 'Academic Advisor', affiliation: 'NIT Warangal', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200' }
        ],
        syllabus: 'B.Tech Mechanical: Thermodynamics, Fluid Mechanics, Machine Design, CAD/CAM, Robotics, and electives. 160 credits.',
        academicCalendar: [
            { event: 'Semester begins', date: 'Jul 15' },
            { event: 'Mid-term examinations', date: 'Sep 10–20' },
            { event: 'BAJA / Design event', date: 'Oct' },
            { event: 'End-semester examinations', date: 'Nov 20 – Dec 10' }
        ],
        regulations: '10-point grading. 75% attendance. AICTE/JNTUH norms applicable.',
        researchDevelopment: {
            description: 'Research in thermal systems, composite materials, and robotics with industry collaboration.',
            projects: ['Solar Vehicle', 'Industrial Robot'],
            patents: ['Patent on Heat Exchanger Design'],
            centers: ['Robotics Lab', 'Advanced Manufacturing Center']
        },
        publications: [
            { title: 'Thermal Analysis of Hybrid Systems', journal: 'Applied Thermal Engg', year: '2024' }
        ],
        labDetails: [
            { name: 'Thermal Engineering Lab', equipment: 'Heat exchanger, refrigeration test rigs', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600' },
            { name: 'CAD/CAM & CNC Lab', equipment: 'CNC machines, CAD software', img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=600' }
        ],
        departmentalLibrary: 'MECH library: 1800+ titles, ASME and Springer access.',
        libraryBooks: [
            'https://images.unsplash.com/photo-1589998059171-988d314df74f?q=80&w=400',
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400',
            'https://images.unsplash.com/photo-1497633762265-9d179a989aa8?q=80&w=400',
            'https://images.unsplash.com/photo-1512820790803-83ca750daa84?q=80&w=400'
        ],
        alumni: [
            { name: 'Rajesh Kumar', role: 'Design Engineer', company: 'Tata Motors', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300', quote: 'CAD/CAM and CNC labs at SRIT gave me the skills to design and manufacture. BAJA SAE was a game-changer.' },
            { name: 'Pooja Sharma', role: 'Thermal Engineer', company: 'Mahindra', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300', quote: 'Thermal engineering and heat transfer courses were top-notch. SRIT shaped my career in core mechanical.' },
            { name: 'Sandeep Reddy', role: 'Robotics Engineer', company: 'L&T', photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300', quote: 'The Robotics Lab and automation projects prepared me for Industry 4.0 roles.' },
            { name: 'Kavitha Nair', role: 'Manufacturing Lead', company: 'Capgemini', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300', quote: 'From workshop to 3D printing center—SRIT exposed me to the full manufacturing spectrum.' },
            { name: 'Venkat Rao', role: 'Automotive Design Specialist', company: 'Hyundai', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300', quote: 'Design competitions and industry visits at SRIT opened my eyes to real-world engineering.' },
            { name: 'Anil Kumar', role: 'Maintenance Engineer', company: 'L&T', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300', quote: 'Fluid mechanics and machinery labs built my foundation. SRIT alumni network helped me land here.' }
        ],
        specializedCenters: ['Robotics & Automation Lab', '3D Printing & Prototyping Center'],
        placementRecords: {
            highestPackage: '12 LPA',
            averagePackage: '4.5 LPA',
            topRecruiters: ['L&T', 'Tata Motors', 'Mahindra', 'Capgemini']
        },
        studentClubs: ['SAE Collegiate Club', 'Robotics Club', 'Innovation Club'],
        workshopsEvents: [
            { title: 'CAD/CAM Workshop', date: 'Oct 2025' },
            { title: 'Industry Visit', date: 'Nov 2025' }
        ],
        alumniNetwork: 'SRIT Mechanical Alumni – annual meet and industry mentorship program.'
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
        },
        aboutDepartment: {
            history: 'The Civil Engineering department was established in 2008 to train engineers for infrastructure, construction, and sustainable development. We have strong ties with PWD and construction firms.',
            significance: 'Civil engineers build the nation’s infrastructure. Our graduates work in construction, consulting, government, and smart city projects.'
        },
        visionMission: {
            vision: 'To be a leading department in civil engineering education and research, contributing to sustainable and smart infrastructure.',
            mission: 'To provide quality education in structural, environmental, and transportation engineering with field exposure and industry projects.'
        },
        advisoryBoard: [
            { name: 'Er. Venkat Rao', role: 'Industry Advisor', affiliation: 'L&T Construction', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200' },
            { name: 'Dr. Kavitha M', role: 'Academic Advisor', affiliation: 'JNTUH', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200' }
        ],
        syllabus: 'B.Tech Civil: Structural Analysis, Concrete Technology, Geotechnical, Environmental, Transportation Engineering, and electives. 160 credits.',
        academicCalendar: [
            { event: 'Semester begins', date: 'Jul 15' },
            { event: 'Mid-term examinations', date: 'Sep 10–20' },
            { event: 'Site visit / Survey camp', date: 'Oct' },
            { event: 'End-semester examinations', date: 'Nov 20 – Dec 10' }
        ],
        regulations: '10-point grading. 75% attendance. AICTE/JNTUH regulations.',
        researchDevelopment: {
            description: 'Research in sustainable materials, structural health, and water resources.',
            projects: ['Eco-friendly Materials', 'Traffic Management'],
            patents: ['Patent on Green Concrete'],
            centers: ['Material Testing Lab', 'Smart City Planning Cell']
        },
        publications: [
            { title: 'Sustainable Concrete', journal: 'Construction & Building Materials', year: '2024' }
        ],
        labDetails: [
            { name: 'Concrete Technology Lab', equipment: 'Compression testing, mix design', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600' },
            { name: 'Survey Lab', equipment: 'Total station, GPS, drones', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600' }
        ],
        departmentalLibrary: 'Civil library: 2000+ titles, ASCE and ICE journals.',
        libraryBooks: [
            'https://images.unsplash.com/photo-1507845267040-c6e22b9e28e8?q=80&w=400',
            'https://images.unsplash.com/photo-1589998059171-988d314df74f?q=80&w=400',
            'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400',
            'https://images.unsplash.com/photo-1512820790803-83ca750daa84?q=80&w=400'
        ],
        alumni: [
            { name: 'Srinivas Reddy', role: 'Site Engineer', company: 'L&T Construction', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300', quote: 'Survey camp and site visits at SRIT were invaluable. I use those skills every day on mega projects.' },
            { name: 'Lakshmi Devi', role: 'Structural Design Engineer', company: 'IRCON', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300', quote: 'Concrete tech and structural analysis labs built my core. SRIT\'s BAI chapter connected me to industry.' },
            { name: 'Ramesh Kumar', role: 'Project Manager', company: 'NPCIL', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300', quote: 'From geotech to environmental—SRIT gave me a holistic view of civil engineering.' },
            { name: 'Swathi Rao', role: 'Transportation Planner', company: 'State PWD', photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300', quote: 'Transportation and smart city electives shaped my career in urban planning.' },
            { name: 'Venugopal N', role: 'Quality Control Engineer', company: 'L&T', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300', quote: 'Material testing lab and quality focus at SRIT prepared me for construction QA/QC roles.' },
            { name: 'Geetha M', role: 'Environmental Consultant', company: 'Consulting Firm', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300', quote: 'Environmental engineering and water quality labs sparked my interest in sustainability.' }
        ],
        specializedCenters: ['Material Testing Hub', 'Water Quality Lab', 'Digital Twin Lab'],
        placementRecords: {
            highestPackage: '10 LPA',
            averagePackage: '4 LPA',
            topRecruiters: ['L&T', 'IRCON', 'NPCIL', 'State PWD']
        },
        studentClubs: ['BAI Student Chapter', 'Green Building Club', 'Survey Club'],
        workshopsEvents: [
            { title: 'Structural Design Workshop', date: 'Oct 2025' },
            { title: 'Site Visit', date: 'Nov 2025' }
        ],
        alumniNetwork: 'SRIT Civil Alumni network – reconnect via annual meet and BAI events.'
    }
];
