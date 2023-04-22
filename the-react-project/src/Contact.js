import "./contact.css"
import { useEffect } from "react"
export default function Contact (){
    useEffect(function(){
        document.title = 'Contact'
    }, [])
    return  (
        <section className="containeran" >
            <h2>Contact me,
                 If you can <i> ~tee-hee</i></h2>
            <form >
                <label htmlFor="nama" className="label" >Nama</label>
                <input type="text"id="nama" name="nama" className="input" />
                <label htmlFor="email" name="email" className="label"  >Email</label>
                <input type="email"id="email" className="input" />
                <p> <span>Message : </span>
                <textarea cols="30" rows="10" name="pesan" id="pesan" className="textarea" > 
                </textarea>
                </p>
                <button type="submit " className="button" >Send</button>
            </form>
        </section>
    )
}