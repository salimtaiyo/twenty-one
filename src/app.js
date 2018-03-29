$(() => {
  const $dice = $('.dice');
  const $roll = $('.roll');
  const $hold = $('.hold');
  const $playerScoreOne = $('.player--0--roll');
  const $playerScoreTwo = $('.player--1--roll');
  let active = 0;
  let roundScore = 0;
  const points = [0, 0];

  // change player
  function playerChange() {
    active === 0 ? active = 1 : active = 0;
    roundScore =0;
    $playerScoreOne.text('0');
    $playerScoreTwo.text('0');
  }

  // roll button 
  $roll.on('click', () => {
    // random number generator
    const random = Math.floor(Math.random() * 3) + 1;
    $dice.attr('src', `./img/dice-${random}.png`);
    $dice.show();
    // check if random = 1 else playerChange
    if (random !== 1) {
      roundScore += random;
      $(`.player--${active}--roll`).text(roundScore);
    } else {
      playerChange();
    }
  });

  // hold button 
  $hold.on('click', () => {
    points[active] += roundScore;
    console.log(points[active]);
    $(`.${active}--points`).text(points[active]);

    if (points[active] >= 21) {
      alert('winner');
    } else {
      playerChange();
    }
  });
});
