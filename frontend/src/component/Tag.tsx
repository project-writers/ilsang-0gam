import { useEffect, useRef } from 'react'

export function Tag({ bgColor }: { bgColor: string }) {
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const container = containerRef.current

        const handleWheel = (event: WheelEvent) => {
            if (container) {
                container.scrollTo({
                    left: container.scrollLeft + event.deltaY * 0.5,
                    behavior: 'auto',
                })
            }
            event.preventDefault()
        }

        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false })
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel)
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="mt-4 overflow-auto whitespace-nowrap scrollbar-hide"
        >
            <button
                className={`mr-2 px-4 py-2 border rounded-full bg-[${bgColor}]`}
            >
                #자전거
            </button>
            <button className={'mr-2 px-4 py-2 border rounded-full'}>
                #밤
            </button>
            <button className={'mr-2 px-4 py-2 border rounded-full'}>
                #글귀
            </button>
            <button className={'mr-2 px-4 py-2 border rounded-full'}>
                #회사
            </button>
            <button className={'mr-2 px-4 py-2 border rounded-full'}>
                #개발
            </button>
            <button className={'mr-2 px-4 py-2 border rounded-full'}>
                #곰발
            </button>
            <button className={'mr-2 px-4 py-2 border rounded-full'}>
                #새발
            </button>
        </div>
    )
}
