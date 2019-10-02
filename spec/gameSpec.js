// As a player
// So I can play a single frame
// I’d like to see what I scored for a frame

describe('#Frame', function () {
  it('Expect frame score to be 7 when player rolls 3 and 4', function () {
    player = new Player()
    frame = new Frame()
    player.roll(3, 4)
    expect(frame.score()).toEqual(7)
  })
})

// As a player
// So I know my total score
// I’d like to view my total score for up to 10 frames

describe('#TotalScore', function () {
  it ('Expect total score to be 80 when player rolls 4 twenty times', function () {
    player = new Player()
    player.roll(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4)
    expect(player.score()).toEqual(80)
  })
})
