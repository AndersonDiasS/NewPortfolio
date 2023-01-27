import * as S from './style';
import React from 'react';
import Image from 'next/image';
import iconHtml from '../../../public/Images/icons/html5.svg';
import iconCSS from '../../../public/Images/icons/css3-alt.svg';
import iconSass from '../../../public/Images/icons/sass.svg';
import iconReact from '../../../public/Images/icons/react.svg';
import iconNext from '../../../public/Images/icons/nextjs-icon.svg';
import iconWordpress from '../../../public/Images/icons/wordpress.svg';
import iconGraphql from '../../../public/Images/icons/icons8-graphql.svg';
import iconJs from '../../../public/Images/icons/js.svg';
import iconStyledComponents from '../../../public/Images/icons/styled-components.svg';
import iconSeo from '../../../public/Images/icons/icons8-chrome.svg';
 
export default function SkillsSection() {

        const skills = [
        { name: 'html', src:iconHtml },
        { name: 'CSS', src: iconCSS },
        { name: 'SASS', src: iconSass },
        {name: 'Javascript', src: iconJs},
        { name: 'Styled Components', src: iconStyledComponents  },
        { name: 'React', src: iconReact },
        { name: 'Next', src: iconNext },
        { name: 'Wordpress', src: iconWordpress },
        {name: 'GraphQl', src: iconGraphql },
        {name: 'SEO and Performance', src: iconSeo},
        
    ];

  
    return (
        <>
        <S.Wave>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
    </svg>
        </S.Wave>
     <S.Container>
        <S.Title>Minhas Skills</S.Title>


        <S.Row>
        <S.TextContainer>
            <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet libero nisi. Cras maximus felis id quam tristique imperdiet. Aenean mauris odio, volutpat sed maximus ut, auctor vitae lacus. Proin eget urna vitae libero interdum ullamcorper. Vivamus porttitor lacus sit amet ipsum finibus bibendum. Vivamus volutpat suscipit augue, ut molestie magna interdum a. Phasellus sollicitudin lobortis faucibus.
             Aliquam posuere faucibus quam. Suspendisse sagittis tortor eros. Nunc tincidunt accumsan purus, a ornare felis laoreet id.
            </S.Text>

        </S.TextContainer>
        <S.IconsContainer>
            {skills.map((icon, iconIndex) => { return (
                <S.iconCard key={iconIndex}>
                    <Image  src={icon.src} alt={icon.name}/>
                </S.iconCard>
            )})}
        </S.IconsContainer>
 
        </S.Row>
     </S.Container>
     </>
    );
}
