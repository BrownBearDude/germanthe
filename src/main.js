import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import {
    Link
  } from "react-router-dom";


function randomInt(minimum, maximum) {
    if (maximum === undefined) {
		maximum = minimum;
		minimum = 0;
	}

	if (typeof minimum !== 'number' || typeof maximum !== 'number') {
		throw new TypeError('Expected all arguments to be numbers');
	}

	return Math.trunc(
		(Math.random() * (maximum - minimum + 1)) + minimum
	);
}
function chunk(array, size) {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
}

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
        {name:"masculine", prompt:"top title1"},
        {name:"feminine", prompt:"top title2"},
        {name:"neuter", prompt:"top title3"},
        {name:"plural", prompt:"top title4"},
        {name:"nominative", prompt:"side title1"},
        {name:"accusative", prompt:"side title2"},
        {name:"dative", prompt:"side title3"},
        {name:"genitive", prompt:"side title4"},
    ]
    

    const fstart = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    const [f, setf] = useState(fstart); 


    const [random, setrandom] = useState(17);
    const [show, setshow] = useState(false)

    const { register, errors, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        if (f.length == 0) {
            let randomnew = randomInt(15)
            setrandom( randomnew)
            setf(fstart)
            
        } else {
            if (!show) {
                reset()
                if (data.only == answers[random].name) { 
                    let g = f
                    g.splice(f.indexOf(random), 1)
                    setf([...g])
                    if (f.length > 0) {
                        let randomnew = randomInt(f.length-1)
                        setrandom( f[randomnew])
                    }
                } else {
                    setshow(true)
                }
            } else {
                if (data.only == answers[random].name) {
                    setshow(false)
                    if (f.length > 0) {
                        let randomnew = randomInt(f.length-1)
                        setrandom( f[randomnew])
                    }
                    reset()
                } 
            }
        }
    };
    function Entry(props) {
        return(
            <th style={{width:300}} scope="col" className={ random == props.num ? "p-3 border bg-danger" : "p-3 border"}>{!f.includes(props.num) ? <p>{answers[props.num].name}</p> : <p>?</p> }</th>
        );
    }
    function EntryTitle(props) {
        return(
            <th scope="col" style={{width:300}} className={random == props.num ? "p-3 border bg-danger" : "p-3 border bg-dark text-light"} >{!f.includes(props.num) ? <p>{answers[(props.num)].name}</p> : <p> ? </p>}</th>
        );
    }

    let pp = [...Array(answers.length).keys()]
    pp = (chunk(pp, 5))
    pp.map((item) => 
        item.map((item) => 
            console.log(bruh)
        )  
    )
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Button as={Link} to="/home" variant="info">{"<- back"}</Button> 
                    <Nav className="justify-content-center">
                        <Navbar.Brand>German the</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="text-center">
                <br />
                <h5>
                <table>
                    <tbody>
                        <tr>
                            <th scope="col" className="p-3 border bg-dark"></th>
                            <EntryTitle num={16}/>
                            <EntryTitle num={17}/>
                            <EntryTitle num={18}/>
                            <EntryTitle num={19}/>
                        </tr>
                        <tr>
                            <EntryTitle num={20}/>
                            <Entry num={0}/>
                            <Entry num={1}/>
                            <Entry num={2}/>
                            <Entry num={3}/>
                        </tr>
                        <tr>
                            <EntryTitle num={21}/>
                            <Entry num={4}/>
                            <Entry num={5}/>
                            <Entry num={6}/>
                            <Entry num={7}/>                        
                        </tr>
                        <tr>
                            <EntryTitle num={22}/>
                            <Entry num={8}/>
                            <Entry num={9}/>
                            <Entry num={10}/>
                            <Entry num={11}/>
                        </tr>
                        <tr>
                            <EntryTitle num={23}/>
                            <Entry num={12}/>
                            <Entry num={13}/>
                            <Entry num={14}/>
                            <Entry num={15}/>
                        </tr>
                    </tbody>
                </table>
                </h5>
                
                <br/>
                {show && <h2 className="text-danger">{answers[random].name}</h2>}
                <h2>{answers[random].prompt}</h2>
                {show && <h5 className="text-danger">copy the answer</h5>}
                <br/><br/><br/><br/><br/>
            </Container>
            <Navbar className="justify-content-center" bg="dark" variant="dark"  fixed="bottom">
                <Nav  >
                    <Container>
                        <Form inline className="form-inline text-center" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Control size="lg" autoComplete="new-password" className="col-7" name="only" type="text" ref={register} />
                            <Button size="lg" variant="outline-info" type="submit">{f.length == 0 ? "reset" : (!show ? "submit" : "next")}</Button>
                        </Form>
                    </Container>
                </Nav >
            </Navbar>
        </div>
    );
}
export default Main;