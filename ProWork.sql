create database projectwork;
use  projectwork;
show databases;

/* LIBARIAN */

create table libarian (lname varchar(20),email varchar(20),password varchar(20));

create table stocks(bookid varchar(500),author varchar(500),bookname varchar(500),numberofstocks int,book_img varchar(1000),semester int,subject_name varchar(200),
primary key (bookid));
select * from stocks;
/* 3rd sem */

insert into stocks values

('319CS3PCCOA1','Carl Hamacher Zvonko Vranesic Safwat Zaky','Computer Organization And Embedded Systems',5,'https://drive.google.com/file/d/1EKp428gCvgsksP2OZWtgpmoMbjo9OUMd/view',3,'Computer Organization and Architecture'),
('319CS3PCCOA3','Thomas Rauber, Gudula Runger','Parallel Programming for Multicore and Cluster Systems',5,'https://images.springer.com/sgw/books/medium/9783642378003.jpg',3,'Computer Organization and Architecture'),
('319CS3PCCOA2','David A. Patterson, John L. Hennessy','Computer Organization and Design - The Hardware/Software Interface',5,'https://images-na.ssl-images-amazon.com/images/I/519FtuVhvcL._SX380_BO1,204,203,200_.jpg',3,'Computer Organization and Architecture'),
('319CS3PCCOA4','William Stallings','Computer Organization & Architecture',5,'https://drive.google.com/file/d/1uf8z28OvhEbEERrccm62Mf_kRtbgIeKo/view',3,'Computer Organization and Architecture');

insert into stocks values
('319CS3PCOOJ1','Herbert Schildt','Java the Complete Reference',5,'https://assetscdn1.paytm.com/images/catalog/product/9/97/9789339212094_81104/1563554899831_1.jpg?imwidth=320&impolicy=hq',3,'Object Oriented Programming with Java'),
('319CS3PCOOJ2','Y. Daniel Liang','Introduction to JAVA Programming',5,'https://images-na.ssl-images-amazon.com/images/I/51lkHc6Hl1L._SX258_BO1,204,203,200_.jpg',3,'Object Oriented Programming with Java'),
('319CS3PCOOJ3','James P Cohoon,Jack W Davidson','Programming in JAVA 5.0',5,'https://images-na.ssl-images-amazon.com/images/I/51PTEBQQMGL._SX375_BO1,204,203,200_.jpg',3,'Object Oriented Programming with Java'),
('319CS3PCOOJ4','E.BalaGuruSwamy','Programming with Java A Primer',5,'https://images-na.ssl-images-amazon.com/images/I/5172ZMKIMfL._SX371_BO1,204,203,200_.jpg',3,'Object Oriented Programming with Java');

insert into stocks values
('319CS3PCLOD1','Donald P Leach, Albert Paul Malvino & Goutam Sahay','>Digital Principles and Applications',5,'https://n2.sdlcdn.com/imgs/i/7/i/DIGITAL-PRINCIPLES-AND-APPLICATIONS-SDL451750130-1-a1c73.jpeg',3,'Login Design'),
('319CS3PCLOD2','M Morris Mano','Digital Logic and Computer Design',5,'https://images-na.ssl-images-amazon.com/images/I/41aqH42vY-L._SX258_BO1,204,203,200_.jpg',3,'Login Design'),
('319CS3PCLOD3','Donald D Givone','Digital Principles & Design',5,'https://images-na.ssl-images-amazon.com/images/I/51ASw27Xs5L._SX258_BO1,204,203,200_.jpg',3,'Login Design'),
('319CS3PCLOD4','R D Sudhaker Samuel','Illustrative Approach to Logic Design',5,'https://images-na.ssl-images-amazon.com/images/I/41qrZHLvnWL._SY344_BO1,204,203,200_.jpg',3,'Login Design');

