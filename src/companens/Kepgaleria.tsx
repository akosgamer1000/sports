import { useEffect, useState } from "react";
import { Kpek } from "../kép";

export function Kepgaleria(){
    const [kep,setkep]=useState<Kpek[]>([])
    useEffect(()=>{
        async function laod() {
            const response=await fetch("kép.json")
            const data=await response.json()
            setkep(data.képek)
        }
        laod()
    },[])
    return <>
        <section className="mb-5">
            <h2>Képgaléria</h2>
            <div className="row">
                
               {kep.map(e=><div className="col-sm-4">
                    <img className="img-fluid" alt={e.alt}
                        title={e.title} src={e.src}></img>
                </div>)}
            </div>
        </section>
    </>
}
