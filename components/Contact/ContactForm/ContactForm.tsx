import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'

import emailJs from 'emailjs-com';

import styles from '../Contact.module.css'
import { Alert } from 'react-bootstrap';
import { LangContext, LangContextValues } from '../../../contexts/LangContext/LangContext';

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
  const [ body, setBody ] = useState(initState);
  const [ isSending, setIsSending ] = useState(false);
  const [ wasSent, setWasSent ] = useState(false);
  const [ isError, setIsError ] = useState(false);
  const [ message, setMessage ] = useState('')

  const { text } = useContext(LangContext) as LangContextValues

  const handleOnChange = (e: any) => {
    setBody((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value
      }
    });
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        setIsSending(true);
        setWasSent(false);
        setIsError(false);
        emailJs.send('service_4szwygq', 'template_vqc2w2g', body, 'user_ScvJzliGwo3gxrNCMegZO')
          .then(() => {
            setMessage(text?.CONTACT.SUCCESS_MESSAGE!);
            setIsError(false)
            setWasSent(true);
            setTimeout(()=>{ 
              setIsSending(false);
              setWasSent(false);
              setIsError(false);
            },5000)
          },() => {
            setIsError(true);
            setWasSent(true);
            setMessage(text?.CONTACT.ERROR_MESSAGE!);
            setTimeout(() => { 
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
        
        <Form className= {styles.formContainer} onSubmit={sendEmail} onChange={(e) => handleOnChange(e)}>
            <Form.Control className="mb-3" type="text" placeholder={text?.CONTACT.NAME_INPUT_PLACEHOLDER} name="name" />
            <Form.Control className="mb-3" type="email" placeholder={text?.CONTACT.EMAIL_INPUT_PLACEHOLDER} name="email" />
            <Form.Control className="mb-3" as="textarea" type="text" placeholder={text?.CONTACT.TEXT_INPUT_PLACEHOLDER} name="text" />
            <Button variant="outline-dark" className={styles.formButton} type="submit">{ text?.CONTACT.SEND_BUTTON }</Button>
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