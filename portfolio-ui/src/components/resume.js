import * as React from 'react';
import { Card, Container, Divider } from '@mui/material';
import '../App.css';

export default function Resume() {
    return (
        <div className="resume">
            <Container className="component-padding">
                <Card className="resume-card">
                    <h1>Resume</h1>
                    <h2 className="left-align">Skills</h2>
                    <ul className="unordered-list-item">
                        <li>Proficient in programming languages such as Java, ReactJS, and Javascript/Typescript</li>
                        <li>Knowledge and practice in software development methodologies such as Agile and Scaled Agile</li>
                        <li>Experience developing and debugging code</li>
                        <li>Strong understanding of database technologies such as Oracle SQL and PostgreSQL</li>
                        <li>Experience with version control systems like Git</li>
                        <li>Proficient in API development platforms Insomnia and Postman</li>
                        <li>Experience authoring comprehensive technical specification documents that are used by internal business personnel and external organizations</li>
                        <li>Background in implementing and utilizing SwaggerUI / Open API REST API Documentation Tool</li>
                        <li>Skilled in Microsoft Power BI reporting</li>
                        <li>Understanding of batch jobs and processes</li>
                        <li>Experience with Azure DevOps and Microsoft TFS</li>
                        <li>Ability to work in a team environment and indendently</li>
                        <li>Knowledge of web development technologies such as HTML, CSS, and Javascript</li>
                        <li>Understanding of software testing and quality assurance processes</li>
                        <li>Strong problem-solving and critical thinking skills</li>
                    </ul>
                    <h2 className="left-align">Work Experience</h2>
                    <h3 className="left-align">Software Engineer II @ Arthrex</h3>
                    <h3 className="left-align">May 2024 - Present</h3>
                    <p className="paragraph">In my current role at Arthrex, I work on the company's field inventory management mobile apps that assists in tracking the company's products before, after and during the consignment process.  The cross-platform app is built with Microsoft's .NET Maui framework that uses C# on the backend and XAML on the frontend.</p>

                    <h4 className="left-align">Experience</h4>
                    <ul className="unordered-list-item">
                        <li>Contributed to the successful release of a mobile app rewrite from Xamarin to .NET MAUI, actively supporting the launch through bug fixes and hypercare, ensuring a smooth transition for users</li>
                        <li>Led efforts to expand mobile app availability to Canadian users by implementing globalization features and ensuring compliance with Canadian regulations through the removal of private patient information</li>
                        <li>Played a key development role in implementing a comprehensive Audit feature for the cross-platform mobile app, enabling users to create, edit, perform, and complete both planned and ad-hoc audits</li>
                        <li>Quickly learned the deployment and release process for the cross-platform mobile app, taking over iOS and Android releases within six months to ensure smooth and timely updates</li>
                    </ul>

                    {/* General Motors */}
                    <h3 className="left-align">Software Engineer @ General Motors</h3>
                    <h3 className="left-align">January 2021 - May 2024</h3>
                    <p className="paragraph">In my role as a software engineer, I played a pivotal role in contributing to the successful production deployments of both front-end and back-end Java and ReactJS applications.  I actively participated in various phases of the development cycle, collaborating with cross-functional teams to ensure the seamless release of high-quality software solutions.  I had the opportunity to innovate by creating PowerBI reports, providing essential insights into system performance and user engagement, and I actively participated in migrating batch jobs to a new platform, ensuring uninterrupted operations and enhanced system performance.</p>
                    <h4 className="left-align">Experience</h4>
                    <ul className="unordered-list-item">
                        <li>Contributed to the entire lifecycle of a full-stack web application from requirements gathering to building a Spring Boot Java backend and ReactJS frontend, and a successful production deployment to significantly enhance efficiency in appointment detail access for service lane advisors and technicians</li>
                        <li>Developed RESTful APIs that returns instantaneous odometer readings and vehicle data to 15+ external dealer management systems that handles over 600,000 transactions a day</li>
                        <li>Spearheaded the transition from legacy SOAP webservice-based authentication system to a unified RESTful API webservice, streamlining authentication processes and ensuring consistent and secure access across the entire application that handles over 1.25 million transactions a day</li>
                        <li>Accelerated deployment preparation from over a month to less than two weeks by championing streamlined processes, including rigorous security scans, cutting QA builds, adhering to change management standards, and leveraging Azure DevOps one-click CI/CD pipelines for reliable software releases</li>
                        <li>Delivered three Java Spring Boot microservices, launching repair order summary, vehicle history, and customer RESTful APIs to Brazil's GM service lane market for the first time, resulting in expanded global reach and brand new access to South American customer information</li>
                        <li>Implemented Swagger UI / OpenAPI documentation for my team’s application consisting of over 100 APIs, enhancing accessibility and simplifying API consumption for developers and certification team</li>
                    </ul>
                    <Divider />
                    <h2 className="left-align">Education</h2>
                    <h3 className="left-align">Florida Gulf Coast University - Graduated in December 2020</h3>
                    <p className="left-align">Bachelor of Science in Computer Information Systems</p>
                    <p className="left-align" >Concentration in Computer Programming</p>
                    <p className="left-align">Minor in Spanish</p>
                </Card>
            </Container>
        </div>
    );
}