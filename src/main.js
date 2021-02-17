import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useCountUp } from 'react-countup';
const randomInt = require('random-int');






function Main() {
    let answers = [
        {name:"der", prompt:"Nominative Masculine"},
        {name:"die", prompt:"Nominative Feminine"},
        {name:"das", prompt:"Nominative Neuter"},
        {name:"die", prompt:"Nominative Plural"},
        {name:"den", prompt:"accusative Masculine"},
        {name:"die", prompt:"accusative Feminine"},
        {name:"das", prompt:"accusative Neuter"},
        {name:"die", prompt:"accusative Plural"},
        {name:"dem", prompt:"dative Masculine"},
        {name:"der", prompt:"dative Feminine"},
        {name:"dem", prompt:"dative Neuter"},
        {name:"den", prompt:"dative Plural"},
        {name:"des", prompt:"Genitive Masculine"},
        {name:"der", prompt:"Genitive Feminine"},
        {name:"des", prompt:"Genitive Neuter"},
        {name:"der", prompt:"Genitive Plural"},
    ]
    


    const [f, setf] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
    const [random, setrandom] = useState(randomInt(15));
    const [show, setshow] = useState(false)
    // const { countUp, start } = useCountUp({ 
    //     end: 1234567,
    //     delay: 999999,
    //     duration: 5 
    // });
    // start(10)

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        reset()
        if (data.only == answers[random].name) { 
            let g = f
            g.splice(f.indexOf(random), 1)
            setf([...g])
            console.log(random)
            if (f.length > 0) {
                let randomnew = randomInt(f.length-1)
                setrandom( f[randomnew])
               
            }
        } else {
            setshow(true)
        }
    };

    function showanswer(){
        setshow(false)
        if (f.length > 0) {
            let randomnew = randomInt(f.length-1)
            setrandom( f[randomnew])
        }
        reset()
    }



    return(
        <Container className="bg-light text-center">
            <h2>
            <table>
                <tr>
                    <th scope="col" className="p-4 border bg-dark"></th>
                    <th scope="col" className="p-4 bg-dark text-light">Masculine</th>
                    <th scope="col" className="p-4 bg-dark text-light">Feminine</th>
                    <th scope="col" className="p-4 bg-dark text-light">Neuter</th>
                    <th scope="col" className="p-4 bg-dark text-light">Plural</th>
                </tr>
                <tr>
                    <th scope="col" className="p-4 border bg-dark text-light">Nominative</th>
                    <th scope="col" className={random == 0 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(0) && <p>der</p>}</th>
                    <th scope="col" className={random == 1 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(1) && <p>die</p>}</th>
                    <th scope="col" className={random == 2 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(2) && <p>das</p>}</th>
                    <th scope="col" className={random == 3 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(3) && <p>die</p>}</th>
                </tr>
                <tr>
                    <th scope="col" className="p-4 border bg-dark text-light">Accusative</th>
                    <th scope="col" className={random == 4 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(4) && <p>den</p>}</th>
                    <th scope="col" className={random == 5 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(5) && <p>die</p>}</th>
                    <th scope="col" className={random == 6 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(6) && <p>das</p>}</th>
                    <th scope="col" className={random == 7 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(7) && <p>die</p>}</th>
                </tr>
                <tr>
                    <th scope="col" className="p-4 border bg-dark text-light">Dative</th>
                    <th scope="col" className={random == 8 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(8) && <p>dem</p>}</th>
                    <th scope="col" className={random == 9 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(9) && <p>der</p>}</th>
                    <th scope="col" className={random == 10 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(10) && <p>dem</p>}</th>
                    <th scope="col" className={random == 11 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(11) && <p>den</p>}</th>
                </tr>
                <tr>
                    <th scope="col" className="p-4 border bg-dark text-light">Genitive</th>
                    <th scope="col" className={random == 12 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(12) && <p>des</p>}</th>
                    <th scope="col" className={random == 13 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(13) && <p>der</p>}</th>
                    <th scope="col" className={random == 14 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(14) && <p>des</p>}</th>
                    <th scope="col" className={random == 15 ? "p-4 border bg-danger" : "p-4 border"}>{!f.includes(15) && <p>der</p>}</th>
                </tr>
            </table>
            </h2>
            
            
            <br/>
            {show && <h1 className="text-danger">{answers[random].name}</h1>}
            <h1>{answers[random].prompt}</h1>
            <br/>
            <Form className="form-inline text-center" onSubmit={handleSubmit(onSubmit)}>
                <Form.Control className="col-7" name="only" type="text" ref={register} />
                <Button size="lg" onClick={show && showanswer} variant="outline-success" type={!show ? "button" : "submit"}>{!show ? "submit" : "next"}</Button>
            </Form>
        </Container>
    );
}
export default Main;