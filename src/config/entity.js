export const EXPIERENCE = {
    Nexxis: {
        name: 'Nexxis',
        img: 'Nexxis',
        title: 'Full-Stack Software Engineer',
        message: 'Mr. Truban assisted in the development and maintenance of a large-scale legacy application. Through an agile process Mr. Truban would meet with the client on a bi-weekly basis to determine requirements needed, and then proceed with feature development. '
    },
    IBM: {
        name: 'IBM',
        img: 'ibm',
        title: 'Federal Technical Associate - Application Developer',
        message: 'Mr. Truban develops applications for IBM clients by translating system requirements into appropriate designs using Agile methods. He uses VS Code and Eclipse to develop web applications with JavaScript and leverages MVC patterns and ensures the client’s requirements are satisfied.'
    },
    GridIron: {
        name: 'Grid Iron IT',
        img: 'Grid',
        title: 'Angular Developer',
        message: 'Mr. Truban helped maintain the operation of a large-scale portal middleware application critical for clients’ operations. His tasks included adjusting the application to allow new applications connection to the clients database and other applications and improving the security and runtime of various features the portal utilized through leveraging the Angular framework, and Oracle SQL queries.'
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
    IBM: [{
        name: 'COMPS',
        explanation: "To develop an online management application for the Department of Education to help manage grants issued to various charter schools across the country.The front end was developed using an Angular framework, which was tested using Jasmine. The back end was developed utilizing C#/.Net and connected to an SQL Database.",
        contribution: " Mr. Truban helped develop front end components and associated back-end components. that met the client’s specific requirements and met on a monthly basis with the client to translate their requirements to stories used in an AGILE environment, as well as demonstrate the current progress of the application. Mr. Truban also helped on-board new members of the team and made time to assist when needed."
    },
    {
        name: 'Innovation Garage',
        explanation: "To develop collaboration and technical skills the team was assigned the task of creating a web-based quiz application that would support multiple teams and run on the participant’s individual devices.The UX was developed using React, and the backend was developed using relational databases and leveraged the Spring Boot framework to create micro services. Docker containers were used for application deployment.",
        contribution: "Mr. Truban helped develop front end components that utilized pre-existing spring microservices and react plug-ins to provide an intuitive UX.  He had also created a microservice in Spring Boot to allow his team to control and manipulate the data used in the project for their own component development. Mr. Truban led the application demonstration effort by developing the demo flow and script, arranging and facilitating practice sessions, providing constructive feedback to team members, all of which ultimately led to a successful presentation and demonstration."
    }],
    GRIDIRON: [{
        name: 'PORTAL',
        explanation: "To maintain and enhance a portal middleware application for the Department of Justice that allowed all of the DOJ’s respective audience to be able to smoothly access variety of applications to perform activities that was critical for the DOJ’s success. The front-end was developed using an Angular framework, which was tested using Jasmine. The backend was developed utilizing C#/.Net and connected to an Oracle SQL Database.",
        contribution: "Mr. Truban helped develop front end components and associated back-end components. that met the client’s specific requirements and met on a monthly basis with the client to translate their requirements to stories used in an AGILE environment, as well as demonstrate the current progress of the application. Mr. Truban also helped on-board new members of the team and made time to assist when needed."
    }],
    SCHOOL: [
{
    name: "FreeCol",
    explanation: "FreeCol is a video open-source game that aims to clone the “Sid Meier's Colonization” game. The project and the effort’s main purpose was to develop Mr. Truban’s application testing skills.",
    contribution: "Mr. Truban debugged various issues listed on FreeCol’s repository through effective refactoring with an aim at increasing cohesion and decreasing coupling. Mr. Truban also developed a new feature highlighting objects in the UX to be able to locate in-game resources more easily for color blind accessibility. After implementing the feature, Mr. Truban created a variety of tests using Google Code Pro.  Mr. Truban used Selenium tools to perform various tests including, mutation testing, component testing, and regression testing. The 90% passing test rate goal was met for the new feature."
},
{
    name: "Healthy-Eating.com",
    explanation: "Web application to provide parents an interactive way to help educate their children on the benefits of eating healthy. The website aimed to keep a younger audience engaged, by providing various was to interact with the website while simultaneously giving information that the users would retain for their own benefit.",
    contribution: "Mr. Truban utilized WebPress to create the website. Incorporating various existing plugins to play games, take donations via PayPal, and create users. Mr. Truban also learned JavaScript and used it to edit the plugins so that they would display information requested by the client."
},
{
    name: "Raspberry Pi Sensor Driver",
    explanation: "The project’s purpose was to develop device drivers for a distance and temperature sensor connected to a Raspberry Pi develop and to gain an understanding of how machines communicate with their given kernel, and how to interact in these environments.",
    contribution: "Mr. Truban helped develop the initial code for the driver. He implemented pre-existing API’s and kept the project repository updated with the latest code. Mr. Truban quickly became proficient with Python so the team could leverage the adafruit_DHT API.  As a result of his leadership and technical skills, the team was able to showcase their driver in a live presentation."
},
    ]
}