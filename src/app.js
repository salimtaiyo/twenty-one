$(() => {
  const $dice = $('.dice');
  const $roll = $('.roll');
  const $hold = $('.hold');
  const $playerScoreOne = $('.player--1--roll');
  const $playerScoreTwo = $('.player--2--roll');
  let active = 1;
  let round = 0;

  // player change function
  function playerChange() {
    active === 1 ? active = 2 : active = 1;
  }

  // roll button click event
  $roll.on('click', () => {
    // random number generator
    const random = Math.floor(Math.random() * 3) + 1;
    $dice.attr('src', `./img/dice-${random}.png`);
    $dice.show();
    if (random !== 1) {
      round += random;
      $(`.player--${active}--roll`).text(round);
    } else {
      playerChange();
    }
  });


  // hold button click event
  $hold.on('click', () => {
    
  });
});
