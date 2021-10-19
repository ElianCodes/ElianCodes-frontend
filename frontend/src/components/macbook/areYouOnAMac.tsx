import { useState, useEffect } from 'preact/hooks';

export default function AreYouOnAMac() {
    const [macModeOn, setMacMode] = useState(false);
    const turnOnMacMode = () => {
        setMacMode(true)
        localStorage.setItem('macmode', 'true')
    }
    useEffect(() => {
        const macModeOn = localStorage.getItem('macmode')
        macModeOn == 'true' ? setMacMode(true) : setMacMode(false)
      }, [])
    return (
        <>
            { macModeOn 
            ? (
                <>
                    <div class="pointer-action-none w-screen h-8 absolute inset-0 hidden lg:flex justify-center">
                        <div class="bg-black dark:bg-gray-800 h-full w-48 rounded-b-md"></div>
                    </div>
                </>
            ) : (
                <div class="hidden lg:block absolute bottom-16 right-16 bg-gray-200 dark:bg-gray-600 rounded-lg rounded-br-none px-6 py-2">
                    <p>Are You on a mac?</p>
                    <div class="flex justify-around items-center pt-2">
                        <button onclick={() => turnOnMacMode()} class="dark:bg-gray-800 px-4 py-1 rounded">yes</button>
                        <button onclick={() => turnOnMacMode()} class="dark:bg-gray-800 px-4 py-1 rounded">no</button>
                    </div>
                </div>
            )}
        </>
    )
}