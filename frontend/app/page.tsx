"use client"


import { useState } from "react"
import { Greet } from "../wailsjs/wailsjs/go/main/App"

export default function Page() {
    const [text, setText] = useState("");

    function onClick() {
        Greet("test").then((val) => { setText(val) },
            (err) => { console.log(err) })
    }

    return (
        <div className="h-screen m-auto flex flex-col w-full">
            <div className="text-center bg-green-400 text-red-950 text-2xl">
                <h1>{text}</h1>
            </div>
            <div className="w-full flex justify-center">
                <button onClick={() => onClick()} className="m-2 p-2 bg-red-950 text-white">click me</button>
                <button onClick={() => setText("")} className="m-2 p-2 bg-red-950 text-white">reset</button>
            </div>

        </div>
    )
}