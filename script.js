//chapters (array)
    //chapter (object)
        //title
        //verses (array)
            //verse (array)
                //paragraphs
        //reflection (object)
            //title
            //date
            //image (object)
                //src
                //altTag
            //paragraphs (array)
                //paragraph

// const chapters = [
//     {
//         chapter: {
//             verses: [
//                 "line1", "line2",
//             ],
//         },
//         reflection: {
//             title: "str",
//             date: "str",
//             image: {
//                 src: "str",
//                 altTag: "str",
//             },
//             writings: ["str1", "str2",],
//         }
//     },
// ];

const chaptersData = [
    {
        title: "str",
        verses: [
            "line1", "line2",
        ],
        reflection: {
            title: "str",
            date: "str",
            image: {
                src: "str",
                altTag: "str",
            },
            writings: ["str1", "str2",],
        },
    },
    {
        title: "str",
        verses: [
            "line1", "line2",
        ],
        reflection: {
            title: "str",
            date: "str",
            image: {
                src: "str",
                altTag: "str",
            },
            writings: ["str1", "str2",],
        },
    },
    {
        title: "str",
        verses: [
            ["str1", "str2",], 
            ["str1", "str2",], 
        ],
        reflection: {
            title: "str",
            date: "str",
            image: {
                src: "str",
                altTag: "str",
            },
            writings: ["str1", "str2",],
        },
    },
];

//input: string - output: string
function createLine(line) {
    return `<p>${line}</p>`;
}

//input: verse array - output: string
function createVerse(lines) {
    return lines.map(function(line) {
        return createLine(line);
    }).join("");
}

function createVerses(verses) {
    
    let template = `<ol>`;

    verses.forEach(function(verse) {

        template += `<li>${verse}</li>`;

    });

    template += `</ol>`;

    return template;
}

const output = document.querySelector('output');

output.innerHTML = createVerses(chaptersData[0].verses);

function createPoem(verses) {
    
    return `
        <div class="poem">
        </div>  
    `
}

function renderVerse(verse) {

}

console.log(str);

const chapterOne = {
    verses: "The tao that can be told\nis not the eternal Tao\nThe name that can be named\nis not the eternal Name.\n\nThe unnamable is the eternally real.\nNaming is the origin\nof all particular things."
};

let strArr = [
    ["The tao that can be told", "is not the eternal Tao", "The name that can be named", "is not the eternal Name."],
    ["The unnamable is the eternally real.", "Naming is the origin", "of all particular things."]
]

//This takes in an array of strings; each string is one line of one verse; what is returned is a string consisting of all the strings in the input array joined together with the new line character. This string is one verse and is ready to be added into html. Actually I don't think this is needed. 
function addNewLineCharacter(strArr) {
    return strArr.join("\n");
}

//What is ultimately needed is an array of arrays of strings. The array of strings is a verse, and each string within the array is wrapped in a paragraph element. 

function addVerses(arr) {
    return arr.map(addNewLineCharacter)
}