insert into stocks values
('319CS3PCDST1','Fundamentals of Data Structures in C','Fundamentals of Data Structures in C',5,'https://i.pinimg.com/236x/3d/cf/17/3dcf1741e11d7a81c524b2fc68c0a584.jpg',3,'Data Structures'),
('319CS3PCDST2','Data Structures using C','Data Structures using C',5,'https://www.pragationline.com/wp-content/uploads/2021/03/DATA-STRUCTURES-USING-C-AND-C-YEDIDYAH-LANGSAM-MOSHE-J.-AUGENSTEIN-ARON-M.-TENENBAUM.jpg',3,'Data Structures'),
('319CS3PCDST3','Data structures and program design in C','Data structures and program design in C',5,'https://images-na.ssl-images-amazon.com/images/I/51eyW36STrL._SX359_BO1,204,203,200_.jpg',3,'Data Structures'),
('319CS3PCDST4','Data Structure using C','Data Structure using C',5,'https://drive.google.com/file/d/1HlqFcQ09xYwvakucqodeN1liXUUDmS9b/view',3,'Data Structures');

insert into stocks values
('319CS3ESMMC1','Advanced Microprocessor and peripherals','A K Ray and K M Bhurchandi.',5,'https://booksbeka.com/image/cache/catalog/ANI/download-550x550h.jpg',3,'Microprocessors and Microcontrollers'),
('319CS3ESMMC2','The 8051 Microcontroller Architecture, Programming & Applications','Kenneth J. Ayala',5,'https://images-na.ssl-images-amazon.com/images/I/51MK9WDSHFL._SX258_BO1,204,203,200_.jpg',3,'Microprocessors and Microcontrollers'),
('319CS3ESMMC3','8051 Microcontroller and Embedded Systems- using Assembly and C','Mohammed Ali mazidi , Janice Gillispie mazidi and rolim d mcKinley',5,'https://easyengineering.net/wp-content/uploads/2018/03/81ppQwnjK5L.jpg',3,'Microprocessors and Microcontrollers'),
('319CS3ESMMC4','Advanced Microprocessors and IBM - Pc Assembly Language Programming','Udaya Kumar and B. Uma shankar',5,'https://images-na.ssl-images-amazon.com/images/I/71pWc9xz69L.jpg',3,'Microprocessors and Microcontrollers');

insert into stocks values
('319MA3BSSDM1','Seymour Lipchitz. M. Lipson','Discrete Mathematics',5,'https://drive.google.com/file/d/1EKp428gCvgsksP2OZWtgpmoMbjo9OUMd/view',3,'Statistics and Discrete Mathematics'),
('319MA3BSSDM2','D. S. Chandrasekharaiah','Graph Theory and Combinatorics',5,'https://rukminim1.flixcart.com/image/312/312/kl9rssw0/book/7/0/u/discrete-mathematical-structures-iiird-sem-4th-edition-b-e-original-imagyfk6ayvgnmtf.jpeg?q=70',3,'Statistics and Discrete Mathematics'),
('319MA3BSSDM3','B. V. Ramana','Higher Engineering Mathematics',10,'https://images-na.ssl-images-amazon.com/images/I/51Qp2TyOzGL._SX370_BO1,204,203,200_.jpg',3,'Statistics and Discrete Mathematics'),
('319MA3BSSDM4','Kenneth H. Rosen','Discrete Mathematics and its Applications',3,'https://images-na.ssl-images-amazon.com/images/I/51E75M0Rm5L._SX374_BO1,204,203,200_.jpg',3,'Statistics and Discrete Mathematics');

/* 4th sem */

insert into stocks values
('419MA4BSLIA1','Linear Algebra and its applications','David C. lay, Steven R. lay, Judi J Mc. Donald',5,'https://images-na.ssl-images-amazon.com/images/I/51xecyCjTKL._SX258_BO1,204,203,200_.jpg',4,'Linear Algebra'),
('419MA4BSLIA2','Linear Algebra and its applications','Gilbert Strang',5,'https://images-na.ssl-images-amazon.com/images/I/511MUkxPscL.jpg',4,'Linear Algebra'),
('419MA4BSLIA3','Schaum’s outline series-Theory and problems of linear algebra','Seymour Lipschutz',5,'https://images-na.ssl-images-amazon.com/images/I/51uLJZuctuL.jpg',4,'Linear Algebra'),
('419MA4BSLIA4','Linear Algebra an Introduction','Richard Bronson & Gabriel B. Costa',5,'https://images-eu.ssl-images-amazon.com/images/I/51TTG1OGH6L._SY264_BO1,204,203,200_QL40_ML2_.jpg',4,'Linear Algebra');

