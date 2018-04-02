$(() => {
  const $dice = $('.dice'); // selects the dice
  const $roll = $('.roll'); // selects the roll button
  const $hold = $('.hold'); // selects the hold button

  const $playerScoreOne = $('.player--0--roll');
  const $playerScoreTwo = $('.player--1--roll');

  const $playerOne = $('.player--0');
  const $playerTwo = $('.player--1');

  let active = 0; // setting the active player to 0
  let roundScore = 0; // setting the roundscore to 0
  let points = [0, 0];

  const $new = $('.new'); // reset button
  const $nameOne = $('.name--1'); // player -1 name
  const $nameTwo = $('.name--2'); // player -2 name
  const $showInput = $('.change'); // player name input buton

  const sound = new Audio(); // audio sfx on roll
  sound.src = '../img/dicesfx.mp3';

  // change player and adding/removing the highlight class
  function playerChange() {
    if (active === 0) {
      active = 1;
      // $playerTwo.addClass('highlight');
      // $playerOne.removeClass('highlight');
      $nameTwo.addClass('highlight');
      $nameOne.removeClass('highlight');
    } else {
      active = 0;
      // $playerOne.addClass('highlight');
      // $playerTwo.removeClass('highlight');
      $nameOne.addClass('highlight');
      $nameTwo.removeClass('highlight');
    }
    roundScore = 0;
    $playerScoreOne.text('0');
    $playerScoreTwo.text('0');
  }

  // roll button
  $roll.on('click', () => {
    sound.play();
    if (active === 0) {
      // $playerOne.addClass('highlight');
      $nameOne.addClass('highlight');
    }
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
    // $playerOne.removeClass('highlight');
    // $playerTwo.removeClass('highlight');
    $dice.hide();
    $nameOne.removeClass('highlight');
    $nameTwo.removeClass('highlight');
  });

  // player name
  $showInput.on('click', () => {
    $('.input__name').show();
    // alert('pressed');
  });

  // setting and hidding the input modal
  $('.input__name--btn').on('click', () => {
    const x = $('.input__name--1').val();
    const y = $('.input__name--2').val();
    $nameOne.text(x);
    $nameTwo.text(y);
    $('.input__name').hide();
  });
});
