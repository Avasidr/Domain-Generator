/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "last"];
let adj = ["great", "big", "of"];
let noun = ["jogger", "racoon", "us", "sitcom"];
let ext = ["com", "es", "us"];

window.onload = function() {
  //write your code here
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let a = 0; a < ext.length; a++) {
          const removeDuplicated = (noun, ext) => {
            return noun.filter(item => !ext.includes(item));
          };
          let modifiedNoun = noun[k];
          if (modifiedNoun.endsWith(ext[a])) {
            modifiedNoun = modifiedNoun.replace(ext[a], "");
          }
          console.log(removeDuplicated);
          document.write(
            `<p>${pronoun[i]}${adj[j]}${modifiedNoun}.${ext[a]}</p>`
          );
        }
      }
    }
  }
};
