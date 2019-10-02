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