insert into stocks values
('419CS4PCTFC1','Introduction to Automata Theory, Languages and Computation','John E. Hop croft,Rajeev Motwani,Jeffrey D.Ullman:education',5,'https://m.media-amazon.com/images/I/41x21T8bSBL.jpg',4,'Theoretical Foundations of Computations'),
('419CS4PCTFC2','Itroduction to Languages and Automata Theory','John C Martin',5,'(https://www.mheducation.co.in/media/catalog/product/cache/84c63a40cf0771f03c9446b22a7e0f08/9/7/9780070660489_37.jpeg',4,'Theoretical Foundations of Computations'),
('419CS4PCTFC3','An Introduction to formal Languages and Automata','Peter Linz',5,'https://images-na.ssl-images-amazon.com/images/I/616UEKjXzPL._SX407_BO1,204,203,200_.jpg',4,'Theoretical Foundations of Computations'),
('419CS4PCTFC4','Introduction to Computer Theory','Daniel I.A. Cohen',5,'https://media.wiley.com/product_data/coverImage300/23/04711377/0471137723.jpg',4,'Theoretical Foundations of Computations');

insert into stocks values
('419CS4PCDBM1','Fundamental of Database Systems','Ramez Elmasri and Shamkant B Navathe ',5,'https://m.media-amazon.com/images/I/515RW73YtIL._SX260_.jpg',4,'Database Management Systems'),
('419CS4PCDBM2','Database Management Systems','Ramakrishnan and Gehrke',5,'https://images-na.ssl-images-amazon.com/images/I/41QGbYii3OL.jpg',4,'Database Management Systems'),
('419CS4PCDBM3','An Introduction to Database Systems','C.J.Date, A.Kannan,S.Swamynathan',5,'https://images-na.ssl-images-amazon.com/images/I/5173G0M4QXL._AC_UL600_SR486,600_.jpg',4,'Database Management Systems'),
('419CS4PCDBM4','Database Systems:The Complete Book','Hector GarciaMolina,Jeffrey D.Ullman,Jennifer Widom ',5,'https://images-na.ssl-images-amazon.com/images/I/51c7hudZfHL._SX378_BO1,204,203,200_.jpg',4,'Database Management Systems');

insert into stocks values
('419CS4PCADA1','Introduction to the Design and Analysis of Algorithms','Anany Levitin',5,'https://images-na.ssl-images-amazon.com/images/I/615MSAW2RXL._SX258_BO1,204,203,200_.jpg',4,'Analysis and Design of Algorithms'),
('419CS4PCADA2','Introduction to Algorithms','Thomas H Cormen ,Charles E Leiserson,Ronald L Rivest, Clifford Stein',5,'https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX440_BO1,204,203,200_.jpg',4,'Analysis and Design of Algorithms'),
('419CS4PCADA3','Fundamentals of Computer Algorithms','Ellis Horowitz, SatrajSahni and Rajasekharam',5,'https://drive.google.com/file/d/1f9pelukDzdJvKHdpN1fa5ILYKsG7sUJE/view',4,'Analysis and Design of Algorithms'),
('419CS4PCADA4','Analysis and design of Algorithms','Padma Reddy',5,'https://drive.google.com/file/d/1KqPR-mYAikFBwXB-7aFrq-VESuiHJ_5n/view',4,'Analysis and Design of Algorithms');

insert into stocks values
('419CS4PCOPS1','Operating System Concepts','Abraham Silberschatz,Peter Baer Galvin and Greg Gagne',5,'https://media.wiley.com/product_data/coverImage300/55/11180937/1118093755.jpg',4,'Operating Systems'),
('419CS4PCOPS2','Modern Operating System3','Andrew S.Tanenbaum',5,'https://drive.google.com/file/d/12dneeQrEJ9vmvjghDkuO-0u5-agkJieh/view',4,'Operating Systems'),
('419CS4PCOPS3','Operating System: Internals and Design Principles','William Stallings',5,'https://drive.google.com/file/d/1IN4DczATRTBZpqPOWS0kLhIomRRNQHEA/view',4,'Operating Systems'),
('419CS4PCOPS4','Schaums Outline of Operating Systems','J. Archer Harris',5,'https://drive.google.com/file/d/1xPyB9jNGVQInT9w8XMNrVpyhatxBDu_A/view',4,'Operating Systems');

