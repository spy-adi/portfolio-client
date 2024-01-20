import React, { useEffect } from "react"
import "./Home.css";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";

const Home = (props) => {

  useEffect(() =>{

    //Texture
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);

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
    // scene.add(lightHelper);


    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y+=.01;
      venus.rotation.y+=0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene,camera);
    }

    animate();

  },[])

  return (
    <div className="home">
        <canvas className="homeCanvas"> </canvas>
    </div>
  )
};

export default Home;
