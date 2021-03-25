"use strict";

const features = {
  aries: false,
  aries2: false,
  aries3: false,
  aries4: false,
  cancer: false,
  cancer2: false,
  cancer3: false,
  cancer4: false,
  gemini: false,
  gemini2: false,
  gemini3: false,
  gemini4: false,
  leo: false,
  leo2: false,
  leo3: false,
  leo4: false,
  taurus: false,
  taurus2: false,
  taurus3: false,
  taurus4: false,
  aquarius: false,
  aquarius2: false,
  aquarius3: false,
  aquarius4: false,
  libra: false,
  libra2: false,
  libra3: false,
  libra4: false,
  pices1: false,
  sagittarius: false,
  sagittarius2: false,
  sagittarius3: false,
  sagittarius4: false,
  scorpio: false,
  scorpio2: false,
  scorpio3: false,
  scorpio4: false,
  virgo: false,
  virgo2: false,
  virgo3: false,
  virgo4: false,
  capricorn: false,
  capricorn2: false,
  capricorn3: false,
  capricorn4: false,
};

let fragrance1 = document.querySelector("#fragrance1");
let fragrance2 = document.querySelector("#fragrance2");
let fragrance3 = document.querySelector("#fragrance3");
let candle1 = document.querySelector("#candle1");
let candle2 = document.querySelector("#candle2");
let candle3 = document.querySelector("#candle3");
let candle4 = document.querySelector("#candle4");
let buttoncandl = document.querySelector("button");

const leoFragrance = ["ROSEMARY", "ORANGE", "JASMINE"];
const virgoFragrance = ["LAVENDER", "SANDALWOOD", "MINT"];
const libraFragrance = ["ROSE", "ELDERFLOWER", "SPRUCE"];
const scorpioFragrance = ["ORANGE", "PATCHOULI", "GINGER"];
const sagittariusFragrance = ["SANDALWOOD", "CORIANDER", "BASIL"];
const capricornFragrance = ["JASMINE", "SAGE", "EUCALYPTUS"];
const aquariusFragrance = ["ORANGE", "MINT", "LEMON"];
const picesFragrance = ["LAVENDER", "SAGE", "CEDAR"];
const ariesFragrance = ["ELDERFLOWER", "GINGER", "CORIANDER"];
const taurusFragrance = ["ROSE", "SPRUCE", "PATCHOULI"];
const geminiFragrance = ["LAVENDER", "CITRUS", "BASIL"];
const cancerFragrance = ["JASMINE", "SANDALWOOD", "EUCALYPTUS"];

const lemon = ["#fcd360", "#fcba00", "#b08202"];
const rosemary = ["#636659", "#afbbb3", "#97a389"];
const orange = ["#ffd97a", "#ffb600", "#c28a00"];
const jasmine = ["#ffd97a", "#ffb600", "#c28a00"];
const lavender = ["#f2ccff", "#dd78ff", "#9d37bf"];
const sandalwood = ["#8d5851", "#b8917b", "#ccb2a3"];
const mint = ["#a3ccb5", "#6ce6a1", "#6ee6da"];
const rose = ["#ffbdd1", "#fa87aa", "#fa87aa"];
const elderflower = ["#fff0bd", "#ffe17a", "#fff8ed"];
const spruce = ["#79ba96", "#3b7856", "#70917f"];
const patchouli = ["#c2939a", "#fcb8c2", "#d19784"];
const ginger = ["#ffad61", "#ff8f26", "#bf6930"];
const coriander = ["#8da259", "#blc18e", "#486a4f"];
const basil = ["#6cc25f", "#2c7d1f", "#1ba305"];
const sage = ["#6cd9b3", "#6cd984", "#6cd9ca"];
const eucalyptus = ["#6cd9b3", "#6cd984", "#6cd9ca"];
const cedar = ["#ffad61", "#ff8f26", "#bf6930"];
const citrus = ["#fcd360", "#fcba00", "#b08202"];

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");

let first_candle = false;
let second_candle = false;
let third_candle = false;
let fourth_candle = false;

document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");

async function start() {
  let response = await fetch("candle/box4done-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#candle").innerHTML = mySvgData;
  // register toggle-clicks
  document
    .querySelectorAll(".option_zodiac")
    .forEach((option) => option.addEventListener("click", toggleOptionZodiac));

  const svg_container = document.querySelector(".svg_handwritten");

  let response1 = await fetch("images/handwritten.svg");
  let svgData = await response1.text(); // Her laver vi responsen til text i stedet.

  svg_container.innerHTML = svgData;

  console.log("SVG file loaded");

  handwrittenAni();

  userInteractionOnButtons();
  logoAni();
}

function logoAni() {
  gsap.from(".logo_circle", {
    yoyo: true,
    rotation: "+=360",
    opacity: 0,
    repeat: -1,
    scale: 0,
    transformOrigin: "50% 50%",
    duration: 5,
    x: -10,
    y: 4,
  });
}

