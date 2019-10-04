// As a player
// So I can play a single frame
// I’d like to see what I scored for a frame

describe('#Frame', function() {

  it('Expect frame score to be 0 when player rolls 0 and 0', function () {
    frame = new Frame
    expect(frame.score(0)).toEqual(0)
  })
})