insert into stocks values
('419IC3HSCPH1','An Introduction to Constitution of India and Professional Ethics','Merunandan K.B. and B.R.Venkatesh',5,'https://images-na.ssl-images-amazon.com/images/I/51gJppe8xrL._SX326_BO1,204,203,200_.jpg',4,'Constitution of India, Professional Ethics and Human Rights'),
('419IC3HSCPH2','Constitution of India &Professional Ethics& Human Rights','Phaneesh K. R., Sudha Publication',5,'https://www.cengage.co.in/Book_images_tn/9789386668479_tn.jpg',4,'Constitution of India, Professional Ethics and Human Rights'),
('419IC3HSCPH3','V.N. Shukla s Constitution of India','Mahendra Pal Singh',5,'https://drive.google.com/file/d/1szmXFT2UyEttA1gcrO3gjpa-qUDdSh0y/view',4,'Constitution of India, Professional Ethics and Human Rights'),
('419IC3HSCPH4','Ethics in Engineering','Martin, W. Mike.,Schinzinger, Roland',5,'https://cdn01.sapnaonline.com/bk_images/932/9780071112932.jpg',4,'Constitution of India, Professional Ethics and Human Rights');

/* 5th sem */

insert into stocks values
('520CS5PCAIP1','Stuart J. Russell','Artificial Intelligence',5,'https://images-na.ssl-images-amazon.com/images/I/51qRNHEQbvL._SX355_BO1,204,203,200_.jpg',5,'Artificial Intelligence'),
('520CS5PCAIP2','Elaine Rich','Artificial Intelligence',5,'https://drive.google.com/file/d/1_7QNvvdpTLB2Q2VszqFqbAeTwwAWgZFD/view?usp=sharing',5,'Artificial Intelligence'),
('520CS5PCAIP3','George F Luger','Artificial Intelligence',10,'https://freecomputerbooks.com/covers/Artificial-Intelligence-Structures-and-Strategies-for-Complex-Problem-Solving.jpg',5,'Artificial Intelligence'),
('520CS5PCAIP4','WDavid L. Poole ','Artificial Intelligence',3,'https://images-na.ssl-images-amazon.com/images/I/51cWmPO2NBL.jpg',5,'Artificial Intelligence');

insert into stocks values
('520CS5PCCON1','Behrouz A Forouzan','Data Communications',5,'https://images-na.ssl-images-amazon.com/images/I/71gfvWeTAiL.jpg',5,'Computer Networks'),
('520CS5PCCON2','William Stallings','Data and Computer Communication',5,'https://www.pearsonhighered.com/assets/bigcovers/0/1/3/1/0131392050.jpg',5,'Computer Networks'),
('520CS5PCCON3','Larry L. Peterson','Computer Networks',10,'https://images-na.ssl-images-amazon.com/images/I/51TxuHs3gwL._SX258_BO1,204,203,200_.jpg',5,'Computer Networks'),
('520CS5PCCON4','Peter L Dordal ','An Introduction to Computer Networks',3,'https://cv02.twirpx.net/2657/2657576.jpg?t=20181024015332',5,'Computer Networks');

insert into stocks values
('520CS5PCUSP1','Sumitabha Da','Unix Concepts and  Applications',5,'https://n1.sdlcdn.com/imgs/a/4/7/Unix-Concepts-And-Applications-SDL474560944-1-5fe14.jpg',5,'Unix Shell and System Programming'),
('520CS5PCUSP2','Terrance Chan','UNIX System  Programming using C++',5,'https://cdn01.sapnaonline.com/bk_images/689/9788120314689.jpg',5,'Unix Shell and System Programming'),
('520CS5PCUSP3','W. Richard  Stevens','Advanced Programming  in the UNIX  Environment',10,'https://images-na.ssl-images-amazon.com/images/I/51mKuAND2-L._SX258_BO1,204,203,200_.jpg',5,'Unix Shell and System Programming'),
('520CS5PCUSP4','M.G. Venkatesh  Murthy ','UNIX & Shell  Programming',3,'https://images-na.ssl-images-amazon.com/images/I/413RDWnaW4L._SX380_BO1,204,203,200_.jpg',5,'Unix Shell and System Programming');


