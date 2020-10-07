import React, { useState, useRef } from "react";
import parse from "html-react-parser";
import dictionary from "../../dist/dictionary";

const SpellChecker = (props) => {
  const [suggestedWords, setSuggestedWords] = useState([]);
  const [distance, setDistance] = useState(0);
  const word1 = useRef("");
  const word2 = useRef("");

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
  const calculateAndSetDistance = () => {
    const dist = levenshtein(word1.current.value, word2.current.value);
    setDistance(dist);
  };

  const suggestWord = (word) => {
    let wordsWithDist1 = [];
    let wordsWithDist2 = [];
    dictionary.forEach((dWord) => {
      const dist = levenshtein(word, dWord);
      if (dist === 1) wordsWithDist1.push(dWord);
      if (dist === 2) wordsWithDist2.push(dWord);
    });
    let allSuggestions = [...wordsWithDist1, ...wordsWithDist2].splice(0, 5);
    console.log("length...", word.length);
    if (word.length === 0) {
      setSuggestedWords([]);
    } else {
      setSuggestedWords(allSuggestions);
    }
  };

  return (
    <div>
      <div className="align_start">
        <h1 className="white align_center">
          {props.spanish ? "Corrector de Texto" : "Spell Checker"}
        </h1>
        <p className="white" style={{ marginBottom: "0" }}>
          {props.spanish
            ? parse(
                "Uso de la distancia <b>Levenshtein</b> para encontrar palabras sugeridas en base a un diccionario"
              )
            : parse(
                "Use of the <b>Levenshtein</b> dinstance to get word suggestions based in a dictionary"
              )}
        </p>
        <h5
          className="white"
          style={{ fontWeight: "normal", marginTop: "0", marginBottom: "10px" }}
        >
          {props.spanish
            ? "La distancia Levenshtein calcula la cantidad de cambios necesarios para matchear 2 palabras. Añadir, quitar o modificar 1 letra suman 1 a la distancia"
            : "The Levenshtein distance calculates the amount of changes needed to match 2 words. Add, remove or change 1 character add a distance of 1"}
        </h5>
        <div className="spell_holder">
          <input
            onChange={(e) => {
              suggestWord(e.target.value.toLowerCase());
            }}
            className="spell_input "
            type="text"
            placeholder={props.spanish ? "Escribe..." : "Write..."}
          />
          <ul className="suggested_words">
            {suggestedWords.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3 className="white align_center">
            {props.spanish
              ? "Calcula la distancia Levenshtein entre 2 palabras"
              : "Calculate de Levenshtein distance between 2 words"}
          </h3>
          <div className="distance_calculator">
            <div>
              <input
                ref={word1}
                type="text"
                placeholder={props.spanish ? "Primer palabra" : "First word"}
                onChange={calculateAndSetDistance}
              ></input>

              <input
                ref={word2}
                type="text"
                placeholder={props.spanish ? "Segunda palabra" : "Second word"}
                onChange={calculateAndSetDistance}
              ></input>
            </div>
            <h4 className="white align_center">
              {props.spanish ? "Distancia de:" : "Distance of:"}
              <br />
              {distance}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellChecker;
