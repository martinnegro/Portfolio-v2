export function createMinesweeper(
    setGrid: React.Dispatch<React.SetStateAction<number[][] | null>>, 
    gridSize: [number,number],
    mines: number
) {
    
    const grid = createGrid(gridSize[0],gridSize[1],mines)
    if (!grid) return
    countNearMines(grid)
    setGrid(grid)
}

const createRandomXY = (width: number, height: number) => {
    return {
        x: Math.floor(Math.random() * height),
        y: Math.floor(Math.random() * width)
    }
}
function createGrid(width: number, heigth: number, mines: number) {
    if (!mines) return null
    if (mines > width * heigth) return null
    const grid = Array.from({length: heigth}, () => Array(width).fill(0))
    for (let i = 0; i < mines; i++) {
        let { x, y } = createRandomXY(width, heigth) 
        while (grid[x][y] === 10) {
            ({ x, y } = createRandomXY(width, heigth))
        }
        grid[x][y] = 10
    }
    return grid
}

export async function onClickCellHandler(
    event: React.MouseEvent<HTMLDivElement>, 
    grid: number[][],
    setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
    setWin: React.Dispatch<React.SetStateAction<boolean>>,
    exploredCount: React.MutableRefObject<number>,
    gridSize: [number,number],
    mines: number,
    setGameStarted: React.Dispatch<React.SetStateAction<boolean>>
) {
    if (!grid) return;
    const cellElement = event.target as HTMLDivElement
    if (cellElement.classList.contains('explored')) return
    if (cellElement.nodeName !== 'DIV') return
    const [ row, col ] = cellElement.id.split('-')
    const x = parseInt(row)
    const y = parseInt(col)
    if (grid[x][y] === 10) {
        cellElement.className = cellElement.className + ' exploded-mine'
        setGameOver(true)
    } else {
        const exploredCells = exploreCell(grid, x, y)
        for (const key in exploredCells) {
            const cellElement = document.getElementById(key)!
            if (cellElement.classList.contains('explored')) continue
            if (exploredCount.current === 0) setGameStarted(true)
            exploredCount.current += 1
    
            if (exploredCount.current === (gridSize[0] * gridSize[1] - mines)) setWin(true)
            cellElement.className = cellElement.className + ' explored'
            const [row, col] = key.split('-')
            const x = parseInt(row)
            const y = parseInt(col)
            const nearMines = grid[x][y]
            if (nearMines === 0) continue  
            const textElement = document.createElement('p')
            textElement.style.color = 
                nearMines === 1 ? '#0000E5' :
                nearMines === 2 ? '#007300' :
                nearMines === 3 ? '#E50000' :
                nearMines === 4 ? '#000073' :
                nearMines === 5 ? '#730000' :
                nearMines === 6 ? '#00E500' :
                nearMines === 7 ? '#E5E500' :
                '#E5E5E5'

            textElement.className = 'grid-count-text'
            //@ts-ignore
            textElement.textContent = nearMines.toString()
            cellElement.appendChild(textElement)
        }
    }
}

function countNearMines(grid: number[][]) {
    let count = 0
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            loopAdjacentCells(grid, x, y)
        }
    }
    function loopAdjacentCells(grid: number[][], x: number, y: number) {
        if (grid[x][y] === 10) return
        rowLoop: for (let row = -1; row <= 1; row++){
            if (x + row < 0 || x + row > grid.length - 1) continue rowLoop
            colLoop: for (let col = -1; col <= 1; col++) {
                if (y + col < 0 || y + col > grid[0].length - 1) continue colLoop
                if (grid[x+row][y+col] === 10) grid[x][y] += 1
            }
        }
    }
}

function exploreCell(grid: number[][], startX: number, startY: number): {[key: string]: number} {
    const exploredCells: {[key: string]: number} = {}
    const queue: [number, number][] = [[startX, startY]]
    while (queue.length > 0) {
        const [x,y] = queue.shift()!
        if (
            exploredCells[`${x}-${y}`] !== undefined
            || x < 0 || x > grid.length - 1
            || y < 0 || y > grid[x].length - 1
        ) continue

        exploredCells[`${x}-${y}`] = grid[x][y]

        if (grid[x][y] === 0) {
            for (let row = -1; row <= 1; row++) {
                if (x + row < 0 || x + row > grid.length - 1) continue
                for (let col = -1; col <= 1; col++) {
                    if (y + col < 0 || y + col > grid[x].length - 1) continue
                    queue.push([x+row, y+col])
                }
            }
        }
    }

    return exploredCells
}