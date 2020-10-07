import React, { useState } from "react";
import parse from "html-react-parser";
import dictionary from "../../dist/dictionary";

const SpellChecker = (props) => {
  const [suggestedWords, setSuggestedWords] = useState([]);

  var levenshtein = (function () {
    var row2 = [];
    return function (s1, s2) {
      if (s1 === s2) {
        return 0;
      } else {
        var s1_len = s1.length,
          s2_len = s2.length;
        if (s1_len && s2_len) {
          var i1 = 0,
            i2 = 0,
            a,
            b,
            c,
            c2,
            row = row2;
          while (i1 < s1_len) row[i1] = ++i1;
          while (i2 < s2_len) {
            c2 = s2.charCodeAt(i2);
            a = i2;
            ++i2;
            b = i2;
            for (i1 = 0; i1 < s1_len; ++i1) {
              c = a + (s1.charCodeAt(i1) === c2 ? 0 : 1);
              a = row[i1];
              b = b < a ? (b < c ? b + 1 : c) : a < c ? a + 1 : c;
              row[i1] = b;
            }
          }
          return b;
        } else {
          return s1_len + s2_len;
        }
      }
    };
  })();

  const suggestWord = (word) => {
    let wordsWithDist1 = [];
    let wordsWithDist2 = [];
    dictionary.forEach((dWord) => {
      const dist = levenshtein(word, dWord);
      console.log(dist);
      if (dist === 1) wordsWithDist1.push(dWord);
      if (dist === 2) wordsWithDist2.push(dWord);
    });
    let allSuggestions = [...wordsWithDist1, ...wordsWithDist2].splice(0, 20);
    console.log(dictionary, wordsWithDist1, wordsWithDist2, allSuggestions);
    setSuggestedWords(allSuggestions);
  };

  return (
    <div>
      <div>
        <h1 className="white">
          {props.spanish ? "Corrector de Texto" : "Spell Checker"}
        </h1>
        <p className="white">
          {props.spanish
            ? parse(
                "Uso de la distancia <b>Levenshtein</b> para encontrar palabras sugeridas"
              )
            : parse(
                "Use of the <b>Levenshtein</b> dinstance to get word suggestions"
              )}
        </p>
        <div className="spell_holder">
          <input
            onChange={(e) => {
              suggestWord(e.target.value);
            }}
            className="spell_input"
            type="text"
            placeholder={props.spanish ? "Escribe..." : "Write..."}
          />
          <ul className="suggested_words">
            {suggestedWords.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpellChecker;
