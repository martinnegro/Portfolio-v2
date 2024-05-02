import { useEffect, useState } from "react"

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
    
    useEffect(() => {
        function checkValidSettings(grid: [number,number], mines: number) {
            if (grid[0] * grid[1] < 1 || mines < 1) return false
            if (grid [0] * grid[1] < mines) return false
            return true
        }
        setEnableStart(checkValidSettings(gridSize, mines))
    },[gridSize,mines])

    return (
        <form 
                    id="minesweeper-settings"
                    className="minesweeper-form"
                    onSubmit={() => setIsSettingsOpen(false)}
                >
                        <label>Rows</label>
                        <input 
                            className="reverse-metal-borders"
                            name="grid-size" 
                            id="grid-size" 
                            type="number"
                            onChange={(e) => setGridSize( state =>  [state[0],e.target.value ? parseInt(e.target.value) : 0])}
                            value={gridSize[1]} 
                            />
                        <label>Columns</label>
                        <input 
                            className="reverse-metal-borders"
                            name="grid-size" 
                            id="grid-size"
                            type="number" 
                            onChange={(e) => setGridSize( state =>  [e.target.value ? parseInt(e.target.value) : 0,state[1]])}
                            value={gridSize[0]}
                        />
                        <label htmlFor="mine-count">Mines</label>
                        <input 
                            className="reverse-metal-borders"
                            name="mine-count" 
                            type="number" 
                            id="mine-count"
                            max={99}
                            onChange={
                                (e) => 
                                    setMines( state => !e.target.value ? 0 : parseInt(e.target.value) < 100 ? parseInt(e.target.value) : state)
                            }
                            value={mines}
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