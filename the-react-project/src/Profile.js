import { useEffect } from "react"
export default function Profile (){
    useEffect(function(){
        document.title = 'Profile'
    }, [])
    return  (
        <section className="wrap wrap-profile p-20" >
            <img className='kanon' src="kanon.jpg" alt={'kanon'} width={300} height={300} />
            <h1>
                Hi 👋, <br/>
                senang melihat Anda mengunjungi web dan profil saya!</h1>
            <p>Perkenalkan, 
                Nama saya Fuji Halim Rabbani, 
                Atau biasa dipanggil Fuji. <br/>
                Saya Seorang Pria Biasa yang Memiliki Hobi di Berbagai Terkait Anime & Teknologi, 
                <br/> Seorang pemimpi, 
                dan seorang siswa yang belum lulus. 
                <a href="https://fujitime.github.io" target="_blank" rel="noreferrer" > <i> selengkapnya...</i> </a>
            </p>
            
        </section>
    )
}