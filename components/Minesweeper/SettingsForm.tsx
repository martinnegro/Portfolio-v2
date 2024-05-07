import { useEffect, useRef, useState } from "react"

interface SettingsFormProps {
    setGridSize: React.Dispatch<React.SetStateAction<[number, number]>>
    setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setMines: React.Dispatch<React.SetStateAction<number>>
    gridSize: [number, number]
    mines: number
}

function SettingsForm({
    setGridSize, 
    setMines,
    setIsSettingsOpen,
    gridSize,
    mines
}: React.PropsWithChildren<SettingsFormProps>) {
    const [enableStart, setEnableStart] = useState(false)
    const maxSideSize = useRef(60)
    const maxMines = useRef(99)
    
    useEffect(() => {
        function checkValidSettings(grid: [number,number], mines: number) {
            if (!grid[0] || !grid[1] || !mines) return false
            if (grid[0] * grid[1] < 1 || mines < 1) return false
            if (grid [0] * grid[1] < mines) return false
            return true
        }
        setEnableStart(checkValidSettings(gridSize, mines))
    },[gridSize,mines])

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        console.log({gridSize})
        const { name, valueAsNumber } = e.target
        if (valueAsNumber < 0) return
        if (name === 'mine-count') {
            if (isNaN(valueAsNumber)) setMines(valueAsNumber)
            else if (valueAsNumber > gridSize[0] * gridSize[1]) return
            else if (valueAsNumber > maxMines.current) return
            else setMines(valueAsNumber)
        } 
        if (valueAsNumber > maxSideSize.current) return
        if (name === 'grid-rows') setGridSize( state =>  [ state[0], valueAsNumber ])
        if (name === 'grid-columns') setGridSize( state =>  [ valueAsNumber, state[1] ])
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSettingsOpen(false)
    }

    return (
        <form 
                    id="minesweeper-settings"
                    className="minesweeper-form"
                    onSubmit={handleSubmit}
                >
                        <label htmlFor="grid-rows">Rows</label>
                        <input 
                            className="reverse-metal-borders"
                            name="grid-rows"
                            id="grid-rows"
                            type="number"
                            max={maxSideSize.current}
                            onChange={handleInput}
                            value={gridSize[1] || ''} 
                        />
                        <label htmlFor="grid-columns">Columns</label>
                        <input 
                            className="reverse-metal-borders"
                            name="grid-columns" 
                            id="grid-columns" 
                            type="number" 
                            max={maxSideSize.current}
                            onChange={handleInput}
                            value={gridSize[0] || ''}
                        />
                        <label htmlFor="mine-count">Mines</label>
                        <input 
                            className="reverse-metal-borders"
                            name="mine-count" 
                            type="number" 
                            id="mine-count"
                            max={gridSize[0] * gridSize[1] || 0 }
                            onChange={handleInput}
                            value={mines || ''}
                        />
                    <button
                        style={{ marginTop: '0.5rem' }}
                        className="minesweeper-button metal-borders"
                        disabled={!enableStart}
                    >Start</button>
                </form>
    )
}

export default SettingsForm