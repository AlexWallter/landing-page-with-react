export default function CircularNav({num, test}) {

    const toggle = (e) =>{
        /*toggle the class*/
        const siblings = [...e.target.parentNode.children]
        siblings.map((e)=>{
            e.classList.remove('showed')
        })
        e.target.classList.add('showed')

        /*passing the index info for the parent component*/
        test(siblings.indexOf(e.target))
    }

    const row = []
    for(let i = 0; i < Number(num); i++) {

        if(i == 0) {
        row.push(
            (<>
            <div className="circular-nav-element u-cursor-pointer showed" onClick={(e)=>toggle(e)} key={i}></div>
            </>)
        )} 
        else {
            row.push(
                (<>
                <div className="circular-nav-element u-cursor-pointer" onClick={(e)=>toggle(e)} key={i}></div>
                </>)
        )}
    }

    return (
        <>
        <nav className="circular-nav-container flex">
            {row}
        </nav>
        </>
    )
}