function userInteractionOnButtons() {
  /* mouseover on all buttons*/
  document.querySelectorAll(".buttons").forEach((button) =>
    button.addEventListener("mouseover", () => {
      // console.log("mouseover");
      button.style.backgroundColor = "#cfcfcf";
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#EEE";
      });
    })
  );

  /* mouseout on all buttons*/
  document.querySelectorAll("a").forEach((a) =>
    a.addEventListener("mouseover", () => {
      // console.log("mouseover");
      a.style.backgroundColor = "#cfcfcf";
      a.addEventListener("mouseout", () => {
        a.style.backgroundColor = "white";
      });
    })
  );

  /* toggle on zodiac button */
  document.querySelector("#button_zodiac").addEventListener("click", () => {
    //console.log("toggle zodiac choises");
    const zodiacChoises = document.querySelector("#option_zodiac_choises");
    zodiacChoises.classList.toggle("hide");
  });

  document.querySelector("#first_candle").addEventListener("click", () => {
    if (first_candle != true) {
      first_candle = true;
      console.log(`1 = ${first_candle}`);

      document.querySelector("#option_zodiac_choises").classList.remove("hide");
      document.querySelector("#option_color_choises").classList.add("hide");
      document.querySelector("#option_fragrance_choises").classList.add("hide");

      document.querySelector("#first_zodiac_label").classList.remove("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#000000";
      document.querySelector("#first_candle").style.color = "#ffffff";

      second_candle = false;
      console.log(`2 = ${second_candle}`);

      document.querySelector("#second_zodiac_label").classList.add("hide");
      document.querySelector("#second_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#second_candle").style.color = "#ffffff";

      third_candle = false;
      console.log(`3 = ${third_candle}`);

      document.querySelector("#third_zodiac_label").classList.add("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#third_candle").style.color = "#ffffff";

      fourth_candle = false;
      console.log(`4 = ${fourth_candle}`);

      document.querySelector("#fourth_zodiac_label").classList.add("hide");
      document.querySelector("#fourth_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#fourth_candle").style.color = "#ffffff";
    } else {
      first_candle = false;
      console.log(`1 = ${first_candle}`);

      document.querySelector("#first_zodiac_label").classList.add("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#first_candle").style.color = "#ffffff";

      document.querySelector(".number1").style.backgroundColor = "darkgray";
      document.querySelector(".number2").style.backgroundColor = "darkgray";
      document.querySelector(".number3").style.backgroundColor = "darkgray";
    }
  });

  document.querySelector("#second_candle").addEventListener("click", () => {
    if (second_candle != true) {
      second_candle = true;
      console.log(`2 = ${second_candle}`);

      document.querySelector("#option_zodiac_choises").classList.remove("hide");
      document.querySelector("#option_color_choises").classList.add("hide");
      document.querySelector("#option_fragrance_choises").classList.add("hide");

      document.querySelector("#second_zodiac_label").classList.remove("hide");
      document.querySelector("#second_candle").style.backgroundColor =
        "#191919";
      document.querySelector("#second_candle").style.color = "#ffffff";

      first_candle = false;
      console.log(`1 = ${first_candle}`);

      document.querySelector("#first_zodiac_label").classList.add("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#first_candle").style.color = "#ffffff";

      third_candle = false;
      console.log(`3 = ${third_candle}`);

      document.querySelector("#third_zodiac_label").classList.add("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#third_candle").style.color = "#ffffff";

      fourth_candle = false;
      console.log(`4 = ${fourth_candle}`);

      document.querySelector("#fourth_zodiac_label").classList.add("hide");
      document.querySelector("#fourth_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#fourth_candle").style.color = "#ffffff";

      document.querySelector(".number1").style.backgroundColor = "darkgray";
      document.querySelector(".number2").style.backgroundColor = "darkgray";
      document.querySelector(".number3").style.backgroundColor = "darkgray";
    } else {
      second_candle = false;
      console.log(`2 = ${second_candle}`);

      document.querySelector("#second_zodiac_label").classList.add("hide");
      document.querySelector("#second_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#second_candle").style.color = "#ffffff";
    }
  });

  document.querySelector("#third_candle").addEventListener("click", () => {
    if (third_candle != true) {
      third_candle = true;
      console.log(`3 = ${third_candle}`);

      document.querySelector("#option_zodiac_choises").classList.remove("hide");
      document.querySelector("#option_color_choises").classList.add("hide");
      document.querySelector("#option_fragrance_choises").classList.add("hide");

      document.querySelector("#third_zodiac_label").classList.remove("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#191919";
      document.querySelector("#third_candle").style.color = "#ffffff";

      first_candle = false;
      console.log(`1 = ${first_candle}`);

      document.querySelector("#first_zodiac_label").classList.add("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#first_candle").style.color = "#ffffff";

      second_candle = false;
      console.log(`2 = ${second_candle}`);

      document.querySelector("#second_zodiac_label").classList.add("hide");
      document.querySelector("#second_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#second_candle").style.color = "#ffffff";

      fourth_candle = false;
      console.log(`4 = ${fourth_candle}`);

      document.querySelector("#fourth_zodiac_label").classList.add("hide");
      document.querySelector("#fourth_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#fourth_candle").style.color = "#ffffff";

      document.querySelector(".number1").style.backgroundColor = "darkgray";
      document.querySelector(".number2").style.backgroundColor = "darkgray";
      document.querySelector(".number3").style.backgroundColor = "darkgray";
    } else {
      third_candle = false;
      console.log(`3 = ${third_candle}`);

      document.querySelector("#third_zodiac_label").classList.add("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#third_candle").style.color = "#ffffff";
    }
  });

  document.querySelector("#fourth_candle").addEventListener("click", () => {
    if (fourth_candle != true) {
      fourth_candle = true;
      console.log(`4 = ${fourth_candle}`);

      document.querySelector("#option_zodiac_choises").classList.remove("hide");
      document.querySelector("#option_color_choises").classList.add("hide");
      document.querySelector("#option_fragrance_choises").classList.add("hide");

      document.querySelector("#fourth_zodiac_label").classList.remove("hide");
      document.querySelector("#fourth_candle").style.backgroundColor =
        "#191919";
      document.querySelector("#fourth_candle").style.color = "#ffffff";

      first_candle = false;
      console.log(`1 = ${first_candle}`);

      document.querySelector("#first_zodiac_label").classList.add("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#first_candle").style.color = "#ffffff";

      second_candle = false;
      console.log(`2 = ${second_candle}`);

      document.querySelector("#second_zodiac_label").classList.add("hide");
      document.querySelector("#second_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#second_candle").style.color = "#ffffff";

      third_candle = false;
      console.log(`3 = ${third_candle}`);

      document.querySelector("#third_zodiac_label").classList.add("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#7A6C5D";
      document.querySelector("#third_candle").style.color = "#ffffff";

      document.querySelector(".number1").style.backgroundColor = "darkgray";
      document.querySelector(".number2").style.backgroundColor = "darkgray";
      document.querySelector(".number3").style.backgroundColor = "darkgray";
    } else {
      fourth_candle = false;
      console.log(`4 = ${fourth_candle}`);

      document.querySelector("#fourth_zodiac_label").classList.add("hide");
      document.querySelector("#fourth_candle").style.backgroundColor =
        "#7A6C5D";
      document.querySelector("#fourth_candle").style.color = "#ffffff";
    }
  });
}

function toggleOptionZodiac(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;

  //KLAUS start
  let activeCandle;
  if (first_candle == true) {
    activeCandle = 1;
  } else if (second_candle == true) {
    activeCandle = 2;
  } else if (third_candle == true) {
    activeCandle = 3;
  } else {
    activeCandle = 4;
  }
  // TODO: Toggle feature in "model"
  document.querySelector("#aries" + activeCandle).classList.add("hide");
  document.querySelector("#cancer" + activeCandle).classList.add("hide");
  document.querySelector("#capricorn" + activeCandle).classList.add("hide");
  document.querySelector("#gemini" + activeCandle).classList.add("hide");
  document.querySelector("#leo" + activeCandle).classList.add("hide");
  document.querySelector("#libra" + activeCandle).classList.add("hide");
  document.querySelector("#pices" + activeCandle).classList.add("hide");
  document.querySelector("#sagittarius" + activeCandle).classList.add("hide");
  document.querySelector("#scorpio" + activeCandle).classList.add("hide");
  document.querySelector("#taurus" + activeCandle).classList.add("hide");
  document.querySelector("#virgo" + activeCandle).classList.add("hide");
  //KLAUS end

  // TODO: Toggle feature in "model"
  features[feature] = !features[feature];

  if (features[feature] === true) {
    // TODO: - mark target as chosen (add class "chosen")

    // - un-hide the feature-layer(s) in the #product-preview;
    console.log(`${feature}`);
    document
      .querySelector(`[data-feature="${feature}"`)
      .classList.remove("hide");

    //KLAUS start
    console.log("TARGET ", target.parentElement);
    // KLAUS end

    // TODO: display selected zodiac feature fragrance
    if (feature.includes("leo")) {
      console.log("feature = leo");
      fragrance1.innerHTML = `${leoFragrance[0]}`;
      fragrance1.setAttribute("data-feature", "fragrance1leo");
      fragrance2.innerHTML = `${leoFragrance[1]}`;
      fragrance2.setAttribute("data-feature", "fragrance2leo");
      fragrance3.innerHTML = `${leoFragrance[2]}`;
      fragrance3.setAttribute("data-feature", "fragrance3leo");
    } else if (feature.includes("virgo")) {
      console.log("feature = virgo");
      fragrance1.innerHTML = `${virgoFragrance[0]}`;
      fragrance2.innerHTML = `${virgoFragrance[1]}`;
      fragrance3.innerHTML = `${virgoFragrance[2]}`;
    } else if (feature.includes("libra")) {
      console.log("feature = libra");
      fragrance1.innerHTML = `${libraFragrance[0]}`;
      fragrance2.innerHTML = `${libraFragrance[1]}`;
      fragrance3.innerHTML = `${libraFragrance[2]}`;
    } else if (feature.includes("scorpio")) {
      console.log("feature = scorpio");
      fragrance1.innerHTML = `${scorpioFragrance[0]}`;
      fragrance2.innerHTML = `${scorpioFragrance[1]}`;
      fragrance3.innerHTML = `${scorpioFragrance[2]}`;
    } else if (feature.includes("sagittarius")) {
      console.log("feature = sagittarius");
      fragrance1.innerHTML = `${sagittariusFragrance[0]}`;
      fragrance2.innerHTML = `${sagittariusFragrance[1]}`;
      fragrance3.innerHTML = `${sagittariusFragrance[2]}`;
    } else if (feature.includes("capricorn")) {
      console.log("feature = capricorn");
      fragrance1.innerHTML = `${capricornFragrance[0]}`;
      fragrance2.innerHTML = `${capricornFragrance[1]}`;
      fragrance3.innerHTML = `${capricornFragrance[2]}`;
    } else if (feature.includes("aquarius")) {
      console.log("feature = aquarius");
      fragrance1.innerHTML = `${aquariusFragrance[0]}`;
      fragrance2.innerHTML = `${aquariusFragrance[1]}`;
      fragrance3.innerHTML = `${aquariusFragrance[2]}`;
    } else if (feature.includes("pices")) {
      console.log("feature = pices");
      fragrance1.innerHTML = `${picesFragrance[0]}`;
      fragrance2.innerHTML = `${picesFragrance[1]}`;
      fragrance3.innerHTML = `${picesFragrance[2]}`;
    } else if (feature.includes("aries")) {
      console.log("feature = aries");
      fragrance1.innerHTML = `${ariesFragrance[0]}`;
      fragrance2.innerHTML = `${ariesFragrance[1]}`;
      fragrance3.innerHTML = `${ariesFragrance[2]}`;
    } else if (feature.includes("taurus")) {
      console.log("feature = taurus");
      fragrance1.innerHTML = `${taurusFragrance[0]}`;
      fragrance2.innerHTML = `${taurusFragrance[1]}`;
      fragrance3.innerHTML = `${taurusFragrance[2]}`;
    } else if (feature.includes("gemini")) {
      console.log("feature = gemini");
      fragrance1.innerHTML = `${geminiFragrance[0]}`;
      fragrance2.innerHTML = `${geminiFragrance[1]}`;
      fragrance3.innerHTML = `${geminiFragrance[2]}`;
    } else if (feature.includes("cancer")) {
      console.log("feature = cancer");
      fragrance1.innerHTML = `${cancerFragrance[0]}`;
      fragrance2.innerHTML = `${cancerFragrance[1]}`;
      fragrance3.innerHTML = `${cancerFragrance[2]}`;
    }

    /* toggle on fragrance button button*/
    document
      .querySelector("#button_fragrance")
      .addEventListener("click", () => {
        console.log("toggle fragrance choises");
        const fragranceChoises = document.querySelector(
          "#option_fragrance_choises"
        );
        // siw
        document.querySelector("#option_zodiac_choises").classList.add("hide");
        fragranceChoises.classList.remove("hide");
        document.querySelector(".number1").style.backgroundColor = "black";

        //fragrance1.addEventListener("click", fragranceColor);
        document
          .querySelector("#fragrance1")
          .addEventListener("click", displayFragrance1);
        document
          .querySelector("#fragrance2")
          .addEventListener("click", displayFragrance2);
        document
          .querySelector("#fragrance3")
          .addEventListener("click", displayFragrance3);
      });
  } else {
    document.querySelector(`[data-feature=${feature}`).classList.add("hide");
  }
}

function displayFragrance1() {
  console.log("display fragrance");

  if (first_candle === true) {
    candle1.innerHTML = `${fragrance1.innerHTML}`;
  } else if (second_candle === true) {
    candle2.innerHTML = `${fragrance1.innerHTML}`;
  } else if (third_candle === true) {
    candle3.innerHTML = `${fragrance1.innerHTML}`;
  } else if (fourth_candle === true) {
    candle4.innerHTML = `${fragrance1.innerHTML}`;
  } else {
    console.log("none of the candles has been chosen");
  }

  setColorsFirst();
}

function displayFragrance2() {
  console.log("display fragrance");
  if (first_candle === true) {
    candle1.innerHTML = `${fragrance2.innerHTML}`;
  } else if (second_candle === true) {
    candle2.innerHTML = `${fragrance2.innerHTML}`;
  } else if (third_candle === true) {
    candle3.innerHTML = `${fragrance2.innerHTML}`;
  } else if (fourth_candle === true) {
    candle4.innerHTML = `${fragrance2.innerHTML}`;
  } else {
    console.log("none of the candles has been chosen");
  }

  setColorsFirst();
}

function displayFragrance3() {
  console.log("display fragrance");
  if (first_candle === true) {
    candle1.innerHTML = `${fragrance3.innerHTML}`;
  } else if (second_candle === true) {
    candle2.innerHTML = `${fragrance3.innerHTML}`;
  } else if (third_candle === true) {
    candle3.innerHTML = `${fragrance3.innerHTML}`;
  } else if (fourth_candle === true) {
    candle4.innerHTML = `${fragrance3.innerHTML}`;
  } else {
    console.log("none of the candles has been chosen");
  }
  setColorsFirst();
}

function setColorsFirst() {
  if (
    candle1.innerHTML === `${fragrance1.innerHTML}` ||
    candle2.innerHTML === `${fragrance1.innerHTML}` ||
    candle3.innerHTML === `${fragrance1.innerHTML}` ||
    candle4.innerHTML === `${fragrance1.innerHTML}`
  ) {
    console.log(`${fragrance1.innerHTML}`);

    let fragranceColor1 = fragrance1.innerHTML.substring(0).toLowerCase();
    console.log(`${fragranceColor1}`);

    if (fragranceColor1 === "lemon") {
      console.log("lemon has been chosen");
      console.log(`${lemon[0]}`);
      color1.setAttribute("fill", `${lemon[0]}`);
      color2.setAttribute("fill", `${lemon[1]}`);
      color3.setAttribute("fill", `${lemon[2]}`);
    } else if (fragranceColor1 === "rosemary") {
      console.log("rosemary has been chosen");
      color1.setAttribute("fill", `${rosemary[0]}`);
      color2.setAttribute("fill", `${rosemary[1]}`);
      color3.setAttribute("fill", `${rosemary[2]}`);
    } else if (fragranceColor1 === "orange") {
      console.log("orange has been chosen");
      color1.setAttribute("fill", `${orange[0]}`);
      color2.setAttribute("fill", `${orange[1]}`);
      color3.setAttribute("fill", `${orange[2]}`);
    } else if (fragranceColor1 === "jasmine") {
      console.log("jasmine has been chosen");
      color1.setAttribute("fill", `${jasmine[0]}`);
      color2.setAttribute("fill", `${jasmine[1]}`);
      color3.setAttribute("fill", `${jasmine[2]}`);
    } else if (fragranceColor1 === "lavender") {
      console.log("lavender has been chosen");
      color1.setAttribute("fill", `${lavender[0]}`);
      color2.setAttribute("fill", `${lavender[1]}`);
      color3.setAttribute("fill", `${lavender[2]}`);
    } else if (fragranceColor1 === "sandalwood") {
      console.log("sandalwood has been chosen");
      color1.setAttribute("fill", `${sandalwood[0]}`);
      color2.setAttribute("fill", `${sandalwood[1]}`);
      color3.setAttribute("fill", `${sandalwood[2]}`);
    } else if (fragranceColor1 === "mint") {
      console.log("mint has been chosen");
      color1.setAttribute("fill", `${mint[0]}`);
      color2.setAttribute("fill", `${mint[1]}`);
      color3.setAttribute("fill", `${mint[2]}`);
    } else if (fragranceColor1 === "rose") {
      console.log("rose has been chosen");
      color1.setAttribute("fill", `${rose[0]}`);
      color2.setAttribute("fill", `${rose[1]}`);
      color3.setAttribute("fill", `${rose[2]}`);
    } else if (fragranceColor1 === "elderflower") {
      console.log("elderflower has been chosen");
      color1.setAttribute("fill", `${elderflower[0]}`);
      color2.setAttribute("fill", `${elderflower[1]}`);
      color3.setAttribute("fill", `${elderflower[2]}`);
    } else if (fragranceColor1 === "spruce") {
      console.log("spruce has been chosen");
      color1.setAttribute("fill", `${spruce[0]}`);
      color2.setAttribute("fill", `${spruce[1]}`);
      color3.setAttribute("fill", `${spruce[2]}`);
    } else if (fragranceColor1 === "patchouli") {
      console.log("patchouli has been chosen");
      color1.setAttribute("fill", `${patchouli[0]}`);
      color2.setAttribute("fill", `${patchouli[1]}`);
      color3.setAttribute("fill", `${patchouli[2]}`);
    } else if (fragranceColor1 === "ginger") {
      console.log("ginger has been chosen");
      color1.setAttribute("fill", `${ginger[0]}`);
      color2.setAttribute("fill", `${ginger[1]}`);
      color3.setAttribute("fill", `${ginger[2]}`);
    } else if (fragranceColor1 === "coriander") {
      console.log("coriander has been chosen");
      color1.setAttribute("fill", `${coriander[0]}`);
      color2.setAttribute("fill", `${coriander[1]}`);
      color3.setAttribute("fill", `${coriander[2]}`);
    } else if (fragranceColor1 === "basil") {
      console.log("basil has been chosen");
      color1.setAttribute("fill", `${basil[0]}`);
      color2.setAttribute("fill", `${basil[1]}`);
      color3.setAttribute("fill", `${basil[2]}`);
    } else if (fragranceColor1 === "sage") {
      console.log("sage has been chosen");
      color1.setAttribute("fill", `${sage[0]}`);
      color2.setAttribute("fill", `${sage[1]}`);
      color3.setAttribute("fill", `${sage[2]}`);
    } else if (fragranceColor1 === "eucalyptus") {
      console.log("eucalyptus has been chosen");
      color1.setAttribute("fill", `${eucalyptus[0]}`);
      color2.setAttribute("fill", `${eucalyptus[1]}`);
      color3.setAttribute("fill", `${eucalyptus[2]}`);
    } else if (fragranceColor1 === "cedar") {
      console.log("cedar has been chosen");
      color1.setAttribute("fill", `${cedar[0]}`);
      color2.setAttribute("fill", `${cedar[1]}`);
      color3.setAttribute("fill", `${cedar[2]}`);
    } else if (fragranceColor1 === "citrus") {
      console.log("citrus has been chosen");
      color1.setAttribute("fill", `${citrus[0]}`);
      color2.setAttribute("fill", `${citrus[1]}`);
      color3.setAttribute("fill", `${citrus[2]}`);
    }
  } else if (
    candle1.innerHTML === `${fragrance2.innerHTML}` ||
    candle2.innerHTML === `${fragrance2.innerHTML}` ||
    candle3.innerHTML === `${fragrance2.innerHTML}` ||
    candle4.innerHTML === `${fragrance2.innerHTML}`
  ) {
    console.log(`${fragrance2.innerHTML}`);
    let fragranceColor2 = fragrance2.innerHTML.substring(0).toLowerCase();
    console.log(`${fragranceColor2}`);

    if (fragranceColor2 === "lemon") {
      console.log("lemon has been chosen");
      console.log(`${lemon[0]}`);
      color1.setAttribute("fill", `${lemon[0]}`);
      color2.setAttribute("fill", `${lemon[1]}`);
      color3.setAttribute("fill", `${lemon[2]}`);
    } else if (fragranceColor2 === "rosemary") {
      console.log("rosemary has been chosen");
      color1.setAttribute("fill", `${rosemary[0]}`);
      color2.setAttribute("fill", `${rosemary[1]}`);
      color3.setAttribute("fill", `${rosemary[2]}`);
    } else if (fragranceColor2 === "orange") {
      console.log("orange has been chosen");
      color1.setAttribute("fill", `${orange[0]}`);
      color2.setAttribute("fill", `${orange[1]}`);
      color3.setAttribute("fill", `${orange[2]}`);
    } else if (fragranceColor2 === "jasmine") {
      console.log("jasmine has been chosen");
      color1.setAttribute("fill", `${jasmine[0]}`);
      color2.setAttribute("fill", `${jasmine[1]}`);
      color3.setAttribute("fill", `${jasmine[2]}`);
    } else if (fragranceColor2 === "lavender") {
      console.log("lavender has been chosen");
      color1.setAttribute("fill", `${lavender[0]}`);
      color2.setAttribute("fill", `${lavender[1]}`);
      color3.setAttribute("fill", `${lavender[2]}`);
    } else if (fragranceColor2 === "sandalwood") {
      console.log("sandalwood has been chosen");
      color1.setAttribute("fill", `${sandalwood[0]}`);
      color2.setAttribute("fill", `${sandalwood[1]}`);
      color3.setAttribute("fill", `${sandalwood[2]}`);
    } else if (fragranceColor2 === "mint") {
      console.log("mint has been chosen");
      color1.setAttribute("fill", `${mint[0]}`);
      color2.setAttribute("fill", `${mint[1]}`);
      color3.setAttribute("fill", `${mint[2]}`);
    } else if (fragranceColor2 === "rose") {
      console.log("rose has been chosen");
      color1.setAttribute("fill", `${rose[0]}`);
      color2.setAttribute("fill", `${rose[1]}`);
      color3.setAttribute("fill", `${rose[2]}`);
    } else if (fragranceColor2 === "elderflower") {
      console.log("elderflower has been chosen");
      color1.setAttribute("fill", `${elderflower[0]}`);
      color2.setAttribute("fill", `${elderflower[1]}`);
      color3.setAttribute("fill", `${elderflower[2]}`);
    } else if (fragranceColor2 === "spruce") {
      console.log("spruce has been chosen");
      color1.setAttribute("fill", `${spruce[0]}`);
      color2.setAttribute("fill", `${spruce[1]}`);
      color3.setAttribute("fill", `${spruce[2]}`);
    } else if (fragranceColor2 === "patchouli") {
      console.log("patchouli has been chosen");
      color1.setAttribute("fill", `${patchouli[0]}`);
      color2.setAttribute("fill", `${patchouli[1]}`);
      color3.setAttribute("fill", `${patchouli[2]}`);
    } else if (fragranceColor2 === "ginger") {
      console.log("ginger has been chosen");
      color1.setAttribute("fill", `${ginger[0]}`);
      color2.setAttribute("fill", `${ginger[1]}`);
      color3.setAttribute("fill", `${ginger[2]}`);
    } else if (fragranceColor2 === "coriander") {
      console.log("coriander has been chosen");
      color1.setAttribute("fill", `${coriander[0]}`);
      color2.setAttribute("fill", `${coriander[1]}`);
      color3.setAttribute("fill", `${coriander[2]}`);
    } else if (fragranceColor2 === "basil") {
      console.log("basil has been chosen");
      color1.setAttribute("fill", `${basil[0]}`);
      color2.setAttribute("fill", `${basil[1]}`);
      color3.setAttribute("fill", `${basil[2]}`);
    } else if (fragranceColor2 === "sage") {
      console.log("sage has been chosen");
      color1.setAttribute("fill", `${sage[0]}`);
      color2.setAttribute("fill", `${sage[1]}`);
      color3.setAttribute("fill", `${sage[2]}`);
    } else if (fragranceColor2 === "eucalyptus") {
      console.log("eucalyptus has been chosen");
      color1.setAttribute("fill", `${eucalyptus[0]}`);
      color2.setAttribute("fill", `${eucalyptus[1]}`);
      color3.setAttribute("fill", `${eucalyptus[2]}`);
    } else if (fragranceColor2 === "cedar") {
      console.log("cedar has been chosen");
      color1.setAttribute("fill", `${cedar[0]}`);
      color2.setAttribute("fill", `${cedar[1]}`);
      color3.setAttribute("fill", `${cedar[2]}`);
    } else if (fragranceColor2 === "citrus") {
      console.log("citrus has been chosen");
      color1.setAttribute("fill", `${citrus[0]}`);
      color2.setAttribute("fill", `${citrus[1]}`);
      color3.setAttribute("fill", `${citrus[2]}`);
    }
  } else if (
    candle1.innerHTML === `${fragrance3.innerHTML}` ||
    candle2.innerHTML === `${fragrance3.innerHTML}` ||
    candle3.innerHTML === `${fragrance3.innerHTML}` ||
    candle4.innerHTML === `${fragrance3.innerHTML}`
  ) {
    console.log(`${fragrance3.innerHTML}`);
    let fragranceColor3 = fragrance3.innerHTML.substring(0).toLowerCase();
    console.log(`${fragranceColor3}`);

    if (fragranceColor3 === "lemon") {
      console.log("lemon has been chosen");
      console.log(`${lemon[0]}`);
      color1.setAttribute("fill", `${lemon[0]}`);
      color2.setAttribute("fill", `${lemon[1]}`);
      color3.setAttribute("fill", `${lemon[2]}`);
    } else if (fragranceColor3 === "rosemary") {
      console.log("rosemary has been chosen");
      color1.setAttribute("fill", `${rosemary[0]}`);
      color2.setAttribute("fill", `${rosemary[1]}`);
      color3.setAttribute("fill", `${rosemary[2]}`);
    } else if (fragranceColor3 === "orange") {
      console.log("orange has been chosen");
      color1.setAttribute("fill", `${orange[0]}`);
      color2.setAttribute("fill", `${orange[1]}`);
      color3.setAttribute("fill", `${orange[2]}`);
    } else if (fragranceColor3 === "jasmine") {
      console.log("jasmine has been chosen");
      color1.setAttribute("fill", `${jasmine[0]}`);
      color2.setAttribute("fill", `${jasmine[1]}`);
      color3.setAttribute("fill", `${jasmine[2]}`);
    } else if (fragranceColor3 === "lavender") {
      console.log("lavender has been chosen");
      color1.setAttribute("fill", `${lavender[0]}`);
      color2.setAttribute("fill", `${lavender[1]}`);
      color3.setAttribute("fill", `${lavender[2]}`);
    } else if (fragranceColor3 === "sandalwood") {
      console.log("sandalwood has been chosen");
      color1.setAttribute("fill", `${sandalwood[0]}`);
      color2.setAttribute("fill", `${sandalwood[1]}`);
      color3.setAttribute("fill", `${sandalwood[2]}`);
    } else if (fragranceColor3 === "mint") {
      console.log("mint has been chosen");
      color1.setAttribute("fill", `${mint[0]}`);
      color2.setAttribute("fill", `${mint[1]}`);
      color3.setAttribute("fill", `${mint[2]}`);
    } else if (fragranceColor3 === "rose") {
      console.log("rose has been chosen");
      color1.setAttribute("fill", `${rose[0]}`);
      color2.setAttribute("fill", `${rose[1]}`);
      color3.setAttribute("fill", `${rose[2]}`);
    } else if (fragranceColor3 === "elderflower") {
      console.log("elderflower has been chosen");
      color1.setAttribute("fill", `${elderflower[0]}`);
      color2.setAttribute("fill", `${elderflower[1]}`);
      color3.setAttribute("fill", `${elderflower[2]}`);
    } else if (fragranceColor3 === "spruce") {
      console.log("spruce has been chosen");
      color1.setAttribute("fill", `${spruce[0]}`);
      color2.setAttribute("fill", `${spruce[1]}`);
      color3.setAttribute("fill", `${spruce[2]}`);
    } else if (fragranceColor3 === "patchouli") {
      console.log("patchouli has been chosen");
      color1.setAttribute("fill", `${patchouli[0]}`);
      color2.setAttribute("fill", `${patchouli[1]}`);
      color3.setAttribute("fill", `${patchouli[2]}`);
    } else if (fragranceColor3 === "ginger") {
      console.log("ginger has been chosen");
      color1.setAttribute("fill", `${ginger[0]}`);
      color2.setAttribute("fill", `${ginger[1]}`);
      color3.setAttribute("fill", `${ginger[2]}`);
    } else if (fragranceColor3 === "coriander") {
      console.log("coriander has been chosen");
      color1.setAttribute("fill", `${coriander[0]}`);
      color2.setAttribute("fill", `${coriander[1]}`);
      color3.setAttribute("fill", `${coriander[2]}`);
    } else if (fragranceColor3 === "basil") {
      console.log("basil has been chosen");
      color1.setAttribute("fill", `${basil[0]}`);
      color2.setAttribute("fill", `${basil[1]}`);
      color3.setAttribute("fill", `${basil[2]}`);
    } else if (fragranceColor3 === "sage") {
      console.log("sage has been chosen");
      color1.setAttribute("fill", `${sage[0]}`);
      color2.setAttribute("fill", `${sage[1]}`);
      color3.setAttribute("fill", `${sage[2]}`);
    } else if (fragranceColor3 === "eucalyptus") {
      console.log("eucalyptus has been chosen");
      color1.setAttribute("fill", `${eucalyptus[0]}`);
      color2.setAttribute("fill", `${eucalyptus[1]}`);
      color3.setAttribute("fill", `${eucalyptus[2]}`);
    } else if (fragranceColor3 === "cedar") {
      console.log("cedar has been chosen");
      color1.setAttribute("fill", `${cedar[0]}`);
      color2.setAttribute("fill", `${cedar[1]}`);
      color3.setAttribute("fill", `${cedar[2]}`);
    } else if (fragranceColor3 === "citrus") {
      console.log("citrus has been chosen");
      color1.setAttribute("fill", `${citrus[0]}`);
      color2.setAttribute("fill", `${citrus[1]}`);
      color3.setAttribute("fill", `${citrus[2]}`);
    }
  }
  fragranceColor();
}

function fragranceColor() {
  console.log("fragrance color 1");

  /* toggle on color button */
  document.querySelector("#button_color").addEventListener("click", () => {
    console.log("toggle color choises");
    const colorChoises = document.querySelector("#option_color_choises");
    colorChoises.classList.remove("hide");
    //siw
    document.querySelector("#option_fragrance_choises").classList.add("hide");
    document.querySelector(".number2").style.backgroundColor = "black";
  });
  document.querySelector(".color1").addEventListener("click", setColorOne);
  document.querySelector(".color2").addEventListener("click", setColorTwo);
  document.querySelector(".color3").addEventListener("click", setColorThree);
  document.querySelector(".color4").addEventListener("click", setColorFour);
}

function setColorOne() {
  console.log("color1");
  document.querySelector(".number3").style.backgroundColor = "black";
  if (first_candle === true) {
    document.querySelector("#light_x5F_one").style.fill = color1.getAttribute(
      "fill"
    );
  } else if (second_candle === true) {
    document.querySelector("#light_x5F_two").style.fill = color1.getAttribute(
      "fill"
    );
  } else if (third_candle === true) {
    document.querySelector("#light_x5F_three").style.fill = color1.getAttribute(
      "fill"
    );
  } else if (fourth_candle === true) {
    document.querySelector("#light_x5F_four").style.fill = color1.getAttribute(
      "fill"
    );
  } else {
    console.log("setColorONE error");
  }
}

function setColorTwo() {
  document.querySelector(".number3").style.backgroundColor = "black";
  if (first_candle === true) {
    document.querySelector("#light_x5F_one").style.fill = color2.getAttribute(
      "fill"
    );
  } else if (second_candle === true) {
    document.querySelector("#light_x5F_two").style.fill = color2.getAttribute(
      "fill"
    );
  } else if (third_candle === true) {
    document.querySelector("#light_x5F_three").style.fill = color2.getAttribute(
      "fill"
    );
  } else if (fourth_candle === true) {
    document.querySelector("#light_x5F_four").style.fill = color2.getAttribute(
      "fill"
    );
  } else {
    console.log("setColorONE error");
  }
}

function setColorThree() {
  document.querySelector(".number3").style.backgroundColor = "black";
  if (first_candle === true) {
    document.querySelector("#light_x5F_one").style.fill = color3.getAttribute(
      "fill"
    );
  } else if (second_candle === true) {
    document.querySelector("#light_x5F_two").style.fill = color3.getAttribute(
      "fill"
    );
  } else if (third_candle === true) {
    document.querySelector("#light_x5F_three").style.fill = color3.getAttribute(
      "fill"
    );
  } else if (fourth_candle === true) {
    document.querySelector("#light_x5F_four").style.fill = color3.getAttribute(
      "fill"
    );
  } else {
    console.log("setColorONE error");
  }
}

function setColorFour() {
  document.querySelector(".number3").style.backgroundColor = "black";
  if (first_candle === true) {
    document.querySelector("#light_x5F_one").style.fill = color4.getAttribute(
      "fill"
    );
  } else if (second_candle === true) {
    document.querySelector("#light_x5F_two").style.fill = color4.getAttribute(
      "fill"
    );
  } else if (third_candle === true) {
    document.querySelector("#light_x5F_three").style.fill = color4.getAttribute(
      "fill"
    );
  } else if (fourth_candle === true) {
    document.querySelector("#light_x5F_four").style.fill = color4.getAttribute(
      "fill"
    );
  } else {
    console.log("setColorONE error");
  }
}

function handwrittenAni() {
  const masks = [
    "s",
    "c",
    "e",
    "n",
    "t-line",
    "t-other",
    "ee",
    "d",
    "f",
    "o",
    "r",
    "y",
    "oo",
    "u",
  ];

  masks.forEach((mask, index, el) => {
    const id = `#mask-${mask}`;
    let path = document.querySelector(id);
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });
}
