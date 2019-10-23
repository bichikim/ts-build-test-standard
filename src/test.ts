export type Board = Array<Array<{ value: number, visit: boolean }>>
type Point = { x: number, y: number }
const pathMap: Point[] = [{x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 0}, {x: 0, y: -1}]
export function getNext(board: Board, point: Point, direction: Point) {
  const {value} = board[point.y][ point.x]
  const yNext = point.y + direction.y
  const xNext = point.x + direction.x
  if(0 > yNext || yNext > board.length - 1) {
    return null
  }
  if(0 > xNext || xNext > board[0].length - 1) {
    return null
  }
  const nextPoint = board[yNext][xNext]
  if(nextPoint.visit || nextPoint.value !== value) {
    return null
  }
  return {x: xNext, y: yNext}
}

function mark(board: Board, point: { x, y }, mark = true) {
  const {x, y} = point
  board[y][x].visit = mark
}

export function next(board: Board, point: { x, y }, count: number = 1): number {
  mark(board, point)
  const result: number[] = [count]
  for(const direction of pathMap) {
    const myPoint = getNext(board, point, direction)
    if(myPoint) {
      result.push(next(board, myPoint, count + 1))
    }
  }
  mark(board, point, false)
  return result.sort((a, b) => (b - a))[0]
}

export default function solution(board: Array<Array<number>>) {
  const myBoard = board.map((row) => (row.map((value) => ({value, visit: false}))))
  const result: number[] = []
  const yLength = board.length

  for(let y = 0; y < yLength; y += 1) {
    const xLength = board[y].length
    for(let x = 0; x < xLength; x += 1) {
      result.push(next(myBoard, {x, y}))
    }
  }

  const count = result.sort((a, b) => (b - a))[0]

  if(count === 1) {
    return -1
  }

  return count
}
