/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns {number} The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param {string} month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param {object} subscription - May be null
 *   If present, has the following structure:
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param {array} users - May be empty, but not null
 *   Has the following structure:
 *   [
 *     {
 *       'id': 1,
 *       'name': "Employee #1",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-11-04"),
 *   
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       'deactivatedOn': new Date("2022-04-10")
 *     },
 *     {
 *       'id': 2,
 *       'name': "Employee #2",
 *       'customerId': 1,
 *   
 *       // when this user started
 *       'activatedOn': new Date("2021-12-04"),
 *   
 *       // hasn't been deactivated yet
 *       'deactivatedOn': null
 *     },
 *   ]
 */
const users = [
    {
        id: 1,
        name: 'Employee #1',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
    {
        id: 2,
        name: 'Employee #2',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
];

const plan = {
    id: 1,
    customerId: 1,
    monthlyPriceInCents: 5000,
};

function monthlyCharge(month, subscription, users) {
    // your code here!
    if (subscription === null || users === '') return 0;
    let monthlyBill = 0;
    let justMonth = month.substring(5);
    let justYear = month.substring(0, 4);
    let dateOfInput = new Date(justYear, justMonth - 1)

    //console.log(justMonth, justYear, dateOfInput)
    
    let daysInMonth = lastDayOfMonth(dateOfInput).toString().substring(8,10).valueOf() 
    - firstDayOfMonth(dateOfInput).toString().substring(8,10).valueOf()+1;
    //console.log(lastDayOfMonth(dateOfInput), firstDayOfMonth(dateOfInput));
    let monthlyChargeInCents = subscription.monthlyPriceInCents;
    for (let user of users){
        //console.log(user);
        let activated = user.activatedOn.getMonth();
        let Jan = new Date.now();
        console.log(Jan.getMonth());
        console.log(activated);
        let daysOfCharge = daysInMonth - activated.valueOf() + 1;
        //console.log(daysOfCharge);
    }
    let activatedOn = users.activatedOn;
    //let daysOfCharge = daysInMonth - users.activatedOn.substring(8).valueOf() + 1;
    //console.log(daysInMonth);
    //console.log(activatedOn);

}
/*******************
* Helper functions *
*******************/

/**
 * Takes a Date instance and returns a Date which is the first day
 * of that month. For example:
 *
 * firstDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
 * Takes a Date object and returns a Date which is the last day of that month.
 *
 * lastDayOfMonth(new Date(2022, 3, 17)) // => new Date(2022, 3, 31)
 *
 * Input type: Date
 * Output type: Date
**/
function lastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/**
 * Takes a Date object and returns a Date which is the next day.
 * For example:
 *
 * nextDay(new Date(2022, 3, 17))  // => new Date(2022, 3, 18)
 * nextDay(new Date(2022, 3, 31))  // => new Date(2022, 4, 1)
 *
 * Input type: Date
 * Output type: Date
**/
function nextDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}

monthlyCharge('2022-05', plan, users);