insert into stocks values
('520CS5PCSEG1','Ian Somerville','Software Engineering',5,'https://drive.google.com/file/d/1fARKpuDLSBPGpFry6MuivaIOilHCwsiy/view?usp=sharing',5,'Software Engineering'),
('520CS5PCSEG2','Sari Lawrence  Pfleeger, Joanne m  Atlec','Software Engineering theory  and Practice',5,'https://images-na.ssl-images-amazon.com/images/I/51w9Jito5kL._SX360_BO1,204,203,200_.jpg',5,'Software Engineering'),
('520CS5PCSEG3','Waman S Jawadeka','Software Engineering  Principles and Practice',10,'https://drive.google.com/file/d/1wyjXGEtAE52oXOvALwPvK8njNxgcg0Ni/view?usp=sharing',5,'Software Engineering'),
('520CS5PCSEG4','Rogers S Pressman ','Software Engineering: A  Practitioners Approach',3,'https://images-na.ssl-images-amazon.com/images/I/81c+Aj3ItcL.jpg',5,'Software Engineering');

insert into stocks values
('520CS5PEIOT1','ArsheepBahga,  Vijay Madisetti','Internet of Things: A HandsOn Approach',5,'https://images-na.ssl-images-amazon.com/images/I/411WIXXf+eL.jpg',5,'Internet of Things'),
('520CS5PEIOT2','Michael Margolis','Arduino Cookbook',5,'https://drive.google.com/file/d/12Vg52GOhuOhCHcfApUBEB-SEY8G-Qg0-/view?usp=sharing',5,'Internet of Things'),
('520CS5PEIOT3','Neil Cameron','Arduino Applied:  Comprehensive Projects for  Everyday Electronics',10,'https://www.oreilly.com/library/view/arduino-applied-comprehensive/9781484239605/images/978-1-4842-3960-5_CoverFigure.jpg',5,'Internet of Things'),
('520CS5PEIOT4','Brian Evans','Beginning Arduino Programming',3,'https://images-na.ssl-images-amazon.com/images/I/71GkglZA+uL.jpg',5,'Internet of Things');

insert into stocks values
('520CS5PEADS1','T. H Cormen, C.E. Leiserson and R. L. Rivest','Introduction to Algorithms',5,'https://n4.sdlcdn.com/imgs/b/z/6/Introduction-To-Algorithms-Paperback-English-SDL474587042-1-8ecff.jpg',5,'Advanced Data Structures'),
('520CS5PEADS2','Marks Allen Wesis','Data Structures and algorithm analysis in C++',5,'https://images-na.ssl-images-amazon.com/images/I/51GBoxGlSkL.jpg',5,'Advanced Data Structures'),
('520CS5PEADS3','Ellis Horowitz,SatrajSahni and Rajasekharam','Fundamentals of Computer Algorithms',10,'(https://www.pearsonhighered.com/assets/bigcovers/0/2/0/1/0201361221.jpg',5,'Advanced Data Structures'),
('520CS5PEADS4','Allen Weiss','Data structures and Algorithm Analysis in C++',3,'https://images-na.ssl-images-amazon.com/images/I/41CVzZKWBxL.jpg',5,'Advanced Data Structures');

/* 6th sem */

insert into stocks values
('620CS6PCCNS1','Behrouz A.Forouzan and Debdeep Mukhopadhyay','Cryptography and Network Security',5,'https://images-na.ssl-images-amazon.com/images/I/51ghtQ1y-sL._SY445_QL70_ML2_.jpg',6,'Cryptography and Network Security'),
('620CS6PCCNS2','W. Stallings','Cryptography and Network Security. Principles and Practice',5,'https://images-na.ssl-images-amazon.com/images/I/91reK8vkWVL.jpg',6,'Cryptography and Network Security'),
('620CS6PCCNS3','Stinson. D','Cryptography: Theory  and Practice',10,'https://images-na.ssl-images-amazon.com/images/I/71SXfuoN3QL.jpg',6,'Cryptography and Network Security'),
('620CS6PCCNS4','Atul Kahate','Cryptography and Network Security',3,'https://images-na.ssl-images-amazon.com/images/I/61DfbxdVTXL.jpg',6,'Cryptography and Network Security');

