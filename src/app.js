$(() => {
  const $dice = $('.dice');
  const $roll = $('.roll');
  const $hold = $('.hold');
  const $playerScoreOne = $('.player--0--roll');
  const $playerScoreTwo = $('.player--1--roll');
  const $playerOne = $('.player--0');
  const $playerTwo = $('.player--1');
  let active = 0;
  let roundScore = 0;
  let points = [0, 0];
  const $new = $('.new');

  // change player and adding/removing the highlight class
  function playerChange() {
    if (active === 0) {
      active = 1;
      $playerTwo.addClass('highlight');
      $playerOne.removeClass('highlight');
    } else {
      active = 0;
      $playerOne.addClass('highlight');
      $playerTwo.removeClass('highlight');
    }
    roundScore = 0;
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

  // reset button
  $new.on('click', () => {
    points = [0, 0];
    roundScore = 0;
    active = 0;
    $playerScoreOne.text('0');
    $playerScoreTwo.text('0');
    $('.0--points').text('0');
    $('.1--points').text('0');
    $playerOne.removeClass('highlight');
    $playerTwo.removeClass('highlight');
    $dice.hide();
  });
});
