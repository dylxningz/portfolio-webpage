// data/projectsModel.js
const projects = [
    {
      id: "1",
      title: "ITIS 3155 - Academic Website",
      description: "The main outcome of this course was to create and deploy simple web applications using HTML, CSS, and JavaScript.",
      type: "Web Application",
      tags: ["HTML","CSS","Javascript", "Academic"],
      details: [
        { type: "image", src: "/images/leon.jpg" },
        { type: "text", content: "ksjdksdnsad sadjasdhjsadnaks sjadaksdhjashd sjhdakjshdkasjhd asdh kashdkajh dshdakdhk ajsha" },
        { type: "image", src: "/images/carlos.jpg" },
        { type: "text", content: "kdsfjldksjf dkjf lkejf ekjfelk jflskjf skjf zkjsz fkjszl fjszlkjfslzjflsz" },
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
