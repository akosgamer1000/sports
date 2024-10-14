interface proops{
        data:string[];

}


export function TeendokSportolasElott(proops:proops){
    return <>
    <section className="mb-5">
            <h2>Teendők sportolás előtt</h2>
            <ol className="list-group list-group-numbered">
                {proops.data.map(e=> <li className="list-group-item">{e}</li>)}
            </ol>
        </section>
    </>
}