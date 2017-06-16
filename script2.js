var friends = [
    'Daphne',
    'Fred',
    'Velma',
    'Shaggy',
    'Scooby'
];

// function singFriends(friends) {
// for (var f = 0; f < friends.length; f++) {
//     console.log ('Now ' + friends[f] + ' jumps in' + '!')
//     for (var i = 99; i > 0; i--) {
//     if (i > 2) {
//         console.log ([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out ' + [(i-1)] + ' lines of code in the file')
//     }
//     else if (i > 1) {
//         console.log ([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out ' + [(i-1)] + ' line of code in the file')
//     }
//     else if (i = 1) {
//         console.log ([i] + ' line of code in the file ' + [i] + ' line of code; ' + friends[f] + ' strikes one out, clears it all out, no more lines of code in the file.')
//     }
//     else {
//         console.log ('Next Friend Hops In!')
//         }
// }
// };
var f = (friends[f]);
function singFriends(f) {
    console.log ('Now ' + friends[f] + ' jumps in' + '!')
    for (var i = 99; i > 0; i--) {
    if (i > 2) {
        console.log ([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out ' + [(i-1)] + ' lines of code in the file')
    }
    else if (i > 1) {
        console.log ([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + friends[f] + ' strikes one out, clears it all out ' + [(i-1)] + ' line of code in the file')
    }
    else if (i = 1) {
        console.log ([i] + ' line of code in the file ' + [i] + ' line of code; ' + friends[f] + ' strikes one out, clears it all out, no more lines of code in the file.')
    }
}};

singFriends(0)
singFriends(1)
singFriends(2)
singFriends(3)
singFriends(4)