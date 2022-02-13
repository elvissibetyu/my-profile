import { ChevronRightIcon } from '@chakra-ui/icons';
import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from '@chakra-ui/react'
import  NextLink  from 'next/link';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import { BioYear, BioSection } from '../components/bio';

const Page = () => {
    return (
        <div>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a fullstack developer based in Johannesburg!
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Elvis Sibetyu
                        </Heading>
                        <p> Digital craftsman ( Artist / Developer / Designer )</p>
                    </Box>
                    <Box 
                        flexShrink={0}
                        mt={{base: 4, md: 0}} 
                        ml={{md: 6}} 
                        align="center">
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="images/takuya.jpg"
                            alt="Profile Image"
                            />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Elvis is a mobile and web application developer from Cape Town, South Africa,
                        with a passion for building applications that will someday play a huge role in making the lives 
                        of all Africans better.
                        When he is not coding, he enjoys taking a walk in the park, watching sport and playing video games.
                        Currently he has a mobile application he developed for matriculants and you can find it at &nbsp; 
                        <NextLink href="/works/inkdrop">
                            <Link>Inkdrop</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
                </Section>
                <Section
                delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                     <BioYear>1998</BioYear>
                     Born in Cape Town, South Africa.   
                    </BioSection>
                    <BioSection>
                     <BioYear>2014</BioYear>
                     First introduced into programming.   
                    </BioSection>
                    <BioSection>
                     <BioYear>2016</BioYear>
                     Graduated High School at the Cape Academy for Mathematocs, Science and Technology.   
                    </BioSection>
                    <BioSection>
                     <BioYear>2020</BioYear>
                     Completed Bachelor&apos;s degree in Computer Science and Applied Statistics at the University of Cape Town.   
                    </BioSection>
                    <BioSection>
                     <BioYear>2021 to Present</BioYear>
                     Worked at Investec! Sandton, South Africa.   
                    </BioSection>
                </Section>
        
        <Section
                Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music,
        Gaming
          , Taking walks,{' '}
          
          , Football, Basketball, Flutter, Anime, One Piece, AoT
        </Paragraph>
      </Section>
            </Container>
        </div>
    );
}

export default Page