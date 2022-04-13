import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'

import emailJs from 'emailjs-com';

import styles from '../Contact.module.css'
import { Alert } from 'react-bootstrap';

interface FormBody {
  name: string,
  email: string,
  text: string
}

const initState = {
  name: '',
  email: '',
  text: ''
}

const ContactForm = () => {
  const [ body, setBody ] = useState<FormBody>(initState);
  const [ isSending, setIsSending ] = useState(false);
  const [ wasSent, setWasSent ] = useState(false);
  const [ isError, setIsError ] = useState(false);
  const [ message, setMessage ] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(state => {
      return {
        ...state,
        [e.target.name]: e.target.value
      }
    });
  }

  const sendEmail = (e: any) => {
    e.preventDefault();
        setIsSending(true);
        setWasSent(false);
        setIsError(false);
        emailJs.sendForm('service_4szwygq', 'template_vqc2w2g', e.target, 'user_ScvJzliGwo3gxrNCMegZO')
            .then(()=>{
                setMessage('Message sent, thank you!');
                setIsError(false)
                setWasSent(true);
                setTimeout(()=>{ 
                  setIsSending(false);
                  setWasSent(false);
                  setIsError(false);
                },5000)
            }).catch(()=>{
              setIsError(true)
              setWasSent(true);
              setMessage('The message was not sent.');
              setTimeout(()=>{ 
                  setIsSending(false); 
                  setWasSent(false);
                  setIsError(true)
                },5000)
            })
        setBody(initState);
  }

  return (
    <>
      {
        !isSending ?
        
        <Form className= {styles.formContainer} onSubmit={sendEmail} onChange={(e) => handleOnChange}>
            <Form.Control className="mb-3" type="text" placeholder='Nombre' name="name" value={body.name}/>
            <Form.Control className="mb-3" type="email" placeholder='Email' name="email" value={body.email}/>
            <Form.Control className="mb-3" as="textarea" type="text" placeholder='Texto' name="text" value={body.text}/>
            <Button variant="outline-dark" className={styles.formButton} type="submit"> Enviar </Button>
        </Form>

        : isSending && !wasSent ?
        
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>

        : isSending && wasSent && isError ?
        <Alert variant='danger'>
          {message}
        </Alert>
        
        : isSending && wasSent && !isError ?
        <Alert variant='success'>
          {message}
        </Alert>
        
        : null
      }
    </>

  )
}

export default ContactForm