$(() => {
  const $dice = $('.dice'); // selects the dice
  const $roll = $('.roll'); // selects the roll button
  const $hold = $('.hold'); // selects the hold button

  const $winner = $('.winner');

  const $playerScoreOne = $('.player--0--roll');
  const $playerScoreTwo = $('.player--1--roll');

  let active = 0; // setting the active player to 0
  let roundScore = 0; // setting the roundscore to 0
  let points = [0, 0];

  const $new = $('.new'); // reset button
  const $nameOne = $('.name--1'); // player -1 name
  const $nameTwo = $('.name--2'); // player -2 name
  const $showInput = $('.change'); // player name input buton

  const sound = new Audio(); // audio sfx on roll
  sound.src = '../img/dicesfx.mp3';

  const winSfx = new Audio();
  winSfx.src = '../img/victorysfx.mp3';

  // change player and adding/removing the highlight class
  function playerChange() {
    if (active === 0) {
      active = 1;
      $nameTwo.addClass('highlight');
      $nameOne.removeClass('highlight');
    } else {
      active = 0;
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
    $(`.${active}--points`).text(points[active]);
    // winner display
    const w = $('.input__name--1').val().toUpperCase();
    const z = $('.input__name--2').val().toUpperCase();
    if (points[active] >= 21) {
      $nameOne.removeClass('highlight');
      if (active === 0) {
        $('.winner__header--name').html(w);
        winSfx.play();
      } else {
        $nameTwo.removeClass('highlight');
        $('.winner__header--name').html(z);
        winSfx.play();
      }
      $winner.fadeIn(1000);
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
    $dice.hide();
    $nameOne.text('Player 1');
    $nameTwo.text('Player 2');
  });

  // player name
  $showInput.on('click', () => {
    $('.input__name').fadeIn(1000);
  });

  // setting and hidding the input modal
  $('.input__name--btn').on('click', () => {
    const x = $('.input__name--1').val().toUpperCase();
    const y = $('.input__name--2').val().toUpperCase();
    $nameOne.text(x);
    $nameTwo.text(y);
    $('.input__name').fadeOut(1000);
  });

  // hide modal
  $('.winner__close').on('click', () => {
    $('.winner').fadeOut(500);
  });
});
