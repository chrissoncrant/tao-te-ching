const chapters = {
    chapterOne: {

    }
}

const chapterOne = {
    verses: "The tao that can be told\nis not the eternal Tao\nThe name that can be named\nis not the eternal Name.\n\nThe unnamable is the eternally real.\nNaming is the origin\nof all particular things."
}

let strArr = [
    ["The tao that can be told","is not the eternal Tao","The name that can be named","is not the eternal Name."],
    ["The unnamable is the eternally real.","Naming is the origin","of all particular things."]
]

//This takes in an array of strings; each string is one line of one verse; what is returned is a string consisting of all the strings in the input array joined together with the new line character. This string is one verse and is ready to be added into html. Actually I don't think this is needed. 
function addNewLineCharacter(strArr) {
    return strArr.join("\n");
}

//What is ultimately needed is an array of arrays of strings. The array of strings is a verse, and each string within the array is wrapped in a paragraph element. 

function addVerses(arr) {
    return arr.map(addNewLineCharacter)
}



