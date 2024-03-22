// data/projectsModel.js
const projects = [
    {
      id: "1",
      title: "ITIS 3155 - Academic Website",
      description: "The main outcome of this course was to create and deploy simple web applications using HTML, CSS, and JavaScript.",
      type: "Web Application",
      tags: ["HTML","CSS","Javascript", "Academic"],
      link:"jeffreydylangreene.com/itcs3155",
      details: [
        { type: "image", src: "/images/projects/itis3155-1.png" },
        { type: "text", content: "In the realm of web development, mastering the fundamentals forms the cornerstone of creating innovative and responsive websites. This journey into the digital construction of user experiences began with a class dedicated to demystifying the core components of web design: HTML, CSS, and jQuery. The class was structured as a series of progressive modules, each designed to build upon the last, ensuring a comprehensive understanding of how these elements interact to shape the web." },
        { type: "image", src: "/images/projects/itis3155-2.png" },
        { type: "text", content: "The website created as part of this class served as both a testament to the learned principles and a playground for experimentation. Starting with HTML, the site's structure was meticulously crafted, laying down the skeleton that would support all future enhancements. This foundational stage was crucial, emphasizing the importance of semantic markup and accessibility, ensuring that the website would be understandable not just to browsers, but to all users, regardless of how they accessed the web. As the course progressed, CSS was introduced, breathing life into the website with styling that ranged from fundamental text formatting to complex layouts achieved through Flexbox and Grid. This stylistic phase underscored the transformative power of CSS, demonstrating how a website's visual appeal and usability could be dramatically enhanced with thoughtful design." },
        { type: "image", src: "/images/projects/itis3155-3.png" },
        { type: "text", content: "The introduction of jQuery marked the final piece of the puzzle, bringing interactivity and dynamism to the website. This segment of the class illuminated the potential of jQuery to simplify DOM manipulation, event handling, and animation, making the website not just a static entity, but a dynamic interface capable of engaging users. Throughout the course, various projects and exercises allowed for the application of these skills in unison, culminating in a website that was not only functional and aesthetically pleasing but also interactive. This educational journey through the basics of web development not only equipped students with the skills necessary to craft their own digital spaces but also instilled in them an appreciation for the intricacies of web design and the endless possibilities it presents."},

        // Additional sections...
      ]
    },

    {
      id: "2",
      title: "ITIS 4166 - Web Development",
      description: "The main outcome of this course was to create website that load dynamic data from a database MongoDB.",
      type: "Node Application",
      tags: ["HTML","CSS","Javascript", "MongoDB", "Node.js", "Academic", "Express"],
      details: [
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "Embarking on a journey to delve deeper into the realm of web development, I enrolled in an advanced class that promised to introduce the intricate world of back-end technologies and application architecture. The course was structured around the comprehensive exploration of Express, MVC (Model-View-Controller) architecture, Node.js, and MongoDB. Through a hands-on approach, we were tasked with creating a fully functional marketplace application, an endeavor that would not only solidify our understanding of these technologies but also challenge us to synthesize them into a cohesive, working product."},
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "The class began with an introduction to Node.js, setting the stage for our back-end development journey. Node.js, with its event-driven, non-blocking I/O model, offered a robust foundation for building scalable network applications. The initial modules focused on understanding the Node.js runtime environment and its core modules, emphasizing the creation of server-side logic that could handle multiple requests simultaneously without compromising performance. This foundation was crucial as it allowed us to appreciate the asynchronous nature of Node.js and how it could be leveraged to build efficient web applications."},
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "As we became more comfortable with Node.js, the course shifted focus to Express, a minimalist web framework for Node.js that simplifies the task of building web servers. Here, we learned how to define routes, handle HTTP requests, and send responses back to the client. The simplicity and flexibility of Express were highlighted, showing how it could be used to speed up the development process by providing a thin layer of fundamental web application features, without obscuring the features of Node.js that we had come to understand. This segment of the class was pivotal, as it bridged the gap between server-side scripting and the actual implementation of web servers that could serve our application to users."},
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "The introduction of the Model-View-Controller (MVC) architecture was a key turning point in the class, marking our transition from learning individual technologies to understanding how to structure an application. The MVC paradigm, with its separation of concerns, allowed us to organize our code in a way that made the application more modular, maintainable, and scalable. We learned to separate the business logic (model) from the user interface (view), with a controller to handle the input and update the model or the view accordingly. This architectural pattern was instrumental in our marketplace application, enabling us to create a platform where users could interact with products in a seamless and intuitive manner."},
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "The final piece of the puzzle was MongoDB, a NoSQL database that uses a document-oriented data model. This module taught us the benefits of using a schema-less database in conjunction with our Node.js application, particularly for storing, querying, and updating data in a more flexible and scalable way compared to traditional relational databases. Integrating MongoDB into our marketplace application allowed us to implement features such as user registration, product listings, and transactions with ease. By the end of the class, we had not only built a fully functional marketplace application but had also acquired a deep understanding of how Express, MVC, Node.js, and MongoDB could be harmoniously integrated to build complex web applications. This comprehensive approach to learning provided us with the tools and knowledge to venture into the web development landscape with confidence, ready to tackle challenges and create innovative web solutions."},
      ]
    },

    {
      id: "3",
      title: "ITIS 3155 - Community Website Task",
      description: "The goal of this assignment was to get somone to request a website for a client and then build it and get their review",
      type: "Web Application",
      tags: ["HTML","CSS","Javascript", "Academic"],
      details: [
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "ksjdksdnsad"},
      ]
    }, 
    {
      id: "4",
      title: "ITSC 3155 - Software Engineering Final Project",
      description: "The main outcome of this course was to create a software project using the Agile methodology.",
      type: "Flask Application",
      tags: ["Python","Flask", "Academic", "Agile"],
      details: [
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "ksjdksdnsad"},
      ]
    }
    // More projects...
  ];
  
  export default projects;

  //{ id: "projectID", // Unique identifier for the project, such as "project2"
  //title: "Project Title", // The title of the project, e.g., "Project Two"
  //description: "Brief description of the project.", // A short description of the project
  //type: "Project Type", // The type of the project, e.g., "Mobile App"
  //tags: ["Tag1", "Tag2"], // Array of tags related to the project, e.g., ["Node.js", "Express"]
  //details: [
    //{ 
      //type: "image", 
      //src: "/path/to/image.jpg", // Path to the image file
    //},
    //{ 
    //  type: "text", 
    //  content: "Detailed description of the project.", // A detailed text description
    //},
    // Repeat the pattern for more images and text descriptions as needed
  //]
//},
