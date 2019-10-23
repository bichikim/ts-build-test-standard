import solution, {getNext, next, Board} from '@/test'

describe('node/test', function test() {
  const board = [
    [2, 2, 2, 2],
    [2, 2, 1, 2],
    [1, 1, 2, 2],
    [4, 1, 1, 1],
  ]

  const board2 = [
    [4, 2, 3, 2],
    [2, 1, 2, 4],
    [1, 2, 3, 1],
    [4, 1, 4, 2],
  ]

  it('should be a foo', function test() {
    const infoBoard: Board = board.map((row) => (row.map((value) => ({value, visit: false}))))
    expect(getNext(infoBoard, {x: 0, y: 0}, {x: 1, y: 0})).to.deep.equal({x: 1, y: 0})
    expect(getNext(infoBoard, {x: 0, y: 0}, {x: -1, y: 0})).to.deep.equal(null)
    expect(getNext(infoBoard, {x: 0, y: 0}, {x: 0, y: -1})).to.deep.equal(null)
    expect(getNext(infoBoard, {x: 3, y: 0}, {x: 1, y: 0})).to.deep.equal(null)
    expect(getNext(infoBoard, {x: 0, y: 3}, {x: 0, y: 1})).to.deep.equal(null)
    infoBoard[1][0].visit = true
    expect(getNext(infoBoard, {x: 1, y: 1}, {x: -1, y: 0})).to.deep.equal(null)
    infoBoard[1][0].visit = false
    expect(getNext(infoBoard, {x: 2, y: 2}, {x: 0, y: 1})).to.deep.equal(null)
  })
  it('should next', function test() {
    const infoBoard: Board = board.map((row) => (row.map((value) => ({value, visit: false}))))
    const result = next(infoBoard, {x: 0, y: 0})
    expect(result).to.equal(9)
  })
  it('should solution', function test() {
    expect(solution(board)).to.equal(9)
    expect(solution(board2)).to.equal(-1)
  })
})
