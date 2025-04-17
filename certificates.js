const certificates = [
    {
        title: "XpertBot Internship",
        image: "assets/certificates/XpertBot.png",
        issuer: "XpertBot, Ibrahim Flaifel",
        date: "October 15th 2023",
        description: "Flutter Mobile Development"
    },
    {
        title: "Apliman Internship",
        image: "assets/certificates/aplimann.png",
        issuer: "Apliman's HR, Karim Shaaito",
        date: "April 1st 2024",
        description: "Full Stack Development"
    },
    {
        title: "Huawei Certification",
        image: "assets/certificates/Huawei.png",
        issuer: "Huawei Technologies Co.",
        date: "July 2nd 2023",
        description: "Artificial Intelligence"
    },
    {
        title: "Python Course",
        image: "assets/certificates/NazAcademyPython.jpg",
        issuer: "Naz Academy",
        date: "August 21st 2022",
        description: "Python basics"
    },
    {
        title: "Cybersecurity Workshop Speaker",
        image: "assets/certificates/LS-Cybersecurity.jpeg",
        issuer: "Life Sculptor",
        date: "October 21st 2022",
        description: "Cybersecurity basics"
    },
    {
        title: "Networking Workshop Speaker",
        image: "assets/certificates/Networking.jpg",
        issuer: "Life Sculptor x Compsci",
        date: "December 13th 2022",
        description: "All networking concepts"
    },
    {
        title: "Object Oriented Programming Workshop Speaker",
        image: "assets/certificates/OOP.jpg",
        issuer: "Life Sculptor x Compsci",
        date: "January 28th 2023",
        description: "Basics of object oriented programming"
    },
    {
        title: "Introduction to Mobile Development",
        image: "assets/certificates/IntroductionToMobileDev.jpg",
        issuer: "Life Sculptor",
        date: "February 10th 2022",
        description: "Basics of mobile development in Android"
    },
    {
        title: "Introduction to AI",
        image: "assets/certificates/BeirutAIPython.png",
        issuer: "Beirut AI x Computer Science Club",
        date: "March 13th 2021",
        description: "Workshop about the basics of AI"
    },
    {
        title: "Power of Optimization",
        image: "assets/certificates/LAU5.jpg",
        issuer: "Lebanese American University",
        date: "Febraury 2021",
        description: "Certificate of attendance to a workshop about the power of optimization"
    },
    {
        title: "Power of Financial Intelligence",
        image: "assets/certificates/LAU4.jpg",
        issuer: "Lebanese American University",
        date: "Febraury 2021",
        description: "Certificate of attendance to a workshop about the power of financial intelligence"
    },
    {
        title: "Power of Financial Innovation",
        image: "assets/certificates/LAU3.jpg",
        issuer: "Lebanese American University",
        date: "Febraury 2021",
        description: "Certificate of attendance to a workshop about the power of financial innovation"
    },
    {
        title: "Power of Emotional Intelligence",
        image: "assets/certificates/LAU2.jpg",
        issuer: "Lebanese American University",
        date: "January 2021",
        description: "Certificate of attendance to a workshop about the power of emotional intelligence"
    },
    {
        title: "Power of Creativity",
        image: "assets/certificates/LAU1.jpg",
        issuer: "Lebanese American University",
        date: "January 2021",
        description: "Certificate of attendance to a workshop about power of creativity"
    },
    {
        title: "NFTs, Cryptocurrencies, and Financial Technologies",
        image: "assets/certificates/Mine1.png",
        issuer: "Centre Mine - Lebanese University",
        date: "March 19th 2022",
        description: "Certificate of attendance to a workshop about NFTs, cryptocurrencies, and financial technologies"
    },
    {
        title: "Entrepreneurial Mindset 101",
        image: "assets/certificates/Mine8.png",
        issuer: "Centre Mine - Lebanese University",
        date: "March 22nd 2022",
        description: "Certificate of attendance to a workshop about entrepreneurial mindset"
    },
    {
        title: "How to Write a Winning CV",
        image: "assets/certificates/Mine7.png",
        issuer: "Centre Mine - Lebanese University",
        date: "March 29th 2022",
        description: "Certificate of attendance to a workshop about how to write a winning CV"
    },
    {
        title: "Leadershift",
        image: "assets/certificates/Mine6.png",
        issuer: "Centre Mine - Lebanese University",
        date: "March 11th 2022",
        description: "Certificate of attendance to a workshop about leadershift"
    },
    {
        title: "Managing Mental Wellbeing in College",
        image: "assets/certificates/Mine5.png",
        issuer: "Centre Mine - Lebanese University",
        date: "March 10th 2022",
        description: "Certificate of attendance to a workshop about how to manage mental wellbeing in college"
    },
    {
        title: "Organization",
        image: "assets/certificates/Mine4.png",
        issuer: "Centre Mine - Lebanese University",
        date: "March 2nd 2022",
        description: "Certificate of attendance to a workshop about organization"
    },
    {
        title: "Networking",
        image: "assets/certificates/Mine3.png",
        issuer: "Centre Mine - Lebanese University",
        date: "28th March 2022",
        description: "Certificate of attendance to a workshop about networking"
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const certificatesGrid = document.getElementById("certificates-grid");

    certificates.forEach(cert => {
        const certificateCard = document.createElement("div");
        certificateCard.classList.add("certificate-card");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");
        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}">
            <p>${cert.title}</p>
        `;

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.innerHTML = `
            <p>Issued by: ${cert.issuer}</p>
            <p>Date: ${cert.date}</p>
            <p>Description: ${cert.description}</p>
        `;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);

        certificateCard.appendChild(cardInner);
        certificatesGrid.appendChild(certificateCard);
    });
});
