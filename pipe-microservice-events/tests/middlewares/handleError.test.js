const handleError = require('../../middlewares/handleError')

describe('Test for: handleError.js', () => {
  it('When exist error, then return status 500 with message.', () => {
    const req = {
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    const next = {}
    const err = {}
    handleError(err, req, res, next)
    expect(res.status.mock.calls).toEqual([
      [500]
    ])
  })
})