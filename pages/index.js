import Image from 'next/image'
import {Typography,Box, Grid,Link, Button}from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Links,Line,SkillItem,ProjectItem} from '../components/Alls';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import skillsInfo from "../public/skills.json"

import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';

export default function Home() {


  
  let skills = skillsInfo;
 


  return (
    <Box>

      <Grid container >
        <Grid position="relative" bgcolor="rgb(48,35,85)" width="100%" item xs={1.8} borderRight="solid rgb(26,21,48) 1px">
        <Box position="absolute" width="100%" sx={{ top: {xs:"2.5%",md: "3%"}}}><header>
            
            <Box position="fixed" width="15%">
            <Box margin={2} mb={6} sx={{display: {xs: "none", xl: "block"}}}><Image src={require("../public/Angelo.png")} priority={true} layout="responsive" alt="angelo"/></Box>
            <Box textAlign="center">

              <Box sx={{display: {xs: "block", md:"none"}}}>
              <Box mt={5} mb={5}><Link href='#angelo' color="rgb(133,115,187)"><HomeIcon sx={{fontSize: "48px"}}/></Link></Box>
              <Box mb={5}><Link href='#aboutMe' color="rgb(133,115,187)"><DescriptionIcon sx={{fontSize: "45px"}}/></Link></Box>
              <Box mb={5}><Link href='#projects' color="rgb(133,115,187)"><AccountTreeIcon sx={{fontSize: "45px"}}/></Link></Box>
              <Box mb={5}><Link href='#skills' color="rgb(133,115,187)"><SchoolIcon sx={{fontSize: "45px"}}/></Link></Box>
              <Box><Link href='#contact' color="rgb(133,115,187)"><PhoneIcon sx={{fontSize: "45px"}}/></Link></Box>
              </Box>

            <Box><Links name="Angelo" link="#angelo"/></Box>
            <Box><Links name="About me" link="#aboutMe"/></Box>
            <Box><Links name="Projects" link="#projects"/></Box>
            <Box><Links name="Skills" link="#skills"/></Box>
            <Box><Links name="Contact"  link="#contact"/></Box>
            </Box>

            </Box>
          </header>
          </Box>
        </Grid>


        <Grid item xs={10.2} bgcolor={"linear-gradient(90deg, rgba(28,22,54,1) 0%, rgba(37,29,70,1) 50%, rgba(28,22,54,1) 118%)"}>
          
          <Box id="angelo"></Box>
          <Box height="90vh">
            <Box sx={{margin: {xs: 4,md: 6},marginTop: {xs: 25,md: 25}}}>
              <Typography variant="h1" mb={5.5} color="rgb(232,117,246)" fontWeight="600" sx={{fontSize: {xs: "65px",md: "75px",lg: "95px"}}}>Angelo <Typography color="rgb(1,247,153)" fontWeight="600" display="inline-block" sx={{fontSize: {xs: "65px",md: "75px",lg: "95px"}}}>Smorlesi</Typography></Typography>
              <Typography component="p" mb={5} sx={{fontSize:{xs:"26px",md:"33px"}}} >Welcome to my web developer portfolio.</Typography>
              <Typography component="p" sx={{fontSize:{xs:"14px",md:"20px"}}} fontWeight="600" mb={5}>If you want to be in contact with me write to <Link href='mailto:angelo_smorlesi@hotmail.com' sx={{textDecoration: "none", color: "rgb(1,247,153)", "&:hover":{color: "rgb(232,117,246)"}}}>angelo_smorlesi@hotmail.com</Link></Typography>
              <a href='/Angelo-Smorlesi-En.pdf' download><Button textDecoration="none" variant="contained" size='large' sx={{boxShadow: " 0px 12px 15px 3px rgba(0,0,0,0.3)" , borderRadius: "2%",fontWeight: "700", bgcolor:"rgb(1,247,153)",color: "rgb(0,95,49)", "&:hover":{bgcolor: "rgb(232,117,246)",color: "rgb(95,49,0)"}}}>Dowload my CV</Button></a>
              <Box mt={5} ><Box sx={{cursor:"pointer"}} onClick={()=>{window.location.href = "https://github.com/tomcrude/";}} bgcolor="rgb(250,75,119)" borderRadius="48%" display="inline-block"><GitHubIcon sx={{color: "rgb(255,255,255)", margin:"10px 11px 10px 11px"}}/></Box> <Box onClick={()=>{window.location.href = "https://www.linkedin.com/in/angelo-smorlesi-823710259/";}} sx={{cursor:"pointer"}} ml="25px" bgcolor="rgb(250,75,119)" borderRadius="48%" display="inline-block"><LinkedInIcon sx={{color: "rgb(255,255,255)",margin: "10px 11px 10px 11px"}}/></Box></Box>
            </Box>
          </Box>

          
          <Line id="aboutMe"/>
        

          <Box height="90vh">
            <Box sx={{margin: {xs: 4,md: 6},marginTop: {xs: 25,md: 25}}}>
              <Grid item md={11} lg={8}>
              <Typography variant="h2" mb={4.5} sx={{fontSize: {xs:"54px", md: "60px"}}} fontWeight="600">About me</Typography>
              <Typography component="p" fontWeight="600" sx={{fontSize: {xs:17, md:22}}} mb={4}>I am from Argentina, I consider myself a proactive, dynamic, responsible person, with intentions of learning new things and to advance professionally. I can work perfectly individually or in a team. </Typography>
              </Grid>
            </Box>
          </Box>

          <Line/>

          <Box id="projects"></Box>
          <Box sx={{height:{xs:"370vh",md:"240vh",lg:"240vh", xl:"180vh"}}} id="projects">
            <Grid sx={{textAlign: {xs: "center",md: "start"}}} item m={6} mt={25}>
              <Typography variant="h2" mb={4.5} fontWeight="600">Projects</Typography>

              <ProjectItem name="react" link="https://react-crud-frontend-lime.vercel.app/" image="react-node" title="React-Node-Crud" des="This website is a crud, where you can get, delete, create and edit images. Before this, you have to authenticate yourself."/>
              <ProjectItem name="vue" link="https://vue-crud-client.vercel.app/" image="vue-python" title="Vue-Django-Crud" des="This website is a crud, where you can get, delete, create and edit images. Before this, you have to authenticate yourself."/>
              <ProjectItem name="angular" link="https://angular-crud-front.vercel.app/" image="angular-spring" title="Angular-Spring-Crud" des="This website is a crud, where you can get, delete, create and edit images. Before this, you have to authenticate yourself."/>
              <ProjectItem name="react-native" link="https://www.mediafire.com/file/cu16skjjsml6kua/application-786c033f-1fe5-4ee0-ac12-0482c00084ee.apk/file" image="random-chat" title="Random Chat (mobile)" des="This app is a chat room, where you can talk with random people. (In this app you can use commands like: /commands)."/>
           

              <ProjectItem name="koala" link="https://koala-chat.vercel.app/" image="koala" title="Koala Chat" des="This page is a network, where you will have your profile, followers, following, a global chat, private chat rooms and some other things."/>
              <ProjectItem name="tom-crude" link="https://tom-crude.vercel.app/" image="tom-crude" title="Tom Crude" des="This page consists of a compilation of my best drawings, as well as some extra things related to the artistic world."/>
              <ProjectItem name="brain" link="https://brain-memory-game.vercel.app/" image="brain" title="Brain Memory Game" des="This page is about a memory game where you will have to memorize numbers and, at the end, you will get a final score."/>
            
            </Grid>
          </Box>

          <Line/>
          
          <Box id="skills"></Box>
          <Box height="90vh" sx={{textAlign: {xs:"center", md:"start"}}}>
            <Box m={6} mt={25} sx={{width: {xs:"75%",lg:"40%"}}}>
              <Typography variant="h2" mb={4.5} fontWeight="600">Skills</Typography>
              {skills.map((stat) => {
                return(<SkillItem key={stat.text} text={stat.text} color={stat.color}/>)
              })}
           
            </Box>
          </Box>

          <Line/>

          <Box id="contact"></Box>
          <Box height="80vh" >
            <Box sx={{margin: {xs: 4,md: 6},marginTop: {xs: 25,md: 25}}}>
              <Typography variant="h2" mb={4.5} fontWeight="600">Contact</Typography>
              <Box my={3}><MailIcon sx={{color: "rgb(255, 211, 65)",transform: "translateY(4px)",marginRight: 1,fontSize: {xs: "16.5px",md: "23px"},display:{xs:'none',md: 'inline-block'}}}/><Typography variant="p" sx={{fontSize: 21,marginRight: 1, fontWeight:700}} color="rgb(128,162,216)">Email:</Typography><Link sx={{color: 'rgb(1,247,153)',fontWeight:700,textDecoration: 'none', "&:hover": {color: 'rgb(232,117,246)'}}} href='mailto:Angelo_developer@hotmail.com'>Angelo_developer@hotmail.com</Link></Box>
              <Box ><LinkedInIcon sx={{color: "rgb(255, 211, 65)",transform: "translateY(4px)",marginRight: 1,fontSize: {xs: "16.5px",md: "23px"},display:{xs:'none',md: 'inline-block'}}}/><Typography variant="p" sx={{fontSize: 21,marginRight: 1, fontWeight:700}} color="rgb(128,162,216)">Linkedin:</Typography><Link sx={{color: 'rgb(1,247,153)',fontWeight:700,textDecoration: 'none', "&:hover": {color: 'rgb(232,117,246)'}}} href='https://www.linkedin.com/in/angelo-smorlesi-823710259'>https://www.linkedin.com/in/angelo-smorlesi-823710259</Link></Box>
            </Box>
          </Box>

        </Grid>

      </Grid>

      
      </Box>
  )
}
