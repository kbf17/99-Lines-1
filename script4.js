var friends = [
    'Daphne',
    'Fred',
    'Velma',
    'Shaggy',
    'Scooby'
];

function singFriends() {
    var f = (friends[f]);
    for (var f = 0; f < friends.length; f++) 
    loops(f);
    }

function loops(friends[f]) {
    console.log ('Now ' + [f] + ' jumps in' + '!');
    for (var i = 99; i > 0; i--) {
        if (i > 2) {
            console.log ([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + [f] + ' strikes one out, clears it all out ' + [(i-1)] + ' lines of code in the file');
        }
        else if (i > 1) {
            console.log ([i] + ' lines of code in the file ' + [i] + ' lines of code; ' + [f] + ' strikes one out, clears it all out ' + [(i-1)] + ' line of code in the file');
        }
        else if (i == 1) {
            console.log ([i] + ' line of code in the file ' + [i] + ' line of code; ' + [f] + ' strikes one out, clears it all out, no more lines of code in the file.');
        }
        else {
            console.log ('Next Friend Hops In!');
            }
    }
}

singFriends()