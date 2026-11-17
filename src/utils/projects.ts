import skillPingimage from '../assets/imgs/projects/skillPing.webp';
import fastSnippetsImage from '../assets/imgs/projects/fastSnippets.webp';
import costaDigitalImage from '../assets/imgs/projects/costaDigital.webp';
import herrerasImage from '../assets/imgs/projects/herreras.webp';
import type Project from '../interfaces/Projects';
// images sections
// HERRERAS
import herrerasHomeVideo from '../assets/imgs/projects/imgsForId/herreras/herreras-home.mp4';
import herrerasGsapVideo from '../assets/imgs/projects/imgsForId/herreras/herreras-gsap.mp4';
import herrerasGafaImage from '../assets/imgs/projects/imgsForId/herreras/herreras-gafa.png';
import herrerasNewsletterImage from '../assets/imgs/projects/imgsForId/herreras/herreras-newsletter.png';
// COSTA DIGITAL
import costaDigitalHomeVideo from '../assets/imgs/projects/imgsForId/costaDigital/home.mp4';
import costaDigitalAnimationVideo from '../assets/imgs/projects/imgsForId/costaDigital/animation.mp4';
// SKILLPING
import skillpingChatImage from '../assets/imgs/projects/imgsForId/skillping/chat-skillping.png';
import skillpingExploreImage from '../assets/imgs/projects/imgsForId/skillping/explore.png';
import skillpingMaquetationImage from '../assets/imgs/projects/imgsForId/skillping/maquetation.png';
import skillpingMaquetationImage2 from '../assets/imgs/projects/imgsForId/skillping/maquetation-2.png';
// FAST SNIPPETS
import fastsnippetsHomeVideo from '../assets/imgs/projects/imgsForId/fastsnippets/home.mp4';
import fastsnippetsExploreImage from '../assets/imgs/projects/imgsForId/fastsnippets/explore.png';
import fastsnippetsIaAgentImage from '../assets/imgs/projects/imgsForId/fastsnippets/ia-agent.png';


