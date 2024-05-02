import { useEffect, useRef, useState } from "react"

interface TimerProps {
    gameStarted: boolean
}

function Timer({ gameStarted }: TimerProps) {
    const [ time, setTime ] = useState('000')
    const timer = useRef<undefined | NodeJS.Timer>()

    useEffect(() => {
        if (gameStarted) {
            setTime('000')
            timer.current = setInterval(() => {
                setTime(state => {
                    const number = Number(state) + 1
                    return number.toString().padStart(3, '0')
                })                
            }, 1000)
        } else {
            if (timer.current) clearInterval(timer.current)
        }
    }, [gameStarted])

    useEffect(() => {
        return () => {
            if (time === '999' && timer.current) clearInterval(timer.current)
        }
    }, [])

    return (
        <div id="timer" className="lcd reverse-metal-borders">
            {time}
        </div>
    )
}

export default Timer