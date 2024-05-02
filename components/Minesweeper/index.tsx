import React, { useEffect, useRef, useState } from "react";
import { createMinesweeper, onClickCellHandler } from "./utils";
import SettingsForm from "./SettingsForm";
import Timer from "./Timer";



const Minesweeper: React.FC = () => {
    const [ isSettingsOpen, setIsSettingsOpen ] = useState(true);
    const face = useRef<null | HTMLDivElement>(null);
    const container = useRef<null | HTMLDivElement>(null);
    const [ gridSize, setGridSize ] = useState<[number,number]>([16,16]);
    const [ mines, setMines ] = useState<number>(40);
    const [ grid, setGrid ] = useState<null | number[][] >(null);
    const [ gameOver, setGameOver ] = useState(false);
    const [ win, setWin ] = useState(false);
    const [ gameStarted, setGameStarted ] = useState(false);
    const exploredCount = useRef(0)

    useEffect(() => {
        if (isSettingsOpen) return
        if (!gridSize || !mines) return
        restartGame()
    },[isSettingsOpen])
    
    useEffect(() => {
        if (win && grid && face.current && container.current) {
            setGameStarted(false)
            face.current.classList.add('winning-face')
            container.current.classList.add('game-over')
            showAllMines(grid,'flag')
        }
    },[win])

    useEffect(() => {
        if (!gameOver || !grid || !face.current || !container.current) return
        setGameStarted(false)
        showAllMines(grid,'mine')
        face.current.classList.add('loosing-face')
        container.current.classList.add('game-over')
    },[gameOver])

    async function showAllMines(grid: number[][],iconClassName = 'mine') {
        if (!grid) return
        
        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                if (grid[x][y] === 10) {
                    const cellElement = document.getElementById(`${x}-${y}`)!
                    cellElement.className = cellElement.className + ' ' + iconClassName
                }
            }
        }
    }

    function restartGame() {
        if (!face.current || !container.current) return
        setGameOver(false)
        setWin(false)
        setGameStarted(false)
        exploredCount.current = 0
        face.current.classList.remove('winning-face','loosing-face')
        face.current.classList.add('playing-face')
        container.current.classList.remove('game-over')
         // Remove classes from cells
        const cells = document.querySelectorAll('.grid-cell');
        cells.forEach(cell => {
            cell.classList.remove('explored','mine','flag','exploded-mine')
            cell.innerHTML = ''
        });
        createMinesweeper(setGrid, gridSize, mines!)
    }

    return (
        <div id="minesweeper-container">
        <div id="minesweeper" className="metal-borders">
            <div id='info-container'>
                <div id="mines-count" className="lcd reverse-metal-borders">
                    {mines < 10 ? '0' + mines : mines}
                </div>
                <div id="face" className="metal-borders playing-face" ref={face} onClick={() => restartGame()}></div>
                <Timer gameStarted={gameStarted}/>
            </div>
        <div id="grid-container" ref={container}>
            {   
                isSettingsOpen ? 
                <SettingsForm
                    setGridSize={setGridSize}
                    setMines={setMines}
                    setIsSettingsOpen={setIsSettingsOpen}
                    gridSize={gridSize}
                    mines={mines}
                />
                : grid 
                ? grid.map( (row,x) => 
                    <div className="grid-row" key={x}>
                        {
                            row.map( (cell,y) => 
                                <div
                                    className="grid-cell metal-borders" 
                                    key={y} 
                                    id={`${x}-${y}`}
                                    onClick={(e) => onClickCellHandler(e,grid,setGameOver,setWin,exploredCount,gridSize,mines,setGameStarted)}                            
                                />
                            )
                        }
                    </div> 
                ) : null
            }
        </div>
        {
            !isSettingsOpen &&
            <button 
                className="metal-borders minesweeper-button"
                style={{ marginTop: '0.5em'}}
                onClick={() => {
                    setIsSettingsOpen(true)
                    container.current?.classList.remove('game-over')
                }}
            >Settings</button>
        }
        </div>    
        </div>
    )
};

export default Minesweeper;