insert into stocks values
('620CS6PEBDA1','Seema Acharya','Big Data and Analytics',5,'https://images-na.ssl-images-amazon.com/images/I/41usEaxnGqL._SX258_BO1,204,203,200_.jpg',6,'Big Data Analytics'),
('620CS6PEBDA2','Andy Konwinski','Learning Spark  Lightning-Fast Big Data  Analysis Principles and Practice',5,'https://drive.google.com/file/d/1Oz5LedIs0Hu5bwgrfQTQRnOYaRVMmZFC/view?usp=sharing',6,'Big Data Analytics'),
('620CS6PEBDA3','Radha Shankarmani','Big Data Analytics',10,'https://images-na.ssl-images-amazon.com/images/I/517T33xSuTL._SX258_BO1,204,203,200_.jpg',6,'Big Data Analytics'),
('620CS6PEBDA4','Cay S. Horstmann','Scala for the Impatient',3,'https://drive.google.com/file/d/14e17xTLSJXwcs3nb_jAhItds1gZukKta/view?usp=sharing',6,'Big Data Analytics');


insert into stocks values
('620CS6PCMAL1','M M. Mitchell','Machine Learning',5,'https://drive.google.com/file/d/1J52aEljF44PpNiW_HHbYrQDVhi7kX9Q6/view?usp=sharing',6,'Machine Learning'),
('620CS6PCMAL2','Andreas C Muller & Sarah Guido','Introduction to Machine Learning with Python',5,'https://images-eu.ssl-images-amazon.com/images/I/51IXBmHSe1L._SX198_BO1,204,203,200_QL40_ML2_.jpg',6,'Machine Learning'),
('620CS6PCMAL3','Mathew Kirk','Thoughtful Machine learning',10,'https://images-na.ssl-images-amazon.com/images/I/71XxuVMcKjL.jpg',6,'Machine Learning'),
('620CS6PCMAL4','Aureliene Geron','Hands-On Machine Learning With Scikit-learn and Tensorflow',3,'https://images-na.ssl-images-amazon.com/images/I/71P4atQpTbL.jpg',6,'Machine Learning');

insert into stocks values
('620CS6PCOMD1','Michael Blaha, James Rumbaugh','Object-Oriented Modeling and Design with UML',5,'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385396824l/18947244.jpg',6,'Object Oriented Modelling and Design'),
('620CS6PCOMD2','Nicholas, J. and Steyn','Project Management for Business, Engineering and Technology',5,'https://drive.google.com/file/d/1VwaPTzptPhUDIxId2I5YAMb-i183YkJt/view?usp=sharing',6,'Object Oriented Modelling and Design'),
('620CS6PCOMD3','Prasanna Chandra','Project Planning, Analysis, Selection, Implementation and Review',10,'https://images-na.ssl-images-amazon.com/images/I/414VS8Uiw6L.jpg',6,'Object Oriented Modelling and Design'),
('620CS6PCOMD4','Grady Booch et al','ObjectOriented Analysis and Design with Applications',3,'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347981229l/1751122.jpg',6,'Object Oriented Modelling and Design');

insert into stocks values
('620CS6PECGV1','Donald Hearn & M Pauline Baker','Computer Graphics with OpenGL',5,'https://images.bwbcovers.com/013/9780132484572.jpg',6,'Computer Graphics & Visualization'),
('620CS6PECGV2','FS Hill & Stephen M Kelley','Computer Graphics using OpenGL',5,'https://pictures.abebooks.com/isbn/9789332555303-us.jpg',6,'Computer Graphics & Visualization'),
('620CS6PECGV3','Edward Angel','Interactive Computer Graphics – A Top-down Approach using Opengl',10,'https://drive.google.com/file/d/1bGgyiw_i4oRYPponWaLRDWxv0Vy5UQ1z/view?usp=sharing',6,'Computer Graphics & Visualization'),
('620CS6PECGV4','Michael Abrash','Graphics Programming Black Book',3,'https://images-na.ssl-images-amazon.com/images/I/41usEaxnGqL._SX258_BO1,204,203,200_.jpg',6,'Computer Graphics & Visualization');

/* 7th sem */

insert into stocks values
('716CS7IEJAP1','Herbert Schild','Java the Complete Reference',5,'https://images-na.ssl-images-amazon.com/images/I/51U232GoNXL._SX258_BO1,204,203,200_.jpg',7,'Java Programming'),
('716CS7IEJAP2','Y.Daniel Liang','Introduction to JAVA programming',5,'https://images-na.ssl-images-amazon.com/images/I/51hOnFPzUfL.jpg',7,'Java Programming'),
('716CS7IEJAP3','Patrick Naughton','The Java Hand Book',10,'https://images-na.ssl-images-amazon.com/images/I/51Z8mQwUuUL._SX372_BO1,204,203,200_.jpg',7,'Java Programming'),
('716CS7IEJAP4','Cay S Horstmann','Core Java 2',3,'https://images-na.ssl-images-amazon.com/images/I/71w0GK2e7eL.jpg',7,'Java Programming');

