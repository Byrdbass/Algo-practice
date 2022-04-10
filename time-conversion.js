// given a time in 12-hour am/pm format convert it to military time/24 hr format

// this will take in a string and return a string

// the only numbers effected by this calculation will be the first two

// if the time is AM then only the AM needs to be removed and no further calculation is needed
// with the exception that 12:00:00AM should return 00:00:00



// if the string includes the letters 'PM' i will need to add 12 to the number

function timeConvert() {
    let s = '07:05:45PM'
    // I will need to make everything to lower case for processing
    let lowerCaseTime = s.toLowerCase()
    //console.log(lowerCaseTime)

    //need to split the string to make all values an array for correct data structure
    let [hours, minutes, secondsMod] = s.split(':');
    //console.log(secondsMod)
    let seconds = secondsMod.slice(0,2)
    //console.log(hours, minutes, seconds)
    if (hours === '12' && lowerCaseTime.includes('a')) {
        //console.log('the time is 00 hours military time')
        hours = '00'
    }
    //console.log(hours)
    //find the placement of the letter P or A in the string
    // an if statement to check for 3 versions of the time - doing a different way because .includes method is not reading the split time correctly
    // if the time includes a p for PM
    if (lowerCaseTime.includes('p') && hours != 12) {
        let isTimePM = true
        //console.log(`the time is PM ${isTimePM}`)
        hours = parseInt(hours, 10) + 12
    }
    
    else {
        let isTimeAM = true
        //console.log(`the time is AM ${isTimeAM}`)
    }
    
    return `${hours}:${minutes}:${seconds}`
}


// if the time includes a for AM

// if the time includes 12 at the beginning


timeConvert();