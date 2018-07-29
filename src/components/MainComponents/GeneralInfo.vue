<template>
    <div class="w-full bg-white mt-2 md:mt-12">
        <div class="container mx-auto flex flex-col justify-evenly">
            <div class="w-full text-justify flex flex-col md:px-16 py-8 px-4 pt-8">
                <h1 id="orszagfutas" class="text-left md:text-xl text-lg mb-4">AZ ORSZÁGFUTÁS</h1>
                <div class="text-m leading-normal">
                    <p> 2018. márciusában, nemzeti ünnepünk hétvégéjén újra megmozdult az ország. Az eddigi teljesítést
                        túlszárnyalva, 14.481 regisztráló 164.129 km-t teljesített a VII. ORSZÁGFUTÁSON.
                        <br>
                        Bárki futhatott vagy gyalogolhatott nemre, korra, testsúlyra való tekintet nélkül, az ország
                        bármely
                        pontján, hiszen a cél az volt, hogy különösebb anyagi ráfordítás nélkül, mindenki a saját
                        tempójában, a lakóhelyén, vagy ahol éppen tartózkodik a nap folyamán MOZDULJON meg.
                        <br>
                        Sokan voltak akik hosszú passzív, fotelben eltöltött időszak után kezdtek edzeni, hogy a vállalt
                        távot sikeresen teljesítsék. Sok helyen közösségek (munka-, lakó-, futótársak, barátok) alkottak
                        csapatokat és futottak együtt. Több helyen alakultak frissítőpontok. Akik nem szeretettek volna
                        futni, választhattak gyaloglást, túrázást, így kisgyerekes családok, idősebbek is részt
                        vehettek.
                    </p>
                    <p> A 8. ORSZÁGFUTÁS 2018. október 20-28. között kerül megrendezésre.
                    </p>
                    <p> Az országhatár hossza 2.246 km. Célunk az, hogy minél többször végigfussunk az országon,
                        gyűjtsük a
                        kilométereket, lépjük túl a Föld-Hold távolságot, ami ~380.000 kilométer.
                        <br>
                        A kezdeményezéshez, melynek védnöke Lubics Szilvia (ultramaratonista), olyan hírességek is
                        csatlakoztak, mint Maráz Zsuzsanna (ultramaratonista), Csipes Tamara (olimpiai bajnok kajakos),
                        Csipes Ferenc (olimpiai bajnok kajakos).</p>
                    <button @click="openModal"
                            class="my-8 border rounded-full bg-white border-red
                    text-red py-2 px-4 hover:text-white hover:bg-red uppercase py-4 px-6"
                    >Hogy vehetsz részt?
                    </button>

                    <h3 class="">Csatlakozz te is! Mozduljon az ország!</h3>

                    <span> Jelentkezzetek, készüljetek, legyen ez egy újabb tömegsport ünnep!</span>
                </div>
            </div>
        </div>
        <modal name="race-details" :adaptive="true" height="auto" :delay="50" :scrollable="true" :clickToClose="true"
               classes="bg-white shadow-lg md:rounded-table rounded-none" >
            <div class="w-4/5 bg-red rounded-r-full flex self-start" @click="closeModel">
                <h1 class="my-3 uppercase text-lg font-medium ml-6 text-white">Hogyan vehetek részt</h1>
            </div>
            <div class="md:py-2 py-2 text-m px-8 mx-4 text-justify mb-6 leading-normal" @click="closeModel">
                <p> Vállalj egy vagy akár több szakaszt, bárhol ahol éppen leszel - lehet ez akár külföldön is -,
                    amit
                    bármikor lefutsz vagy legyalogolsz. A vállalt szakasz minimum 5 km legyen, egy-egy szakaszt
                    többen
                    is teljesíthettek, lehetőség van csoportos regisztrációra. Családok, baráti társaságok,
                    csapatok,
                    munkahelyi közösségek is futhatnak/gyalogolhatnak együtt.</p>
                <p class="font-medium text-center"> Az ingyenes regisztráció 2018. szeptember 1-én indul és október 28. 24:00 óráig tart.</p>
                <p> A regisztrációt követően lehetőséged lesz rajtszám, az esemény után pedig oklevél
                    letöltésére.</p>
            </div>
        </modal>
    </div>

</template>

<script>
    export default {
        methods: {
            openModal() {
                this.$modal.show('race-details');
            },
            closeModel() {
                this.$modal.hide('race-details')
            }
        }
    }
</script>

<style lang="scss" scoped>
    p {
        margin-top: 1.5rem;
    }
</style>