insert into stocks values
('716CS7IECCT1','Rajkumar Buyya, James Broberg, Andrzej','CLOUD COMPUTING – Principles and Paradigms',5,'https://media.wiley.com/product_data/coverImage300/90/04708879/0470887990.jpg',7,'Cloud Computing'),
('716CS7IECCT2','Anthony T. Velte, Toby J. Vetle and Robert Elsenpeter','Cloud Computing: A practical Approach',5,'https://kbimages1-a.akamaihd.net/d843c9bd-eec5-492e-ae0e-207b9624b511/1200/1200/False/cloud-computing-a-practical-approach-2.jpg',7,'Cloud Computing'),
('716CS7IECCT3','Dr. Kumar Saurabh','CLOUD COMPUTING',10,'https://m.media-amazon.com/images/I/51FfBFonLGL._SX260_.jpg',7,'Cloud Computing'),
('716CS7IECCT4','Dan C Marinescu','CLOUD COMPUTING – Theory and Practice',3,'https://m.media-amazon.com/images/I/51xfQtlJzHL._SX260_.jpg',7,'Cloud Computing');

insert into stocks values
('716CS7DCPSQ1','Kishor S. Trivedi','Probability & Statistics with Reliability, Queuing and Computer Applications',5,'https://media.wiley.com/product_data/coverImage300/17/04713334/0471333417.jpg',7,'Probability , Statistics And Queuing'),
('716CS7DCPSQ2','Raj Jain','The Art of Computer Systems Performance Analysis',5,'https://drive.google.com/file/d/1I0Sb6KGTDfLgovwC7tB90UUIkC-JMMi2/view?usp=sharing',7,'Probability , Statistics And Queuing'),
('716CS7DCPSQ3','M. Baron','Probability and Statistics for Computer Scientists',10,'https://drive.google.com/file/d/1OnJpZ_rPrADvsUOxl7mTf2nw2I7G9l03/view?usp=sharing',7,'Probability , Statistics And Queuing'),
('716CS7DCPSQ4','Sheldon Ross','A first course in Probability',3,'https://images-na.ssl-images-amazon.com/images/I/81h5d4d08sL.jpg',7,'Probability , Statistics And Queuing');

insert into stocks values
('716CS7DECYF1','Jhon R. Vacca','Computer Forensics',5,'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5845/9781584503897.jpg',7,'CYBER FORENSICS'),
('716CS7DECYF2','Albert J. Marcella Jr., Wiley','Cyber Forensics: from Data to Digital Evidence',5,'https://drive.google.com/file/d/1hOGu1oxLnYMftoqzHFL9Mtb-FEAWvoIY/view?usp=sharing',7,'CYBER FORENSICS'),
('716CS7DECYF3','Pearson Education','Marjie T. Britz: Computer Forensics and Cyber Crime - An Introduction',10,'https://www.pearsonhighered.com/assets/bigcovers/0/1/3/2/0132447495.jpg',7,'CYBER FORENSICS'),
('716CS7DECYF4','Computer Forensics','Computer Forensics: Investigating Network Intrusions and Cyber Crime',3,'https://images-na.ssl-images-amazon.com/images/I/51tXnvE%2Bs1L._AC_SY400_.jpg',7,'CYBER FORENSICS');

insert into stocks values
('716CS7DEMCP1','Shameem Akhter and Jason Roberts','Multicore Programming , Increased Performance through Software Multi-threading',5,'https://drive.google.com/file/d/1QUrl_F1naifeXkmrmC8Sb-IQ1frApxP4/view?usp=sharing',7,'Multicore Programming'),
('716CS7DEMCP2','Michael J. Quinn','Parallel Programming in C with MPI and OpenMP',5,'https://images-na.ssl-images-amazon.com/images/I/714Pv04FNSL.jpg',7,'Multicore Programming'),
('716CS7DEMCP3','Ananth Grama','Introduction to Parallel Computing',10,'https://images-na.ssl-images-amazon.com/images/I/51dMzTYk0uL._SX307_BO1,204,203,200_.jpg',7,'Multicore Programming'),
('716CS7DEMCP4','Michael J. Quinn','Parallel Programming in C with MPI and OpenMP',3,'https://images-na.ssl-images-amazon.com/images/I/41xundHlziL._SX331_BO1,204,203,200_.jpg',7,'Multicore Programming');

