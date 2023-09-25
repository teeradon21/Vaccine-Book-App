'use client'

export default function InteractiveCard ({children} : {children: React.ReactNode}) {

    function onCardMouseAction(event:React.SyntheticEvent) {
        if(event.type=='mouseover'){
            event.currentTarget.classList.remove('bg-white')
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('bg-neutral-200')
            event.currentTarget.classList.add('shadow-2xl')
        }
        else{
            event.currentTarget.classList.remove('bg-neutral-200')
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('bg-white')
            event.currentTarget.classList.add('shadow-lg')
        }
    }
    return (
        <div className="w-full h-80 rounded-lg shadow-lg bg-white" 
        onMouseOver={(e)=> onCardMouseAction(e)}
        onMouseOut={(e)=> onCardMouseAction(e)}>
            {children}
        </div>
    )
}