export const projectList: Project[] = [
    {
        id: 'Herreras',
        index: 1,
        link: 'projects/Herreras',
        href: "https://www.herreras.com/",
        title: 'HERRERAS',
        description: 'desc-herreras',
        image: herrerasImage,
        utils: ['Liquid', 'Tailwind'],
        previousProjectId: 'FastSnippets',
        nextProjectId: 'CostaDigital',
        sections: [
            {
                id: 1,
                titulo: "home",
                descripcion: "herreras-home-desc",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                utils: ['Liquid', "Tailwind"],
                imagen:
                    { url: herrerasHomeVideo, alt: 'chat', isVideo: true, posicion: 'izq' },

            },
            {
                id: 2,
                titulo: "animation-herreras",
                descripcion: "animation-herreras-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: herrerasGsapVideo, alt: 'chat', isVideo: true, posicion: 'izq' },

            },
            {
                id: 3,
                titulo: "buy-glasses",
                descripcion: "buy-glasses-desc",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: herrerasGafaImage, alt: 'chat', isVideo: false, posicion: 'izq' },

            },
            {
                id: 4,
                titulo: "discount",
                descripcion: "discount-desc",
                dificultad: 2,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: herrerasNewsletterImage, alt: 'chat', isVideo: false, posicion: 'izq' },

            }
        ]
    },
    {
        id: 'FastSnippets',
        index: 4,
        link: 'projects/FastSnippets',
        href: "https://fastsnippets.netlify.app/",
        title: 'FastSnippets',
        description: 'desc-fastsnippets',
        image: fastSnippetsImage,
        nextProjectId: 'Herreras',
        previousProjectId: 'Skillping',
        utils: ['Angular', 'Tailwind', 'Firebase'],
        sections: [
            {
                id: 1,
                titulo: "home",
                descripcion: "home-desc",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: fastsnippetsHomeVideo, alt: 'home', posicion: 'izq', isVideo: true },

            },
            {
                id: 2,
                titulo: "explore",
                descripcion: "explore-desc-fastS",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: fastsnippetsExploreImage, alt: 'explore', posicion: 'izq' },
                utils: ['Firebase'],
            },
            {
                id: 3,
                titulo: "ia-agent-fastS",
                descripcion: "ia-agent-desc-fastS",
                dificultad: 5,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: fastsnippetsIaAgentImage, alt: 'ia-agent', posicion: 'izq' },
                utils: ['django'],
            }
        ]
    },
    {
        id: 'CostaDigital',
        index: 2,
        link: 'projects/CostaDigital',
        href: "https://marketingcostadigital.com/",
        title: 'Costa Digital',
        description: 'desc-costadigital',
        previousProjectId: 'Herreras',
        image: costaDigitalImage,
        utils: ['React', 'Tailwind'],
        nextProjectId: 'Skillping',
        sections: [
            {
                id: 1,
                titulo: "home",
                descripcion: "home-desc-CostaD",
                dificultad: 3,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: costaDigitalHomeVideo, alt: 'home', posicion: 'izq', isVideo: true },
                utils: ['React'],


            },
            {
                id: 2,
                titulo: "animation-CostaD",
                descripcion: "animation-desc-CostaD",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: costaDigitalAnimationVideo, alt: 'animation', posicion: 'izq', isVideo: true },
                utils: ['GSAP'],
            },
        ]
    },
    {
        id: 'Skillping',
        index: 3,
        link: 'projects/Skillping',
        href: "https://skillping.netlify.app/",
        title: 'SkillPing',
        description: 'desc-skillping',
        image: skillPingimage,
        nextProjectId: 'FastSnippets',
        previousProjectId: 'CostaDigital',

        utils: ['Angular', 'Django', 'Tailwind', 'PostgreSQL'],
        sections: [
            {
                id: 1,
                titulo: "chat-realtime",
                descripcion: "chat-realtime-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: skillpingChatImage, alt: 'chat', posicion: 'izq' },
                "utils": ["Sockets", "Django",]
            },
            {
                id: 2,
                titulo: "explore",
                descripcion: "explore-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: skillpingExploreImage, alt: 'explore', posicion: 'der' },
            },
            {
                id: 3,
                titulo: "maquetation",
                descripcion: "maquetation-desc",
                dificultad: 4,
                colorBase: 'off-color',
                animacion: 'animate-fade-in',
                imagen:
                    { url: skillpingMaquetationImage, alt: 'maquetation', posicion: 'der' },
                secondImagen: { url: skillpingMaquetationImage2, alt: 'maquetation-2', posicion: 'izq' },

            }
        ]
    },


    // {
    //     id: 'PomodoroCount',
    //     link: 'projects/PomodoroCount',
    //     href: "https://pomodorocount.netlify.app/",
    //     title: 'Pomodoro Count',
    //     description: 'desc-pomodoro',
    //     image: './projects/pomodoroCount.webp',
    //     utils: ['Angular', 'Tailwind'],
    //     sections: [
    //         {
    //             id: 1,
    //             titulo: "Home",
    //             descripcion: "home-desc-pomodoro",
    //             dificultad: 1,
    //             colorBase: 'off-color',
    //             animacion: 'animate-fade-in',
    //             imagen:
    //                 { url: 'projects/imgsForId/pomodoro/home.png', alt: 'home-pomodoro', posicion: 'izq' },

    //         },
    //         {
    //             id: 2,
    //             titulo: "backgrounds-pomodoro",
    //             descripcion: "backgrounds-desc-pomodoro",
    //             dificultad: 3,
    //             colorBase: 'off-color',
    //             animacion: 'animate-fade-in',
    //             imagen:
    //                 { url: 'projects/imgsForId/pomodoro/backgrounds.png', alt: 'backgrounds-pomodoro', posicion: 'izq' },
    //             utils: ['Cloudinary']
    //         },
    //         {
    //             id: 3,
    //             titulo: "spotify-pomodoro",
    //             descripcion: "spotify-desc-pomodoro",
    //             dificultad: 4,
    //             colorBase: 'off-color',
    //             animacion: 'animate-fade-in',
    //             imagen:
    //                 { url: 'projects/imgsForId/pomodoro/spotify.png', alt: 'spotify-pomodoro', posicion: 'izq' },
    //             utils: ['Spotify API']
    //         }

    //     ]
    // },

    // {
    //     id: 'TimeCapsule',
    //     link: 'projects/TimeCapsule',
    //     title: 'TimeCapsule',
    //     description: 'desc-timecapsule',
    //     image: './projects/timeCapsule.webp',
    //     utils: ['React', 'Tailwind', 'Java Spring', 'PostgreSQL'],
    //     sections: [
    //         {
    //             id: 1,
    //             titulo: "E-commerce Dashboard",
    //             descripcion: "Panel de administración con métricas en tiempo real y gestión de inventario.",
    //             dificultad: 4,
    //             colorBase: 'off-color',
    //             animacion: 'animate-fade-in',
    //             imagen:
    //                 { url: 'projects/imgsForId/chat_skillping.png', alt: 'chat', posicion: 'izq' },

    //         }
    //     ]
    // },
];