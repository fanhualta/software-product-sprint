// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function getRandomQuote() {
  const greetings =
      ['如果上天能给我一次再来一次的机会，我会对哪个女孩说三个字：我爱你，如果非要在这份爱上加一个期限，我希望是一万年！', '我的意中人是个盖世英雄，有一天他会踩着七色云彩来娶我，我只猜中了前头，可是我却猜不中这结局！', '做人如果没有梦想，那和咸鱼有什么区别？！', '谁了解生存往往比命运还残酷，只是没有人愿意认输，我们都在不断赶路，忘记了出路。!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('container');
  greetingContainer.innerText = greeting;
}

function seeComments() {
    fetch('/data').then(response => response.json()).then((stats) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('see-comments-container');
    statsListElement.innerHTML = '';

    for(var i = 0, len = stats.length; i < len; i++){
        statsListElement.appendChild(createListElement(stats[i]));
    }
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
