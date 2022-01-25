import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json'

function Titulo(props){
    const Tag = props.tag || 'h1';
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag}{
                color: ${appConfig.theme.colors.grifinoria['branco']};
                font-size: 24px;
                font-weight: 600;
            
            }
            `}</style>
        </>        
    );
}

  export default function PaginaInicial() {
    // const username = 'paulinhapvf';
    const [username, setUsername] = React.useState('paulinhapvf');
    const roteamento = useRouter();
      
    return (
      <>
         <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/02/04/04/56/hogwarts-2036645_960_720.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              border: '2px solid',
              borderColor: appConfig.theme.colors.grifinoria['bordo'],
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: 'rgb(116 0 1 / 80%)'
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit = {function(event){
                event.preventDefault();
                roteamento.push('/chat');

                // window.location.href ='/chat';
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Chat Três Vassouras</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.grifinoria['mostarda'] }}>
                {appConfig.name}
              </Text>
              {/* <input 
              type='text' 
              value={username}
              onChange= {function handler(event){
                console.log("Usuário digitou algo", event.target.value);
                const valor = event.target.value;
                setUsername(valor);
              }}
              /> */}
              {<TextField
                value={username}
                fullWidth
                onChange= {function handler(event){
                  const valor = event.target.value;
                  setUsername(valor);
                  }
              }
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.grifinoria['amarelo'],
                    mainColor: appConfig.theme.colors.grifinoria['mostarda'],
                    mainColorHighlight: appConfig.theme.colors.grifinoria['vermelho'],
                    backgroundColor: appConfig.theme.colors.grifinoria['branco'],
                  },
                }}
              />}
              <Button
                type='submit'
                label='Gota de limão'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.grifinoria['preto'],
                  mainColor: appConfig.theme.colors.grifinoria['mostarda'],
                  mainColorLight: appConfig.theme.colors.grifinoria['bordo'],
                  mainColorStrong: appConfig.theme.colors.grifinoria['amarelo'],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.grifinoria['mostarda'],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.grifinoria['branco'],
                  backgroundColor: appConfig.theme.colors.grifinoria['bordo'],
                  padding: '3px 10px',
                  borderRadius: '30px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }