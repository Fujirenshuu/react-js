import { useEffect } from "react"
export default function Home (){
    useEffect(function(){
        document.title = 'Home'
    }, [])
    return  (
        <section className="p-20 hitam" >
          <h1>Welcome to my first Single application Website</h1>
          <article>
          <p> <i> Website ini dibuat hanya untuk pembelajaran saya tentang react js...</i></p>

            <h2>Kenapa saya belajar react js?</h2>
            <img src="./pemanis.jpg" alt="pemanis" width="50%" height="50%" />
            <h2>karena pengen.</h2>  
        <p>Dari awal javascript bukan bahasa yang beriorientasi objek,
        sedari awal dia  bahasa prosedural jadi dia berbasis function</p>
        <h4>Lantas apa hubungannya? engga ada</h4>
        <p> 
       Yang jelas React js erat hubungannya dengan babel buat ngecompile si jsx nya.
        </p>
        <p>
            Saya belajar react js mulai dari
            <ul>
                <li>dimulai dari cara style inline di react</li>
                <li>belajar event handling buat eksekusi aksi action onclik, on submit kek gitu-gitu</li>
                <li>lalu belajar tentang state juga
                    <p>
                    yang mana state butuh data layaknya variabel,
                    bedanya variable itu pas diubah datanya ga ngubah apa apa. 
                    kalau state ketika di set value maka dia akan merender ulang. 
                    </p>
                </li>
                <li>belajar tentang life cycle 
                    <p>
                    buat ngedeteksi komponen itu di render nya itu kapan cara pake nya pake useEffect
                    </p>
                </li>
                <li>
                conditional rendering 
                <p>
                menurut pemahaman gw contohnya logic true kalo false data ngerender apa gitu,Saya pernah gunakan pas bikin todolist
                </p>
                </li>
                <li>
                manipulasi dom pake useRef
                <p>selain pake id kita bisa referensi dom ke dalam useref ,ketimbang pake id kita bisa referensi dom ke dalam useref gitu. </p>
                </li>
                <li>
                list ambil data di array
                <p>
                pake map array itu yang di dalamnya kita taruh react element bakal di ulang sesuai jumlah item children dari parent element contohnya pas bikin ul nah si li nya yang di map atau di ulang kayak foreach
                </p>
                </li>
                <li>
                    Form 
                    <p>
                    form terbagi jadi dua bagian ada un controld dan juga controld component
                    <ul>
                        <li>
                        uncontrold pake cara javascript tradisional kayak kita get value kemudia ambil value nya berdasar id atau use ref 
                        </li>
                        <li>
                        kalo controled komponen pake useState jadi si element itu dibuat bergantung kepada state, contohnya value di set onChange intinya komponen nya dikontrol oleh react
                        </li>
                    </ul>
                    </p>
                </li>
                <li>Belajar juga tentang http request
                <p>Kalo di react sisi klien gitu data otomatis dari server. komunikasinya pake http mau backend pake apapun ya terserah gwej:v yang penting ngirim data pake json dll</p>
                </li>
                <li>
                    Menampilkan hasil data
                    <p>bisa json atau yml katanyanamah cuman gw kurang tau sekarang yml apaan:v yang jelas bisa render hasil set ke store lalu render ke ui</p>
                </li>
                <li>
                    <p>create react app</p>
                    <p>cra gk perlu setup babel, webpack dll</p>
                </li>
                <h4>Kesimpulan: pake react ini beda banget lah kalo bikin user interface pake javascript... yaiyalah wkwk XD</h4>
            </ul>
            <p>btw <br/><i><b>maaf kalau salah..</b></i></p>

        </p>     
            </article>
        </section>
    )
}