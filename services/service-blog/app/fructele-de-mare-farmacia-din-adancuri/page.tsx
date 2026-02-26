import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
    title: "Fructele De Mare, Farmacia Din Adancuri - Ema del Mar",
    description: "Crabii, racii, crevetii, homarii, stridiile, melcii nu sunt doar alimente exotice, ci si surse de minerale, vitamine si acizi Omega-3.",
}

export default function BlogArticlePage() {
    return (
        <article className="flex flex-col min-h-[100vh] pt-24">
            {/* Hero Section: Title left, Image right */}
            <section className="container mx-auto px-4 max-w-6xl py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Title & Meta */}
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight text-foreground">
                            Fructele De Mare, Farmacia Din Adancuri
                        </h1>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/blog/seafood.jpeg"
                            alt="Fructele De Mare, Farmacia Din Adancuri"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto px-4 max-w-3xl pb-20">
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-xl font-medium text-foreground">
                        Crabii, racii, crevetii, homarii, stridiile, melcii nu sunt doar alimente exotice, ci si surse de minerale, vitamine si acizi Omega-3.
                    </p>

                    <p>
                        Fructele de mare nu sunt doar delicatese exotice, ci si alimente recomandate de nutritionisti pentru aportul lor de substante benefice sanatatii. Practic, fructele de mare inseamna o dieta echilibrata, care ajuta in afectiuni cardiace, dar si in mentinerea unei greutati optime. Termenul generic de fructe de mare se refera la vietuitoare marine precum crustaceele (crabi, raci, creveti, homari), molustele (stridii, caracatite, melci, calamari), algele, echinodermele (castravetii si aricii de mare), dar si pestele si icrele. Bogate in vitamine, calciu si minerale, aceste alimente asigura energia de care are nevoie corpul nostru. Dar, cel mai valoros ingredient al lor, este miraculosul Omega-3.
                    </p>

                    <p>
                        Fructele de mare sunt alimente de lux si medicamente in acelasi timp. In medicina traditionala chineza, erau folosite pentru tratarea nervozitatii si insomniei. Dar beneficiile de pe urma lor sunt mult mai multe. Sunt bogate in vitamine din complexul B, in special B12, niacin si B6, au un continut scazut de grasimi saturate (sub 3%) si sodiu, dar sunt bogate in grasimi bune, polinesaturate, in special acizii Omega-3: eicosapentaenoic acid (EPA) si docosapentaenoic acid (DHA). Omega 3 ajuta la o mai buna functionare a creierului, sunt antiinflamatoare, reduc colesterolul si, ca urmare, scad riscul bolilor cardiovasculare. Proteinele superioare din componenta fructelor de mare sunt usor absorbite de organism. Zincul, fierul, cuprul, potasiul, iodul, fosforul si seleniul sunt minerale oferite din plin de fructele de mare, ceea ce impiedica absorbtia substantelor chimice, dar intaresc sistemul imunitar si revigoreaza organismul, catifeland pielea.
                    </p>

                    <p>
                        Consumul de fructe de mare intareste unghiile si dantura, insanatoseste parul. Pentru ca sunt bogate in vitamina C, mentin gingiile sanatoase. Contin de 26 de ori mai mult calciu decat orice alt aliment, iar fluorul lupta impotriva cariilor dentare. Fructele de mare sunt o sursa principala de caroteni naturali cum ar fi vitamina A (beta-caroten) si bioflavonoide, antioxidanti care ajuta la imbunatatirea vederii, eliminand resturile celulare acumulate la nivelul ochilor. Bioflavonoidele prelungesc actiunea vitaminei C, contribuind astfel la prevenirea umflarii si inflamarii tesuturilor oculare. Pe de alta parte, consumul excesiv de fructe de mare poate creste riscul de diabet de tip II. Cu atit mai mare e riscul cu cat fructele de mare sunt prajite in ulei sau unt sau sunt preparate cu maioneza. In medie, nutritionistii recomanda consumul de fructe de mare 2-3 ori pe saptamana, intr-o cantitate totala care sa nu depaseasca 20% din mancarea consumata in ziua respectiva. Fiindca fructele de mare se strica foarte repede, ingerarea acestor alimente alterate duce la toxinfectie alimentara, febra foarte mare, stari de greata pe o perioada de cateva zile. Deci, daca nu va inspira incredere, nu consumati fructe de mare cu miros puternic sau culoare dubioasa.
                    </p>

                    <p>
                        Pana nu de mult, fructele de mare nu erau comercializate decat la restaurantele scumpe, acum se gasesc in supermarketuri la preturi accesibile. Daca sunt proaspete si preparate corespunzator, fructele de mare sunt adevarate comori pentru dieta noastra si implicit pentru sanatate. Nu se recomanda pregatirea lor prin prajire, ci prin fierbere, inabusire sau la gratar. Cand le cumparati, nu trebuie sa miroasa puternic, acesta poate fi un semn ca sunt stricate. Culoarea fructelor de mare sanatoase: crevetii sunt roz, nu albi sau rosii, calamarul este alb, sepia la fel, iar in cazul in care sunt facute pe gratar, carnea ramane alba la interior, la exterior fiind gri-neagra. Crabii trebuie sa fie grei si sa aiba carapacea perfecta. La fel, midiile. Cochiliile crapate, rupte sau care nu se inchid cand le loviti, trebuie aruncate. In cazul homarilor, testul prospetimii se face pe coada. Daca aceasta e elastica, atunci homarul e bun. Stridiile, midiile si alte scoici trebuie cumparate vii, daca nu sunt deja preparate sau congelate, in timp ce crevetii trebuie sa fie congelati, indiferent daca sunt fierti sau cruzi. Midiile se strica foarte repede, asa ca trebuie consummate proaspete, pentru ca, odata alterate, pot provoca intoxicatii grave.
                    </p>
                </div>

                {/* Back to Blog */}
                <div className="mt-16 pt-8 border-t border-border">
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Înapoi la Blog
                    </a>
                </div>
            </section>
        </article>
    )
}
