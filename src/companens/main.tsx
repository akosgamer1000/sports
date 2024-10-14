import { ASportokElonyei } from "./ASportokElonyei";
import { Kepgaleria } from "./Kepgaleria";
import { MiertFontosASport } from "./MiertFontosASport";
import { NepszeruSportok } from "./NepszeruSportok";
import { TeendokSportolasElott } from "./TeendokSportolasElott";

export function Main(){
    let array:string[]=["Bemelegítés és nyújtás","Megfelelő sportfelszerelés kiválasztása","Folyadékpótlás","Könnyű étkezés edzés előtt","Egyéni célok kitűzése"]
    return<>
    <main className="container my-4">
        <NepszeruSportok></NepszeruSportok>
        <ASportokElonyei></ASportokElonyei>
        <TeendokSportolasElott data={array}></TeendokSportolasElott>
        <Kepgaleria></Kepgaleria>
        <MiertFontosASport></MiertFontosASport>

    </main>
    
    </>
}