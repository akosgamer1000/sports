export function ASportokElonyei(){
    let array:string[] = []
    array.push("Fizikai erőnlét fejlesztése")
    array.push("Csapatmunka és együttműködés")
    array.push("Stresszoldás és mentális egészség javítása")
    array.push("Önfegyelem és kitartás erősítése")
    array.push("Közösségépítés")
    return<>
        <section className="mb-5">
            <h2>A sportok előnyei</h2>
            <ul className="list-group">
                {array.map(e=><li className="list-group-item">{e}</li>)}
            </ul>
        </section>
    </>
}