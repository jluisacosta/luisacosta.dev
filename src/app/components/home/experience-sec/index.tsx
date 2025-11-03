import React from 'react';
import Link from "next/link";

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Aug 2022 - Present",
            title: "Senior Software Engineer",
            company: {
                name: "Altruist",
                link: "https://altruist.com/",
            },
            type: {
                industry: "Fintech",
                label: "Remote Contractor",
                nearshore: {
                    name: "Distillery",
                    link: "https://distillery.com/",
                },
            },
            description: "Led core platform migration from GraphQL Mesh to a Koa.js, resolving data sync issues and boosting API performance. Pioneered TanStack Query adoption for a modern, RESTful frontend refactor. Developed Retool-based internal tools automating financial workflows, improving operational efficiency. Enhanced UX/security via state-driven URLs, RBAC, and a scalable feature flag system."
        },
        {
            year: "May 2021 - Jul 2022",
            title: "Senior Software Engineer",
            company: {
                name: "Thrive Market",
                link: "https://thrivemarket.com/",
            },
            type: {
                industry: "E-commerce",
                label: "Remote Contractor",
                nearshore: {
                    name: "Distillery",
                    link: "https://distillery.com/",
                },
            },
            description: "Contributed to the core analytics pipeline and component-driven CMS, enabling clean data and independent Marketing campaigns. Launched A/B tests, increasing conversion, and developed foundational e-commerce systems for a seamless, scalable shopping experience."
        },
        {
            year: "Apr 2021 - May 2021",
            title: "Software Designer",
            company: {
                name: "Great Minds",
                link: "https://greatminds.org/",
            },
            type: {
                industry: "EdTech",
                label: "Remote Contractor",
                nearshore: {
                    name: "Globant",
                    link: "https://www.globant.com/",
                },
            },
            description: "Using modern tools like TypeScript and Next.js, I built key features for a major e-learning platform, directly helping educators and students access better instructional content."
        },
        {
            year: "Feb 2017 - Mar 2021",
            title: "Senior Web UI Developer & Software Designer",
            company: {
                name: "iSeatz / American Express",
                link: "https://www.iseatz.com/",
            },
            type: {
                industry: "Travel",
                label: "Remote Contractor",
                nearshore: {
                    name: "Globant",
                    link: "https://www.globant.com/",
                },
            },
            description: "Architected and scaled a React/Redux travel booking frontend, delivering user-friendly features from complex requirements. Improved CI/CD with Jenkins, leading to stable releases and a promotion to Software Designer."
        },
        {
            year: "Jul 2016 - Feb 2017",
            title: "Full-Stack Web Developer",
            company: {
                name: "Independet Consultant",
            },
            type: {
                industry: "Food Delivery & Ride Hailing",
                label: "Self-employed",
            },
            description: "Modernized legacy systems via Node.js and automated builds. Developed full-stack web/mobile apps, integrating critical APIs (Stripe, PayPal, GA), and managed product deployment."
        },
        {
            year: "Feb 2015 - Jul 2016",
            title: "Web Developer & IT Collaborator",
            company: {
                name: "PME Consulting",
                link: "https://www.linkedin.com/company/pme-consulting/",
            },
            type: {
                industry: "Professional Services",
                label: "Full-time",
            },
            description: "Developed web applications and microsites, focusing on SEO and analytics, and provided IT infrastructure support including web hosting and cloud administration for Google Cloud Platform and Azure."
        },
        {
            year: "Aug 2014 - Feb 2015",
            title: "Database Developer",
            company: {
                name: "Universidad Autónoma de San Luis Potosí",
                link: "https://www.uaslp.mx/",
            },
            type: {
                industry: "Education & Energy",
                label: "Internship",
            },
            description: "Developed and administered database structures for real-time web applications, processing solar energy sensors data to generate key performance indicators (KPIs) for clients."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black"><small>{exp.year}</small></h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className="no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-primary">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">
                                                {exp.company.link ? <Link className="hover:text-primary" href={exp.company.link} target="_blank">{exp.company.name}</Link> : exp.company.name}
                                            </span>
                                        </div>
                                        <p className="text-base font-normal">
                                            {exp.type.industry} • {exp.type.label} {exp.type.nearshore && <> via <Link className="hover:text-primary underline" href={exp.type.nearshore.link} target="_blank">{exp.type.nearshore.name}</Link></>}
                                        </p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;