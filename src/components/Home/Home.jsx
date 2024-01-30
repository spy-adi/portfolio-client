import React, { useEffect } from "react"
import "./Home.css";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";

const Home = (props) => {

  useEffect(() =>{

    //Texture
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    
    //Camera
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(4,4,8);
    
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({canvas});

    //Moon
    const moonGeometry = new THREE.SphereGeometry(2,64,64);
    const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture});
    const moon = new THREE.Mesh(moonGeometry,moonMaterial);

    //Venus
    const venusGeometry = new THREE.SphereGeometry(3,64,64);
    const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture});
    const venus = new THREE.Mesh(venusGeometry,venusMaterial);
    venus.position.set(8,5,5);

    const pointLight = new THREE.PointLight(0xffffff,100);
    pointLight.position.set(8,5,5);
    
    const pointLight2 = new THREE.PointLight(0xffffff,10);
    pointLight2.position.set(-8,-5,-5);
    
    // const lightHelper = new THREE.PointLightHelper(pointLight);
    
    const controls = new OrbitControls(camera, renderer.domElement);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;
    // scene.add(lightHelper);

    const constSpeed = 0.01;

    // Add a mousemove event listener to the window
    window.addEventListener("mousemove", (e) => {
      // Check if the mouse is on the left half of the window
      if (e.clientX <= window.innerWidth / 2) {
        // Rotate moon and venus in one direction
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      // Check if the mouse is on the right half of the window
      if (e.clientX > window.innerWidth / 2) {
        // Rotate moon and venus in the opposite direction
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      // Check if the mouse is below the vertical center of the window
      if (e.clientY > window.innerHeight / 2) {
        // Rotate moon and venus in one direction
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      // Check if the mouse is above the vertical center of the window
      if (e.clientY <= window.innerHeight / 2) {
        // Rotate moon and venus in the opposite direction
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });


    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y+=0.01;
      venus.rotation.y+=0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);
    }

    animate();

  },[])

  return (
    <div className="home">
        <canvas className="homeCanvas"> </canvas>

        <div className="homeContainer">
          <Typography variant="h3">
            TIMELINE
          </Typography>
          <TimeLine timeline={[1,2,3,4,5]} />
        </div>

        <div className="homeSkills">
          
          <Typography variant="h3">
            Skills
          </Typography>

          <div className="homeCubeSkills">

            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
              <img 
               src="https://i.imgur.com/eaoBRfx_d.webp?maxwidth=760&fidelity=grand"
               alt="face1"
               />
            </div>

            <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
              <img 
               src="https://i.imgur.com/idZ69B8.png"
               alt="face2"
               />
            </div>
            
            <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
              <img 
               src="https://i.imgur.com/0GZoQcjb.jpg"
               alt="face3"
               />
            </div>
            
            <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
              <img 
               src="https://imgur.com/gallery/KQwpH73"
               alt="face4"
               />
            </div>
            
            <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
              <img 
               src="https://i.imgur.com/NalrFG1b.jpg"
               alt="face5"
               />
            </div>
            
            <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
              <img 
               src="https://i.imgur.com/EYDYOV1b.jpg"
               alt="face6"
               />
            </div>

          </div>

          <div className="cubeShadow"></div>

          <div className="homeSkillBox">
            <SiCplusplus />
            <SiReact />
            <SiJavascript />
            <SiMongodb />
            <SiNodedotjs />
            <SiExpress />
            <SiCss3 />
            <SiHtml5 />
            <SiThreedotjs />
          </div>

        </div>
    </div>
  )
};

export default Home;
