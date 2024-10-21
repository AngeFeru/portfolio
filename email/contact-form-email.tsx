import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components"
import { Tailwind } from '@react-email/components'


type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps) {
    return <Html>
        <Head />
        <Preview>Nuevo mensaje sobre el portfolio</Preview>
        <Tailwind>
            <body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">
                            Recibiste este mensaje desde el formulario de contacto
                        </Heading>
                        <Text>
                            {message}
                        </Text>
                        <Hr />
                        <Text>El mail de origen es: {senderEmail}</Text>
                    </Section>
                </Container>
            </body>
        </Tailwind>
    </Html>
}
