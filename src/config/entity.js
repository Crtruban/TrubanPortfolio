export const EXPIERENCE = {
    Nexxis: {
        name: 'Nexxis',
        img: 'Nexxis',
        title: 'Full-Stack Software Engineer',
        message: 'At Nexxis Solutions, I actively contributed to the development and upkeep of a significant legacy application. Following an agile approach, I engaged in bi-weekly meetings with clients to discern their requirements, subsequently driving feature development to meet their evolving needs.'
    },
    IBM: {
        name: 'IBM',
        img: 'ibm',
        title: 'Federal Technical Associate - Application Developer',
        message: 'At IBM, I played a pivotal role in application development, employing Agile methodologies to transform system requirements into robust designs. Using tools like VS Code and Eclipse, I crafted web applications in JavaScript, implementing MVC patterns to meticulously meet the specific needs of our clients.'
    },
    GridIron: {
        name: 'Grid Iron IT',
        img: 'Grid',
        title: 'Angular Developer',
        message: 'I played a key role at Grid Iron IT, ensuring the seamless operation of a critical large-scale portal middleware application vital for client operations. My responsibilities encompassed facilitating the integration of new applications with client databases, enhancing security measures, and optimizing the runtime performance of various portal features. Leveraging the Angular framework and executing Oracle SQL queries, I contributed to the overall efficiency and functionality of the portal.'
    },
    Wegmans: {
        name: 'Wegmans',
        img: 'wegmans',
        title: 'Prepared Foods Staff',
        message: "Before transitioning to a career as a software engineer, I spent ten years at Wegmans, where I advanced into a management role. In addition to managing people and refining soft skills, my responsibilities included writing schedules, handling orders, and setting the workflow for a department. This multifaceted role allowed me to develop a comprehensive skill set that encompassed effective people management, task delegation, professional customer interactions, and the logistical aspects of scheduling and order inventory. Despite not directly contributing to technical skills, this experience has proven invaluable in my current role as a software engineer."
    }
};

export const SKILLS = {
    frontEnd: ['JavaScript', 'React', 'Angular', 'VueJS', 'HTML', 'XML', 'CSS', 'Cypress', 'Jest', 'Selenium'],
    backEnd: ['Java', 'Spring Boot', 'Postgres', 'C#', ' ASP.NET', 'C++', 'Oracle SQL', 'MariaDB', 'MSQL', ' Docker', ' Microsoft Azure', 'AWS'],
    tools: ['Android Studio', 'CentOS', 'Linux', 'SVN', 'Git', 'GitLab', 'Microsfot Azure', 'IIS', 'Anaconda', 'CLion', 'Eclipse', 'Visual Studio', 'Windows', 'Jira'],
    softSkills: ['Strong Communication', 'Time Management', 'Mentoring', 'Leadership', 'Task Delegation', 'Agile'],
    clear: [{ value: 'Active DoD TS/SCI w/ FS Poly', tooltip: 'Acquired June 2025' }, { value: 'Active DoE Public Trust', tooltip: 'Acquired August 2022' }]
}
export const PROJECTS = {
    NEXXIS: [{
        name: 'REDACTED',
        explanation: "Due to the level of clearance for this project an overview cannot be provided",
        contribution: "I played a pivotal role in maintaining and enhancing the client's application, utilizing the Vue Frontend Framework and Spring Boot Backend. Following an agile methodology, I actively addressed bi-weekly client requirements, ensuring customer satisfaction by demoing newly developed features. As a leader, I revitalized JEST testing suites, reducing significant technical debt and elevating the Front End code coverage from 78.2% to 94.6%. This not only increased development efficiency for creating new features but also facilitated error detection through comprehensive regression testing. Additionally, I provided guidance and assistance in optimizing the application's Elastic Search capabilities, contributing to the overall enhancement of its feature set."
    }],
    IBM: [{
        name: 'COMPS',
        explanation: "To develop an online management application for the Department of Education to help manage grants issued to various charter schools across the country.The front end was developed using an Angular framework, which was tested using Jasmine. The back end was developed utilizing C#/.Net and connected to an SQL Database.",
        contribution: " I actively contributed to the development of both front-end and associated back-end components that precisely aligned with the client's requirements. In a monthly meeting, I collaborated with the client to translate their needs into user stories within an AGILE environment, ensuring a seamless understanding of project objectives. Furthermore, I regularly demonstrated the ongoing progress of the application. Beyond my primary responsibilities, I played a role in onboarding new team members and consistently made myself available to provide assistance as needed."
    },
    {
        name: 'Innovation Garage',
        explanation: "To develop collaboration and technical skills the team was assigned the task of creating a web-based quiz application that would support multiple teams and run on the participant’s individual devices.The UX was developed using React, and the backend was developed using relational databases and leveraged the Spring Boot framework to create micro services. Docker containers were used for application deployment.",
        contribution: "I contributed to the development of front-end components, integrating pre-existing Spring microservices and React plug-ins to deliver an intuitive user experience. Additionally, I designed a Spring Boot microservice to empower my team in controlling and manipulating project data for their component development. Taking a leadership role in application demonstrations, I orchestrated the demo flow and script, organized and facilitated practice sessions, and provided constructive feedback to team members. This comprehensive effort culminated in a successful presentation and demonstration."
    }],
    GRIDIRON: [{
        name: 'PORTAL',
        explanation: "To maintain and enhance a portal middleware application for the Department of Justice that allowed all of the DOJ’s respective audience to be able to smoothly access variety of applications to perform activities that was critical for the DOJ’s success. The front-end was developed using an Angular framework, which was tested using Jasmine. The backend was developed utilizing C#/.Net and connected to an Oracle SQL Database.",
        contribution: "I actively contributed to the development of front-end and associated back-end components, ensuring alignment with the client's specific requirements. Engaging in monthly meetings with the client, I translated their needs into user stories within an AGILE environment, while also presenting the current progress of the application. Beyond development, I played a key role in onboarding new team members and consistently made myself available to provide assistance as needed."
    }],
    SCHOOL: [
{
    name: "FreeCol",
    explanation: "FreeCol is a video open-source game that aims to clone the “Sid Meier's Colonization” game. The project and the effort’s main purpose was to develop my application testing skills.",
    contribution: "I systematically addressed and debugged multiple issues documented in FreeCol's repository, employing effective refactoring strategies to enhance cohesion and reduce coupling. Additionally, I introduced a new feature that emphasizes objects in the user experience (UX) to facilitate easier identification of in-game resources, with a particular focus on color-blind accessibility. Following the implementation, I meticulously crafted a diverse set of tests using Google Code Pro, utilizing Selenium tools to conduct mutation testing, component testing, and regression testing. Successfully meeting the 90% passing test rate goal, the new feature was validated and ensured robust functionality."
},
{
    name: "Healthy-Eating.com",
    explanation: "Web application to provide parents an interactive way to help educate their children on the benefits of eating healthy. The website aimed to keep a younger audience engaged, by providing various was to interact with the website while simultaneously giving information that the users would retain for their own benefit.",
    contribution: "I employed WebPress as the platform to craft the website, seamlessly integrating diverse existing plugins for gaming, PayPal donation processing, and user management. Furthermore, I acquired proficiency in JavaScript, leveraging this knowledge to customize plugins and ensure they displayed client-requested information effectively."
},
{
    name: "Raspberry Pi Sensor Driver",
    explanation: "The project’s purpose was to develop device drivers for a distance and temperature sensor connected to a Raspberry Pi develop and to gain an understanding of how machines communicate with their given kernel, and how to interact in these environments.",
    contribution: "I played a key role in the development of the initial code for the driver, implementing pre-existing APIs and diligently maintaining the project repository with the latest code updates. Swiftly acquiring proficiency in Python, I facilitated the team's utilization of the adafruit_DHT API. Through my leadership and technical skills, the team successfully showcased our driver in a live presentation."
},
    ]
}
export const SCHOOLS = {
    TOWSON: {
        name: 'Towson University',
        gpa: 3.7,
        major: 'Computer Science',
        degree: 'Bachelor of Science',
        img: 'Towson_University_seal'
    },
    CCBC: {
        name: 'Community College of Baltimore County',
        gpa: 3.2,
        major: 'Computer Science',
        degree: 'Associates of Science',
        img: 'ccbcTrans'
    }
}