let questions =
    [
        [ /* HTML Questions */
            {
                "questions": "What does HTML stand for?",
                "answer1": "Hyper Text Markup Language",
                "answer2": "How To Make Lasagna",
                "answer3": "HoT MaiL",
                "answer4": "Host To My Laptop",
                "right_answer": 1,
            },
            {
                "questions": "Where do all items for the same website need to be saved?",
                "answer1": "Where ever is fine",
                "answer2": "In different folders",
                "answer3": "In the same folder",
                "answer4": "In Google OneDrive",
                "right_answer": 3
            },
            {
                "questions": "What is the difference between an opening tag and a closing tag?",
                "answer1": "Closing tag has a / in front",
                "answer2": "Opening tag has a / in front",
                "answer3": "Closing tag ends with closed",
                "answer4": "There is no difference",
                "right_answer": 1,
            },
            {
                "questions": "Which of the following is valid colour code?",
                "answer1": "#0000000",
                "answer2": "#000000",
                "answer3": "#000000000",
                "answer4": "#00000000",
                "right_answer": 2,
            },
            {
                "questions": "The href attribute in the link tag specifies the...",
                "answer1": "Hypertext",
                "answer2": "Link",
                "answer3": "Destination of a link",
                "answer4": "Relation to the element above",
                "right_answer": 3,
            },
            {
                "questions": "How can we resize the image?",
                "answer1": "Using height and width",
                "answer2": "Using size attribute",
                "answer3": "Using resize attribute",
                "answer4": "Using rs attribute",
                "right_answer": 1,
            },
            {
                "questions": "Which of the following are attributes of Font Tag?",
                "answer1": "Face",
                "answer2": "Size",
                "answer3": "Color",
                "answer4": "All of the answers above",
                "right_answer": 4,
            },
            {
                "questions": "What are <div> tags used for?",
                "answer1": "To provide space between tables",
                "answer2": "To logically divide the paragraphs",
                "answer3": "To logically divide the document",
                "answer4": "To replace paragraph tags with a different tag",
                "right_answer": 3,
            },
            {
                "questions": "The default font-size of HTML document is?",
                "answer1": "6",
                "answer2": "4",
                "answer3": "3",
                "answer4": "8",
                "right_answer": 2,
            },
            {
                "questions": "What does an HTML tag do?",
                "answer1": "It hides programming instructions from view",
                "answer2": "It determines the organizational structure of your Web site",
                "answer3": "It connects your web site to an operating environment",
                "answer4": "It specifies formatting and layout instructions for your web page",
                "right_answer": 4,
            }

        ],
        [   /* CSS Questions */

            {
                "questions": "How can you created rounded corners using CSS?",
                "answer1": "border[round]: 30px",
                "answer2": "corner-effect: round",
                "answer3": "border-radius: 30px",
                "answer4": "alpha-effect: round-corner",
                "right_answer": 3,
            },
            {
                "questions": "How do you add shadow to elements in CSS?",
                "answer1": "box-shadow: 10px 10px 5px grey",
                "answer2": "shadow-right: 10px shadow-bottom: 10px",
                "answer3": "shadow-color: grey",
                "answer4": "alpha-effect[shadow]: 10px 10px 5px grey",
                "right_answer": 1
            },
            {
                "questions": "What does the a stand for in RGBa?",
                "answer1": "Apple",
                "answer2": "Alpha",
                "answer3": "Aqua",
                "answer4": "Artifical",
                "right_answer": 2,
            },
            {
                "questions": "Which of the following is correct about CSS?",
                "answer1": "Style sheets allow content to be optimized for more than one type of device",
                "answer2": "CSS can store web applications locally with the help of an offline catche",
                "answer3": "The cache ensures faster loading and better overall performance of the website",
                "answer4": "All of the above",
                "right_answer": 4,
            },
            {
                "questions": "Which of the following property is used to capitalize text or convert text to uppercase or lowercase letters?",
                "answer1": "text-indent",
                "answer2": "text-align",
                "answer3": "text-decoration",
                "answer4": "text-transform",
                "right_answer": 4,
            },
            {
                "questions": "How do you insert a comment in a CSS file?",
                "answer1": "' this is a comment",
                "answer2": "// this is a comment //",
                "answer3": "// this is a comment",
                "answer4": "/* this is a comment */",
                "right_answer": 4,
            },
            {
                "questions": "Which CSS property controls the text size?",
                "answer1": "font-style",
                "answer2": "text-size",
                "answer3": "font-size ",
                "answer4": "text-style",
                "right_answer": 3,
            },
            {
                "questions": "How do you select an element with id 'demo'?",
                "answer1": "#demo",
                "answer2": ".demo",
                "answer3": "demo",
                "answer4": "*demo",
                "right_answer": 1,
            },
            {
                "questions": "What is the default value of the position property?",
                "answer1": "static",
                "answer2": "relative",
                "answer3": "absolute",
                "answer4": "fixed",
                "right_answer": 1,
            },
            {
                "questions": "Which CSS property is used to change the text color of an element?",
                "answer1": "text-color",
                "answer2": "change-textcolor",
                "answer3": "color",
                "answer4": "font-color",
                "right_answer": 3,
            }

        ],
        [   /* JS Questions */

            {
                "questions": "Inside which HTML element do we put the JavaScript Code?",
                "answer1": "&lt;js&gt;",
                "answer2": "&lt;script&gt;",
                "answer3": "&lt;scripting&gt;",
                "answer4": "&lt;javascript&gt;",
                "right_answer": 2,
            },
            {
                "questions": `What is the correct syntax for referring to an external script called "xxx.js"?`,
                "answer1": `&lt;script name="xxx.js"&gt;`,
                "answer2": `&lt;script href="xxx.js"&gt;`,
                "answer3": `&lt;script src="xxx.js"&gt;`,
                "answer4": `&lt;script link="xxx.js"&gt;`,
                "right_answer": 3,
            },
            {
                "questions": `How do you write "Hello World" in an alert box?`,
                "answer1": `alertBox("Hello World");`,
                "answer2": `msg("Hello World");`,
                "answer3": `msgBox("Hello World");`,
                "answer4": `alert("Hello World");  `,
                "right_answer": 4,
            },
            {
                "questions": `How do you create a function named "myFunction" in JavaScript?`,
                "answer1": `function = myFunction()`,
                "answer2": `function:myFunction()`,
                "answer3": `function myFunction()`,
                "answer4": `.function myFunction()`,
                "right_answer": 3,
            },
            {
                "questions": `How do you call a function named "myFunction"?`,
                "answer1": `myFunction()`,
                "answer2": `call function myFunction()`,
                "answer3": `call myFunction()`,
                "answer4": `function myFunction()`,
                "right_answer": 1,
            },
            {
                "questions": "How to write an IF statement in JavaScript?",
                "answer1": "if i = 5",
                "answer2": "if i == 5 then",
                "answer3": "if i = 5 then",
                "answer4": "if (i == 5)",
                "right_answer": 4,
            },
            {
                "questions": "How do you find the number with the highest value of x and y?",
                "answer1": "top(x, y)",
                "answer2": "Math.ceil(x, y)",
                "answer3": "Math.max(x, y)",
                "answer4": "All of the answers above",
                "right_answer": 3,
            },
            {
                "questions": "When does an event occurs when the user clicks on an HTML element?",
                "answer1": "onclick",
                "answer2": "onmouseclick",
                "answer3": "click",
                "answer4": "onchange",
                "right_answer": 1,
            },
            {
                "questions": "Where is the correct place to insert a JavaScript file into an HTML document?",
                "answer1": "The &lt;head&gt; section",
                "answer2": "Nowhere",
                "answer3": "The &lt;body&gt; section",
                "answer4": "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
                "right_answer": 4,
            },
            {
                "questions": "How does a FOR loop start?",
                "answer1": "for (i = 0; i &lt;= 5)",
                "answer2": "for i = 1 to 5",
                "answer3": "for (i = 0; i &lt;= 5; i++)",
                "answer4": "for (i &lt;= 5; i++)",
                "right_answer": 3,
            }

        ],
        [   /* Java Questions */

            {
                "questions": "Inside which HTML element do we put the JavaScript Code?",
                "answer1": "&lt;js&gt;",
                "answer2": "&lt;script&gt;",
                "answer3": "&lt;scripting&gt;",
                "answer4": "&lt;javascript&gt;",
                "right_answer": 2,
            },
            {
                "questions": `What is the correct syntax for referring to an external script called "xxx.js"?`,
                "answer1": `&lt;script name="xxx.js"&gt;`,
                "answer2": `&lt;script href="xxx.js"&gt;`,
                "answer3": `&lt;script src="xxx.js"&gt;`,
                "answer4": `&lt;script link="xxx.js"&gt;`,
                "right_answer": 3,
            },
            {
                "questions": `How do you write "Hello World" in an alert box?`,
                "answer1": `alertBox("Hello World");`,
                "answer2": `msg("Hello World");`,
                "answer3": `msgBox("Hello World");`,
                "answer4": `alert("Hello World");  `,
                "right_answer": 4,
            },
            {
                "questions": `How do you create a function named "myFunction" in JavaScript?`,
                "answer1": `function = myFunction()`,
                "answer2": `function:myFunction()`,
                "answer3": `function myFunction()`,
                "answer4": `.function myFunction()`,
                "right_answer": 3,
            },
            {
                "questions": `How do you call a function named "myFunction"?`,
                "answer1": `myFunction()`,
                "answer2": `call function myFunction()`,
                "answer3": `call myFunction()`,
                "answer4": `function myFunction()`,
                "right_answer": 1,
            },
            {
                "questions": "How to write an IF statement in JavaScript?",
                "answer1": "if i = 5",
                "answer2": "if i == 5 then",
                "answer3": "if i = 5 then",
                "answer4": "if (i == 5)",
                "right_answer": 4,
            },
            {
                "questions": "How do you find the number with the highest value of x and y?",
                "answer1": "top(x, y)",
                "answer2": "Math.ceil(x, y)",
                "answer3": "Math.max(x, y)",
                "answer4": "All of the answers above",
                "right_answer": 3,
            },
            {
                "questions": "When does an event occurs when the user clicks on an HTML element?",
                "answer1": "onclick",
                "answer2": "onmouseclick",
                "answer3": "click",
                "answer4": "onchange",
                "right_answer": 1,
            },
            {
                "questions": "Where is the correct place to insert a JavaScript file into an HTML document?",
                "answer1": "The &lt;head&gt; section",
                "answer2": "Nowhere",
                "answer3": "The &lt;body&gt; section",
                "answer4": "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
                "right_answer": 4,
            },
            {
                "questions": "How does a FOR loop start?",
                "answer1": "for (i = 0; i &lt;= 5)",
                "answer2": "for i = 1 to 5",
                "answer3": "for (i = 0; i &lt;= 5; i++)",
                "answer4": "for (i &lt;= 5; i++)",
                "right_answer": 3,
            }

        ]
    ];

let currentCode = 0;
let currentQuestion = 0;
let rightAnswerSum = 0;
let currentProgress = 0;

let AUDIO_SUCCESS = new Audio ('audio/true.mp3');
let AUDIO_FAIL = new Audio ('audio/false.mp3');