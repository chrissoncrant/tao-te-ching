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
