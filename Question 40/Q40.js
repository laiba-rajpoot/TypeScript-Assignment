"use strict";
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
let make_album = (artist_name, album_title) => {
    return { Artist: artist_name, Album: album_title };
};
let Album1 = make_album("Taylor Swift", "Reputation");
console.log(Album1);
let Album2 = make_album("Ed Sheeran", "x");
console.log(Album2);
let Album3 = make_album("Ariana Grande", "Dangerous Woman");
console.log(Album3);
console.log("\nOptional Parameter");
let Make_Album = (artist_name, album_title, tracks) => {
    if (tracks)
        return { Artist: artist_name, Album: album_title, Tracks: tracks };
    else
        return { Artist: artist_name, Album: album_title, Tracks: tracks !== null && tracks !== void 0 ? tracks : "" };
};
let Album_1 = Make_Album("Taylor Swift", "Reputation");
console.log(Album_1);
let Album_2 = Make_Album("Ed Sheeran", "x", 12);
console.log(Album_2);
let Album_3 = Make_Album("Ariana Grande", "Dangerous Woman", 17);
console.log(Album_3);