/* 8th sem */

insert into stocks values
('821CS8PCGCT1','BhuvanUnhelkar','Green IT Strategies and Applications-Using Environmental Intelligence',5,'https://images.routledge.com/common/jackets/crclarge/978042910/9780429105814.jpg',8,'Programming In Python'),
('821CS8PCGCT2','Woody Leonhard, Katherrine Murray','Green Home computing for dummies',5,'https://images-eu.ssl-images-amazon.com/images/I/51iozCOU4DL._SX342_QL70_ML2_.jpg',8,'Programming In Python'),
('821CS8PCGCT3','John Lamb','The Greening of IT',10,'https://m.media-amazon.com/images/I/4180sD3WMWL.jpg',8,'Programming In Python'),
('821CS8PCGCT4','Alin Gales, Michael Schaefer, Mike Ebbers','Green Data Center: Steps for the Journey',3,'https://images-na.ssl-images-amazon.com/images/I/31b+dluLkpL._BO1,204,203,200_.jpg',8,'Programming In Python');

insert into stocks values
('816CS8IEPIP1','Cody Jackson','Learning to Program using Python',5,'https://images-eu.ssl-images-amazon.com/images/I/51c3Tlhi84L._SY445_SX342_QL70_ML2_.jpg',8,'Semantic Web'),
('816CS8IEPIP2','Michael DAWSON','Python Programming',5,'https://drive.google.com/file/d/1jllC-bIp-ZNGp--wb9ijUJtlL0yuVIxw/view?usp=sharing',8,'Semantic Web'),
('816CS8IEPIP3','Bill Lubanovic','Introducing Python',10,'https://drive.google.com/file/d/1r6yN_JwynUOKOXZ5m9RS_icfYh9boOK_/view?usp=sharing',8,'Semantic Web'),
('816CS8IEPIP4','Dr. M. O. FaruqueSarker and Sam Washington','Learning Python Network Programming',3,'https://images-eu.ssl-images-amazon.com/images/I/61QP5zR79pL._SX342_QL70_ML2_.jpg',8,'Semantic Web');

insert into stocks values
('816CS8IESEW1','Liyang Yu','A Developer’s Guide to the Semantic Web',5,'https://images.springer.com/sgw/books/medium/9783642159701.jpg',8,'Green Computing'),
('816CS8IESEW2','John Hebeler, Matthew Fisher, Ryan Blace and Andrew Perez-Lopez','Semantic Web Programming',5,'https://images-na.ssl-images-amazon.com/images/I/51STP1w5NtL.jpg',8,'Green Computing'),
('816CS8IESEW3','Grigoris Antoniou, Frank van Harmelen','A Semantic Web Primer',10,'https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262018289%26type%3D.jpg?itok=OtqrnFfw',8,'Green Computing'),
('816CS8IESEW4','Robert M. Colomb','Ontology and the Semantic Web',3,'https://images-na.ssl-images-amazon.com/images/I/71Ddnqw4gPL.jpg',8,'Green Computing');

/* STUDENT */

create table student(usn varchar(10),sname varchar(20),email varchar(20),semester int,nummber_of_books_issued int,
primary key (usn));

create table stucredentials(usn varchar(10),password varchar(20),
foreign key (usn) references student(usn) on delete cascade on update cascade);

create table stubookissued(usn varchar(20),bookid  varchar(20),
foreign  key (usn) references student(usn) on update cascade on delete cascade,
foreign key (bookid) references stocks(bookid) on update cascade on delete cascade);

/* FACULTY */

create table faculty(ftyid int,fname varchar(20),email varchar(20),nummber_of_books_issued int,
primary key(ftyid));

create table ftycredentials(ftyid varchar(10),password varchar(20),
foreign key (ftyid) references student(usn) on delete cascade on update cascade);

create table ftybookissued(ftyid int,bookid  varchar(20),
foreign  key (ftyid) references faculty(ftyid) on update cascade on delete cascade,
foreign key (bookid) references stocks(bookid) on update cascade on delete cascade);

